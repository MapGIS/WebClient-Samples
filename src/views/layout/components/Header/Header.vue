<template>
  <div :class="{ 'mapgis-header': true, 'mapgis-header-mobile': mobile }">
    <router-link to="/">
      <div class="mapgis-webclient-header">
        <img :src="logo" class="mapgis-webclient-logo"/>
        <span v-if="!mobile" class="mapgis-webclient-text"> MapGIS Client for JavaScript </span>
      </div>
    </router-link>
    <el-menu
        :default-active="defaultActive"
        ref="elMenu"
        class="el-menu-header"
        mode="horizontal"
        background-color="#fff"
        text-color="#3C4858"
        active-text-color="#3a85c6">
      <el-menu-item :index="``" class="el-menu-item-header" @click="returnLastActive()"></el-menu-item>
      <template v-for="(itemF, iF) in headers">
        <el-menu-item :index="`${itemF.title}`" :key="iF" class="el-menu-item-header" @click="returnLastActive()" v-if="typeof(itemF.children) !== 'undefined' && itemF.children.length > 0">
          <el-submenu :index="`${itemF.title}`" :key="iF" :show-timeout="timeout" :hide-timeout="timeout" popper-class="el-submenu-header" :popper-append-to-body="isToBody">
            <template slot="title">{{ itemF.title }}</template>
            <template v-for="(itemS, iS) in itemF.children">
              <div :key="iS" v-if="itemS.group" style="padding: 4px 0 4px 10px;font-weight: 600;height:24px">
                {{itemS.group}}
                <div style="display: inline-block;height: 24px;width: 36px;">
                  <svg v-if="itemS.groupIcon === 'beta'" style="position: absolute;margin-top: 2px;" t="1753410063841" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4288" width="32" height="32"><path d="M816.7 620.4h-29.1l-3.1-19.5h-0.9c-14.4 14.2-33.4 22.6-53.4 23.7-25.6 1.7-47.7-17.9-49.4-44-0.1-1.8-0.1-3.7 0-5.5 0-36.7 30.5-55.7 100.5-63.4 0-19.8-7.3-37.3-32.1-37.3-17.5 1-34.3 7.1-48.6 17.5l-13.1-24.3c20.1-13.8 43.6-21.5 67.8-22.4 41.9 0 61.1 27.1 61.1 72.4l0.3 102.8z m-183 4c-37.8 0-51.1-24-51.1-60v-86.2h-24.4v-26.8l26-1.9 3.9-47.2h29.1v46.3h43.6v29.6h-43.6V565c0 20.6 7 31.1 24.4 31.1 6.2-0.2 12.3-1.5 18-4l6.4 26.4c-10.5 3.6-21.4 5.6-32.4 5.8v0.1z m-94.1-80.3H430.5c-0.3 28.5 22.1 51.9 50.2 52.3h1.8c14.3-0.1 28.2-4.5 40-12.7l12.2 22.7c-16.8 11.7-36.6 17.9-56.9 18.1-45.5 0-81.9-33-81.9-88.8s37.2-90.2 76.7-90.2c44.7 0 68.4 32.6 68.4 81.1 0.1 5.8-0.4 11.7-1.4 17.5z m-257.1 76.1h-75.2V391.5H277c46.1 0 79.4 14.8 79.4 56.3 0.8 21.7-12 41.6-32 49.4v1.5c26 4.1 44.8 27.5 43.6 54.3 0.6 45.5-35.8 67.2-85.5 67.2zM759.3 271H264.7C136.2 271 32 377 32 507.9v236.9h727.3c128.5 0 232.7-106 232.7-236.9S887.8 271 759.3 271z m-44.2 301.4c0 16.7 11.3 23.7 26.3 23.7 15.5-1 29.9-8.1 40.3-19.8v-41.9c-49.9 5.9-66.6 18.6-66.6 38zM321.6 452.3c0-24-15.9-33-47.7-33h-31v67.5h30.3c34 0 48.4-13 48.4-34.5z m-43.1 61.9h-35.6V592h35.8c35.1 0 55.3-12.7 55.3-40.7s-19.8-37.1-55.5-37.1z m194.8-41.3c-21.1 0-39.7 16.4-43.6 46.6h80.6c0.7-29.5-12.6-46.6-37-46.6z" fill="#FF6A00" p-id="4289"></path></svg>
                </div>
                 </div>
              <el-submenu :index="`${itemF.title}-${itemS.title}`" :key="iS" v-if="typeof(itemS.children) !== 'undefined' && itemS.children.length > 0" :show-timeout="timeout" :hide-timeout="timeout" popper-class="el-submenu-header" :popper-append-to-body="isToBody">
                <template slot="title">{{ itemS.title }}</template>
                <template v-for="(itemT, iT) in itemS.children">
                  <el-menu-item :index="`唯一标识${iF}-${iS}-${iT}`" :key="iT" class="el-menu-item-header" @click="returnLastActive()" v-if="isLink(itemT.url) || isDocs(itemT.url)">
                    <div>
                      <a :href="itemT.url" target="_blank">{{ itemT.title }}</a>
                    </div>
                  </el-menu-item>
                  <el-menu-item :index="`${iF}-${iS}-${iT}`" :key="iT" class="el-menu-item-header" v-else>
                    <router-link :to="itemT.url">{{ itemT.title }}</router-link>
                  </el-menu-item>
                </template>
              </el-submenu>
              <el-menu-item :index="`唯一标识${itemF.title}-${itemS.title}`" :key="iS" class="el-menu-item-header" @click="returnLastActive()" v-else-if="isLink(itemS.url) || isDocs(itemS.url)">
                <div>
                  <a :href="itemS.url" target="_blank">{{ itemS.title }}</a>
                </div>
              </el-menu-item>
              <el-menu-item :index="`${itemF.title}-${itemS.title}`" :key="iS" class="el-menu-item-header" v-else>
                <router-link :to="itemS.url">{{ itemS.title }}</router-link>
              </el-menu-item>
            </template>
          </el-submenu>
        </el-menu-item>
        <el-menu-item :index="`唯一标识${itemF.title}`" :key="iF" class="el-menu-item-header" @click="returnLastActive()" v-else-if="isLink(itemF.url) || isDocs(itemF.url)">
          <div>
            <a :href="itemF.url" target="_blank">{{ itemF.title }}</a>
          </div>
        </el-menu-item>
        <el-menu-item :index="`${itemF.title}`" :key="iF" class="el-menu-item-header el-menu-item-header-only-one" v-else>
          <div>
            <router-link :to="itemF.url">{{ itemF.title }}</router-link>
          </div>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {isMobile} from '@/utils/mobile';
