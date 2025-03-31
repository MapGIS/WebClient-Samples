<template>
  <div class="markdown-preview-content">
    <div class="menu-content" id="menuContent" :class="{'right-menu': menuIsRight}">
      <el-scrollbar>
        <div class="anchor-item"
             :title="anchor.title"
             v-for="(anchor,index) in titles"
             :key="'menu-'+index"
             :class="{'children-anchor-item': anchor.indent > 0,'active': activeIndex===index}"
             :style="{'margin-left': `${(anchor.indent) * 20}px`,'width': `calc(100% - ${(anchor.indent) * 20}px)`}"
             @click="handleAnchorClick(anchor)">
          {{ anchor.title }}
        </div>
      </el-scrollbar>
    </div>
    <el-scrollbar class="preview-content" :class="{'right-preview': menuIsRight}" id="previewContent">
      <v-md-preview :text="mdText" ref="preview"></v-md-preview>
    </el-scrollbar>
    <el-backtop target=".preview-content .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'MarkdownPreview',
        props: {
            resourceUrl: {
                type: String,
                default: ''
            },
            menuIsRight: {
                type: Boolean,
                default: false
            },
            menuLevel: {
                type: Number,
                default: 2
            }
        },
        watch: {
            resourceUrl() {
                this.init();
            }
        },
        data() {
            return {
                titles: [],
                mdText: '',
                activeIndex: 0
            };
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                if (this.resourceUrl === '') {
                    return;
                }
                this.activeIndex = 0;
                this.getResource();
                this.previewContentScrollToTop();
            },
            previewContentScrollToTop() {
                let previewContentEl = document.getElementById('previewContent');
                if (previewContentEl) {
                    let scrollWrapEls = previewContentEl.getElementsByClassName('el-scrollbar__wrap');
                    if (scrollWrapEls.length > 0) {
                        //滚动条
                        scrollWrapEls[0].scrollTo({
                            top: 0
                        });
                    }
                }
            },
            getResource() {
                let resourceUrl = this.resourceUrl;
                let vm = this;
                axios.get(resourceUrl)
                    .then(response => {
                        vm.mdText = response.data;
                        //处理目录树
                        setTimeout(vm.getTitles, 10);
                    }).catch(() => {
                        vm.mdText = '暂无该帮助的markdown说明，后续持续补充......';
                        vm.titles = [];
                    window.console.warn('暂无该帮助的markdown说明，后续持续补充......');
                })
            },
            getTitles() {
                const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
                const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());
                if (!titles.length) {
                    this.titles = [];
                    return;
                }
                let hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();
                if (hTags.length > this.menuLevel) {
                    hTags = hTags.slice(0,this.menuLevel);
                }
                let titlesArr = [];
                for (let el of titles) {
                    if (!hTags.includes(el.tagName)) {
                        continue;
                    }
                    titlesArr.push({
                        title: el.innerText,
                        lineIndex: el.getAttribute('data-v-md-line'),
                        indent: hTags.indexOf(el.tagName),
                        el: el
                    });
                }
                this.titles = titlesArr;
                //增加滚动事件
                this.addMdScrollEvent();
            },
            addMdScrollEvent() {
                let vm = this;
                let scrollEle = document.getElementById('previewContent').getElementsByClassName('el-scrollbar__wrap')[0];
                scrollEle.addEventListener('scroll', () => {
                    let scrollTop = scrollEle.scrollTop;
                    for (let index = 0; index < vm.titles.length; index++) {
                        if (index !== vm.titles.length - 1) {
                            let el = vm.titles[index].el;
                            let nextEl = vm.titles[index + 1].el;
                            let elOffsetTop = el.offsetTop;
                            let nextElOffsetTop = nextEl.offsetTop;
                            if (elOffsetTop <= scrollTop + 60 && nextElOffsetTop >= scrollTop + 60) {
                                vm.activeIndex = index;
                                let menuScrollElement = document.getElementById('menuContent').getElementsByClassName('el-scrollbar__wrap')[0];
                                let oneElement = document.getElementsByClassName('anchor-item')[index];
                                menuScrollElement.scrollTo({
                                    top: oneElement.offsetTop - 300
                                });
                                break;
                            }
                        } else {
                            vm.activeIndex = vm.titles.length - 1;
                        }
                    }
                });
            },
            handleAnchorClick(anchor) {
                const {preview} = this.$refs;
                const {lineIndex} = anchor;
                const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);
                if (heading) {
                    preview.scrollToTarget({
                        target: heading,
                        scrollContainer: document.getElementById('previewContent').getElementsByClassName('el-scrollbar__wrap')[0],
                        top: 58
                    });
                }
            }
        }
    };
</script>

<style scoped>
  .markdown-preview-content{
    width: 100%;
    height: 100%;
  }
  .menu-content{
    float:left;
    width: 260px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    background-color: rgba(248, 251, 253, 1);
    border-right: 1px solid #e0e4ea;
    font-size: 14px;
  }
  .menu-content.right-menu{
    border-right: none;
    border-left: 1px solid #e0e4ea;
    background-color: transparent;
    float:right;
    padding-right: 10px;
    width: 200px;
  }
  .preview-content{
    float:left;
    width: calc(100% - 260px);
    height: 100%;
    overflow-y: auto;
  }
  .preview-content.right-preview{
    float:right;
    width: calc(100% - 200px);
  }
  .anchor-item{
    height: 40px;
    line-height: 40px;
    padding: 0 0 0 20px;
    color: #333;
    cursor: pointer;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .anchor-item:first-of-type{
    margin-top: 10px;
  }
  .anchor-item:last-of-type{
    margin-bottom: 10px;
  }
  .anchor-item.children-anchor-item{
    border-left: 1px solid #e0e4ea;
  }
  .anchor-item.children-anchor-item.active{
    border-left: 1px solid #3a85c6;
  }
  .anchor-item:hover{
    color: #3a85c6;
  }
  .anchor-item.active{
    color: #3a85c6;
  }
  /deep/ .el-scrollbar__wrap {
    overflow-y: scroll;
    overflow-x: hidden;
  }
  /deep/ .el-scrollbar {
    height: 100%;
  }
  /deep/ .vuepress-markdown-body h1{
    font-size: 1.6rem;
  }
  /deep/ .vuepress-markdown-body h2{
     font-size: 1.55rem;
   }
  /deep/ .vuepress-markdown-body h3{
    font-size: 1.5rem;
  }
  /deep/ .vuepress-markdown-body h4{
    font-size: 1.45rem;
  }
  /deep/ .vuepress-markdown-body h5{
    font-size: 1.4rem;
  }
  /deep/ .vuepress-markdown-body h6{
    font-size: 1.4rem;
  }
</style>

