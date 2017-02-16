<template>
  <div class="page experiences">
    <p>{{ $store.state.data.route[id] }}</p>
  </div>
</template>

<script>
export default {
  name: 'experiences',
  props: ['id']
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
