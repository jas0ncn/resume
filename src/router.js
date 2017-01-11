import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// route map
const routeMap = [{
  path: 'index',
  cn: '简介',
  en: 'Home'
}, {
  path: 'introductions',
  cn: '自我介绍',
  en: 'About me'
}, {
  path: 'skills',
  cn: '技能树',
  en: 'Skills'
}, {
  path: 'projects',
  cn: '项目经历',
  en: 'Projects'
}, {
  path: 'designs',
  cn: '设计稿',
  en: 'Designs'
}, {
  path: 'articles',
  cn: '个人博客',
  en: 'Articles'
}, {
  path: 'experiences',
  cn: '在校经历',
  en: 'Experiences in school'
}, {
  path: 'contacts',
  cn: '联系我~',
  en: 'Contact me'
}, {
  path: 'about',
  cn: '关于本页',
  en: 'About this site'
}]

// create router
const routes = routeMap.map((v, i) => {
  return {
    path: v.path === 'index' ? '/' : `/${v.path}`,
    alias: v.path,
    component: resolve => require([`./pages/${v.path}/index.vue`], resolve),
    meta: {
      weight: i
    }
  }
})

// redirect /index to /
routes.push({
  path: '/index',
  redirect: '/'
})

export default new VueRouter({
  routes,
  linkActiveClass: 'active-link'
})

export { routeMap }
