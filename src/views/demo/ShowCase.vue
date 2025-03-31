<template>
    <el-container :class="{ 'webclient-showcase-main': true, 'webclient-showcase-main-mobile': mobile }">
        <el-header v-if="!fullScreen" style="height: 56px;z-index:3000" :class="{ 'mapgis-header': !mobile, 'mapgis-header-mobile': mobile }">
            <transition name="bounce">
                <Header></Header>
            </transition>
        </el-header>
        <el-container id="padding-main-content" style="padding-top: 56px;">
            <el-drawer title="示例分类" :size="drawerSize" :visible.sync="drawerShow" direction="ltr" :show-close="false" v-if="mobile">
                <el-scrollbar :noresize="true" class="element-scroll-content" wrapStyle="overflow-x: hidden;" viewStyle="overflow-y: hidden;">
                    <sidebar-demo class="sidebar-container" :config-list="config"></sidebar-demo>
                </el-scrollbar>
            </el-drawer>
            <el-aside class="aside-scroll-content" :width="sideBarStatus === 'open' ? '16%' : '5px'" v-if="!fullScreen && !mobile">
                <el-scrollbar :noresize="true" class="element-scroll-content" wrapStyle="overflow-x: hidden;" viewStyle="overflow-y: hidden;">
                    <SidebarSearch :config-list="config"></SidebarSearch>
                    <div class="side-bar-stretch-btn" @click="sideBarStretch" :class="{'open':sideBarStatus==='open','close':sideBarStatus==='close'}">
                      <svg t="1670379934546" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2919" width="12" height="12"><path d="M605.824 513.536l335.68 338.304c24.704 24.96 24.704 65.28 0 90.176-24.704 24.896-64.768 24.896-89.472 0L471.616 558.656l0 0c0 0 0 0 0 0-18.496-18.688-23.168-46.08-13.888-69.056 3.072-7.68 7.744-14.912 13.952-21.12l380.352-383.424c24.704-24.96 64.768-24.96 89.472 0 24.704 24.96 24.704 65.28 0 90.24L605.824 513.536zM219.072 511.296l340.736 338.944c25.088 24.96 25.088 65.408 0 90.368-12.544 12.48-28.992 18.752-45.44 18.752-16.448 0-32.896-6.208-45.44-18.752L82.88 556.48l0 0c0 0 0 0 0 0C64 537.728 59.264 510.336 68.736 487.232c3.136-7.68 7.872-14.912 14.144-21.12l386.112-384.128c12.544-12.48 28.992-18.752 45.44-18.752 16.448 0 32.896 6.208 45.376 18.688 25.088 25.024 25.088 65.408 0 90.368L219.072 511.296z" p-id="2920" fill="#666666"></path></svg>
                    </div>
                    <sidebar-demo class="sidebar-container" :config-list="config"></sidebar-demo>
                </el-scrollbar>
            </el-aside>
            <el-container>
                <el-main class="main-scroll-content">
                    <div class="mobili-drawer-open" @click="handleDrawer" v-if="mobile">
                        <IconFont type="iconcollapseright" />
                    </div>
                    <router-view class="main-demo-wrapper" :fullscreen="fullScreen" @handleFullscreen="handleFullscreen" :config="config">
                    </router-view>
                </el-main>
            </el-container>
        </el-container>
        <el-footer v-if="false" :height="mobile ? '300' : '250'">
            <main-footer></main-footer>
        </el-footer>
    </el-container>
</template>

<script>
import axios from 'axios';
import { Header, SidebarDemo, MainFooter } from '@/views/layout/components';
import SidebarSearch from "@/views/layout/components/Sidebar/SidebarSearch";
import IconFont from '@/config/components/IconFont/iconfront';
import { isMobile } from '@/utils/mobile';