import axios from 'axios';

export default {
  components: {},
  data() {
    return {
      mobile: isMobile(),
      logo: './static/assets/logo/mapgis_logo_blue.png',
      activeMenu: '',
      activeTabs: {},
      urls: ['config-headers-new.json', 'config-headers-sub.json', 'config-headers-mobile.json', 'config-headers-sub-mobile.json'],
      headers: [],
      subheaders: [],
      mobileHeaders: [],
      mobileSubheaders: [],
      isShowMenu: false,
      style: {
        fontSize: '24px',
        color: '#000000',
        lineHeight: '56px'
      },
      defaultActive: '',
      timeout: 100,
      isToBody: true
    };
  },
  created() {
    const vm = this;
    const {mobileSubheaders, subheaders} = this;
    const headers = isMobile() ? mobileSubheaders : subheaders;
    headers.forEach((h) => {
      this.activeTabs[h.title] = h.active ? h.active.toLowerCase() : undefined;
    });
    let nets = this.urls.map((url) => {
      return new axios(`../static/modules/config/${url}`);
    });
    Promise.all(nets).then((res) => {
      vm.headers = res[0].data;
      vm.subheaders = res[1].data;
      vm.mobileHeaders = res[2].data;
      vm.mobileSubheaders = res[3].data;
      this.isActiveMenuNew();
    });
  },
  mounted() {
    let mapmode = this.$route.params.mapmode;
    let active = mapmode ? mapmode.toLowerCase() : undefined;
    this.activeMenu = active;
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      const {mobileSubheaders, subheaders} = this;
      let mapmode = to.params.mapmode;
      if (mapmode !== from.params.mapmode) {
        const headers = this.mobile ? mobileSubheaders : subheaders;
        this.activeMenu = mapmode.toLowerCase();
        headers.forEach((header) => {
          header.menus.forEach((m) => {
            let active = m.title.toLowerCase();
            if (active === mapmode) {
              this.activeTabs[header.title] = active;
            }
          });
        });
      }
    }
  },
  methods: {
    isActiveTab(title) {
      title = title.toLowerCase();
      Object.keys(this.activeTabs).forEach((key) => {
        let active = this.activeTabs[key];
        if (title.indexOf(active) >= 0) {
          return true;
        }
      });
      return false;
    },
    isActiveMenu(title) {
      // 首页
      if(title === '首页' && (this.$route.path === '/index')){
        return true;
      }

      // 概览
      if (!this.activeMenu && title === "概览" && (this.$route.matched[0].path === '/total' ||
        this.$route.matched[0].path === '/standard')) {
        return true;
      }
      if (!this.activeMenu || !title) return false;

      title = title.toLowerCase();

      if (title.indexOf(this.activeMenu) >= 0) {
        return true;
      }

      // 组件单独处理的类型
      if (title === "组件" && (this.activeMenu === "component" ||
          'vue-cesium'.indexOf(this.activeMenu) >= 0 ||
          'vue-mapboxgl'.indexOf(this.activeMenu) >= 0)) {
        return true;
      }
      // 公共模块处理
      if(title === '公共模块' && this.activeMenu === "common"){
        return true;
      }

      return false;
    },
    isActiveMenuNew() {
      for (let i = 0; i < this.headers.length; i++) {
        if (this.isActiveMenu(this.headers[i].title)) {
          this.defaultActive = this.headers[i].title.toString();
          break;
        }
      }
    },
    isLink(link) {
      if (link.indexOf('http') >= 0 || link.indexOf('storybook') >= 0 || link.indexOf('example') >= 0) {
        return true;
      }
      return false;
    },
    isDocs(link) {
      if (link.indexOf('/api/') >= 0 || link.indexOf('/docs/') >= 0) {
        return true;
      }
      return false;
    },
    // 跳转到外链，返回到之前导航激活状态
    returnLastActive() {
      this.$refs.elMenu.updateActiveIndex(this.defaultActive);
    }
  }
};
</script>

