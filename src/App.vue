<template>
  <div id="app">
    <ul>
      <router-link tag='li' v-for="router in routers" :key="router.id" :to="{name:router.name}">{{router.title}}</router-link>
    </ul>
    <tabBar></tabBar>
    <router-view/>
  </div>
</template>

<script>
import tabBar from "./components/commens/Tabbar"
export default {
  name: 'App',
  components:{
    tabBar
  },
  data(){
    return {
      routers:[
        {
          id:1,
          path:'/Home',
          title: 'Home',
          name:'Home'

        },
        {
          id:2,
          path:'/Audio',
          title: 'Audio',
          name:'Audio'

        },
        {
          id:3,
          path:'/Mine',
          title: 'Mine',
          name:'Mine'

        },
        {
          id:4,
          path:'/Broadcast',
          title: 'Broadcast',
          name:'Broadcast'

        },
        {
          id:5,
          path:'/Group',
          title: 'Group',
          name:'Group'

        },
        {
          id:6,
          path:'/Notfound',
          title: 'Notfound',
          name:'Notfound'

        },

      ]
    }
  }
}
</script>
<style lang="scss">
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
