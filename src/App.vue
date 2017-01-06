<template>
  <div class="page entry">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'entry'
}
</script>

<style lang="less">
@import './assets/less/_reset.less';
@import './assets/less/common.less';
@import './assets/less/pages/entry.less';
</style>
