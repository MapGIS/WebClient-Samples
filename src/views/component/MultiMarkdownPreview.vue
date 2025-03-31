<template>
  <div class="markdown-page-content">
    <div class="left-menu">
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        text-color="#333333"
        active-text-color="#53A7FF"
      >
        <template v-for="(item, i) in menuList">
          <template>
            <router-link  :key="i"  class="menu-a" :to="item.pathUrl">
              <el-menu-item class="first-class-item" :index="''+i">
                {{ item.name }}
              </el-menu-item>
            </router-link>
          </template>
        </template>
      </el-menu>
    </div>
    <div class="right-content">
      <div class="markdown-name">{{currentMdName}}</div>
      <div class="markdown-preview-div">
        <MarkdownPreview :menu-is-right="true" :resource-url="resourceUrl"></MarkdownPreview>
      </div>
    </div>
  </div>
</template>

<script>
  import MarkdownPreview from "./MarkdownPreview";
    export default {
        name: "MultiMarkdownPreview",
        components: {MarkdownPreview},
        props: {
            resourceUrl: {
                type: String,
                default: ''
            },
            menuList: {
                type: Array,
                default: ()=>{
                    return [];
                }
            },
            currentMdName: {
                type: String,
                default: ''
            },
            defaultActive: {
                type: String,
                default: '0'
            }
        }
    }
</script>

<style scoped>
  .markdown-page-content{
    position: absolute;
    width: 100%;
    height: calc(100% - 60px);
    top: 60px;
    left: 0;
    text-align: left;
  }
  .left-menu{
    float:left;
    width:18%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    background-color: rgba(248, 251, 253, 1);
    border-right: 1px solid #e0e4ea;
    font-size: 14px;
  }
  .right-content{
    float:left;
    width:82%;
    height: 100%;
  }
  .markdown-name{
    height: 60px;
    line-height: 60px;
    font-size: 26px;
    color: #333;
    font-weight: bold;
    width: 100%;
    border-bottom: 1px solid #e0e4ea;
    box-sizing: border-box;
    padding-left: 20px;
  }
  .markdown-preview-div{
    width: 100%;
    height: calc(100% - 60px);
  }
  .left-menu::-webkit-scrollbar{
    display: none;
  }
  .el-menu {
    border: none;
    height: 100%;
    box-sizing: border-box;
    padding-top: 20px;
    background-color: rgba(248, 251, 253, 1);
  }
  
  .el-menu li {
    text-align: left;
    background-color: rgba(248, 251, 253, 1);
  }
  
  /deep/ .el-submenu__title{
    color: #333;
  }
  
  /deep/ .el-submenu__title i {
    color: #333;
  }
  
  /deep/ .el-submenu.is-active .el-submenu__title i {
    color: #333;
  }
  
  /deep/ .el-submenu .el-submenu__title, /deep/ .el-menu-item {
    color: #333;
  }
  
  /deep/ .el-submenu.is-active .el-submenu__title, /deep/ .el-menu-item.is-active {
    color: #333;
  }
  
  /deep/ .el-menu .el-submenu__title, /deep/ .el-menu .el-menu-item {
    height: 40px;
    line-height: 40px;
  }
  
  /deep/ .el-submenu__title, /deep/ .el-menu-item {
    height: 46px;
    line-height: 46px;
  }
  
  /deep/ .el-menu .el-menu-item:before {
    content: '';
    display: inline-block;
    border-left: 1px solid #e0e4ea;
    height: 100%;
    position: absolute;
    left: 20px;
  }
  
  /deep/ .el-menu .el-menu-item.is-active:before {
    border-color: #53A7FF;
    color: #53A7FF !important;
  }
  
  .menu-a {
    text-decoration: none;
  }
  .menu-a .first-class-item:before{
    border-left: none;
  }
</style>
