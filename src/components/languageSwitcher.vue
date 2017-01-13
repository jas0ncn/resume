<template>
  <div class="container">
    <div class="selector" :class="$store.state.lang">
      <span class="langCn" @click="changeLanguage('cn')">中</span>
      <span class="langEn" @click="changeLanguage('en')">Eng</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'languageSwitcher',
  methods: {
    ...mapActions([
      'changeLanguage'
    ])
  }
}
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px 20px 0 0;

  height: 60px;

  z-index: 20;

  display: flex;
  flex-direction: column;
  justify-content: center;

  user-select: none;
  cursor: pointer;

  .selector {
    position: relative;
    background: rgba(0,0,0,.1);

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-radius: 25px;

    span {
      padding: 0 7px;
      height: 34px;
      min-width: 34px;

      color: rgba(0,0,0,.3);

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 17px;
      transition: all 300ms ease;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;

      width: 34px;
      height: 34px;
      
      background: rgba(0,0,0,.75);
      border-radius: 17px;
      transition: all 300ms ease;

      display: block;
      z-index: -1;
    }
  }

  .cn {
    .langCn {
      color: #FFF;
    }

    &:after {
      transform: translateX(0);
    }
  }

  .en {
    .langEn {
      color: #FFF;
    }

    &:after {
      width: 43px;
      transform: translateX(34px);
    }
  }
}
</style>
