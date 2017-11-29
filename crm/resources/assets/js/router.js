import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {   
      path: '/', 
      component: () => import('./components/Structure')
    },
    {   
      path: '/search_staff', 
      component: () => import('./components/SearchStaff')
    },
    {   
      path: '/position_manage', 
      component: () => import('./components/PositionManage')
    },
    {   
      path: '/role_manage', 
      component: () => import('./components/RoleManage')
    },
    {   
      path: '/search_clientele', 
      component: () => import('./components/SearchClientele')
    } 
  ]
})
