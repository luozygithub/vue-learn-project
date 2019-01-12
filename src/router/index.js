import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home/Home'
import Audio from '@/components/pages/Audio/Audio'
import Mine from '@/components/pages/Mine/Mine'
import Notfound from '@/components/pages/Notfound/Notfound'
import HomeCity from "@/components/commens/City"
import MovieDetail from "@/components/pages/MovieDetail/MovieDetail"
import Login from "@/components/commens/Login"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // children:[
      //   {path:'MovieDetail',component:MovieDetail,name:"MovieDetail"},
      //   {path:'city',component:HomeCity,name:'City'}
      // ]
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      
    },
    {
      path: '*',
      name: 'Notfound',
      component: Notfound
    },
    {
      path:'/Home/City',
      name:'HomeCity',
      component: HomeCity
    },
    {
      path:'/moviedetail',
      name:'MovieDetail',
      component: MovieDetail
    },
    {
      path:'/login',
      name:'Login',
      component: Login
    }
  ]
})
