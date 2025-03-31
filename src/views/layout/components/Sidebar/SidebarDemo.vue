<template>
  <div class="sidebar-demo-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-openeds="defaultOpeneds"
      :default-active="defaultActive"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleOpen"
    >
      <sidebar-item
        v-for="child in configList.childs"
        :key="child.name"
        :item="child"
        :route="true"
        :base-path="child.path"
        :type="configList.mapmode"
        :is-demo-sidebar="true"
      ></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import SidebarItem from "./SidebarItem";

export default {
  components: {
    SidebarItem
  },
  props: {
    configList: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      defaultOpeneds: [],
      defaultActive: ''
    }
  },
  mounted () {
    let keys = this.$route.path.split('/');
    keys = keys.slice(3, keys.length);
    this.defaultOpeneds = keys;
    this.defaultActive = keys[keys.length - 1];
  },
  watch: {
    "$route.path" () {
      let anchors = location.href.split('#');
      if (!anchors || anchors.length < 2) return;

      // /demo/leaflet/client-view/vectortile/mapgisstyle
      let hrefs = anchors[1].split('/')
      if (hrefs.length < 4) return;

      let routers = hrefs.slice(3)
      let active = routers.splice(routers.length - 1)
      if (active.length > 0) active = active[0]
      else active = 'undefined'

      this.defaultOpeneds = routers;
      this.defaultActive = active;
    }
  },
  methods: {
    handleSelect(key) {
      let se = key;
      return se;
    },
    handleOpen (key,indexPath) {
      //modify 20221606 在示例详情页面，要求不跳转回示例列表页面
      // let href = window.location.href; // .split("/");
      // let newHref = href.replace('/demo', '/gallery');
      // const mapmode = this.$route.params.mapmode;
      // const file = this.$route.params.file;
      // const first = this.$route.params.first;
      // const second = this.$route.params.second;
      // let match,matchIndex,baseUrl;
      // if (this.$route.params.hasOwnProperty("second")){
      //   if (key === second){
      //     baseUrl = href.replace(file,"");
      //   } else {
      //     match = `/gallery/${mapmode}`;
      //     matchIndex = newHref.indexOf(match);
      //     baseUrl = newHref.slice(0, matchIndex + match.length);
      //     window.location.href = baseUrl + `#${indexPath[0]}` +`#${key}`;
      //   }
      // } else {
      //   match = `/gallery/${mapmode}`;
      //   matchIndex = newHref.indexOf(match);
      //   baseUrl = newHref.slice(0, matchIndex + match.length);
      //   window.location.href = baseUrl + `#${key}`;
      // }
      return key;
    }
  }
};
</script>

<style lang="scss">
.sidebar-demo-wrapper {
    .el-menu {
        background: #F8F8F8;
        border-right: 0;
    }
    .el-submenu .el-menu {
        margin-left: 30px;
    }
    .el-menu-item {
      font-size: 14px;
      height: 40px !important;
      line-height: 40px !important;
    }
    .el-menu-item:focus,
    .el-menu-item:hover {
        outline: 0;
        color: #3A85C6;
    }
    .el-menu-item.is-active {
        // background: linear-gradient(90deg, rgba(71, 148, 250, 0.31), rgba(49, 225, 230, 0.31));
        color: #3A85C6;
    }
    .el-menu-item {
        .is-active {
            color: #ffffff !important;
        }
    }
    .el-submenu .is-opened {
        // background: linear-gradient(90deg, rgba(71, 148, 250, 0.31), rgba(49, 225, 230, 0.31));
    }
    .el-submenu__title {
        padding-left: 20px !important;
    }
  .el-menu-item.submenu-item-span {
    border-left: 1px solid #c8cdd4;
    padding-left: 20px !important;
    margin-left: -8px;
  }
  .el-menu-item.submenu-item-span:hover,.el-menu-item.submenu-item-span.is-active{
    border-left: 1px solid #3A85C6;
    background-color: transparent;
  }
  .el-menu-item.submenu-item-span:hover .menu-item-right span,.el-menu-item.submenu-item-span.is-active .menu-item-right span{
    color: #3A85C6;
  }
  .menu-item-right span{
    color: #333;
  }
    .el-submenu .el-menu-item {
        min-width: 156px;
    }
}
.nest-menu{
  .el-submenu{
    margin-left: -10px;
  }
}
</style>
