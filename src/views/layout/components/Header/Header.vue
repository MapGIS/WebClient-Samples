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
      if (link.indexOf('http') >= 0 || link.indexOf('storybook') >= 0) {
        return true;
      }
      return false;
    },
    isDocs(link) {
      if (link.indexOf('/api/') >= 0) {
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
