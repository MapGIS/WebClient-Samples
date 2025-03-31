<template>
  <el-container class="mapgis-product-wrapper">
    <el-header style="padding:0px;" :height="mobile?'48px':'56px'">
      <Header></Header>
    </el-header>
    <div class="markdown-page-content">
      <markdown-preview :resource-url="resourceUrl"></markdown-preview>
    </div>
  </el-container>
</template>

<script>
    import {isMobile} from "@/utils/mobile";
    import {Header} from "@/views/layout/components";
    import MarkdownPreview from "../component/MarkdownPreview";
    export default {
        name: 'guideNew',
        components: {
            Header,MarkdownPreview
        },
        data() {
            return {
                mobile: isMobile(),
                resourceUrl: ''
            };
        },
        watch: {
            "$route.path"() {
                this.init();
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.getUrl();
            },
            getUrl() {
                let mapMode = this.$route.params.mapmode;
                let fileName = this.$route.params.file;
                this.resourceUrl = `./static/modules/${mapMode}/guide/${fileName}.md`;
            }
        }
    };
</script>

<style scoped>
  .markdown-page-content{
    position: absolute;
    width: 100%;
    height: calc(100% - 60px);
    top: 60px;
    left: 0;
  }
</style>
