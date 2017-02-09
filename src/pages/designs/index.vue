<template>
  <div class="page designs">
    <p>{{ $store.state.data.route[$route.meta.weight] }}</p>
  </div>
</template>

<script>
export default {
  name: 'designs'
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
