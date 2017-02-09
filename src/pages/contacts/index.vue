<template>
  <div class="page contacts">
    <p>{{ $store.state.data.route[$route.meta.weight] }}</p>
  </div>
</template>

<script>
export default {
  name: 'contacts'
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
