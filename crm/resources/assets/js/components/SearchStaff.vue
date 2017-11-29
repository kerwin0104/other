<template>
  <div>
    <ol class="breadcrumb">
      <li>组织架构管理</li>
      <li>组织架构</li>
      <li class="active">搜索员工</li>
    </ol>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-12">
            <div class="form form-inline form-filter">
              <div class="form-group">
                <label for="">姓名:</label>
                <input class="form-control" type="text">
              </div>
              <div class="form-group">
                <label for="">员工编号:</label>
                <input class="form-control" type="text">
              </div>
              <div class="form-group">
                <label for="">手机号:</label>
                <input class="form-control" type="text">
              </div>
              <div class="form-group">
                <label for="">职位:</label>
                <select id="" class="form-control" name="">
                  <option value=""></option>
                </select>
              </div>
              <div class="form-group">
                <label for="">角色:</label>
                <select id="" class="form-control" name="">
                  <option value=""></option>
                </select>
              </div>
              <a class="btn btn-primary" href="">查询</a>
            </div>
          </div>
        </div>
        <div class="row mt30">
          <div class="col-sm-12">
            财富事业部
            <div class="pull-right">
              <a href="">修改部门名称</a>
              <a href="">新增员工</a>
              <a href="">新增子部门</a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
<style>
  .form-filter {
    .form-group {
      margin-right: 40px;
    }
  }
</style>
