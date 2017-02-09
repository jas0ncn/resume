<template>
  <div class="page about">
    <p>{{ $store.state.data.route[$route.meta.weight] }}</p>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