export default {
    name: 'layout',
    components: {
        Header,
        MainFooter,
        SidebarDemo, //边栏展示
        SidebarSearch,
        IconFont
    },
    data() {
        return {
            currentKind: this.getCurrentKind(),
            defaultOpeneds: [],
            defaultActive: '',
            mobile: isMobile(),
            drawerSize: '60%',
            drawerShow: false,
            fullScreen: false,
            config: {},
            //sideBar的状态
            sideBarStatus: 'open'
        };
    },
    watch: {
        $route(to, from) {
            // 对路由变化作出响应...
            if (to.params.mapmode !== from.params.mapmode) {
                this.initConfig();
            }
        },
        '$route.path'() {
            this.getCurrentKind();
        }
    },
    computed: {},
    mounted() {
        this.initConfig();
    },
    methods: {
        handleFullscreen(fullscreen) {
            this.fullScreen = fullscreen;
            if (fullscreen && this.mobile) {
                var mobileContent = document.getElementsByClassName('main-demo-wrapper');
                if (mobileContent.length > 0) {
                    mobileContent[0].style.height = window.innerHeight - 20 + 'px';
                }
            }
        },
        handleDrawer() {
            this.drawerShow = !this.drawerShow;
        },
        sideBarStretch() {
          if(this.sideBarStatus === 'open'){
              this.sideBarStatus = 'close';
          }  else {
              this.sideBarStatus = 'open';
          }
        },
        getCurrentKind() {
            let anchors = location.href.split('#');
            if (!anchors || anchors.length < 2) return;

            let hrefs = anchors[1].split('/');
            if (hrefs.length < 4) return;

            let routers = hrefs.slice(3);
            if (!routers) return;

            let index = routers.length > 2 ? 1 : 0;
            let kind = routers[index];

            this.defaultOpeneds = [routers[0]];
            this.defaultActive = routers[1];

            if (!this.config) return [];

            let length = this.config.childs.length;
            for (let i = 0; i < length; i++) {
                let first = this.config.childs[i];
                if (first.folder === kind) {
                    this.currentKind = first.childs;
                    return first.childs;
                }
                if (!first.folder) continue;
                let length2 = first.childs.length;
                for (let j = 0; j < length2; j++) {
                    let second = first.childs[j];
                    if (second.folder === kind) {
                        this.currentKind = second.childs;
                        return second.childs;
                    }
                }
            }
            this.currentKind = [];
            return [];
        },
        async initConfig() {
            const mapmode = this.$route.params.mapmode;
            let url;
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
            let res = await axios.get(url);
            this.config = res.data;
            this.getCurrentKind();
            return res.data;
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.webclient-showcase-main-mobile {
    .main-demo-wrapper {
        margin-left: 0px !important;
        height: calc(100vh - 56px) !important;
    }
    .mapgis-header-mobile {
        padding: 0px !important;
        height: 48px !important;
    }
}
.webclient-showcase-main {
    /*   .mapgis-header {
    padding: 0px;
    height: 72px;
  } */
    .el-footer {
        padding: 0 0px;
    }

    .main-demo-wrapper {
        margin-left: 0px;
    }

    .aside-scroll-content {
        background: #f8f8f8;
        position: relative;
        .side-bar-stretch-btn{
          position: fixed;
          top: calc(50% +  28px);
          z-index: 2002;
          cursor: pointer;
          height: 32px;
          width: 16px;
          border-top-right-radius: 16px;
          border-bottom-right-radius: 16px;
          margin-top: -16px;
          background-color: rgba(153, 153, 153, 0.4);
          padding-top: 8px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        .side-bar-stretch-btn.open{
          left: 16%;
        }
        .side-bar-stretch-btn.close{
          left: 5px;
        }
        .side-bar-stretch-btn.close svg{
          transform: rotate(180deg);
        }
        .sidebar-container{
            padding-top: 56px;
            border-right: 1px solid #e8e8e8;
            .el-menu{
                border-right: 0px;
            }
        }
        .element-scroll-content {
            overflow-x: hidden;
            /* padding-left: 79px;
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 30px; */
        }

        /*   .el-scrollbar__wrap {
    overflow: scroll;
    height: 100%;
  } */

        .element-scroll-content {
            height: calc(100vh - 56px);
            overflow-x: hidden;
            overflow-y: hidden;
        }
    }

    .main-scroll-content {
        overflow-y: hidden;
        padding: 0;
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
    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
}
</style>
