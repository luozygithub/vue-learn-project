import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home/Home'
import Audio from '@/components/pages/Audio/Audio'
import Broadcast from '@/components/pages/Broadcast/Broadcast'
import Group from '@/components/pages/Group/Group'
import Mine from '@/components/pages/Mine/Mine'
import Notfound from '@/components/pages/Notfound/Notfound'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Audio',
      name: 'Audio',
      component: Audio
    },
    {
      path: '/Broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Notfound',
      name: 'Notfound',
      component: Notfound
    },
  ]
})