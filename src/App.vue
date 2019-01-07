<template>
  <div id="app">
    <!-- <app-header></app-header> -->
    <tabBar></tabBar>
    <router-view/>
  </div>
</template>

<script>
import tabBar from "./components/commens/Tabbar"
import appHeader from "./components/commens/Header"
export default {
  name: 'App',
  components:{
    tabBar,
    appHeader
  },
  methods: {
    // this.$emit();
  },
  
}
</script>
<style lang="scss" scoped>
  ul{
    width: 100%;
    li{
      width: 100%;
      background: rgb(252, 118, 106);
      color: white;
      margin-bottom:0.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
