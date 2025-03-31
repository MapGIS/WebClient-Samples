<template>
  <splitpanes :horizontal="mobile" :class="{ 'default-theme': true, 'webclient-showcase': true, 'webclient-showcase-mobile': mobile }">
    <pane min-size="0" :size="mobile ? splitPane : splitPane">
      <ShowGallery v-if="currentKind.length > 0 && !fullscreen && mobile" :list="currentKind" />
      <div class="code-wrapper">
        <el-button-group class="toolbar-showcase-group">
          <el-tooltip class="item" effect="dark" v-show="!mobile" :content="fullscreen ? '关闭全屏' : '开启全屏'" placement="top">
            <el-button size="mini" @click="full">
              <IconFont v-if="fullscreen" type="iconfullscreen-exit" />
              <IconFont v-else type="iconfull" />
            </el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="重置" placement="top">
            <el-button size="mini" @click="reset">
              <IconFont type="iconreload" />
            </el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="运行" placement="top">
            <el-button id='frame-run-button' size="mini" @click="run">
              <IconFont type="iconruno24" />
            </el-button>
          </el-tooltip>
        </el-button-group>
        <el-tabs type="border-card" v-loading="loading" v-model="active" class="editer-tabs-wrapper">
          <el-tab-pane name="code">
            <!--源码显示界面-->
            <span slot="label">
                            <IconFont type="iconCode" name="代码" />
                        </span>

            <el-row>
              <div class="codemirror">
                <codemirror ref="mapCode" :value="code" :options="cmOptions" @input="onCmCodeChange" @ready="onCmReady"></codemirror>
              </div>
            </el-row>
          </el-tab-pane>
          <el-tab-pane v-if="!noCaseArr.includes(getMapMode())" name="interface" id="api-scroll" class="markdown-body">
                        <span slot="label">
                            <IconFont type="iconmarkdown-line" name="说明" />
                        </span>
            <el-scrollbar
              ref="markdownScrollbal"
              class="element-scroll-content-markdown"
              wrapStyle="overflow-x: hidden;"
              viewStyle="overflow-y: hidden;"
            >
              <vue-markdown
                :watches="['show', 'html', 'breaks', 'linkify', 'emoji', 'typographer', 'toc']"
                toc-id="toc"
                :source="markdown"
                :html="true"
                :toc="false"
                :linkify="true"
                @rendered="markdownRendered"
              ></vue-markdown>
            </el-scrollbar>
          </el-tab-pane>
        </el-tabs>

      </div>
    </pane>
    <pane :size="mobile ? 100-splitPane : 100-splitPane">
      <el-row v-loading="loading" :class="{ 'webclient-showcase-content': true }">
        <div v-bind:class="{ iframemobile: mobile }" class="editor-codemirror-wraper">
          <iframe style="border-width: 0px; margin: 0px; padding: 0px" id="showcase" scrolling="no"></iframe>
        </div>
        <div class="code-wrapper-stretch-btn" @click="codeWrapperStretch" :class="{'open':codeWrapperStretchStatus==='open','close':codeWrapperStretchStatus==='close'}">
          <svg t="1670379934546" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2919" width="12" height="12"><path d="M605.824 513.536l335.68 338.304c24.704 24.96 24.704 65.28 0 90.176-24.704 24.896-64.768 24.896-89.472 0L471.616 558.656l0 0c0 0 0 0 0 0-18.496-18.688-23.168-46.08-13.888-69.056 3.072-7.68 7.744-14.912 13.952-21.12l380.352-383.424c24.704-24.96 64.768-24.96 89.472 0 24.704 24.96 24.704 65.28 0 90.24L605.824 513.536zM219.072 511.296l340.736 338.944c25.088 24.96 25.088 65.408 0 90.368-12.544 12.48-28.992 18.752-45.44 18.752-16.448 0-32.896-6.208-45.44-18.752L82.88 556.48l0 0c0 0 0 0 0 0C64 537.728 59.264 510.336 68.736 487.232c3.136-7.68 7.872-14.912 14.144-21.12l386.112-384.128c12.544-12.48 28.992-18.752 45.44-18.752 16.448 0 32.896 6.208 45.376 18.688 25.088 25.024 25.088 65.408 0 90.368L219.072 511.296z" p-id="2920" fill="#666666"></path></svg>
        </div>
        <ShowGallery v-if="currentKind.length > 0 && !fullscreen && !mobile" :list="currentKind" />
      </el-row>
    </pane>
  </splitpanes>
