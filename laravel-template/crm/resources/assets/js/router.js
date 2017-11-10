import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 标签列表
    {   
      path: '/', 
      component: () => import('./components/Example')
    }
  ]
})
