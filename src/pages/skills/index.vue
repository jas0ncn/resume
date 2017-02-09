<template>
  <div class="page skills">
    <h1 class="title">{{ $store.state.data.route[$route.meta.weight] }}</h1>
    <div class="pagebody">
      <div class="cardContainer">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills'
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