</template>

<script>
    import { isMobile } from '@/utils/mobile';

    import { Splitpanes, Pane } from '@mapgis/splitpanes';
    import '@mapgis/splitpanes/dist/splitpanes.css';

    import { codemirror } from 'vue-codemirror';

    import VueMarkdown from 'vue-markdown';
    import Prism from 'prismjs';
    import 'prismjs/themes/prism-coy.css'; // theme
    import 'prismjs/components/prism-javascript'; // language

    import 'codemirror/lib/codemirror.css';

    // language
    import 'codemirror/mode/javascript/javascript.js';
    import 'codemirror/mode/htmlmixed/htmlmixed.js';
    //scroll
    import 'codemirror/addon/scroll/simplescrollbars.css'
    import 'codemirror/addon/scroll/simplescrollbars.js'
    // theme css
    import 'codemirror/theme/moxer.css';
    // require active-line.js
    import 'codemirror/addon/selection/active-line.js';
    // styleSelectedText
    import 'codemirror/addon/selection/mark-selection.js';
    import 'codemirror/addon/search/searchcursor.js';
    // hint
    import 'codemirror/addon/hint/show-hint.js';
    import 'codemirror/addon/hint/show-hint.css';
    import 'codemirror/addon/hint/javascript-hint.js';
    import 'codemirror/addon/selection/active-line.js';
    // highlightSelectionMatches
    import 'codemirror/addon/scroll/annotatescrollbar.js';
    import 'codemirror/addon/search/matchesonscrollbar.js';
    import 'codemirror/addon/search/searchcursor.js';
    import 'codemirror/addon/search/match-highlighter.js';
    // keyMap
    import 'codemirror/mode/clike/clike.js';
    import 'codemirror/addon/edit/matchbrackets.js';
    import 'codemirror/addon/comment/comment.js';
    import 'codemirror/addon/dialog/dialog.js';
    import 'codemirror/addon/dialog/dialog.css';
    import 'codemirror/addon/search/searchcursor.js';
    import 'codemirror/addon/search/search.js';
    import 'codemirror/keymap/sublime.js';
    // foldGutter
    import 'codemirror/addon/fold/foldgutter.css';
    import 'codemirror/addon/fold/brace-fold.js';
    import 'codemirror/addon/fold/comment-fold.js';
    import 'codemirror/addon/fold/foldcode.js';
    import 'codemirror/addon/fold/foldgutter.js';
    import 'codemirror/addon/fold/indent-fold.js';
    import 'codemirror/addon/fold/markdown-fold.js';
    import 'codemirror/addon/fold/xml-fold.js';

    // theme css
    import 'codemirror/theme/eclipse.css';
    // import "@/styles/markdown.css";
    //import "@/styles/prism.css";
    // import "@/styles/codemirror.css";

    // import { getHtml, getMarkdown } from "@/api/demo";
    import axios from 'axios';
    import IconFont from '@/config/components/IconFont/iconfront';
    import ShowGallery from './ShowGallery';

    export default {
        name: 'demo',
        components: {
            IconFont,
            codemirror,
            VueMarkdown,
            Splitpanes,
            Pane,
            ShowGallery
        },
        props: {
            fullscreen: Boolean,
            config: Object
        },
        data() {
            return {
                split: isMobile() ? 'vertical' : 'horizontal',
                splitPane: 40,
                mobile: isMobile(),
                loading: true,
                active: 'code',
                code: 'const a = 10',
                newCode: 'const b = 10',
                instanseObject: undefined,
                help: '<h3>暂无说明,请检查左侧markdown版本的接口说明是否存在<h3>',
                markdown: '> markdown说明文件, `暂无说明`, 请检查右侧html版本的接口说明是否存在',
                cmOptions: {
                    tabSize: 4,
                    styleActiveLine: false,
                    lineNumbers: true,
                    styleSelectedText: false,
                    line: true,
                    foldGutter: true,
                    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                    highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
                    mode: 'htmlmixed',
                    scrollbarStyle: 'overlay',
                    // hint.js options
                    hintOptions: {
                        // 当匹配只有一项的时候是否自动补全
                        completeSingle: false
                    },
                    //快捷键 可提供三种模式 sublime、emacs、vim
                    keyMap: 'sublime',
                    matchBrackets: true,
                    showCursorWhenSelecting: true,
                    theme: 'eclipse',
                    extraKeys: { Ctrl: 'autocomplete' }
                },
                currentKind: [],
                codeWrapperStretchStatus: 'open',
                noCaseArr: ['cesium', 'common']
            };
        },
        computed: {
            codemirror() {
                return this.$refs.mapCode.codemirror;
            }
        },
        watch: {
            '$route.path'() {
                this.getGalleryKind();
                this.getCurrentKind();
            },
            config(next) {
                this.getGalleryKind(next);
            }
        },
        mounted() {
            let vm = this;
            vm.markdownScrollbal = vm.$refs.markdownScrollbal;
            vm.markdownScrollBox = vm.markdownScrollbal?.$el.querySelector('.el-scrollbar__wrap');
            window.onresize = function temp() {
                vm.resetSize(vm.fullscreen);
            };
        },
        methods: {
            codeWrapperStretch() {
                if(this.codeWrapperStretchStatus==='open') {
                    this.splitPane = 1;
                    this.codeWrapperStretchStatus = 'close';
                } else {
                    this.splitPane = 40;
                    this.codeWrapperStretchStatus = 'open';
                }
            },
            getGalleryKind(config) {
                config = config || this.config;
                let anchors = location.href.split('#');
                if (!anchors || anchors.length < 2) return;

                let hrefs = anchors[1].split('/');
                if (hrefs.length < 4) return;

                let routers = hrefs.slice(3);
                if (!routers) return;

                let index = routers.length > 2 ? 1 : 0;
                let kind = routers[index];

                /* this.defaultOpeneds = [routers[0]];
                this.defaultActive = routers[1]; */

                if (!config || !config.childs) return [];

                let length = config.childs.length;
                for (let i = 0; i < length; i++) {
                    let first = config.childs[i];
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
            getCurrentKind() {
                let anchors = location.href.split('#');
                if (!anchors || anchors.length < 2) return;

                let hrefs = anchors[1].split('/').slice(2);
                let file = hrefs[hrefs.length - 1];
                let type = hrefs[0];
                let first, second;
                if (hrefs.length <= 3) {
                    first = hrefs[hrefs.length - 2];
                    second = undefined;
                } else {
                    first = hrefs[hrefs.length - 3];
                    second = hrefs[hrefs.length - 2];
                }

                this.resetHtml(type, file, first, second);
            },
            getHtmlUrl(type, image, first, second) {
                var baseUrl = './static/modules/';
                var imageUrl = baseUrl + type + '/example/' + first + '/';
                if (second !== undefined) {
                    imageUrl = imageUrl + second + '/' + image + '.htm';
                } else {
                    imageUrl = imageUrl + image + '.htm';
                }
                return imageUrl;
            },
            getApiUrl(type, image, first, second) {
                var baseUrl = './static/modules/';
                var apiUrl = baseUrl + type + '/example-introduce/' + first + '/';
                if (second !== undefined) {
                    apiUrl = apiUrl + second + '/' + image + '.md';
                } else {
                    apiUrl = apiUrl + image + '.md';
                }
                return apiUrl;
            },
            getHelpUrl(type, image, first, second) {
                var baseUrl = './static/modules/';
                var helpUrl = baseUrl + type + '/html/' + first + '/';
                if (second !== undefined) {
                    helpUrl = helpUrl + second + '/' + image + '.htm';
                } else {
                    helpUrl = helpUrl + image + '.htm';
                }
                return helpUrl;
            },
            getMapMode() {
                var mapMode = 'leaflet';
                let path = this.$route.path;
                let find = path.split('/modules/');
                let mapmodes = find && find.length > 1 ? find[1].split('/') : '';
                if (mapmodes && mapmodes.length > 0) {
                    mapMode = mapmodes[0];
                } else {
                    if (this.$route.path.indexOf('leaflet') > 0) {
                        mapMode = 'leaflet';
                    } else if (this.$route.path.indexOf('openlayer') > 0) {
                        mapMode = 'openlayers';
                    } else if (this.$route.path.indexOf('cesium') > 0) {
                        mapMode = 'cesium';
                    } else if (this.$route.path.indexOf('mapboxgl') > 0) {
                        mapMode = 'mapboxgl';
                    } else if (this.$route.path.indexOf('common') > 0) {
                        mapMode = 'common';
                    }
                }
                return mapMode;
            },
            full() {
                const full = !this.fullscreen;
                this.$emit('handleFullscreen', full);
                this.resetSize(full);
            },
            run() {
                this.oldCode = this.code;
                this.code = this.newCode;
                this.loading = true;
                this.resetCase(this.code);
            },
            reset() {
                this.loading = true;
                this.resetSize(this.fullscreen);
                this.resetHtml();
            },
            resetSize(fullscreen) {
                var codeContent = document.getElementsByClassName('CodeMirror');
                var demoContent = document.getElementsByClassName('editor-codemirror-wraper');
                var markdownContent = document.getElementsByClassName('element-scroll-content-markdown');
                var paddingMainContent = document.getElementById('padding-main-content');
                if (fullscreen) {
                    paddingMainContent.style.paddingTop = 0 + 'px';
                    codeContent[0].style.height = window.innerHeight - 42 + 'px';
                    demoContent[0].style.height = window.innerHeight - 42 + 'px';
                    if(this.markdownScrollBox){
                        markdownContent[markdownContent.length - 1].style.height = window.innerHeight - 42 + 'px';
                    }
                } else {
                    if (this.mobile) {
                        codeContent[0].style.height = window.innerHeight * 0.6 - 162 + 'px';
                        // demoContent[0].style.height = window.innerHeight - 102 + "px";
                        // markdownContent[markdownContent.length - 1].style.height = window.innerHeight - 242 + "px";
                    } else {
                        paddingMainContent.style.paddingTop = 56 + 'px';
                        codeContent[0].style.height = window.innerHeight - 100 + 'px';
                        demoContent[0].style.height = window.innerHeight - 150 + 'px';
                        if(this.markdownScrollBox){
                            markdownContent[markdownContent.length - 1].style.height = window.innerHeight - 100 + 'px';
                        }
                    }
                }
            },
            resetHtml(mode, file, first, second, code) {
                this.loading = true;
                var self = this;

                mode = mode || this.getMapMode();
                file = file || this.$route.params.file;
                first = first || this.$route.params.first;
                second = second || this.$route.params.second;

                var url = this.getHtmlUrl(mode, file, first, second);
                // var helpUrl = this.getHelpUrl(mode, file, first, second);

                new Promise((resolve, reject) => {
                    axios
                        .get(url)
                        .then((response) => {
                            let data = response.data;
                            if (typeof data === 'string') {
                                if (data.indexOf('http://192.168.10.245:89/cookie/flashcookie.swf') >= 0) {
                                    self.resetHtml(mode, file, first, second, code);
                                } else {
                                    self.instanseObject = self.code = response.data;
                                    self.resetCase(code || self.code);
                                    resolve(response.data);
                                }
                            }
                        })
                        .catch((error) => {
                            reject(error);
                            self.instanseObject = self.code = '网络请求出错，请检查网络！';
                        });
                    if(!this.noCaseArr.includes(mode)){
                        var apiUrl = this.getApiUrl(mode, file, first, second);
                        axios
                            .get(apiUrl)
                            .then((response) => {
                                self.markdown = response.data;
                            })
                            .catch(() => {
                                window.console.warn('暂无该示例的markdown说明，后续持续补充......');
                            });
                    }
                });
            },
            resetCase(code) {
                let vm = this;
                let iframe = document.getElementById('showcase');
                let readyStateInterval
                // 修复iframe reload未执行完毕时，写入document导致出现变量命名重复问题

                /**
                 * --- iframe reload的过程 --- 
                 * loading：document正在下载，文件尚未开始解析。
                 * loaded：部分的文件已经加载且进行解析，但对象模型尚未生效。
                 * interactive：document完成了解析，但是资源还在下载，对象模型是有效但只读的。
                 * complete：代表加载成功，文档加载完成，并且所有resource都加载完毕
                 */
                let unloadAction = ()=>{
                  iframe.contentWindow.removeEventListener('unload', unloadAction)
                  readyStateInterval = setInterval(() => {
                      if(iframe.contentWindow && iframe.contentWindow.document){
                        let iframeDoc = iframe.contentWindow.document
                        if(iframeDoc.readyState === 'complete'){
                          // 清空定时器
                          window.clearInterval(readyStateInterval)
                          // 执行代码
                          var showcaseFrame = iframe.contentWindow;
                          if (!showcaseFrame) {
                              return;
                          }

                          let doc = showcaseFrame.document;
                          if (!doc) {
                              return;
                          }

                          let body = doc.body;
                          if (!body) {
                              return;
                          }

                          body.style.background = 'transparent';
                          body.innerText = '';
                          body.innerHTML = '';

                          doc.open();
                          doc.write(code || this.codemirror.getValue());
                          doc.close();

                          if (iframe.attachEvent) {
                              iframe.attachEvent('onload', function () {
                                  // IE
                                  vm.loading = false;
                                  vm.codemirror.scrollTo(0, 0);
                                  if(vm.markdownScrollBox){
                                      vm.markdownScrollBox.scrollTop = 0;
                                  }
                              });
                          } else {
                              iframe.onload = function () {
                                  // 非IE
                                  vm.loading = false;
                                  vm.codemirror.scrollTo(0, 0);
                                  if(vm.markdownScrollBox){
                                      vm.markdownScrollBox.scrollTop = 0;
                                  }
                              };
                          }
                        }
                      }
                  }, 10);
                }
                iframe.contentWindow.addEventListener('unload', unloadAction)
                iframe.contentWindow.location.reload();
            },
            onCmReady() {
                this.reset();
            },
            onCmFocus() {},
            onCmCodeChange(newCode) {
                this.newCode = newCode;
            },
            markdownRendered() {
                this.$nextTick(() => {
                    Prism.highlightAll();
                });
            }
        }
    };
</script>

<style lang="less" scope>
  @import '../../styles/markdown.css';
  @import '../../styles/prism.css';
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    padding: 0 1px 0 20px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
  .splitpanes__pane {
    width: 100%;
    height: 100%;
    background-color: #ffffff !important;
  }
  .webclient-showcase-mobile {
    .element-scroll-content {
      height: calc(100vh - 40vh) !important;
      overflow-x: hidden;
    }
    .editor-codemirror-wraper {
      // height: calc(60vh - 120px) !important;
    }
  }

  .webclient-showcase {
    .showcase-exit-fullscreen {
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 9999;
    }
    .webclient-showcase-content {
      height: 100%;
      position: relative;
      .code-wrapper-stretch-btn{
        position: absolute;
        top: calc(50%);
        z-index: 2002;
        height: 32px;
        width: 16px;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        margin-top: -16px;
        left:0;
        background-color: rgba(153,153,153,0.4);
        padding-top: 8px;
        box-sizing: border-box;
        cursor: pointer;
      }
    }
    .code-wrapper-stretch-btn.close svg{
      transform: rotate(180deg);
    }
    .code-wrapper {
      position: relative;
      height: 100%;
      .toolbar-showcase-group {
        position: absolute;
        margin-top: 5px;
        margin-right: 6px;
        z-index: 100;
        right: 10px;
      }
    }

    .CodeMirror-focused .cm-matchhighlight {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQI12NgYGBgkKzc8x9CMDAwAAAmhwSbidEoSQAAAABJRU5ErkJggg==);
      background-position: bottom;
      background-repeat: repeat-x;
    }
    .cm-matchhighlight {
      background-color: lightgreen;
    }
    .CodeMirror-selection-highlight-scrollbar {
      background-color: green;
    }

    .editor-codemirror-wraper {
      height: calc(100vh - 190px);
    }

    .iframemobile {
      height: 100%;
    }

    .editer-codemirror-content {
      height: 100%;
    }

    .select-group {
      margin: 5px;
    }

    /* #api-scroll {
  height: 700px;
  overflow: auto;
  font-size: 14px;
}*/

    #showcase {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background: transparent;
    }

    .splitpanes__pane {
      justify-content: center;
      align-items: center;
    }

    /* .splitpanes__pane span {
  font-family: Helvetica, Arial, sans-serif;
  color: #fff;
  font-size: 5em;
  opacity: 0.6;
} */

    .element-scroll-content {
      height: calc(100vh - 300px);
      overflow-x: hidden;
    }
    .editer-tabs-wrapper {
      height: 100%;
      .el-tabs__content{
        padding: 0px;
      }
      .CodeMirror pre.CodeMirror-line, .CodeMirror pre.CodeMirror-line-like{
        padding: 3px 4px;
      }
      .CodeMirror-gutters{
        background-color: #fff;
      }
      /* .el-tabs__item {
    padding: 0 20px;
    height: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 30px;
    display: inline-block;
    list-style: none;
    font-size: 11px;
    font-weight: 500;
    color: #303133;
    position: relative;
  } */
    }
    .splitpanes__pane {
      height: 100%;
    }
  }
</style>
