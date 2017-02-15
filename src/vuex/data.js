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
        icon: '/static/svgs/info/birthday.svg',
        key: '生日',
        value: '1996.2.11'
      }, {
        icon: '/static/svgs/info/education.svg',
        key: '教育经历',
        value: '深圳大学 · 通信工程'
      }, {
        icon: '/static/svgs/info/nowCity.svg',
        key: '居住地',
        value: '广东 · 深圳'
      }, {
        icon: '/static/svgs/info/email.svg',
        key: '邮箱',
        value: 'jason@iszu.cn'
      }, {
        icon: '/static/svgs/info/phone.svg',
        key: '手机号',
        value: '+86 13128931074'
      }],
      skills: [{
        value: 'HTML',
        logo: '/static/images/logos/html.png'
      }, {
        value: 'CSS',
        logo: '/static/images/logos/css.png'
      }, {
        value: 'JavaScript',
        logo: '/static/images/logos/javascript.png',
        style: {
          background: 'linear-gradient(to bottom, #ffeb0e , #efdd1b)',
          'border-color': '#ffeb0e'
        }
      }, {
        value: 'Node.js',
        logo: '/static/images/logos/nodejs.png',
        style: {
          background: 'linear-gradient(to bottom, #8ccf00 , #80bd01)',
          'border-color': '#8ccf00'
        }
      }, {
        value: 'PHP',
        logo: '/static/images/logos/php.png',
        style: {
          background: 'linear-gradient(to bottom, #8093d1 , #7b8ec9)',
          'border-color': '#8093d1'
        }
      }, {
        value: 'Python',
        logo: '/static/images/logos/python.png'
      }, {
        value: 'Photoshop',
        logo: '/static/images/logos/photoshop.png',
        style: {
          background: '#001d26',
          border: '5px solid #00c8ff'
        }
      }, {
        value: 'Sketch',
        logo: '/static/images/logos/sketch.png',
        style: {
          background: 'linear-gradient(to bottom, #1d0f4f , #130a33)',
          'border-color': '#1d0f4f'
        }
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
      }],
      skills: [{
        value: 'HTML',
        logo: '/static/images/logos/html.png'
      }, {
        value: 'CSS',
        logo: '/static/images/logos/css.png'
      }, {
        value: 'JavaScript',
        logo: '/static/images/logos/javascript.png',
        style: {
          background: 'linear-gradient(to bottom, #ffeb0e , #efdd1b)',
          'border-color': '#ffeb0e'
        }
      }, {
        value: 'Node.js',
        logo: '/static/images/logos/nodejs.png',
        style: {
          background: 'linear-gradient(to bottom, #8ccf00 , #80bd01)',
          'border-color': '#8ccf00'
        }
      }, {
        value: 'PHP',
        logo: '/static/images/logos/php.png',
        style: {
          background: 'linear-gradient(to bottom, #8093d1 , #7b8ec9)',
          'border-color': '#8093d1'
        }
      }, {
        value: 'Python',
        logo: '/static/images/logos/python.png'
      }, {
        value: 'Photoshop',
        logo: '/static/images/logos/photoshop.png',
        style: {
          background: '#001d26',
          border: '5px solid #00c8ff'
        }
      }, {
        value: 'Sketch',
        logo: '/static/images/logos/sketch.png',
        style: {
          background: 'linear-gradient(to bottom, #1d0f4f , #130a33)',
          'border-color': '#1d0f4f'
        }
      }]
    },
    route: routeMap.map(v => v.en)
  }
}
