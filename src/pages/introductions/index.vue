<template>
  <div class="page introductions">
    <h1 class="title">{{ $store.state.data.route[id] }}</h1>
    <div class="pagebody">
      <div class="selfIntroduction">
        <p>{{ $store.state.data.website.description }}</p>
      </div>
      <div class="selfInformations">
        <div class="infoRow" v-for="index in Array(Math.ceil($store.state.data.website.infomations.length / 3)).fill(0).map((v, i) => i)">
          <div class="placeholder"></div>
          <div
            class="infoItem"
            v-for="(v, i) in $store.state.data.website.infomations"
            v-if="i >= index * 3 && i < (index + 1) * 3">
            <img :src="v.icon" :alt="v.key" :title="v.key">
            <p>{{ v.value }}</p>
          </div>
          <div class="placeholder"></div>
        </div>
        <div class="infoRow infoCol">
          <div
            class="infoItem"
            v-for="(v, i) in $store.state.data.website.infomations">
            <img :src="v.icon">
            <p>{{ v.key + '：' + v.value }}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introductions',
  props: ['id']
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
