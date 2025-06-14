import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data';
import { check } from 'k6';

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
        { target: 25, duration: '1m' },
        { target: 50, duration: '2m' },
        { target: 25, duration: '1m' },
        { target: 5, duration: '30s' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  group('Home Page - /home', function () {
    response = http.get('http://liferay:8080/example-page', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    check(response, {
      'Example status is 200': (r) => r.status === 200,
      'Example Response time < 1s': (r) => r.timings.duration < 1000,
      'Example Body is not empty': (r) => r.body.length > 0,
    });

    response = http.get('http://liferay:8080/image/layout_set_logo?img_id=31201&t=1749244325236', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    check(response, {
      'Logo status is 200': (r) => r.status === 200,
      'Logo Response time < 1s': (r) => r.timings.duration < 1000,
    });

    response = http.get('http://liferay:8080/documents/20118/0/2k.jpg/bca532d5-d845-8849-cea9-4480b17801dd?version=1.0&t=1749245871740', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    check(response, {
      'Image 1 status is 200': (r) => r.status === 200,
      'Image 1 Response time < 1s': (r) => r.timings.duration < 1000,
    });

    response = http.get('http://liferay:8080/documents/20118/0/2k.jpg/bca532d5-d845-8849-cea9-4480b17801dd?version=1.0&t=1749245871740', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    check(response, {
      'Image 2 status is 200': (r) => r.status === 200,
      'Image 2 Response time < 1s': (r) => r.timings.duration < 1000,
    });

    sleep(0.25)
  })

}
