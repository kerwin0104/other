<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            业务支持系统管理后台
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <left-nav></left-nav>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view />
        </div>
      </div>
    </div>

    <modal-dialog title="提示" :isShow="isAlertShow" :isHideCancel="true" @ok="onAlertOk" @cancel="onAlertCancel" class="alert-dialog">
      <div>
        {{alertContent }}
      </div>
    </modal-dialog>
  </div>
</template>

<script>
  import urls from './urls'
  import LeftNav from './components/LeftNav'
  import ModalDialog from './components/ModalDialog'

  window.urls = urls

  export default {
    name: 'App',
    data () {
      var data = {}
      data.isAlertShow = false
      data.alertContent = ''
      return data
    },
    mounted() {
      this.$root.$on('alert', content => {
        this.alertContent = content
        this.isAlertShow = true
        Vue.nextTick(() => {
          $('.modal-backdrop:last-child').addClass('alert-modal')
        })
      })
    },
    components: {
      LeftNav,
      ModalDialog 
    },
    methods: {
      onAlertOk () {
        this.isAlertShow = false
        this.alertContent = ''
      },
      onAlertCancel () {
        this.isAlertShow = false
        this.alertContent = ''
      }
    }
  }
</script>

<style lang="less">
/*
 * Base structure
 */

/* Move down content because we have a fixed navbar that is 50px tall */
body {
  padding-top: 50px;
}


/*
 * Global add-ons
 */

.sub-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

/*
 * Top navigation
 * Hide default border to remove 1px line.
 */
.navbar-fixed-top {
  border: 0;
}

/*
 * Sidebar
 */

/* Hide for mobile, show later */
.sidebar {
  display: none;
}
@media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
}

/* Sidebar navigation */
.nav-sidebar {
  margin-right: -21px; /* 20px padding + 1px border */
  margin-bottom: 20px;
  margin-left: -20px;
}
.nav-sidebar > li > a {
  padding-right: 20px;
  padding-left: 20px;
}
.nav-sidebar > .active > a,
.nav-sidebar > .active > a:hover,
.nav-sidebar > .active > a:focus {
  color: #fff;
  background-color: #428bca;
}


/*
 * Main content
 */

.main {
  padding: 20px;
}
@media (min-width: 768px) {
  .main {
    padding-right: 40px;
    padding-left: 40px;
  }
}
.main .page-header {
  margin-top: 0;
}


/*
 * Placeholder dashboard ideas
 */

.placeholders {
  margin-bottom: 30px;
  text-align: center;
}
.placeholders h4 {
  margin-bottom: 0;
}
.placeholder {
  margin-bottom: 20px;
}
.placeholder img {
  display: inline-block;
  border-radius: 50%;
}



.nav-submenu {
  & > li > a {
    padding-left: 40px;
    &:hover {
      background-color: #428bca;
      color: #fff;
    }
  }
  a:hover {
    opacity: .6;
  }
  .active > a:hover {
    opacity: 1;
  }
  .active > a,
  .active > a:hover,
  .active > a:focus,
  .active > a:active {
    background-color: #428bca;
    color: #fff;
  }
}

.mt30 {
  margin-top: 30px;
}
.alert-modal{
  z-index: 99999;
}
.alert-dialog {
  z-index: 100000;
}
</style>
