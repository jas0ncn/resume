<template>
  <div class="page articles">
    <p>{{ $store.state.data.route[id] }}</p>
  </div>
</template>

<script>
export default {
  name: 'articles',
  props: ['id']
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
