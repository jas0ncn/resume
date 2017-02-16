<template>
  <div class="page contacts">
    <p>{{ $store.state.data.route[id] }}</p>
  </div>
</template>

<script>
export default {
  name: 'contacts',
  props: ['id']
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
