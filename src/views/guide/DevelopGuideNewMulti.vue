<template>
  <el-container class="mapgis-product-wrapper">
    <el-header style="padding:0px;" :height="mobile?'48px':'56px'">
      <Header></Header>
    </el-header>
    <div>
      <MultiMarkdownPreview
        :currentMdName="currentMdName"
        :menuList="menuList"
        :defaultActive="defaultActive"
        :resourceUrl="resourceUrl">
      </MultiMarkdownPreview>
    </div>
  </el-container>
</template>

<script>
    import {Header} from "@/views/layout/components";
    import MultiMarkdownPreview from "../component/MultiMarkdownPreview";
    import {isMobile} from "@/utils/mobile";
    import axios from 'axios';
    export default {
        name: 'DevelopGuideNewMulti',
        components: {Header,MultiMarkdownPreview},
        data() {
            return {
                mobile: isMobile(),
                currentMdName: '',
                resourceUrl: '',
                menuList: [],
                defaultActive: '0' // 默认激活的path
            };
        },
        watch: {
            '$route'() {//监听到路由（参数）改变
                this.init();
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                let mapmode = this.$route.params.mapmode;
                let fileName = this.$route.params.file;
                this.resourceUrl = this.getResourceUrl(mapmode,fileName);
                this.handlerMenus(mapmode);
            },
            async handlerMenus(mapmode) {
                let asideUrl = "./static/modules/config/config-headers.json";
                let dataContent = {};
                let response = await axios.get(asideUrl);
                let temp = response.data;
                for (let i in temp) {
                    if (mapmode === (temp[i].title).toLowerCase()) {
                        dataContent = temp[i];
                        break;
                    } else {
                        dataContent = temp[1];
                    }
                }
                let menus = dataContent.menus;
                let helperObj = {};
                for (let j in menus) {
                    if (menus[j].type === "guide") {
                        helperObj = menus[j]
                        break;
                    }
                }
                let links = helperObj.links[0];
                let mds = helperObj.routes[0];
                let menuList = [];
                let anchors = location.href.split("#");
                let hrefs = anchors[1];
                let defaultActive = '0';
                let currentMdName = links[0];
                for(let i = 0;i<links.length;i++){
                    if(hrefs == mds[i]){
                        currentMdName = links[i];
                        defaultActive = ''+i;
                    }
                    menuList.push({
                        name: links[i],
                        pathUrl: mds[i]
                    })
                }
                this.currentMdName = currentMdName;
                this.defaultActive = defaultActive;
                this.menuList = menuList;
            },
            getResourceUrl(type, file) {
                let baseUrl = "./static/modules/";
                return baseUrl + type + "/guide/" + file + ".md";
            }
        }
    };
</script>

<style scoped>

</style>
