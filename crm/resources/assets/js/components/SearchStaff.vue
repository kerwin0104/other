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
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>员工编号</th>
                  <th>手机号</th>
                  <th>直属部门</th>
                  <th>直属部门编号</th>
                  <th>职位</th>
                  <th>角色</th>
                  <th>操作</th>
                  <th>工作日历</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="9">暂无数据</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div class="clearfix">
              <paginate
                :page-count="20"
                :page-range="1"
                :margin-pages="2"
                :click-handler="onPageChange"
                :prev-text="'<'"
                :next-text="'>'"
                :container-class="'pagination pull-right'"
                :page-class="'page-item'">
              </paginate>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Paginate from 'vuejs-paginate'
  import ModalDialog from './ModalDialog'

  export default {
    name: 'SearchStaff',
    components: { 
      Paginate,
      ModalDialog 
    },
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
