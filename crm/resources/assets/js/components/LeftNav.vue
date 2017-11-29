<template>
  <div>
    <ul class="nav nav-sidebar">
      <li class="open">
        <a href="#">
          组织架构管理
          <i class="glyphicon glyphicon-menu-down pull-right"></i>
        </a>
        <ul class="nav nav-submenu">
          <router-link tag="li" exact-active-class="active" to="/">
            <a href="javascript:;">组织架构</a>
          </router-link>
          <router-link tag="li" exact-active-class="active" to="/position_manage">
            <a href="javascript:;">职位管理</a>
          </router-link>
          <router-link tag="li" exact-active-class="active" to="/role_manage">
            <a href="javascript:;">角色管理</a>
          </router-link>
        </ul>
      </li>
    </ul>
    <ul class="nav nav-sidebar">
      <li>
        <a href="#">客户管理</a>
        <ul class="nav nav-submenu">
          <router-link tag="li" exact-active-class="active" to="/search_clientele">
            <a href="javascript:;">客户列表</a>
          </router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SearchStaff',
    mounted() {
      console.log('Component mounted.')
    }
  }
</script>
