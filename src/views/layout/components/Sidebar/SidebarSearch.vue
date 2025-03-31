<template>
  <div class="search-keywords-div">
    <el-input
      size="medium"
      placeholder="搜索关键字"
      prefix-icon="el-icon-search"
      :clearable="true"
      @input="inputSearch"
      @blur="inputBlur"
      @focus="inputFocus"
      v-model="searchKeywords">
    </el-input>
    <div v-show="searchResultShow" class="search-result-content" :class="{'no-result': searchResultList.length===0 && searchResultShow}">
      <el-scrollbar class="search-result-scroll-content" v-show="searchResultList.length>0">
        <div @mousedown="gotoDemo(item)" v-for="(item,index) in searchResultList" :key="'search-result-'+index" class="gallery-card-div">
          <div class="gallery-card-wrapper">
            <div class="box-card-header">
              <img
                lazy
                v-lazy="item.imgPath"
                class="card-image"
              />
            </div>
            <div class="box-card-body" style="position:relative;">
              <span class="title">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </el-scrollbar>
      <el-empty v-if="searchResultList.length===0&&searchResultShow" image-size="70" description="没有对应的示例"></el-empty>
    </div>
  </div>
</template>

<script>
  export default {
      name: "SidebarSearch",
      props: {
          configList: {
              type: Object,
              required: true
          }
      },
      data() {
          return {
              searchResultList: [],
              searchResultShow: false,
              searchKeywords: ''
          }
      },
      methods: {
          inputSearch(value) {
              this.searchResultList = [];
              if(value===''){
                  this.searchResultShow = false;
                  return;
              }
              this.searchResultList = this.getSearchResult(value);
              this.searchResultShow = true;
          },
          getSearchResult(value,list,path,resultTempList) {
              if(typeof resultTempList === 'undefined'){
                  resultTempList = [];
              }
              if(list === undefined){
                  list = this.configList.childs;
                  path = '';
              }
              for(let item of list) {
                  if('childs' in item && !('file' in item)) {
                      this.getSearchResult(value,item.childs,path+item.folder+'/',resultTempList);
                  } else {
                      let nameFlag = item.name.toLowerCase().indexOf(value.toLowerCase())>-1;
                      let hasTags = item.tags;
                      let tagFlag = false;
                      if(hasTags){
                          for(let i=0;i<item.tags.length;i++){
                              let tag = item.tags[i];
                              if(tag.toLowerCase().indexOf(value.toLowerCase())>-1){
                                  tagFlag = true;
                                  break;
                              }
                          }
                      }
                      if(nameFlag || tagFlag){
                          item.filePath = '/modules/'+this.configList.mapmode+'/' + path+item.file;
                          item.imgPath = './static/modules/'+this.configList.mapmode+'/example-gallery/'+path+item.icon;
                          if(resultTempList.findIndex((kk)=>kk.name===item.name) === -1) {
                              resultTempList.push(item);
                          }
                      }
                  }
              }
              return resultTempList;
          },
          //失去焦点
          inputBlur() {
              this.searchResultShow = false;
          },
          //获取焦点
          inputFocus() {
              if(this.searchKeywords!==''){
                  this.searchResultShow = true;
              }
          },
          gotoDemo(item) {
              let href = window.location.href;
              let newHref = href.split('#')[0];
              window.location.href = newHref + '#' + item.filePath;
          }
      }
  }
</script>

<style lang='scss'>
  .search-keywords-div{
    position: absolute;
    z-index: 2003;
    top: 0;
    background: #f8f8f8;
    width: calc(100% - 1px);
    padding: 0 20px 0 20px;
    box-sizing: border-box;

    .el-input--prefix{
      margin-top: 20px;
      input{
        border-radius: 0;
      }
    }
    .search-result-content{
      position: fixed;
      left: 20px;
      top: 112px;
      width: 710px;
      z-index: 2002;
      overflow-y: auto;
      background: #fff;
      box-shadow: 5px 0px 10px rgba(0 ,0 ,0 ,0.1);
      .search-result-scroll-content{
        overflow-x: hidden;
        overflow-y: hidden;
        .el-scrollbar__wrap{
          min-height: 190px;
          max-height: 390px;
          .el-scrollbar__view{
            display: flex;
            flex-direction:row;
            flex-wrap: wrap;
            box-sizing: border-box;
            padding: 8px;
            .gallery-card-div {
              margin: 8px;
              width: 215px;
              cursor: pointer;
              .gallery-card-wrapper {
                box-sizing: border-box;
                width: 100%;
                outline:1px solid #E0E4EA;
                transition: all .2s;
                .box-card-header {
                  position: relative;
                  margin-top: 0px;
                  margin-left: 0px;
                  margin-right: 0px;
                  height: 120px;
                  /* width: calc( 20vw - 60px); */
                  img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                  }
                }
                .box-card-body{
                  height: 40px;
                  line-height: 40px;
                  padding-left: 10px;
                  border-top: 1px solid #e0e4ea;
                  .title {
                    font-size: 14px;
                    font-family: 'PingFangSC-Regular', 'PingFang SC';
                    color: #333;
                  }
                }
              }
            }
            .gallery-card-div:hover {
              .gallery-card-wrapper{
                box-shadow: 0px 4px 8px 0px rgba(58, 133, 198, 0.2);
                /*outline: 2px solid #3a85c6;*/
              }
              .box-card-body{
                .title {
                  color: #3a85c6;
                }
              }
            }
          }
        }
      }
    }
    .search-result-content.no-result{
      width: 320px;
      height: 200px;
    }
  }

</style>
