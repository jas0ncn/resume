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
      shortDescription: '大三学生，前端工程师进阶中...',
      description: '大一开始我就负责学校多个微信公众号的开发和运营，并开始接触、关注开源社区和前端生态系统。',
      infomations: [{
        icon: 'birthday.svg',
        key: '生日',
        value: '1996.2.11'
      }, {
        icon: 'education.svg',
        key: '教育经历',
        value: '深圳大学 · 通信工程'
      }, {
        icon: 'nowCity.svg',
        key: '居住地',
        value: '广东 · 深圳'
      }, {
        icon: 'email.svg',
        key: '邮箱',
        value: 'jason@iszu.cn'
      }, {
        icon: 'phone.svg',
        key: '手机号',
        value: '+86 13128931074'
      }]
    },
    route: routeMap.map(v => v.cn)
  },
  en: {
    website: {
      title: 'Jason',
      name: 'Jason Chen',
      shortDescription: 'A student, front-end developer...',
      description: `I started learning front-end development and participating in development and maintenance of a number of WeChat public accounts in school when I was a freshman at university. At the same time, I began to follow the open source community and the front-end ecosystem closely.`,
      infomations: [{
        icon: 'birthday.svg',
        key: 'Birthday',
        value: '1996.2.11'
      }, {
        icon: 'education.svg',
        key: 'Education',
        value: 'Communication Engineering · Shenzhen University'
      }, {
        icon: 'nowCity.svg',
        key: 'Live in',
        value: 'Shenzhen, Guangdong, RPC'
      }, {
        icon: 'email.svg',
        key: 'Email',
        value: 'jason@iszu.cn'
      }, {
        icon: 'phone.svg',
        key: 'Phone Number',
        value: '+86 13128931074'
      }]
    },
    route: routeMap.map(v => v.en)
  }
}
