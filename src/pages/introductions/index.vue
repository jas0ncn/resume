<template>
  <div class="page introductions">
    <h1 class="title">{{ $store.state.data.route[$route.meta.weight] }}</h1>
  </div>
</template>

<script>
export default {
  name: 'introductions'
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
