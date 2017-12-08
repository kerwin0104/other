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
          <a class="btn btn-primary" href="javascript:;" @click="onOpenAddDepartment()">
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
    <modal-dialog title="新增部门" :isShow="isAddDialogShow" @ok="onAddOk" @cancel="onAddCancel">
      <input type="text" class="form-control" placeholder="请输入部门名称" v-model="addDepartment.name">
    </modal-dialog>
  </div>
</template>

<script>
  import ModalDialog from './ModalDialog'

  export default {
    name: 'Structure',
    data () {
      var data = {}
      
      data.isAddDialogShow = false

      var addDepartment = {}
      addDepartment.name = ''
      addDepartment.parentId = ''
      data.addDepartment = addDepartment  

      return data
    },
    methods: {
      onOpenAddDepartment (parentId) {
        this.addDepartment.name = ''
        this.addDepartment.parentId = parentId
        this.isAddDialogShow = true
      },
      onAddOk () {
        var addDepartment = this.addDepartment
        if ($.trim(addDepartment.name) == '') {
          return this.$root.$emit('alert', '部门名称不能为空')
        }
        this.isAddDialogShow = false
        $.ajax({
          url: urls.structureAdd,
          data: this.addDepartment
        }).done(data => {
          console.log(data)
        })
      },
      onAddCancel () {
        this.isAddDialogShow = false
      }
    },
    mounted() {
    },
    components: {
      ModalDialog 
    }
  }
</script>
