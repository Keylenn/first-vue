import Vue from 'vue'
import Router from 'vue-router'
import banner from '@/components/content/banner'
import fairyTale from '@/components/content/fairyTale'
import god from '@/components/content/god'


Vue.use(Router)	

export default new Router({
  routes: [
  	{path:"/",component:fairyTale},
  	{path:'/god',component:god}
  ]
})
