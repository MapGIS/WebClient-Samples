<template>
  <el-container class="webclient-gallery-wrapper">
    <el-header
      style="padding:0px;z-index:3000"
      :height="mobile?'48px':'56px'"
    >
      <Header></Header>
    </el-header>
    <el-container>
      <el-drawer
        title="地图演示示例"
        :size="drawerSize"
        :visible.sync="drawerShow"
        direction="ltr"
        :show-close="false"
        v-if="mobile"
      >
        <el-scrollbar
          :noresize="true"
          class="element-scroll-content"
          wrapStyle="overflow-x: hidden;"
          viewStyle="overflow-y: hidden;"
        >
          <sidebar-gallery :config-list="config"></sidebar-gallery>
        </el-scrollbar>
      </el-drawer>
      <el-aside
        class="aside-scroll-content"
        width="16%"
        v-else
      >
        <el-scrollbar
          class="element-scroll-content"
          wrapStyle="overflow-x: hidden;"
          viewStyle="overflow-y: hidden;"
        >
          <SidebarSearch :config-list="config"></SidebarSearch>
          <sidebar-gallery
            :scrollActive="scrollActive"
            :config-list="config"
          />
        </el-scrollbar>
      </el-aside>
      <el-container class="main-container-content">
        <el-main class="main-scroll-content">
          <div
            class="mobili-drawer-open"
            @click="handleDrawer"
            v-if="mobile"
          >
            <IconFont type="iconcollapseright" />
          </div>
          <el-scrollbar
            ref="componentScrollBar"
            id="webclient-scroll-container"
            :class="{'gallery-scroll-content': true, 'gallery-scroll-content-mobile': mobile}"
            wrapStyle="overflow: auto;"
            viewStyle="overflow: auto; display:inline-grid;"
          >
            <el-backtop></el-backtop>
            <gallery-card
              :scrollActive="scrollActive"
              :config-list="config"
            />
            <el-footer :height="mobile?'300':'250'">
              <main-footer></main-footer>
            </el-footer>
          </el-scrollbar>
          <gallery-anchor
            v-if="false"
            class="gallery-fix-anchor"
            :anchors="heightHash"
            :active="scrollActive"
          />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import axios from 'axios';
import { throttle } from "throttle-debounce";
import { isMobile } from "@/utils/mobile";

import { Header, SidebarGallery, MainFooter } from "@/views/layout/components";

import GalleryCard from "@/config/components/Gallery/GalleryCard";
import IconFont from "@/config/components/IconFont/iconfront";

import GalleryAnchor from './GalleryAnchor';
import SidebarSearch from "@/views/layout/components/Sidebar/SidebarSearch";

