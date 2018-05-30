<template>
  <div id="app">
    <router-view v-if="$route.path === '/login'"/>
    <div v-else>
      <we-header></we-header>
      <router-view />
    </div>
  </div>
</template>

<script>
import store from './store';
import router from './routes';
import weHeader from '@/components/layouts/Header.vue';

export default {
  store,
  router,
  created() {
    console.log(this.$route);
  },
  components: {
    weHeader
  }
}
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>
