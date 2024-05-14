import type {RouterConfig} from '@nuxt/schema'
import {RouterPaths} from "~/types";
import {generateDefaultRouterMeta} from "~/utils/router";
// https://router.vuejs.org/api/interfaces/routeroptions.html

export default <RouterConfig> {
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
  routes: (_routes) => {
    // console.log("RouterConfig", _routes);
    return [
      {
        name: RouterPaths.HOME_PAGE,
        path: '/',
        component: () => import('~/pages/home/index.vue'),
        meta: generateDefaultRouterMeta(),
      },
    ]
  },
}