export default {
  name: "GalleryLayout",
  components: {
    Header,
    MainFooter,
    SidebarGallery,
    GalleryCard,
    IconFont,
    GalleryAnchor,
    SidebarSearch
  },
  data () {
    return {
      componentScrollBar: null,
      mobile: isMobile(),
      drawerSize: "60%",
      drawerShow: false,
      config: {},
      heightHash: [],
      scrollActive: [],
      modeChange: false,
      heightChange: false,
      scrolling: false,
      searchKeywords:''
    };
  },
  watch: {
    '$route' (to, from) {
      const vm = this;
      // 对路由变化作出响应...
      if (to.params.mapmode !== from.params.mapmode) {
        vm.initConfig(vm.initHeights);
      }

      const toPath = to.path;
      const fromPath = from.path;

      this.$nextTick(() => {
        vm.goAnchor();
      });

      if (toPath === fromPath && to.hash) {
        vm.goAnchor();
      }

      const actives = to.hash.split('#');
      this.scrollActive = actives;
    }
  },
  updated () {
    if (this.modeChange && this.heightChange) {
      this.initHeights();
      this.goAnchor();
      this.heightChange = false;
      this.modeChange = false;
    }
  },
  beforeUpdate () {
  },
  methods: {
    renderAnchorHref () {
      if (/changelog/g.test(location.href)) return;
      const anchors = document.querySelectorAll("h2 a,h3 a,h4 a,h5 a");
      const basePath = location.href
        .split("#")
        .splice(0, 2)
        .join("#");
      [].slice.call(anchors).forEach(a => {
        const href = a.getAttribute("href");
        a.href = basePath + href;
      });
    },
    goAnchor () {
      let self = this;
      if (location.href.match(/#/g).length > 1) {
        const anchors = location.href.split("#");
        if (!anchors || anchors.length < 1) return;
        let anchor = "#" + anchors[anchors.length - 1];
        const elm = document.querySelector(anchor);
        if (!elm) return;

        setTimeout(() => {
          self.scrolling = true;
          self.componentScrollBox.scrollTop = elm.offsetTop - 40;
          self.$forceUpdate();
        }, 100);
      }
    },
    handleScroll () {
      let scrollTop = this.componentScrollBox.scrollTop;

      if (this.showHeader !== this.scrollTop > scrollTop) {
        this.showHeader = this.scrollTop > scrollTop;
      }
      if (scrollTop === 0) {
        this.showHeader = true;
      }
      this.scrollTop = scrollTop;
      scrollTop = scrollTop + 72;
      for (let i = 0; i < this.heightHash.length - 1; i++) {
        if (this.heightHash[i].height < scrollTop
          && this.heightHash[i + 1].height > scrollTop) {
          let actives = []
          if (this.heightHash[i].parent) {
            actives.push(this.heightHash[i].parent.folder);
          }
          actives.push(this.heightHash[i].anchor);
          this.scrollActive = actives;
        }
      }
    },
    handleDrawer () {
      this.drawerShow = !this.drawerShow;
    },
    initHeights () {
      let hash = {};
      this.config.childs.forEach(c => {
        this.loopTree(c, hash);
      });
      this.heightHash = Object.keys(hash).map(k => {
        return {
          name: hash[k].name,
          anchor: k,
          height: hash[k].height,
          parent: hash[k].parent,
        }
      }).sort((a, b) => a.height > b.height);
      this.heightChange = true;
    },
    loopTree (node, hash, parent) {
      const elm = document.querySelector('#' + node.folder);
      if (elm) hash[node.folder] = {
        name: node.name,
        height: elm.offsetTop,
        parent: parent
      };
      if (!node.leaffolder && node.childs) {
        node.childs.forEach(c => {
          this.loopTree(c, hash, node)
        });
      }
    },
    initConfig (callback) {
      const vm = this;
      const mapmode = this.$route.params.mapmode
      let url;

      if (!window.WebclientGalleryConfig) {
        window.WebclientGalleryConfig = {};
      }

      const config = window.WebclientGalleryConfig[mapmode];
      if (config) {
        vm.config = config;
        vm.modeChange = true;
        vm.heightChange = true;
        if (callback) callback();
      } else {
        if (mapmode === 'mapboxgl') {
          url = './static/modules/mapboxgl/config-mapboxgl.json';
        } else if (mapmode === 'cesium') {
          url = './static/modules/cesium/config-cesium.json';
        } else if (mapmode === 'openlayers') {
          url = './static/modules/openlayers/config-openlayers.json';
        } else if (mapmode === 'leaflet') {
          url = './static/modules/leaflet/config-leaflet.json';
        } else if (mapmode === 'common') {
          url = './static/modules/common/config-common.json';
        } else {
          url = `./static/modules/config/config-${mapmode}.json`;
        }
        axios.get(url).then(res => {
          window.WebclientGalleryConfig[mapmode] = res.data;
          vm.config = res.data;
          vm.modeChange = true;
          vm.heightChange = true;
          if (callback) callback();
        });
      }
    },
  },
  mounted () {
    const vm = this;
    window.onresize = function temp () {
      vm.initHeights();
    };

    this.componentScrollBar = this.$refs.componentScrollBar;
    this.componentScrollBox = this.componentScrollBar.$el.querySelector(
      ".el-scrollbar__wrap"
    );
    this.throttledScrollHandler = throttle(1000, this.handleScroll);
    this.componentScrollBox.addEventListener(
      "scroll",
      this.throttledScrollHandler
    );
    document.body.classList.add("is-component");
    this.initConfig(() => {
      setTimeout(() => { vm.goAnchor(); vm.initHeights(); }, 100);
    });
  },
  destroyed () {
    document.body.classList.remove("is-component");
  },
  beforeDestroy () {
    this.componentScrollBox.removeEventListener(
      "scroll",
      this.throttledScrollHandler
    );
  }
};
</script>

<style lang='scss'>
.webclient-gallery-wrapper {
  .el-footer {
    padding: 0 0px;
  }
  .main-scroll-content {
    display: flex;
    background: #ffffff;
    height: calc(100vh - 56px);
    /*   .el-scrollbar__view {
    overflow-y: hidden;
    display: grid !important;
  } */
  }
  .element-scroll-content {
    height: calc(100vh - 56px);
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .aside-scroll-content {
    height: calc(100vh - 56px);
    overflow-x: hidden;
    background-color: #F8F8F8;
    border-right: 1px solid #e6e6e6;
    position: relative;
    .sidebar-gallery-wrapper{
      padding-top: 56px;
    }
    .el-menu{
      border-right: 0;
    }
  }
  .gallery-fix-anchor {
    overflow-x: hidden;
    overflow-y: scroll;
    width: 120px;
    padding: 16px 20px;

    -webkit-box-sizing: unset;
    box-sizing: unset;

    ul {
      display: block;
      list-style-type: disc;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
    }
  }
.gallery-fix-anchor::-webkit-scrollbar {
  width: 0px;
}

.gallery-fix-anchor::-webkit-scrollbar-track {
   background: #f1f1f1;
}

.gallery-fix-anchor::-webkit-scrollbar-thumb {
   background: #9093994d;
   border-radius: inherit;
}

.gallery-fix-anchor::-webkit-scrollbar-thumb:hover {
   background: #555;
}
  .gallery-scroll-content {
    height: calc(100vh - 56px);
    padding-top: 16px;
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
  }
  .gallery-scroll-content-mobile {
    height: calc(100vh - 56px);
    width: calc(100vw) !important;
    overflow-x: hidden;
  }
  .el-main {
    padding: 0 0 0 10px;
  }
  .el-timeline-item {
    position: relative;
    padding-bottom: 8px !important;
  }
  .mobili-drawer-open {
    position: absolute;
    top: 100px;
    left: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 100;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    -webkit-box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
    border-radius: 0 4px 4px 0;
  }
}
</style>
