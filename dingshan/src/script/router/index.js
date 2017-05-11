

/***********配  路  由**************/

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/script/components/Index'
import Board from '@/script/components/Board'
import Server from '@/script/components/Server'
import Shop from '@/script/components/Shop'
import News from '@/script/components/News'
import Mine from '@/script/components/Mine'
import Ssk from '@/script/components/Ssk'
import Fenlei from '@/script/components/Fenlei'
import Xqy from '@/script/components/Xqy'
import Login from '@/script/components/Login'
import Register from '@/script/components/Register'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index,
      redirect:'board',   //开始路由borad
      children:[
      	{
	      	path:'board',
	      	component:Board
      	},
      	{
      		path:'server',
      		component:Server
      	},
      	{
      		path:'shop',
      		component:Shop
      	},
      	{
      		path:'news',
      		component:News
      	},
      	{
      		path:'mine',
      		component:Mine
      	},
        {
          path:'ssk',
          component:Ssk
        },
        {
          path:'fenlei',
          component:Fenlei
        },
        {
          path:'xqy',
          component:Xqy
        }
      ]
    },
    {
      path:'/login',
      component:Login

    },
    {
      path:'/register',
      component:Register
    }
  ]
})
