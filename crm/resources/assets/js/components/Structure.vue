<template>
  <div>
    <ol class="breadcrumb">
      <li>组织架构管理</li>
      <li class="active">组织架构</li>
    </ol>
    <div class="panel panel-default">
      <div class="panel-heading clearfix">
        <div class="pull-right">
          <a class="btn btn-primary" href="#/search_staff">
            搜索员工
          </a>
          <a class="btn btn-primary" href="">
            新增一级部门
          </a>
          <a class="btn btn-primary" href="">
            批量导入员工
          </a>
          <a class="btn btn-primary" href="">
            下载员工导入模板
          </a>
        </div>
      </div>
      <div class="panel-body">
        <div class="row">
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
    name: 'Structure',
    mounted() {
    }
  }
</script>
