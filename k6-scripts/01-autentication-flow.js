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
        { target: 100, duration: '1m' },
        { target: 150, duration: '1m' },
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

    vars['login_portlet_formDate_value'] = response
      .html()
      .find('input[name=_com_liferay_login_web_portlet_LoginPortlet_formDate]')
      .first()
      .attr('value')

    // console.log(`formDate retrieved: ${vars['login_portlet_formDate_value']}`);

    const backLinkHref = response.html().find('a[href*="p_auth="]').first().attr('href');
    const pAuthMatch = backLinkHref ? backLinkHref.match(/p_auth=([^&]+)/) : null;
    vars['p_auth_token'] = pAuthMatch ? pAuthMatch[1] : '';
    // console.log(`p_auth recuperado: ${vars['p_auth_token']}`);

  })

  group('Login Post and load home',
    function () {
      response = http.post(
        'http://liferay:8080/home?p_p_id=com_liferay_login_web_portlet_LoginPortlet&p_p_lifecycle=1&p_p_state=maximized&p_p_mode=view&_com_liferay_login_web_portlet_LoginPortlet_jakarta.portlet.action=%2Flogin%2Flogin&_com_liferay_login_web_portlet_LoginPortlet_mvcRenderCommandName=%2Flogin%2Flogin',
        {
          _com_liferay_login_web_portlet_LoginPortlet_formDate: `${vars['login_portlet_formDate_value']}`,
          _com_liferay_login_web_portlet_LoginPortlet_saveLastPath: 'false',
          _com_liferay_login_web_portlet_LoginPortlet_redirect: '',
          _com_liferay_login_web_portlet_LoginPortlet_doActionAfterLogin: 'false',
          _com_liferay_login_web_portlet_LoginPortlet_login: user.emailAddress,
          _com_liferay_login_web_portlet_LoginPortlet_password: user.password,
          _com_liferay_login_web_portlet_LoginPortlet_checkboxNames: 'rememberMe',
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

      // console.log(`response status: ${response.status}`);

      sleep(1)
    }
  )
}