<style lang="scss">
.mapgis-header-mobile {
  height: 48px !important;

  .mapgis-webclient-logo {
    margin-left: 22px !important;
    height: 24px !important;
  }

  .mapgis-webclient-header {
    width: fit-content;
    height: 48px !important;
  }

  .mapgis-webclient-menu {
    margin-right: 22px !important;
  }

  .mapgis-webclient-menu {
    height: 48px !important;

    span {
      font-size: 13px !important;
      height: 48px !important;
      line-height: 48px !important;
    }
  }
}

.mapgis-header {
  font-family: Microsoft YaHei;
  width: 100%;
  padding: 0px !important;
  //height: 71px;
  height: 56px;
  line-height: 56px;
  background: #ffffff;
  box-shadow: 0px 3px 7px 0px rgba(13, 43, 77, 0.15);
  z-index: 5;
  position: fixed;
  top: 0px;

  .mapgis-webclient-header {
    width: fit-content;
    height: 100%;
    align-items: center;
    float: left;
    display: flex;

    .mapgis-webclient-logo {
      margin-left: 11px;
      margin-top: -2px;
      height: 38px;
    }

    .mapgis-webclient-text {
      width: fit-content;
      height: 24px;
      margin-left: 13px;
      color: #3a85c6;
      font-stretch: normal;
      letter-spacing: 1.5px;
      font-size: 20px;
      font-style: normal;
      font-family: Microsoft YaHei;
      font-weight: bold;
      line-height: 24px;
      min-width: 350px;
    }

    .menu-icon {
      margin-right: 8px !important;
    }
  }

  .mapgis-webclient-menu-icon {
    float: right;
    height: 56px;
    margin-right: 48px;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 1220px) {
      display: block;
    }
  }

  .mapgis-webclient-menu {
    z-index: 200;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;

    .mapgis-webclient-nav {
      margin-left: auto;
      margin-right: 92px;
    }

    @media screen and (max-width: 1220px) {
      width: 100%;
      flex-wrap: wrap;
      background-color: rgba(37, 45, 69, 0.5);
      display: none;

      &.is-show {
        display: flex;
      }
    }

    span {
      width: fit-content;
      margin: 0px 2px;
      padding: 0px 4px;
      // margin-let: 12.5px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      text-align: center;
      color: #3f454d;
      line-height: 45px;

      .el-button {
        padding: 0;
        border-width: 0;
      }
    }

    span:hover {
      color: #3a85c6 !important;
    }

    .active {
      border-radius: 0px;
      border-bottom: 3px solid #3a85c6 !important;
      //span {
      //    color: linear-gradient(90deg, #4794fa, #31e1e6) !important;
      //    font-size: bold;
      //}
    }
  }
}


