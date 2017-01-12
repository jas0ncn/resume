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
      title: 'Jason',
      name: '陈俊毅',
      shortDescription: '大三学生，前端工程师进阶中...'
    },
    route: routeMap.map(v => v.cn)
  },
  en: {
    website: {
      title: 'Jason',
      name: 'Jason Chen',
      shortDescription: 'A student, front-end developer...'
    },
    route: routeMap.map(v => v.en)
  }
}
