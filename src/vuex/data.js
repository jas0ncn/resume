/**
 * All data of the website
 * In order to support multi-languages
 * (Now support Chinese and English)
 */
// import route map
import routeMap from '../router'

const base = {
  title: 'Jason 的简历',
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
  }],
  projects: [{
    image: '/static/images/projects/goszu.jpg',
    desc: '一个为深圳大学学生开发的网址导航，收集了大部分学生常用或者难找的网站。前端使用 Vue.js 开发，后端使用 PHP 和 MySQL 搭建，用户首次访问即缓存网站数据在 LocalStorage 里面。',
    url: 'http://www.goszu.com/',
    qrcode: '/static/images/projects/goszu_qrcode.png'
  }, {
    image: '/static/images/projects/powerusage.jpg',
    desc: '这是一个宿舍电费查询工具，每天会自动抓取当天剩余可用电量，并可根据最近一周使用情况计算出剩余可用的天数。同时，在电费不足的时候，会自动通过微信公众号发送模板消息提醒用户。',
    url: 'http://www.wacxt.cn/powerusage/',
    qrcode: '/static/images/projects/powerusage_qrcode.png'
  }, {
    image: '/static/images/projects/szucheduleapp.jpg',
    desc: '一款为深圳大学学生开发的课表查询 App，可以自动同步教务处网站上的课程信息，随时随地查询课程表及课程详细信息。是一款使用 Vue.js 三件套和 Cordove 开发的一款 Hybrid App。',
    url: 'https://github.com/heyszu/szuschedule-app',
    qrcode: '/static/images/projects/szucheduleapp_qrcode.png'
  }],
  projectRefer: '在我的 Github 查看更多项目',
  designs: {
    jingmei: {
      background: `#859398`,
      mainImage: '/static/images/designs/mockup_jingmei.png',
      title: '静魅',
      subTitle: '魅族 FlymeOS 主题',
      desc: '这是 2014 年我参加魅族主题大赛的参赛作品，设计风格采用了无棱角图标，搭配饱和度较低的配色，与山水背景衬托出一种静和清爽的感觉。',
      link: 'http://www.ui.cn/detail/26910.html',
      linkRefer: '去 ui.cn 查看详情',
      posi: 'left'
    },
    mi4Mockup: {
      background: '#222',
      mainImage: '/static/images/designs/mockup_mi4.png',
      title: '小米 4 模型',
      subTitle: '手机展示模型 Psd',
      desc: '临摹小米官网的小米手机4模型。全矢量绘制，屏幕部分采用智能对象，可嵌入展示图片。',
      link: 'http://www.ui.cn/detail/21758.html',
      linkRefer: '去 ui.cn 查看详情',
      posi: 'left'
    },
    logos: {
      background: '#F8F8F8',
      mainImage: '/static/images/designs/logos.png',
      title: 'LOGO',
      subTitle: '',
      desc: '为一些公众号的和网站所设计的Logo',
      link: '',
      linkRefer: '',
      posi: 'left'
    }
  },
  articles: [{
    title: '【翻译】2017 年前端工程师该学点什么',
    thumb: '今天看百度的 FEX 技术周刊，看到了一篇文章《What to learn in 2017 if you’re a frontend developer》发现写的很不错！也提供了很多干货，就当做练习阅读能力，便把这篇文章翻译成中文。',
    url: 'https://blog.ijason.cc/2017/01/03/what-to-learn-in-2017-if-youre-a-frontend-developer.html',
    time: '2017-01-03'
  }, {
    title: 'JavaScript 的 this 指向',
    thumb: '学一个语言，其实不仅仅是要学会它的语法，其实最重要的还是学会一个语言的思想。在我看来，JavaScript 原因的精髓，就是动态。JavaScript 是著名的弱类型动态语言，动态语言的特性也为 JavaScript 增添了几分趣味性。',
    url: 'https://blog.ijason.cc/2016/10/30/javascript-this.html',
    time: '2016-10-30'
  }, {
    title: 'yarn 尝鲜',
    thumb: '看微博的时候无意中看到某个大神转了一条微博说 Facebook 发布了一个新的 JavaScript 包管理工具，一开始没怎么在意，后来在知乎看到了关于 yarn 的问题，就好奇的点了进去，决定来尝鲜一下。',
    url: 'https://blog.ijason.cc/2016/10/12/have-a-taste-of-yarn.html',
    time: '2016-10-12'
  }, {
    title: '你好，Vue2',
    thumb: '用 Vue 也有 9 个月了，还记得当时第一次见到双向绑定的欣喜~Vue2 也在万众期待中发布了，基于官方的 Migration from Vue 1.x 来细数一下 Vue2 那些很可能会影响到我们使用的细节。',
    url: 'https://blog.ijason.cc/2016/10/01/hey-new-vue.html',
    time: '2016-10-01'
  }, {
    title: 'ECMAScript6 学习笔记',
    thumb: '接触 ES6 也有段时间了，最先的感觉可能是模块化、箭头函数这些的，慢慢也觉得是应该认真的看一看 ES6 本身，在学习的过程中，也就有了这篇文章，所以这篇文章更重要的是提醒我自己关于一些 ES6 的知识点，而不是完整的学习 ES6。',
    url: 'https://blog.ijason.cc/2016/08/09/es6-note.html',
    time: '2016-06-16'
  }, {
    title: 'JSONP新思考：CSST',
    thumb: '前天早上在逛尤大的微博（@尤小右）的时候，看到他转了一条微博，关于 csst，第一次看到这个词，好奇的点进了 Github 的链接。实践了一把，由此有了这篇博文。',
    url: 'https://blog.ijason.cc/2016/05/10/new-idea-for-jsonp-csst.html',
    time: '2016-05-10'
  }]
}

