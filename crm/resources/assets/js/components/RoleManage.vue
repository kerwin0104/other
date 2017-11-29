<template>
  <div>
    <ol class="breadcrumb">
      <li>组织架构管理</li>
      <li>组织架构</li>
      <li class="active">角色管理</li>
    </ol>
    <div class="panel panel-default">
      <div class="panel-heading clearfix">
        <div class="pull-right">
          <a class="btn btn-primary" href="">
            新增角色
          </a>
        </div>
        <div class="form form-inline">
          <div class="form-group">
            <label for="">
              角色名称：
            </label>
            <input class="form-control" type="">
            <a class="btn btn-default" href="">查询</a>
          </div>
        </div>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>
                角色名称
              </th>
              <th>
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                测试
              </td>
              <td>
                <a href="">
                  设置权限
                </a>
                <a href="">
                  修改
                </a>
                <a href="">
                  删除
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RoleManage',
    mounted() {
      console.log('Component mounted.')
    }
  }
</script>
<style>
  .form-filter {
    .form-group {
      margin-right: 40px;
    }
  }
</style>
