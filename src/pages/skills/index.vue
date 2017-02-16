<template>
  <div class="page skills">
    <h1 class="title">{{ $store.state.data.route[id] }}</h1>
    <div class="pagebody">
      <div class="cardContainer">
        <div
          class="card"
          v-for="skill in $store.state.data.website.skills"
          :style="skill.style ? skill.style : ''"
          :data-desc="skill.value">
          <img :src="skill.logo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
  props: ['id']
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
