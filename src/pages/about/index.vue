<template>
  <div class="page about">
    <p>{{ $store.state.data.route[id] }}</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: ['id']
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
