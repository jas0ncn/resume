<template>
  <div class="page experiences">
    <p>{{ $store.state.data.route[$route.meta.weight] }}</p>
  </div>
</template>

<script>
export default {
  name: 'experiences'
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
