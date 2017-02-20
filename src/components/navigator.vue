<template>
  <div class="container">
    <div class="item" v-for="(route, i) in routeMap">
      <a
        class="link"
        :class="{
          'active-link': id === i
        }"
        @click="linkTo(i)"
      >
        <img :src="`https://cdn.ijason.cc/static/svgs/navigator/${route.path}.svg`">
      </a>
      <span class="description">{{ route[$store.state.lang] }}</span>
    </div>
  </div>
</template>

<script>
import routeMap from '../router'

export default {
  name: 'navigator',
  props: ['id'],
  data: () => ({
    routeMap,
    scrollingLock: false
  }),
  methods: {
    linkTo (id) {
      this.$emit('linkTo', id)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 40px;
  height: 100%;
  width: 200px;

  pointer-events: none;
  z-index: 30;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    position: relative;
    margin: 20px 0;
    pointer-events: auto;

    .link {
      position: absolute;
      right: 0;
      top: 0;

      width: 12px;
      height: 12px;

      background: rgba(0,0,0,.7);

      transition: all 300ms ease;
      border-radius: 50%;
      opacity: .1;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 8px;
        height: 8px;

        opacity: 0;
        transition: all 300ms ease;
      }
    }

    .description {
      position: absolute;
      right: 40px;
      top: -6px;
      padding: 5px;
      padding-left: 10px;
      
      color: #FFF;
      font-size: 14px;
      line-height: 14px;
      font-weight: bold;
      background: rgba(0,0,0,.7);
      border-radius: 3px 0 0 3px;

      transform: translateX(50px);
      opacity: 0;
      transition: all 600ms ease;

      user-select: none;
      cursor: pointer;

      &:after {
        position: absolute;
        right: -24px;
        top: 0;

        width: 0;
        height: 0;

        border-left: 12px solid rgba(0,0,0,.7);
        border-right: 12px solid transparent;
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;

        content: '';
        display: block
      }
    }

    .active-link {
      transform: scale(3);
      opacity: 1;

      img {
        opacity: 1;
      }
    }

    &:hover {
      .link {
        transform: scale(3);
        opacity: 1;

        img {
          opacity: 1;
        }
      }

      .description {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
}

/* adapt mobile browser */
@media (max-width: 430px) {
  .container {
    display: none;
  }
}
</style>