/*新导航头部样式start 2022.11.2*/
.mapgis-header a.router-link-active {
  z-index: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 56px;
  line-height: 56px;
}

.mapgis-header-mobile {
  .el-menu.el-menu-header.el-menu--horizontal > .el-menu-item-header, > a.router-link-active {
    height: 48px;
    line-height: 48px;
  }

  .el-menu.el-menu-header.el-menu--horizontal::-webkit-scrollbar {
    height: 0px;
  }

  .el-menu.el-menu-header.el-menu--horizontal > .el-menu-item-header > .el-submenu .el-submenu__title {
    height: 48px;
    line-height: 48px;
  }

}

.mapgis-header:not(.mapgis-header-mobile) {
  .el-menu.el-menu-header.el-menu--horizontal{
    max-width: calc(100% - 420px);
    overflow: hidden;
  }
}

.el-menu.el-menu-header.el-menu--horizontal {
  position: absolute;
  right: 10px;
  border-bottom: none;
  overflow-x: auto;
  display: flex;
  max-width: calc(100% - 60px);

  > .el-menu-item-header {
    padding: 0px;
    border-bottom: none !important;
    height: 56px;
    line-height: 56px;
  }

  > .el-menu-item-header:hover, > .el-menu-item-header:hover > .el-submenu .el-submenu__title{
    background-color: #E7F4FB !important;
  }

  > .el-menu-item-header > .el-submenu .el-submenu__title, > .el-menu-item-header-only-one {
    height: 56px;
    line-height: 56px;
    font-size: 14px;
  }

  > .el-menu-item-header.is-active > .el-submenu .el-submenu__title, > .el-menu-item-header > .el-submenu.is-active .el-submenu__title, > .el-menu-item-header.el-menu-item-header-only-one.is-active {
    color: #3a85c6 !important;
    border-bottom: 2px solid #3a85c6 !important;
  }

  > .el-menu-item-header.is-active > .el-submenu .el-submenu__title{
    background: #E7F4FB !important;
  }

  > .el-menu-item-header > .el-submenu .el-submenu__icon-arrow {
    display: none;
  }

  > .el-menu-item-header > .el-submenu.is-opened .el-submenu__title {
    color: #3a85c6 !important;
  }

  > .el-menu-item-header-only-one > div{
    width: 72px;
    height: 100%;
  }

  > .el-menu-item-header-only-one a{
    padding: 0 20px;
  }
}

.el-submenu-header.el-menu--horizontal {
  .el-menu {
    margin-top: 0px;
  }

  .el-menu-item-header a {
    color: #333;
    font-size: 14px;
    display: inline-block;
    width: 100%;
  }

  .el-menu-item-header:not(.is-disabled):hover {
    background-color: #fff !important;
  }

  .el-menu-item-header:not(.is-disabled):hover a {
    color: #3a85c6 !important;
  }

  .el-menu .el-menu-item, .el-menu .el-submenu .el-submenu__title {
    height: 32px;
    line-height: 32px;
    padding: 0 20px;
  }

  .el-menu .el-menu-item {
    padding: 0;
    margin: 0 20px;
  }

  .el-menu--popup, .el-submenu .el-menu-item {
    min-width: 110px;
  }

  .el-menu .el-submenu .el-submenu__title {
    background: #fff !important;
    padding-right: 25px;
  }

  .el-menu .el-submenu .el-submenu__title:hover {
    color: #3a85c6 !important;
  }

  .el-menu .el-submenu .el-submenu__title:hover i {
    color: #3a85c6;
  }

  .el-menu .el-submenu .el-submenu__title .el-submenu__icon-arrow {
    right: 10px;
  }
}

/*新导航头部样式end 2022.11.2*/
</style>