const en = {
  title: `Jason's resume`,
  name: 'Jason Chen',
  shortDescription: 'A student, front-end developer...',
  description: `I started learning front-end development and participating in development and maintenance of a number of WeChat public accounts in school when I was a freshman at university. At the same time, I began to follow the open source community and the front-end ecosystem closely.`,
  infomations: [{
    icon: '/static/svgs/info/birthday.svg',
    key: 'Birthday',
    value: '1996.2.11'
  }, {
    icon: '/static/svgs/info/education.svg',
    key: 'Education',
    value: 'Communication Engineering · Shenzhen University'
  }, {
    icon: '/static/svgs/info/nowCity.svg',
    key: 'Live in',
    value: 'Shenzhen, Guangdong, RPC'
  }, {
    icon: '/static/svgs/info/email.svg',
    key: 'Email',
    value: 'jason@iszu.cn'
  }, {
    icon: '/static/svgs/info/phone.svg',
    key: 'Phone Number',
    value: '+86 13128931074'
  }],
  projects: [{
    image: '/static/images/projects/goszu.jpg',
    desc: 'A website navigation for students of Shenzhen University. It collects many commonly used websites and some websites hard to find. This site is powered by Vue.js and Node.js for backend.',
    url: 'http://www.goszu.com/',
    qrcode: '/static/images/projects/goszu_qrcode.png'
  }, {
    image: '/static/images/projects/powerusage.jpg',
    desc: `It's a website that can query the remaining electricity of dormitory, predict available days based on your usage, and also can push low-power-warning via Wechat.`,
    url: 'http://www.wacxt.cn/powerusage/',
    qrcode: '/static/images/projects/powerusage_qrcode.png'
  }, {
    image: '/static/images/projects/szucheduleapp.jpg',
    desc: `A app can auto sync class schedule from server. You can inquire your class infomations everywhere. It's based on Cordova and Vue.js and Node.js for backend. `,
    url: 'https://github.com/heyszu/szuschedule-app',
    qrcode: '/static/images/projects/szucheduleapp_qrcode.png'
  }],
  projectRefer: 'See more projects in my Github',
  designs: {
    jingmei: {
      background: `#859398`,
      mainImage: '/static/images/designs/mockup_jingmei.png',
      title: 'Silence',
      subTitle: 'Theme for FlymeOS',
      desc: 'This is a theme designing for MEIZU Flyme Theme Competition 2014. No edges and corners icons, with low saturation color and the wallpaper to bring out a quiet feeling.',
      link: 'http://www.ui.cn/detail/26910.html',
      linkRefer: 'See detail in ui.cn',
      posi: 'left'
    },
    mi4Mockup: {
      background: '#222',
      mainImage: '/static/images/designs/mockup_mi4.png',
      title: 'Mi4 Mockup',
      subTitle: 'Phone mockup psd',
      desc: 'Copy painting from offcial website of Xiaomi 4. Fully vector painting, the screen use intelligent object, can be embedded in the display picture.',
      link: 'http://www.ui.cn/detail/21758.html',
      linkRefer: 'See detail in ui.cn',
      posi: 'left'
    },
    logos: {
      background: '#F8F8F8',
      mainImage: '/static/images/designs/logos.png',
      title: 'Logos',
      subTitle: '',
      desc: 'Design for some websites and Wechat Public Accounts.',
      link: '',
      linkRefer: '去 ui.cn 查看详情',
      posi: 'left'
    }
  }
}

export default {
  cn: {
    website: base,
    route: routeMap.map(v => v.en)
  },
  en: {
    website: Object.assign({}, base, en),
    route: routeMap.map(v => v.en)
  }
}
