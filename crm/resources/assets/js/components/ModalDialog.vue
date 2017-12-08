<template>
  <div :id="id" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" @click="onCancel"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">
            {{title}}
          </h4>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="onCancel" v-show="!isHideCancel">取消</button>
          <button type="button" class="btn btn-primary" @click="onOk">确定</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</template>

<script>
  var gid = 0;
  export default {
    name: 'Dialog',
    props: [
      'isShow',
      'title',
      'isHideCancel'
    ],
    data () { 
      var data = {}
      data.id = `modal-id-${gid++}`;
      return data;
    },
    methods: {
      onCancel () {
        this.$emit('cancel')
      },
      onOk () {
        this.$emit('ok')
      }
    },
    mounted() {
      $(`#${this.id}`).modal(this.isShow ? 'show' : 'hide')
    },
    watch: {
      isShow (val, oldVal) {
        $(`#${this.id}`).modal(val ? 'show' : 'hide')
      }
    }
  }
</script>
