/**
 * All data of the website
 * In order to support multi-languages
 * (Now support Chinese and English)
 */
// import route map
import { routeMap } from '../router'

export default {
  cn: {
    website: {
      title: 'Jason'
    },
    route: routeMap.map(v => v.cn)
  },
  en: {
    website: {
      title: 'Jason'
    },
    route: routeMap.map(v => v.en)
  }
}
