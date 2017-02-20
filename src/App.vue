<template>
  <div class="entry" @touchmove="touchmove" @touchend="touchend">
    <navigator :id="currentPage" @linkTo="linkTo" />
    <language-switcher />
    <index
      id="0"
      :class="{
        currentPage: currentPage === 0,
        prePage: currentPage > 0,
        nextPage: currentPage < 0
      }"
    />
    <introductions
      id="1"
      :class="{
        currentPage: currentPage === 1,
        prePage: currentPage > 1,
        nextPage: currentPage < 1
      }"
    />
    <skills
      id="2"
      :class="{
        currentPage: currentPage === 2,
        prePage: currentPage > 2,
        nextPage: currentPage < 2
      }"
    />
    <projects
      id="3"
      :class="{
        currentPage: currentPage === 3,
        prePage: currentPage > 3,
        nextPage: currentPage < 3
      }"
    />
    <designs
      id="4"
      :class="{
        currentPage: currentPage === 4,
        prePage: currentPage > 4,
        nextPage: currentPage < 4
      }"
    />
    <articles
      id="5"
      :class="{
        currentPage: currentPage === 5,
        prePage: currentPage > 5,
        nextPage: currentPage < 5
      }"
    />
  </div>
</template>

<script>
/**
 * import components
 **/
import navigator from './components/navigator'
import languageSwitcher from './components/languageSwitcher'
/**
 * import router for generator a route map
 **/
import route from './router'
/**
 * import pages
 **/
import index from './pages/index'
import introductions from './pages/introductions'
import skills from './pages/skills'
import projects from './pages/projects'
import designs from './pages/designs'
import articles from './pages/articles'

export default {
  name: 'entry',
  data: () => ({
    transitionName: 'slideUpIn',
    currentPage: 0,
    routeMap: [],
    touchStartX: 0,
    outdatedbrowser: false
  }),
  beforeMount () {
    this.routeMap = route.map((v, i) => {
      v.id = i
      return v
    })
  },
  mounted () {
    // scrolling listener
    window.onmousewheel = e => {
      e.stopPropagation()
      e.preventDefault()

      if (this.scrollingLock) return

      if (e.wheelDelta < -40) {
        this.scrollingLock = true

        setTimeout(() => {
          this.scrollingLock = false
        }, 700)

        if (this.currentPage === this.routeMap.length - 1) return
        else this.currentPage++
      } else if (e.wheelDelta > 40) {
        this.scrollingLock = true

        setTimeout(() => {
          this.scrollingLock = false
        }, 700)

        if (this.currentPage === 0) return
        else this.currentPage--
      }
    }
  },
  methods: {
    linkTo (id) {
      this.currentPage = id
    },
    touchmove (e) {
      e.preventDefault()
      if (this.touchStartX !== 0) return
      this.touchStartX = e.changedTouches[0].screenY
    },
    touchend (e) {
      e.preventDefault()

      if (this.touchStartX === 0) return

      const touchEndX = e.changedTouches[0].screenY

      if (this.scrollingLock) return

      if (this.touchStartX - touchEndX > 80) {
        this.scrollingLock = true

        setTimeout(() => {
          this.scrollingLock = false
        }, 700)

        if (this.currentPage === this.routeMap.length - 1) return
        else this.currentPage++
      } else if (this.touchStartX - touchEndX < -80) {
        this.scrollingLock = true

        setTimeout(() => {
          this.scrollingLock = false
        }, 700)

        if (this.currentPage === 0) return
        else this.currentPage--
      }

      this.touchStartX = 0
    }
  },
  components: {
    navigator,
    languageSwitcher,
    index,
    introductions,
    skills,
    projects,
    designs,
    articles
  }
}
</script>

<style lang="less">
@import './assets/less/_reset.less';
@import './assets/less/common.less';
@import './assets/less/entry.less';
@import './assets/less/animations.less';
</style>
