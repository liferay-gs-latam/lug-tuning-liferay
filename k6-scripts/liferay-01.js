import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data';

// Carrega os usuários uma única vez (em memória compartilhada)
const users = new SharedArray('users', function () {
  return JSON.parse(open('users.json'));
});

export const options = {
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 3, duration: '1m' },
        { target: 3, duration: '1m30s' },
        { target: 0, duration: '1m' },
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

  group('Home Page - /home', function () {
    response = http.get('http://liferay:8080/home', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://liferay:8080/o/classic-theme/css/clay.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839534000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/portal-search-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839082000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/product-navigation-product-menu-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839112000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/product-navigation-user-personal-bar-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839114000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/site-navigation-menu-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839140000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-loader-modules-extender/loader.js?&mac=9WaMmhziBCkScHZwrrVcOR7VZF4=&browserId=chrome&languageId=en_US&minifierType=js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/combo?browserId=chrome&minifierType=js&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui/aui-min.js&/o/frontend-js-aui-web/liferay/modules.js&/o/frontend-js-aui-web/liferay/aui_sandbox.js&/o/frontend-js-aui-web/aui/attribute-base/attribute-base-min.js&/o/frontend-js-aui-web/aui/attribute-complex/attribute-complex-min.js&/o/frontend-js-aui-web/aui/attribute-core/attribute-core-min.js&/o/frontend-js-aui-web/aui/attribute-observable/attribute-observable-min.js&/o/frontend-js-aui-web/aui/attribute-extras/attribute-extras-min.js&/o/frontend-js-aui-web/aui/event-custom-base/event-custom-base-min.js&/o/frontend-js-aui-web/aui/event-custom-complex/event-custom-complex-min.js&/o/frontend-js-aui-web/aui/oop/oop-min.js&/o/frontend-js-aui-web/aui/aui-base-lang/aui-base-lang-min.js&/o/frontend-js-aui-web/liferay/dependency.js&/o/frontend-js-aui-web/liferay/util.js&/o/frontend-js-web/liferay/dom_task_runner.js&/o/frontend-js-web/liferay/events.js&/o/frontend-js-web/liferay/lazy_load.js&/o/frontend-js-web/liferay/liferay.js&/o/frontend-js-web/liferay/global.bundle.js&/o/frontend-js-web/liferay/portlet.js&/o/frontend-js-web/liferay/workflow.js&/o/oauth2-provider-web/js/liferay.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/classic-theme/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839534000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-aui-web/alloy_ui.css?&mac=favIEq7hPo8AEd6k+N5OVADEEls=&browserId=chrome&languageId=en_US&themeId=classic_WAR_classictheme',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/layout-common-styles/main.css?plid=8&segmentsExperienceId=32710&t=1747316181362',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/image/layout_set_logo?img_id=31201&t=1747398667280',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/documents/20118/32724/tree.png/68db0b77-8478-cfa2-d61d-1f96acbbb108?version=1.0&t=1747316178598',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/classic-theme/js/main.js?browserId=chrome&minifierType=js&languageId=en_US&t=1745839534000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/widget-base/assets/skins/sam/widget-base.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/documents/20118/32724/tree.png/68db0b77-8478-cfa2-d61d-1f96acbbb108?version=1.0&t=1747316178598',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get('http://liferay:8080/o/frontend-js-web/__liferay__/index.js', {
      headers: {
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get('http://liferay:8080/o/frontend-js-spa-web/__liferay__/index.js', {
      headers: {
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get('http://liferay:8080/o/portal-search-web/__liferay__/index.js', {
      headers: {
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://liferay:8080/o/portal-template-react-renderer-impl/__liferay__/index.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get('http://liferay:8080/o/frontend-taglib-clay/__liferay__/index.js', {
      headers: {
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://liferay:8080/o/product-navigation-user-personal-bar-web/__liferay__/index.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get('http://liferay:8080/o/layout-taglib/__liferay__/index.js', {
      headers: {
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://liferay:8080/o/frontend-js-alert-support-web/__liferay__/index.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-tabs-support-web/__liferay__/index.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-dropdown-support-web/__liferay__/index.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-tooltip-support-web/__liferay__/index.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-collapse-support-web/__liferay__/index.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get('http://liferay:8080/o/cookies-banner-web/__liferay__/index.js', {
      headers: {
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/yui-throttle/yui-throttle-min.js&/o/frontend-js-aui-web/aui/classnamemanager/classnamemanager-min.js&/o/frontend-js-aui-web/aui/aui-classnamemanager/aui-classnamemanager-min.js&/o/frontend-js-aui-web/aui/aui-debounce/aui-debounce-min.js&/o/frontend-js-aui-web/aui/array-extras/array-extras-min.js&/o/frontend-js-aui-web/aui/event-base/event-base-min.js&/o/frontend-js-aui-web/aui/dom-core/dom-core-min.js&/o/frontend-js-aui-web/aui/dom-base/dom-base-min.js&/o/frontend-js-aui-web/aui/selector-native/selector-native-min.js&/o/frontend-js-aui-web/aui/selector/selector-min.js&/o/frontend-js-aui-web/aui/node-core/node-core-min.js&/o/frontend-js-aui-web/aui/dom-style/dom-style-min.js&/o/frontend-js-aui-web/aui/node-base/node-base-min.js&/o/frontend-js-aui-web/aui/event-delegate/event-delegate-min.js&/o/frontend-js-aui-web/aui/node-event-delegate/node-event-delegate-min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/pluginhost-base/pluginhost-base-min.js&/o/frontend-js-aui-web/aui/pluginhost-config/pluginhost-config-min.js&/o/frontend-js-aui-web/aui/node-pluginhost/node-pluginhost-min.js&/o/frontend-js-aui-web/aui/dom-screen/dom-screen-min.js&/o/frontend-js-aui-web/aui/node-screen/node-screen-min.js&/o/frontend-js-aui-web/aui/node-style/node-style-min.js&/o/frontend-js-aui-web/aui/aui-node-base/aui-node-base-min.js&/o/frontend-js-aui-web/aui/base-core/base-core-min.js&/o/frontend-js-aui-web/aui/base-observable/base-observable-min.js&/o/frontend-js-aui-web/aui/base-base/base-base-min.js&/o/frontend-js-aui-web/aui/base-pluginhost/base-pluginhost-min.js&/o/frontend-js-aui-web/aui/event-synthetic/event-synthetic-min.js&/o/frontend-js-aui-web/aui/event-focus/event-focus-min.js&/o/frontend-js-aui-web/aui/widget-base/widget-base-min.js&/o/frontend-js-aui-web/aui/aui-widget-cssclass/aui-widget-cssclass-min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-widget-toggle/aui-widget-toggle-min.js&/o/frontend-js-aui-web/aui/base-build/base-build-min.js&/o/frontend-js-aui-web/aui/aui-component/aui-component-min.js&/o/frontend-js-aui-web/aui/event-mouseenter/event-mouseenter-min.js&/o/frontend-js-aui-web/aui/plugin/plugin-min.js&/o/frontend-js-aui-web/aui/event-simulate/event-simulate-min.js&/o/frontend-js-aui-web/aui/async-queue/async-queue-min.js&/o/frontend-js-aui-web/aui/gesture-simulate/gesture-simulate-min.js&/o/frontend-js-aui-web/aui/node-event-simulate/node-event-simulate-min.js&/o/frontend-js-aui-web/aui/event-key/event-key-min.js&/o/frontend-js-aui-web/aui/node-focusmanager/node-focusmanager-min.js&/o/frontend-js-aui-web/liferay/navigation_interaction.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$button.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$loading-indicator.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$modal.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get('http://liferay:8080/o/frontend-js-react-web/__liferay__/index.js', {
      headers: {
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/classnames.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/prop-types.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$alert.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$form.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$icon.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/uuid.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/accessibility-settings-state-web/__liferay__/index.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get('http://liferay:8080/o/frontend-js-state-web/__liferay__/index.js', {
      headers: {
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$drop-down.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$link.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$multi-select.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$navigation-bar.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get('http://liferay:8080/o/frontend-js-components-web/__liferay__/index.js', {
      headers: {
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$pagination-bar.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$panel.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$tabs.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$tooltip.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$core.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$card.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$sticker.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$shared.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$label.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$layout.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dnd.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dnd-html5-backend.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$autocomplete.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$data-provider.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$empty-state.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$table.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/formik.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get('http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/index.js', {
      headers: {
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/clipboard.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/dom-align.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$pagination.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dom.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-node-shims/__liferay__/exports/process.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/react-transition-group.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$provider.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$badge.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$popover.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$localized-input.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/fuzzy.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$addon$fold$foldgutter.css.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$addon$hint$show-hint.css.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$lib$codemirror.css.js',
      {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get('http://liferay:8080/o/frontend-js-web/liferay/modal/Modal.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get('http://liferay:8080/o/frontend-js-web/css/notification.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-timer/aui-timer-min.js&/o/frontend-js-aui-web/aui/event-touch/event-touch-min.js&/o/frontend-js-aui-web/aui/event-move/event-move-min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/code_mirror_keyboard_message/CodeMirrorKeyboardMessage.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/forms/common/FieldFeedback.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/forms/common/FieldBase.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/forms/input/InputLocalized.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/management_toolbar/ManagementToolbar.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/treeview/Treeview.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$addon$fold$foldgutter.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$addon$hint$show-hint.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$lib$codemirror.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get('http://liferay:8080/o/frontend-taglib-clay/Toggle.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/management_toolbar/CreationMenu.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/management_toolbar/ManagementToolbar.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/cookie/cookie-min.js&/o/frontend-js-aui-web/liferay/session.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/liferay/menu.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/array-invoke/array-invoke-min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get('http://liferay:8080/o/classic-theme/images/favicon.ico', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    sleep(2.8)
  })

  group('Login Page - /c/portal/login', function () {
    response = http.get('http://liferay:8080/c/portal/login', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

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

    response = http.get(
      'http://liferay:8080/o/classic-theme/css/clay.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839534000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/combo?browserId=chrome&minifierType=js&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui/aui-min.js&/o/frontend-js-aui-web/liferay/modules.js&/o/frontend-js-aui-web/liferay/aui_sandbox.js&/o/frontend-js-aui-web/aui/attribute-base/attribute-base-min.js&/o/frontend-js-aui-web/aui/attribute-complex/attribute-complex-min.js&/o/frontend-js-aui-web/aui/attribute-core/attribute-core-min.js&/o/frontend-js-aui-web/aui/attribute-observable/attribute-observable-min.js&/o/frontend-js-aui-web/aui/attribute-extras/attribute-extras-min.js&/o/frontend-js-aui-web/aui/event-custom-base/event-custom-base-min.js&/o/frontend-js-aui-web/aui/event-custom-complex/event-custom-complex-min.js&/o/frontend-js-aui-web/aui/oop/oop-min.js&/o/frontend-js-aui-web/aui/aui-base-lang/aui-base-lang-min.js&/o/frontend-js-aui-web/liferay/dependency.js&/o/frontend-js-aui-web/liferay/util.js&/o/frontend-js-web/liferay/dom_task_runner.js&/o/frontend-js-web/liferay/events.js&/o/frontend-js-web/liferay/lazy_load.js&/o/frontend-js-web/liferay/liferay.js&/o/frontend-js-web/liferay/global.bundle.js&/o/frontend-js-web/liferay/portlet.js&/o/frontend-js-web/liferay/workflow.js&/o/oauth2-provider-web/js/liferay.js',
      {
        headers: {
          'if-none-match': '"J9xh9OMStBvZ7cMVg0flKlUEr8o="',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/portal-search-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839082000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/product-navigation-product-menu-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839112000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/product-navigation-user-personal-bar-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839114000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/site-navigation-menu-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839140000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-loader-modules-extender/loader.js?&mac=9WaMmhziBCkScHZwrrVcOR7VZF4=&browserId=chrome&languageId=en_US&minifierType=js',
      {
        headers: {
          'if-none-match': '"dCNlFv39pFDQni+PFadXPovsnX0="',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/classic-theme/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839534000',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-aui-web/alloy_ui.css?&mac=favIEq7hPo8AEd6k+N5OVADEEls=&browserId=chrome&languageId=en_US&themeId=classic_WAR_classictheme',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/layout-common-styles/main.css?plid=8&segmentsExperienceId=32710&t=1747316181362',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/image/layout_set_logo?img_id=31201&t=1747398667280',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/classic-theme/js/main.js?browserId=chrome&minifierType=js&languageId=en_US&t=1745839534000',
      {
        headers: {
          'if-none-match': '"hSUVyUlQIhNIZW3RXZyFzbXkIMU="',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get('http://liferay:8080/o/frontend-js-spa-web/__liferay__/index.js', {
      headers: {
        'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
        'if-none-match': '"AUmpSsDjstVpH4MI6zMviLXUDjE="',
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/widget-base/assets/skins/sam/widget-base.css',
      {
        headers: {
          'if-none-match': '"yTjKafRregBVpL8MeP8dsyyAv4c="',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get('http://liferay:8080/o/classic-theme/images/clay/icons.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get('http://liferay:8080/o/frontend-js-web/__liferay__/index.js', {
      headers: {
        'if-modified-since': 'Mon, 28 Apr 2025 11:16:04 GMT',
        'if-none-match': '"3/YEEa5ChEDX6gv8MtP1t83Ww08="',
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get('http://liferay:8080/o/portal-search-web/__liferay__/index.js', {
      headers: {
        'if-modified-since': 'Mon, 28 Apr 2025 11:17:58 GMT',
        'if-none-match': '"AAxJeLRfq+ZRBIdKUgmjvVaMR/4="',
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'http://liferay:8080/o/portal-template-react-renderer-impl/__liferay__/index.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:18:18 GMT',
          'if-none-match': '"BB2yH24W6bbeODQm/2pzqod3n9o="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get('http://liferay:8080/o/layout-taglib/__liferay__/index.js', {
      headers: {
        'if-modified-since': 'Mon, 28 Apr 2025 11:12:40 GMT',
        'if-none-match': '"0HgrlZaZTKBscmQrNvsFyxylhZc="',
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'http://liferay:8080/o/frontend-js-alert-support-web/__liferay__/index.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:48 GMT',
          'if-none-match': '"SNlMeVM3fF8tzIyUzw+odohy5cg="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-tabs-support-web/__liferay__/index.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:02 GMT',
          'if-none-match': '"LpOzcknTaxj+tsiLvWHVCgQCuEI="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-dropdown-support-web/__liferay__/index.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:56 GMT',
          'if-none-match': '"LRpLg1EsxDORtZLGlJ5PHcjfOww="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-tooltip-support-web/__liferay__/index.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:02 GMT',
          'if-none-match': '"RGBnwUhyZLoKjyNb5DuDnPSAbJ8="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-collapse-support-web/__liferay__/index.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:50 GMT',
          'if-none-match': '"RSyao7yNstZLvrnZCnFQzkLvwvs="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get('http://liferay:8080/o/cookies-banner-web/__liferay__/index.js', {
      headers: {
        'if-modified-since': 'Mon, 28 Apr 2025 11:14:44 GMT',
        'if-none-match': '"RB19rxE7F+b/+E7QEIUrYdW83HE="',
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/yui-throttle/yui-throttle-min.js&/o/frontend-js-aui-web/aui/classnamemanager/classnamemanager-min.js&/o/frontend-js-aui-web/aui/aui-classnamemanager/aui-classnamemanager-min.js&/o/frontend-js-aui-web/aui/aui-debounce/aui-debounce-min.js&/o/frontend-js-aui-web/aui/array-extras/array-extras-min.js&/o/frontend-js-aui-web/aui/event-base/event-base-min.js&/o/frontend-js-aui-web/aui/dom-core/dom-core-min.js&/o/frontend-js-aui-web/aui/dom-base/dom-base-min.js&/o/frontend-js-aui-web/aui/selector-native/selector-native-min.js&/o/frontend-js-aui-web/aui/selector/selector-min.js&/o/frontend-js-aui-web/aui/node-core/node-core-min.js&/o/frontend-js-aui-web/aui/dom-style/dom-style-min.js&/o/frontend-js-aui-web/aui/node-base/node-base-min.js&/o/frontend-js-aui-web/aui/event-delegate/event-delegate-min.js&/o/frontend-js-aui-web/aui/node-event-delegate/node-event-delegate-min.js',
      {
        headers: {
          'if-none-match': '"5NAu5ItxonwSHUQCQOKGri8QLP4="',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/pluginhost-base/pluginhost-base-min.js&/o/frontend-js-aui-web/aui/pluginhost-config/pluginhost-config-min.js&/o/frontend-js-aui-web/aui/node-pluginhost/node-pluginhost-min.js&/o/frontend-js-aui-web/aui/dom-screen/dom-screen-min.js&/o/frontend-js-aui-web/aui/node-screen/node-screen-min.js&/o/frontend-js-aui-web/aui/node-style/node-style-min.js&/o/frontend-js-aui-web/aui/aui-node-base/aui-node-base-min.js&/o/frontend-js-aui-web/aui/base-core/base-core-min.js&/o/frontend-js-aui-web/aui/base-observable/base-observable-min.js&/o/frontend-js-aui-web/aui/base-base/base-base-min.js&/o/frontend-js-aui-web/aui/base-pluginhost/base-pluginhost-min.js&/o/frontend-js-aui-web/aui/event-synthetic/event-synthetic-min.js&/o/frontend-js-aui-web/aui/event-focus/event-focus-min.js&/o/frontend-js-aui-web/aui/widget-base/widget-base-min.js&/o/frontend-js-aui-web/aui/aui-widget-cssclass/aui-widget-cssclass-min.js',
      {
        headers: {
          'if-none-match': '"g6BIAELvx4Q8C6uojVFQMGggxGE="',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-widget-toggle/aui-widget-toggle-min.js&/o/frontend-js-aui-web/aui/base-build/base-build-min.js&/o/frontend-js-aui-web/aui/aui-component/aui-component-min.js&/o/frontend-js-aui-web/aui/event-mouseenter/event-mouseenter-min.js&/o/frontend-js-aui-web/aui/plugin/plugin-min.js&/o/frontend-js-aui-web/aui/event-simulate/event-simulate-min.js&/o/frontend-js-aui-web/aui/async-queue/async-queue-min.js&/o/frontend-js-aui-web/aui/gesture-simulate/gesture-simulate-min.js&/o/frontend-js-aui-web/aui/node-event-simulate/node-event-simulate-min.js&/o/frontend-js-aui-web/aui/event-key/event-key-min.js&/o/frontend-js-aui-web/aui/node-focusmanager/node-focusmanager-min.js&/o/frontend-js-aui-web/liferay/navigation_interaction.js',
      {
        headers: {
          'if-none-match': '"u+oVsCTJ80nwMuTIXm5FIWtB0Hg="',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$button.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"B6jIifXVk7OtNz8gzFtWfARuOQ0="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$loading-indicator.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"ZsPInuVlcmR4s7wKBN6VMjNWsQM="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$modal.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"nJyx7DiJNJJCRcpQQZbWQiAvM6s="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get('http://liferay:8080/o/frontend-js-react-web/__liferay__/index.js', {
      headers: {
        'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
        'if-none-match': '"W73r4ZrzP1SPKRZdcwbSOFKU7/c="',
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/classnames.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
          'if-none-match': '"WbnvcL0XSA7ZUI26w5vb+K0F5Dc="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/prop-types.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
          'if-none-match': '"Qxts0W6AdtQf+nAmADdDvOeyuS0="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
          'if-none-match': '"OBBMo8HVfrsMKgiyNeyII3nZSok="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$alert.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"4fDqjXFegCCL7cAjS58VZ331WZE="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$form.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"Qb4NIEbcfHZrVX072Z6/wqkkvkE="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$icon.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"yAlz5K9gBvI2Lck+NApzongQU1I="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/uuid.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
          'if-none-match': '"/RPDo5pQ8z3vhsovrK/88Qc670M="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/accessibility-settings-state-web/__liferay__/index.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:22 GMT',
          'if-none-match': '"cgGHClQeQYGYL1bn0Q5Yhhnn+HQ="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get('http://liferay:8080/o/frontend-js-state-web/__liferay__/index.js', {
      headers: {
        'if-modified-since': 'Mon, 28 Apr 2025 11:16:02 GMT',
        'if-none-match': '"0y1A3TbQJwsOsaBJ0rEJv6zTyI8="',
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$pagination.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"sIwW4n8hazxbIZW8ifoJdYTOVjU="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$table.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"hv0pIodat7ixqKRG8lxylVuWoes="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$empty-state.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"779FJGBGHh0xED7Xhxzx6tnXX4I="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$layout.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"YVQz98Xk1JCjsvts1dAMgy8O8HE="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$core.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"Wrw7TQcDaVjbrFzFcfNlPUUh9sk="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$tooltip.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"XGaQk+iyVgXpFsjGOZV6lTxRT68="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dnd.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
          'if-none-match': '"BFpT74umM91VtfOgznCfttznWB4="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dnd-html5-backend.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
          'if-none-match': '"b7f9Frw9eX2cbfAwl5h1Qjt9v3s="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$autocomplete.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"vAdkiR3HVGvaIkJCk6ImOqhjNaM="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$drop-down.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"bXP9l1Bwu+1MXYgichTqrD46VeU="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get('http://liferay:8080/o/frontend-js-components-web/__liferay__/index.js', {
      headers: {
        'if-modified-since': 'Mon, 28 Apr 2025 11:15:52 GMT',
        'if-none-match': '"EDXms6sDQQwHCwXZcvXnw29dmfI="',
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$multi-select.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"ZIGzSdlqSNyI+XLNV7YCeuq7Jiw="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$data-provider.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"NFvnhUKE6YZYQUtvNGU5z0FS4LI="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$pagination-bar.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"0SUvuMi55rkAoyZxZAfOrKRlELQ="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/formik.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
          'if-none-match': '"RbYuotMYyeVQxcIpA2OoZUO7oi8="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$link.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"8+fH5r0e0oBEGLeD+CHCtkSSIIE="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get('http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/index.js', {
      headers: {
        'if-modified-since': 'Mon, 28 Apr 2025 11:15:50 GMT',
        'if-none-match': '"uXhhnI+nLaz5YpOC2v2B8izzFnk="',
        origin: 'http://liferay:8080',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/clipboard.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
          'if-none-match': '"I1HR5SXTj116HOndd93bhavK9KU="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/dom-align.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
          'if-none-match': '"o2Dziorg13rHVqMwkpmo35wR9WY="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$shared.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"SWd83A765MexQaJTRuMrbDFg1eE="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dom.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
          'if-none-match': '"7Gz5PXWI8yc1qBPBrbB7iCHgX7Y="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-node-shims/__liferay__/exports/process.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
          'if-none-match': '"KjW87AQ/taAtUPiyR2hknpEiA4o="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-timer/aui-timer-min.js&/o/frontend-js-aui-web/aui/event-touch/event-touch-min.js&/o/frontend-js-aui-web/aui/event-move/event-move-min.js',
      {
        headers: {
          'if-none-match': '"/gdmHY6W/OoKEVg7e/9gl+080D4="',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$provider.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"AeUTuy7gLAr00wf4/6pzGKMuMdw="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/fuzzy.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
          'if-none-match': '"lLTyn0DXqkhcFdBqVwvvY1rdZ8o="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/react-transition-group.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
          'if-none-match': '"IAN6abkhjADyhJdvfCuyEszeGPo="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$label.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"6ATWSAGGnXXxjRuJr70FJsOMdPU="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$badge.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"Dy1o10lbQ5u1QxrdO/TXpzM9FO8="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$popover.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"g2HpvVNYWBCud+D2aecF9yOSVwg="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$localized-input.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"gvfOp2gVQnttNfB/oCHiCu+RPLo="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$card.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"RGPLVmfnSzARdL4qC512KCFVsKY="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$sticker.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"+Y/y9/Nz053KScjGa2gK+txDt+4="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$addon$fold$foldgutter.css.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:50 GMT',
          'if-none-match': '"bYWvJq00X7jf7uBw5rvhvp0gvyM="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$addon$hint$show-hint.css.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:50 GMT',
          'if-none-match': '"OAokcN55rzDsRBsYAq6jbmtD9Kc="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$lib$codemirror.css.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:50 GMT',
          'if-none-match': '"qnz72nTl7MdF74WeY9BqwW8/XdI="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get('http://liferay:8080/o/frontend-js-web/liferay/modal/Modal.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get('http://liferay:8080/o/frontend-js-web/css/notification.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/cookie/cookie-min.js&/o/frontend-js-aui-web/liferay/session.js',
      {
        headers: {
          'if-none-match': '"/KVYHvnpd643336ffODX29hiX6U="',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/code_mirror_keyboard_message/CodeMirrorKeyboardMessage.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/forms/common/FieldFeedback.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/forms/common/FieldBase.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/forms/input/InputLocalized.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/management_toolbar/ManagementToolbar.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-components-web/treeview/Treeview.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$addon$fold$foldgutter.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$addon$hint$show-hint.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$lib$codemirror.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/liferay/menu.js&/o/frontend-js-aui-web/aui/escape/escape-min.js&/o/frontend-js-aui-web/aui/selector-css2/selector-css2-min.js&/o/frontend-js-aui-web/aui/selector-css3/selector-css3-min.js&/o/frontend-js-aui-web/aui/aui-event-base/aui-event-base-min.js&/o/frontend-js-aui-web/aui/timers/timers-min.js&/o/frontend-js-aui-web/aui/aui-event-input/aui-event-input-min.js&/o/frontend-js-aui-web/aui/aui-form-validator/aui-form-validator-min.js&/o/frontend-js-aui-web/liferay/form.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/array-invoke/array-invoke-min.js',
      {
        headers: {
          'if-none-match': '"DwHpw+xPpOsfNPVhbYj5ik3SGRc="',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get('http://liferay:8080/o/classic-theme/images/favicon.ico', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    sleep(4.4)

    response = http.get(
      'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/querystring-parse/querystring-parse-min.js&/o/frontend-js-aui-web/aui/querystring-stringify/querystring-stringify-min.js&/o/frontend-js-aui-web/aui/aui-url/aui-url-min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
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
      sleep(0.6)

      response = http.get(
        'http://liferay:8080/combo?browserId=chrome&minifierType=js&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui/aui-min.js&/o/frontend-js-aui-web/liferay/modules.js&/o/frontend-js-aui-web/liferay/aui_sandbox.js&/o/frontend-js-aui-web/aui/attribute-base/attribute-base-min.js&/o/frontend-js-aui-web/aui/attribute-complex/attribute-complex-min.js&/o/frontend-js-aui-web/aui/attribute-core/attribute-core-min.js&/o/frontend-js-aui-web/aui/attribute-observable/attribute-observable-min.js&/o/frontend-js-aui-web/aui/attribute-extras/attribute-extras-min.js&/o/frontend-js-aui-web/aui/event-custom-base/event-custom-base-min.js&/o/frontend-js-aui-web/aui/event-custom-complex/event-custom-complex-min.js&/o/frontend-js-aui-web/aui/oop/oop-min.js&/o/frontend-js-aui-web/aui/aui-base-lang/aui-base-lang-min.js&/o/frontend-js-aui-web/liferay/dependency.js&/o/frontend-js-aui-web/liferay/util.js&/o/frontend-js-web/liferay/dom_task_runner.js&/o/frontend-js-web/liferay/events.js&/o/frontend-js-web/liferay/lazy_load.js&/o/frontend-js-web/liferay/liferay.js&/o/frontend-js-web/liferay/global.bundle.js&/o/frontend-js-web/liferay/portlet.js&/o/frontend-js-web/liferay/workflow.js&/o/oauth2-provider-web/js/liferay.js',
        {
          headers: {
            'if-none-match': '"J9xh9OMStBvZ7cMVg0flKlUEr8o="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-css-cadmin-web/clay_admin.css?&mac=00RoSWlHcxcc8mRGNjZoFGTtLqQ=&browserId=chrome&languageId=en_US&themeId=classic_WAR_classictheme',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/classic-theme/css/clay.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839534000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/portal-search-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839082000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/product-navigation-product-menu-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839112000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/product-navigation-user-personal-bar-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839114000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/site-navigation-menu-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839140000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-loader-modules-extender/loader.js?&mac=9WaMmhziBCkScHZwrrVcOR7VZF4=&browserId=chrome&languageId=en_US&minifierType=js',
        {
          headers: {
            'if-none-match': '"dCNlFv39pFDQni+PFadXPovsnX0="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/classic-theme/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839534000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/product-navigation-control-menu-theme-contributor/product_navigation_control_menu.css?&mac=xxy1Nd+6PX779of7ucFUV3er3kQ=&browserId=chrome&languageId=en_US&themeId=classic_WAR_classictheme',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-aui-web/alloy_ui.css?&mac=favIEq7hPo8AEd6k+N5OVADEEls=&browserId=chrome&languageId=en_US&themeId=classic_WAR_classictheme',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/product-navigation-product-menu-theme-contributor/product_navigation_product_menu.css?&mac=FxBN7LhYBfhIvvj9u5havWfBGAM=&browserId=chrome&languageId=en_US&themeId=classic_WAR_classictheme',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-common-styles/main.css?plid=8&segmentsExperienceId=32710&t=1747316181362',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/image/layout_set_logo?img_id=31201&t=1747398667280',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/documents/20118/32724/tree.png/68db0b77-8478-cfa2-d61d-1f96acbbb108?version=1.0&t=1747316178598',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/classic-theme/js/main.js?browserId=chrome&minifierType=js&languageId=en_US&t=1745839534000',
        {
          headers: {
            'if-none-match': '"hSUVyUlQIhNIZW3RXZyFzbXkIMU="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-js-spa-web/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/classic-theme/images/clay/icons.svg', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/frontend-js-web/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-debounce/aui-debounce-min.js&/o/frontend-js-aui-web/aui/array-extras/array-extras-min.js&/o/frontend-js-aui-web/aui/classnamemanager/classnamemanager-min.js&/o/frontend-js-aui-web/aui/aui-classnamemanager/aui-classnamemanager-min.js&/o/frontend-js-aui-web/aui/event-base/event-base-min.js&/o/frontend-js-aui-web/aui/dom-core/dom-core-min.js&/o/frontend-js-aui-web/aui/dom-base/dom-base-min.js&/o/frontend-js-aui-web/aui/selector-native/selector-native-min.js&/o/frontend-js-aui-web/aui/selector/selector-min.js&/o/frontend-js-aui-web/aui/node-core/node-core-min.js&/o/frontend-js-aui-web/aui/dom-style/dom-style-min.js&/o/frontend-js-aui-web/aui/node-base/node-base-min.js&/o/frontend-js-aui-web/aui/event-delegate/event-delegate-min.js&/o/frontend-js-aui-web/aui/node-event-delegate/node-event-delegate-min.js&/o/frontend-js-aui-web/aui/pluginhost-base/pluginhost-base-min.js',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/pluginhost-config/pluginhost-config-min.js&/o/frontend-js-aui-web/aui/node-pluginhost/node-pluginhost-min.js&/o/frontend-js-aui-web/aui/dom-screen/dom-screen-min.js&/o/frontend-js-aui-web/aui/node-screen/node-screen-min.js&/o/frontend-js-aui-web/aui/node-style/node-style-min.js&/o/frontend-js-aui-web/aui/aui-node-base/aui-node-base-min.js&/o/frontend-js-aui-web/liferay/menu.js',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/application-list-taglib/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/frontend-taglib-clay/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/frontend-taglib/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/portal-template-react-renderer-impl/__liferay__/index.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/portal-search-web/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/product-navigation-taglib/__liferay__/index.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/documents/20118/32724/tree.png/68db0b77-8478-cfa2-d61d-1f96acbbb108?version=1.0&t=1747316178598',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$button.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$loading-indicator.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$modal.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-js-react-web/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/classnames.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/prop-types.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$alert.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$form.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$icon.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/uuid.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/accessibility-settings-state-web/__liferay__/index.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-js-state-web/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/segments-experiment-web/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/layout-reports-web/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/product-navigation-applications-menu-web/__liferay__/index.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/layout-taglib/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/analytics-reports-web/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-js-alert-support-web/__liferay__/index.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-tabs-support-web/__liferay__/index.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dropdown-support-web/__liferay__/index.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-tooltip-support-web/__liferay__/index.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-collapse-support-web/__liferay__/index.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/cookies-banner-web/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/widget-base/assets/skins/sam/widget-base.css',
        {
          headers: {
            'if-none-match': '"yTjKafRregBVpL8MeP8dsyyAv4c="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$drop-down.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$link.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$multi-select.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$navigation-bar.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/__liferay__/index.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$pagination-bar.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$panel.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$tabs.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$tooltip.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$core.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$card.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$sticker.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$shared.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$label.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$layout.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$list.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-data-set-web/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dnd.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dnd-html5-backend.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$autocomplete.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$data-provider.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$empty-state.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$table.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/formik.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/index.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/clipboard.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dom.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-node-shims/__liferay__/exports/process.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/base-core/base-core-min.js&/o/frontend-js-aui-web/aui/base-observable/base-observable-min.js&/o/frontend-js-aui-web/aui/base-base/base-base-min.js&/o/frontend-js-aui-web/aui/base-pluginhost/base-pluginhost-min.js&/o/frontend-js-aui-web/aui/event-synthetic/event-synthetic-min.js&/o/frontend-js-aui-web/aui/event-focus/event-focus-min.js&/o/frontend-js-aui-web/aui/widget-base/widget-base-min.js&/o/frontend-js-aui-web/aui/aui-widget-cssclass/aui-widget-cssclass-min.js&/o/frontend-js-aui-web/aui/aui-widget-toggle/aui-widget-toggle-min.js&/o/frontend-js-aui-web/aui/base-build/base-build-min.js&/o/frontend-js-aui-web/aui/aui-component/aui-component-min.js&/o/frontend-js-aui-web/aui/array-invoke/array-invoke-min.js',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$badge.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$progress-bar.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/layout-js-components-web/__liferay__/index.js', {
        headers: {
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$popover.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$slider.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$pagination.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-recharts/__liferay__/exports/recharts.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/dom-align.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/react-transition-group.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$provider.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$localized-input.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/fuzzy.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$addon$fold$foldgutter.css.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$addon$hint$show-hint.css.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$lib$codemirror.css.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$color-picker.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$toolbar.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/axe-core.js',
        {
          headers: {
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-js-web/liferay/modal/Modal.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/frontend-js-web/css/notification.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/code_mirror_keyboard_message/CodeMirrorKeyboardMessage.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/forms/common/FieldFeedback.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/forms/common/FieldBase.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/forms/input/InputLocalized.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/management_toolbar/ManagementToolbar.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/treeview/Treeview.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-taglib-clay/Toggle.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/management_toolbar/CreationMenu.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/management_toolbar/ManagementToolbar.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-data-set-web/styles/main.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/yui-throttle/yui-throttle-min.js&/o/frontend-js-aui-web/aui/event-mouseenter/event-mouseenter-min.js&/o/frontend-js-aui-web/aui/plugin/plugin-min.js&/o/frontend-js-aui-web/aui/event-simulate/event-simulate-min.js&/o/frontend-js-aui-web/aui/async-queue/async-queue-min.js&/o/frontend-js-aui-web/aui/gesture-simulate/gesture-simulate-min.js&/o/frontend-js-aui-web/aui/node-event-simulate/node-event-simulate-min.js&/o/frontend-js-aui-web/aui/event-key/event-key-min.js&/o/frontend-js-aui-web/aui/node-focusmanager/node-focusmanager-min.js&/o/frontend-js-aui-web/liferay/navigation_interaction.js',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$addon$fold$foldgutter.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$addon$hint$show-hint.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$lib$codemirror.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/segments-experiment-web/css/main.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/layout-js-components-web/js/components/color_picker/ColorPicker.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-js-components-web/js/components/drag_preview/DragPreview.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-js-components-web/js/components/experience_selector/ExperienceSelector.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-js-components-web/js/components/length_input/LengthInput.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-js-components-web/js/components/resizer/Resizer.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-reports-web/js/components/PageAudit.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/layout-reports-web/css/main.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/product-navigation-applications-menu-web/css/ApplicationsMenu.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/analytics-reports-web/css/analytics-reports-app.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/analytics-reports-web/css/main.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-timer/aui-timer-min.js&/o/frontend-js-aui-web/aui/event-touch/event-touch-min.js&/o/frontend-js-aui-web/aui/event-move/event-move-min.js',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/cookie/cookie-min.js&/o/frontend-js-aui-web/liferay/session.js',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/liferay/navigation.js&/o/frontend-js-aui-web/liferay/store.js&/o/frontend-js-aui-web/liferay/layout.js',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/classic-theme/images/favicon.ico', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-sortable-layout/assets/skins/sam/aui-sortable-layout.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/dd-ddm-base/dd-ddm-base-min.js&/o/frontend-js-aui-web/aui/selector-css2/selector-css2-min.js&/o/frontend-js-aui-web/aui/dd-drag/dd-drag-min.js&/o/frontend-js-aui-web/aui/event-resize/event-resize-min.js&/o/frontend-js-aui-web/aui/dd-ddm/dd-ddm-min.js&/o/frontend-js-aui-web/aui/dd-ddm-drop/dd-ddm-drop-min.js&/o/frontend-js-aui-web/aui/dd-drop/dd-drop-min.js&/o/frontend-js-aui-web/aui/dd-drop-plugin/dd-drop-plugin-min.js&/o/frontend-js-aui-web/aui/dd-delegate/dd-delegate-min.js&/o/frontend-js-aui-web/aui/dd-proxy/dd-proxy-min.js&/o/frontend-js-aui-web/aui/aui-sortable-layout/aui-sortable-layout-min.js&/o/frontend-js-aui-web/aui/dd-constrain/dd-constrain-min.js&/o/frontend-js-aui-web/aui/dd-scroll/dd-scroll-min.js&/o/frontend-js-aui-web/liferay/layout_column.js',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
      sleep(1.4)

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-autosize-deprecated/assets/skins/sam/aui-autosize-deprecated.css&/o/frontend-js-aui-web/aui/cssbutton/cssbutton-min.css&/o/frontend-js-aui-web/aui/aui-button-core/assets/skins/sam/aui-button-core.css&/o/frontend-js-aui-web/aui/aui-form-combobox-deprecated/assets/skins/sam/aui-form-combobox-deprecated.css&/o/frontend-js-aui-web/aui/aui-editable-deprecated/assets/skins/sam/aui-editable-deprecated.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-delayed-task-deprecated/aui-delayed-task-deprecated-min.js&/o/frontend-js-aui-web/aui/selector-css3/selector-css3-min.js&/o/frontend-js-aui-web/aui/aui-selector/aui-selector-min.js&/o/frontend-js-aui-web/aui/aui-event-base/aui-event-base-min.js&/o/frontend-js-aui-web/aui/event-valuechange/event-valuechange-min.js&/o/frontend-js-aui-web/aui/aui-autosize-deprecated/aui-autosize-deprecated-min.js&/o/frontend-js-aui-web/aui/aui-form-field-deprecated/aui-form-field-deprecated-min.js&/o/frontend-js-aui-web/aui/aui-form-textfield-deprecated/aui-form-textfield-deprecated-min.js&/o/frontend-js-aui-web/aui/aui-form-textarea-deprecated/aui-form-textarea-deprecated-min.js&/o/frontend-js-aui-web/aui/arraylist/arraylist-min.js&/o/frontend-js-aui-web/aui/arraylist-add/arraylist-add-min.js&/o/frontend-js-aui-web/aui/escape/escape-min.js&/o/frontend-js-aui-web/aui/button-core/button-core-min.js',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/widget-htmlparser/widget-htmlparser-min.js&/o/frontend-js-aui-web/aui/widget-skin/widget-skin-min.js&/o/frontend-js-aui-web/aui/widget-uievents/widget-uievents-min.js&/o/frontend-js-aui-web/aui/button/button-min.js&/o/frontend-js-aui-web/aui/button-plugin/button-plugin-min.js&/o/frontend-js-aui-web/aui/button-group/button-group-min.js&/o/frontend-js-aui-web/aui/aui-button-core/aui-button-core-min.js&/o/frontend-js-aui-web/aui/aui-toolbar/aui-toolbar-min.js&/o/frontend-js-aui-web/aui/aui-form-combobox-deprecated/aui-form-combobox-deprecated-min.js&/o/frontend-js-aui-web/aui/aui-editable-deprecated/aui-editable-deprecated-min.js&/o/frontend-js-aui-web/aui/event-outside/event-outside-min.js',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
      sleep(3.1)

      response = http.get('http://liferay:8080/home', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'x-csrf-token': 'cdNJAWIC',
          'x-pjax': 'true',
          'x-requested-with': 'XMLHttpRequest',
        },
      })

      response = http.get(
        'http://liferay:8080/documents/20118/32724/tree.png/68db0b77-8478-cfa2-d61d-1f96acbbb108?version=1.0&t=1747316178598',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-css-cadmin-web/clay_admin.css?&mac=00RoSWlHcxcc8mRGNjZoFGTtLqQ=&browserId=chrome&languageId=en_US&themeId=classic_WAR_classictheme',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/classic-theme/css/clay.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839534000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/portal-search-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839082000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/product-navigation-product-menu-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839112000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/product-navigation-user-personal-bar-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839114000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/site-navigation-menu-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839140000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/classic-theme/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839534000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-common-styles/main.css?plid=8&segmentsExperienceId=32710&t=1747316181362',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/classic-theme/js/main.js?browserId=chrome&minifierType=js&languageId=en_US&t=1745839534000',
        {
          headers: {
            'if-none-match': '"hSUVyUlQIhNIZW3RXZyFzbXkIMU="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
      sleep(3)

      response = http.get('http://liferay:8080/home', {
        headers: {
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-css-cadmin-web/clay_admin.css?&mac=00RoSWlHcxcc8mRGNjZoFGTtLqQ=&browserId=chrome&languageId=en_US&themeId=classic_WAR_classictheme',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/classic-theme/css/clay.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839534000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/portal-search-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839082000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/product-navigation-product-menu-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839112000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo?browserId=chrome&minifierType=js&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui/aui-min.js&/o/frontend-js-aui-web/liferay/modules.js&/o/frontend-js-aui-web/liferay/aui_sandbox.js&/o/frontend-js-aui-web/aui/attribute-base/attribute-base-min.js&/o/frontend-js-aui-web/aui/attribute-complex/attribute-complex-min.js&/o/frontend-js-aui-web/aui/attribute-core/attribute-core-min.js&/o/frontend-js-aui-web/aui/attribute-observable/attribute-observable-min.js&/o/frontend-js-aui-web/aui/attribute-extras/attribute-extras-min.js&/o/frontend-js-aui-web/aui/event-custom-base/event-custom-base-min.js&/o/frontend-js-aui-web/aui/event-custom-complex/event-custom-complex-min.js&/o/frontend-js-aui-web/aui/oop/oop-min.js&/o/frontend-js-aui-web/aui/aui-base-lang/aui-base-lang-min.js&/o/frontend-js-aui-web/liferay/dependency.js&/o/frontend-js-aui-web/liferay/util.js&/o/frontend-js-web/liferay/dom_task_runner.js&/o/frontend-js-web/liferay/events.js&/o/frontend-js-web/liferay/lazy_load.js&/o/frontend-js-web/liferay/liferay.js&/o/frontend-js-web/liferay/global.bundle.js&/o/frontend-js-web/liferay/portlet.js&/o/frontend-js-web/liferay/workflow.js&/o/oauth2-provider-web/js/liferay.js',
        {
          headers: {
            'if-none-match': '"J9xh9OMStBvZ7cMVg0flKlUEr8o="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/product-navigation-user-personal-bar-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839114000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/site-navigation-menu-web/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839140000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-loader-modules-extender/loader.js?&mac=9WaMmhziBCkScHZwrrVcOR7VZF4=&browserId=chrome&languageId=en_US&minifierType=js',
        {
          headers: {
            'if-none-match': '"dCNlFv39pFDQni+PFadXPovsnX0="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/classic-theme/css/main.css?browserId=chrome&themeId=classic_WAR_classictheme&languageId=en_US&t=1745839534000',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/product-navigation-control-menu-theme-contributor/product_navigation_control_menu.css?&mac=xxy1Nd+6PX779of7ucFUV3er3kQ=&browserId=chrome&languageId=en_US&themeId=classic_WAR_classictheme',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-aui-web/alloy_ui.css?&mac=favIEq7hPo8AEd6k+N5OVADEEls=&browserId=chrome&languageId=en_US&themeId=classic_WAR_classictheme',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/product-navigation-product-menu-theme-contributor/product_navigation_product_menu.css?&mac=FxBN7LhYBfhIvvj9u5havWfBGAM=&browserId=chrome&languageId=en_US&themeId=classic_WAR_classictheme',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-common-styles/main.css?plid=8&segmentsExperienceId=32710&t=1747316181362',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/image/layout_set_logo?img_id=31201&t=1747398667280',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/documents/20118/32724/tree.png/68db0b77-8478-cfa2-d61d-1f96acbbb108?version=1.0&t=1747316178598',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/classic-theme/js/main.js?browserId=chrome&minifierType=js&languageId=en_US&t=1745839534000',
        {
          headers: {
            'if-none-match': '"hSUVyUlQIhNIZW3RXZyFzbXkIMU="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-js-spa-web/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
          'if-none-match': '"AUmpSsDjstVpH4MI6zMviLXUDjE="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/frontend-js-web/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:04 GMT',
          'if-none-match': '"3/YEEa5ChEDX6gv8MtP1t83Ww08="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-debounce/aui-debounce-min.js&/o/frontend-js-aui-web/aui/array-extras/array-extras-min.js&/o/frontend-js-aui-web/aui/classnamemanager/classnamemanager-min.js&/o/frontend-js-aui-web/aui/aui-classnamemanager/aui-classnamemanager-min.js&/o/frontend-js-aui-web/aui/event-base/event-base-min.js&/o/frontend-js-aui-web/aui/dom-core/dom-core-min.js&/o/frontend-js-aui-web/aui/dom-base/dom-base-min.js&/o/frontend-js-aui-web/aui/selector-native/selector-native-min.js&/o/frontend-js-aui-web/aui/selector/selector-min.js&/o/frontend-js-aui-web/aui/node-core/node-core-min.js&/o/frontend-js-aui-web/aui/dom-style/dom-style-min.js&/o/frontend-js-aui-web/aui/node-base/node-base-min.js&/o/frontend-js-aui-web/aui/event-delegate/event-delegate-min.js&/o/frontend-js-aui-web/aui/node-event-delegate/node-event-delegate-min.js&/o/frontend-js-aui-web/aui/pluginhost-base/pluginhost-base-min.js',
        {
          headers: {
            'if-none-match': '"xgz8YyVSw5Tbsl8bAoqLsoyFu6E="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/pluginhost-config/pluginhost-config-min.js&/o/frontend-js-aui-web/aui/node-pluginhost/node-pluginhost-min.js&/o/frontend-js-aui-web/aui/dom-screen/dom-screen-min.js&/o/frontend-js-aui-web/aui/node-screen/node-screen-min.js&/o/frontend-js-aui-web/aui/node-style/node-style-min.js&/o/frontend-js-aui-web/aui/aui-node-base/aui-node-base-min.js&/o/frontend-js-aui-web/liferay/menu.js',
        {
          headers: {
            'if-none-match': '"4E5+0AmSlz4Xswocxz/la6zkZ/0="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/documents/20118/32724/tree.png/68db0b77-8478-cfa2-d61d-1f96acbbb108?version=1.0&t=1747316178598',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/application-list-taglib/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:12:16 GMT',
          'if-none-match': '"7rOblmqAj9m526n0M6BFFQABhiI="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/frontend-taglib-clay/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
          'if-none-match': '"l4XksJdDu03lb6Mb8AkYMx8rE2o="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/frontend-taglib/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:11:24 GMT',
          'if-none-match': '"m4bBO8ZbV0dOgtop3s2zu8Ek89w="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/portal-template-react-renderer-impl/__liferay__/index.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:18:18 GMT',
            'if-none-match': '"BB2yH24W6bbeODQm/2pzqod3n9o="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/portal-search-web/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:17:58 GMT',
          'if-none-match': '"AAxJeLRfq+ZRBIdKUgmjvVaMR/4="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/product-navigation-taglib/__liferay__/index.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:16:56 GMT',
            'if-none-match': '"iW9IKSbIOlc3sawIQ/GKngXz8VI="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/segments-experiment-web/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:21:02 GMT',
          'if-none-match': '"RgTZkePQPgzz+KOuvNeT6giBcvI="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/layout-reports-web/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:17:08 GMT',
          'if-none-match': '"U/kxJEkX9ROL+D4466NXmJNS5iM="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/product-navigation-applications-menu-web/__liferay__/index.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:18:30 GMT',
            'if-none-match': '"WlhAbnurv3MDH980qjyAZOhpUgg="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/layout-taglib/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:12:40 GMT',
          'if-none-match': '"0HgrlZaZTKBscmQrNvsFyxylhZc="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/analytics-reports-web/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:20:18 GMT',
          'if-none-match': '"uIGQoV4osbPCC1LqRdj0la1sXh8="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-js-alert-support-web/__liferay__/index.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:48 GMT',
            'if-none-match': '"SNlMeVM3fF8tzIyUzw+odohy5cg="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-tabs-support-web/__liferay__/index.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:16:02 GMT',
            'if-none-match': '"LpOzcknTaxj+tsiLvWHVCgQCuEI="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dropdown-support-web/__liferay__/index.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:56 GMT',
            'if-none-match': '"LRpLg1EsxDORtZLGlJ5PHcjfOww="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-tooltip-support-web/__liferay__/index.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:16:02 GMT',
            'if-none-match': '"RGBnwUhyZLoKjyNb5DuDnPSAbJ8="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-collapse-support-web/__liferay__/index.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:50 GMT',
            'if-none-match': '"RSyao7yNstZLvrnZCnFQzkLvwvs="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/cookies-banner-web/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:14:44 GMT',
          'if-none-match': '"RB19rxE7F+b/+E7QEIUrYdW83HE="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$button.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"B6jIifXVk7OtNz8gzFtWfARuOQ0="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$loading-indicator.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"ZsPInuVlcmR4s7wKBN6VMjNWsQM="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$modal.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"nJyx7DiJNJJCRcpQQZbWQiAvM6s="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-js-react-web/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
          'if-none-match': '"W73r4ZrzP1SPKRZdcwbSOFKU7/c="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/classnames.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
            'if-none-match': '"WbnvcL0XSA7ZUI26w5vb+K0F5Dc="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/prop-types.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
            'if-none-match': '"Qxts0W6AdtQf+nAmADdDvOeyuS0="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
            'if-none-match': '"OBBMo8HVfrsMKgiyNeyII3nZSok="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$alert.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"4fDqjXFegCCL7cAjS58VZ331WZE="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$form.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"Qb4NIEbcfHZrVX072Z6/wqkkvkE="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$icon.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"yAlz5K9gBvI2Lck+NApzongQU1I="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/uuid.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
            'if-none-match': '"/RPDo5pQ8z3vhsovrK/88Qc670M="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/accessibility-settings-state-web/__liferay__/index.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:22 GMT',
            'if-none-match': '"cgGHClQeQYGYL1bn0Q5Yhhnn+HQ="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-js-state-web/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:16:02 GMT',
          'if-none-match': '"0y1A3TbQJwsOsaBJ0rEJv6zTyI8="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/widget-base/assets/skins/sam/widget-base.css',
        {
          headers: {
            'if-none-match': '"yTjKafRregBVpL8MeP8dsyyAv4c="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$drop-down.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"bXP9l1Bwu+1MXYgichTqrD46VeU="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$link.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"8+fH5r0e0oBEGLeD+CHCtkSSIIE="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$multi-select.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"ZIGzSdlqSNyI+XLNV7YCeuq7Jiw="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$navigation-bar.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"WQt44qh38Djmqp1v+FX50DTf4lY="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/__liferay__/index.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:52 GMT',
            'if-none-match': '"EDXms6sDQQwHCwXZcvXnw29dmfI="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$pagination-bar.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"0SUvuMi55rkAoyZxZAfOrKRlELQ="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$panel.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"zWN1YVsJrz8XEj7xfRQOVuTf4xA="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$tabs.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"SrF/mVwNSazcQDySga3gYOllBxQ="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$tooltip.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"XGaQk+iyVgXpFsjGOZV6lTxRT68="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$core.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"Wrw7TQcDaVjbrFzFcfNlPUUh9sk="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$card.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"RGPLVmfnSzARdL4qC512KCFVsKY="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$sticker.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"+Y/y9/Nz053KScjGa2gK+txDt+4="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$shared.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"SWd83A765MexQaJTRuMrbDFg1eE="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$label.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"6ATWSAGGnXXxjRuJr70FJsOMdPU="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$layout.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"YVQz98Xk1JCjsvts1dAMgy8O8HE="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$list.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"4RcJs47rrDd+eZ9gc+WQX6+M83Y="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-data-set-web/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:15:44 GMT',
          'if-none-match': '"ZBWd/pos+zzqZUVoOUF5AyL6sls="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$badge.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"Dy1o10lbQ5u1QxrdO/TXpzM9FO8="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$progress-bar.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"tAsG5DyiGNNdc4i/+bFdc8nFiRA="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$empty-state.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"779FJGBGHh0xED7Xhxzx6tnXX4I="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/layout-js-components-web/__liferay__/index.js', {
        headers: {
          'if-modified-since': 'Mon, 28 Apr 2025 11:17:04 GMT',
          'if-none-match': '"lBW/1kDZkq3lVz5MYebDYRUlVj0="',
          origin: 'http://liferay:8080',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$popover.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"g2HpvVNYWBCud+D2aecF9yOSVwg="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$slider.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"6WOBPTF7n92kvEdRQWuM+abvoFE="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$table.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"hv0pIodat7ixqKRG8lxylVuWoes="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dnd.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
            'if-none-match': '"BFpT74umM91VtfOgznCfttznWB4="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dnd-html5-backend.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
            'if-none-match': '"b7f9Frw9eX2cbfAwl5h1Qjt9v3s="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$autocomplete.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"vAdkiR3HVGvaIkJCk6ImOqhjNaM="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$data-provider.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"NFvnhUKE6YZYQUtvNGU5z0FS4LI="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/formik.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
            'if-none-match': '"RbYuotMYyeVQxcIpA2OoZUO7oi8="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/index.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:50 GMT',
            'if-none-match': '"uXhhnI+nLaz5YpOC2v2B8izzFnk="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/clipboard.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
            'if-none-match': '"I1HR5SXTj116HOndd93bhavK9KU="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/dom-align.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
            'if-none-match': '"o2Dziorg13rHVqMwkpmo35wR9WY="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$pagination.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"sIwW4n8hazxbIZW8ifoJdYTOVjU="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-recharts/__liferay__/exports/recharts.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
            'if-none-match': '"1A9nHZCMXIrd0XRn8gVoHCYsRZc="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-react-web/__liferay__/exports/react-dom.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:16:00 GMT',
            'if-none-match': '"7Gz5PXWI8yc1qBPBrbB7iCHgX7Y="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-node-shims/__liferay__/exports/process.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
            'if-none-match': '"KjW87AQ/taAtUPiyR2hknpEiA4o="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/base-core/base-core-min.js&/o/frontend-js-aui-web/aui/base-observable/base-observable-min.js&/o/frontend-js-aui-web/aui/base-base/base-base-min.js&/o/frontend-js-aui-web/aui/base-pluginhost/base-pluginhost-min.js&/o/frontend-js-aui-web/aui/event-synthetic/event-synthetic-min.js&/o/frontend-js-aui-web/aui/event-focus/event-focus-min.js&/o/frontend-js-aui-web/aui/widget-base/widget-base-min.js&/o/frontend-js-aui-web/aui/aui-widget-cssclass/aui-widget-cssclass-min.js&/o/frontend-js-aui-web/aui/aui-widget-toggle/aui-widget-toggle-min.js&/o/frontend-js-aui-web/aui/base-build/base-build-min.js&/o/frontend-js-aui-web/aui/aui-component/aui-component-min.js&/o/frontend-js-aui-web/aui/array-invoke/array-invoke-min.js',
        {
          headers: {
            'if-none-match': '"9GoN7r/2ajWZ4q6xlB3xX50+bdA="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/react-transition-group.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
            'if-none-match': '"IAN6abkhjADyhJdvfCuyEszeGPo="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$provider.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"AeUTuy7gLAr00wf4/6pzGKMuMdw="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$localized-input.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"gvfOp2gVQnttNfB/oCHiCu+RPLo="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/fuzzy.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
            'if-none-match': '"lLTyn0DXqkhcFdBqVwvvY1rdZ8o="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$color-picker.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"M+bDJHrG2CHi0dNmn5SWIk8qCkQ="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/__liferay__/exports/@clayui$toolbar.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:11:26 GMT',
            'if-none-match': '"LFET2Og+fME8YOyI7xHC+hrkbs0="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-dependencies-web/__liferay__/exports/axe-core.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:58 GMT',
            'if-none-match': '"PA18ldzNSs+nev1LWkwbgyoXyjk="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$addon$fold$foldgutter.css.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:50 GMT',
            'if-none-match': '"bYWvJq00X7jf7uBw5rvhvp0gvyM="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$addon$hint$show-hint.css.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:50 GMT',
            'if-none-match': '"OAokcN55rzDsRBsYAq6jbmtD9Kc="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/exports/codemirror$lib$codemirror.css.js',
        {
          headers: {
            'if-modified-since': 'Mon, 28 Apr 2025 11:15:50 GMT',
            'if-none-match': '"qnz72nTl7MdF74WeY9BqwW8/XdI="',
            origin: 'http://liferay:8080',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-js-web/liferay/modal/Modal.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get('http://liferay:8080/o/frontend-js-web/css/notification.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/code_mirror_keyboard_message/CodeMirrorKeyboardMessage.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/forms/common/FieldFeedback.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/forms/common/FieldBase.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/forms/input/InputLocalized.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/management_toolbar/ManagementToolbar.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-components-web/treeview/Treeview.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-taglib-clay/Toggle.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/management_toolbar/CreationMenu.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-taglib-clay/management_toolbar/ManagementToolbar.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/frontend-data-set-web/styles/main.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/yui-throttle/yui-throttle-min.js&/o/frontend-js-aui-web/aui/event-mouseenter/event-mouseenter-min.js&/o/frontend-js-aui-web/aui/plugin/plugin-min.js&/o/frontend-js-aui-web/aui/event-simulate/event-simulate-min.js&/o/frontend-js-aui-web/aui/async-queue/async-queue-min.js&/o/frontend-js-aui-web/aui/gesture-simulate/gesture-simulate-min.js&/o/frontend-js-aui-web/aui/node-event-simulate/node-event-simulate-min.js&/o/frontend-js-aui-web/aui/event-key/event-key-min.js&/o/frontend-js-aui-web/aui/node-focusmanager/node-focusmanager-min.js&/o/frontend-js-aui-web/liferay/navigation_interaction.js',
        {
          headers: {
            'if-none-match': '"/dmDZ81IxZSXVLj9YpTJ4BcJUT8="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$addon$fold$foldgutter.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$addon$hint$show-hint.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/frontend-js-codemirror-web/__liferay__/css/codemirror$lib$codemirror.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/segments-experiment-web/css/main.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/layout-js-components-web/js/components/color_picker/ColorPicker.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-js-components-web/js/components/drag_preview/DragPreview.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-js-components-web/js/components/experience_selector/ExperienceSelector.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-js-components-web/js/components/length_input/LengthInput.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-js-components-web/js/components/resizer/Resizer.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/layout-reports-web/js/components/PageAudit.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/layout-reports-web/css/main.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/o/product-navigation-applications-menu-web/css/ApplicationsMenu.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/o/analytics-reports-web/css/analytics-reports-app.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/analytics-reports-web/css/main.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-timer/aui-timer-min.js&/o/frontend-js-aui-web/aui/event-touch/event-touch-min.js&/o/frontend-js-aui-web/aui/event-move/event-move-min.js',
        {
          headers: {
            'if-none-match': '"/gdmHY6W/OoKEVg7e/9gl+080D4="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/cookie/cookie-min.js&/o/frontend-js-aui-web/liferay/session.js',
        {
          headers: {
            'if-none-match': '"/KVYHvnpd643336ffODX29hiX6U="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/liferay/navigation.js&/o/frontend-js-aui-web/liferay/store.js&/o/frontend-js-aui-web/liferay/layout.js',
        {
          headers: {
            'if-none-match': '"B5eFsmT3txeQ7kyz3AbucET5nwA="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get('http://liferay:8080/o/classic-theme/images/favicon.ico', {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      })
      sleep(0.6)

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/aui-sortable-layout/assets/skins/sam/aui-sortable-layout.css',
        {
          headers: {
            'if-none-match': '"5EYkBYIFH4w7JOHqQHj5ByMvMD4="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'http://liferay:8080/combo/?browserId=chrome&minifierType=&languageId=en_US&t=1745839512349&/o/frontend-js-aui-web/aui/dd-ddm-base/dd-ddm-base-min.js&/o/frontend-js-aui-web/aui/selector-css2/selector-css2-min.js&/o/frontend-js-aui-web/aui/dd-drag/dd-drag-min.js&/o/frontend-js-aui-web/aui/event-resize/event-resize-min.js&/o/frontend-js-aui-web/aui/dd-ddm/dd-ddm-min.js&/o/frontend-js-aui-web/aui/dd-ddm-drop/dd-ddm-drop-min.js&/o/frontend-js-aui-web/aui/dd-drop/dd-drop-min.js&/o/frontend-js-aui-web/aui/dd-drop-plugin/dd-drop-plugin-min.js&/o/frontend-js-aui-web/aui/dd-delegate/dd-delegate-min.js&/o/frontend-js-aui-web/aui/dd-proxy/dd-proxy-min.js&/o/frontend-js-aui-web/aui/aui-sortable-layout/aui-sortable-layout-min.js&/o/frontend-js-aui-web/aui/dd-constrain/dd-constrain-min.js&/o/frontend-js-aui-web/aui/dd-scroll/dd-scroll-min.js&/o/frontend-js-aui-web/liferay/layout_column.js',
        {
          headers: {
            'if-none-match': '"XgTm7/lsLMDxsqw297rBvMLPNus="',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
      sleep(1.8)
    }
  )
}
