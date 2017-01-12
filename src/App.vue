<template>
  <div class="page entry">
    <navigator />
    <language-switcher />
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import navigator from './components/navigator'
import languageSwitcher from './components/languageSwitcher'

export default {
  name: 'entry',
  data: () => ({
    transitionName: 'slideUpIn'
  }),
  watch: {
    '$route' (to, from) {
      this.transitionName = from.meta.weight && to.meta.weight < from.meta.weight ? 'slideDownIn' : 'slideUpIn'
    }
  },
  components: {
    navigator,
    languageSwitcher
  }
}
</script>

<style lang="less">
@import './assets/less/_reset.less';
@import './assets/less/common.less';
@import './assets/less/entry.less';
@import './assets/less/animations.less';
</style>
