import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data';
import { check } from 'k6';

// Carrega os usuários uma única vez (em memória compartilhada)
const users = new SharedArray('users', function () {
  return JSON.parse(open('users.json'));
});

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.10'], // http errors should be less than 10%
    http_req_duration: ['p(95)<5000'], // 95% of requests should be below 5s
  },
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 5, duration: '30s' },
        { target: 20, duration: '1m' },
        { target: 40, duration: '1m' },
        { target: 50, duration: '1m' },
        { target: 20, duration: '1m' },
        { target: 5, duration: '30s' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  const vars = {}

  // Pega um usuário aleatório (ou use uma lógica específica)
  const user = users[Math.floor(Math.random() * users.length)];

  group('Login Page - /c/portal/login', function () {
    response = http.get('http://liferay:8080/home?p_p_id=com_liferay_login_web_portlet_LoginPortlet&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&_com_liferay_login_web_portlet_LoginPortlet_mvcRenderCommandName=%2Flogin%2Flogin&saveLastPath=false', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    // Validação com check
    check(response, {
      'Login Page status is 200': (r) => r.status === 200,
      'Login Page Response time < 1000ms': (r) => r.timings.duration < 1000,
      'Login Page Body is not empty': (r) => r.body.length > 0,
    });

    if (!response.status === 200) {
      console.warn(`Request failed with status ${response.status}`);
    }

    sleep(0.5)

    vars['_com_liferay_login_web_portlet_LoginPortlet_formDate1'] = response
      .html()
      .find('input[name=_com_liferay_login_web_portlet_LoginPortlet_formDate]')
      .first()
      .attr('value')

    vars['_com_liferay_login_web_portlet_LoginPortlet_doActionAfterLogin1'] = response
      .html()
      .find('input[name=_com_liferay_login_web_portlet_LoginPortlet_doActionAfterLogin]')
      .first()
      .attr('value')

    vars['_com_liferay_login_web_portlet_LoginPortlet_redirect1'] = response
      .html()
      .find('input[name=_com_liferay_login_web_portlet_LoginPortlet_redirect]')
      .first()
      .attr('value')

    vars['_com_liferay_login_web_portlet_LoginPortlet_checkboxNames1'] = response
      .html()
      .find('input[name=_com_liferay_login_web_portlet_LoginPortlet_checkboxNames]')
      .first()
      .attr('value')

    // Extrai o valor de p_auth do atributo action do formulário
    const formAction = response.html().find('form#_com_liferay_login_web_portlet_LoginPortlet_loginForm').first().attr('action');
    const pAuthMatch = formAction.match(/p_auth=([^&]+)/);
    vars['p_auth_token'] = pAuthMatch ? pAuthMatch[1] : '';
  })

  group('Login Post and load home',
    function () {
      response = http.post(
        'http://liferay:8080/home?p_p_id=com_liferay_login_web_portlet_LoginPortlet&p_p_lifecycle=1&p_p_state=maximized&p_p_mode=view&_com_liferay_login_web_portlet_LoginPortlet_javax.portlet.action=%2Flogin%2Flogin&_com_liferay_login_web_portlet_LoginPortlet_mvcRenderCommandName=%2Flogin%2Flogin',
        {
          _com_liferay_login_web_portlet_LoginPortlet_formDate: `${vars['_com_liferay_login_web_portlet_LoginPortlet_formDate1']}`,
          _com_liferay_login_web_portlet_LoginPortlet_saveLastPath: `${vars['_com_liferay_login_web_portlet_LoginPortlet_doActionAfterLogin1']}`,
          _com_liferay_login_web_portlet_LoginPortlet_redirect: `${vars['_com_liferay_login_web_portlet_LoginPortlet_redirect1']}`,
          _com_liferay_login_web_portlet_LoginPortlet_doActionAfterLogin: `${vars['_com_liferay_login_web_portlet_LoginPortlet_doActionAfterLogin1']}`,
          _com_liferay_login_web_portlet_LoginPortlet_login: user.emailAddress,
          _com_liferay_login_web_portlet_LoginPortlet_password: user.password,
          _com_liferay_login_web_portlet_LoginPortlet_checkboxNames: `${vars['_com_liferay_login_web_portlet_LoginPortlet_checkboxNames1']}`,
          p_auth: vars['p_auth_token'],
        },
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            origin: 'http://liferay:8080',
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      // Validação com check
      check(response, {
        'Login Post status is 200': (r) => r.status === 200,
        'Login Post Response time < 5000ms': (r) => r.timings.duration < 5000,
        'Login Post Body is not empty': (r) => r.body.length > 0,
      });

      if (!response.status === 200) {
        console.warn(`Request failed with status ${response.status}`);
      }

      sleep(1)
    }
  )
}
