<template>
  <div class="page projects">
    <p>{{ $store.state.data.route[$route.meta.weight] }}</p>
  </div>
</template>

<script>
export default {
  name: 'projects'
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
