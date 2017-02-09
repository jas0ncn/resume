<template>
  <div class="page articles">
    <p>{{ $store.state.data.route[$route.meta.weight] }}</p>
  </div>
</template>

<script>
export default {
  name: 'articles'
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
