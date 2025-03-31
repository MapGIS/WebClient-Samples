<template>
  <div>
    <template v-for="(item,index) in configList.childs">
      <div class="webclient-card-group" :key="'acv'+index">
        <el-col :span="24" class="card-backgroud">
          <el-col :span="24" class="col-divider-style gallery-divider">
            <el-divider :id="item.folder" :key="item.name" content-position="left">
              <div class="divider-tip big"></div>
              <div class="divider-tip small"></div>
              <span class="divider-span">{{ item.name }}({{sumCount(item)}})</span>
            </el-divider>
          </el-col>
          <template v-if="item.leaffolder===true">
            <div class="group-content">
              <card-view
                v-for="(child,cIndex) in item.childs"
                :key="'sss'+cIndex"
                :id="child.file"
                :name="child.name"
                :file="child.file"
                :detail="child.detail"
                :update="child.update"
                :image="child.icon"
                :type="configList.mapmode"
                :firstkind="item.folder"
                :secondkind="undefined"
              ></card-view>
            </div>
          </template>
          <template v-else>
            <template v-for="(child,index) in item.childs">
              <el-col :span="24" class="col-divider-style gallery-divider" :key="'bcv'+index">
                <el-divider :id="child.folder" :key="child.name" content-position="left">
                  <span class="divider-span">{{ child.name }}({{child.childs.length}})</span>
                </el-divider>
              </el-col>
              <div class="group-content" :key="'cvc'+index">
                <card-view v-for="cItem in child.childs" :key="cItem.name"
                           :id="cItem.file"
                           :name="cItem.name"
                           :file="cItem.file"
                           :detail="cItem.detail"
                           :update="cItem.update"
                           :image="cItem.icon"
                           :type="configList.mapmode"
                           :firstkind="item.folder"
                           :secondkind="child.folder"
                ></card-view>
              </div>
            </template>
          </template>
        </el-col>
      </div>
<!--      <card-group-->
<!--        v-if="item.leaffolder == true"-->
<!--        :key="item.name"-->
<!--        :folder="item.folder"-->
<!--        :type="configList.mapmode"-->
<!--        :firstkind="item.folder"-->
<!--        :firstname="item.name"-->
<!--        :secondname=undefined-->
<!--        :title="item.name"-->
<!--        :card-list="item.childs"-->
<!--      ></card-group>-->
<!--      <card-group-->
<!--        v-else-->
<!--        v-for="child in item.childs"-->
<!--        :key="child.name"-->
<!--        :folder="child.folder"-->
<!--        :type="configList.mapmode"-->
<!--        :firstkind="item.folder"-->
<!--        :secondkind="child.folder"-->
<!--        :firstname="item.name"-->
<!--        :secondname="item.name"-->
<!--        :title="child.name"-->
<!--        :card-list="child.childs"-->
<!--      ></card-group>-->
    </template>
  </div>
</template>

<script>
// import CardGroup from "@/config/components/CardGroup";
import CardView from '@/config/components/CardView/index';

export default {
  name: "gallery",
  components: {
    // CardGroup,
      CardView
  },
  props: {
    configList: {
      type: Object,
      required: true
    }
  },
    methods:{
        sumCount(item){
          if(item.leaffolder===true){
              return item.childs.length;
          }
          let count = 0;
          for(let i=0;i<item.childs.length;i++){
              let child = item.childs[i].childs;
              count += child.length;
          }
          return count;
        }
    }
};
</script>

<style lang="scss">
  .webclient-card-group {
    .card-backgroud {
      background: #ffffff;
    }
    .divider-tip{
      background-color: #3a85c6;
      display: inline-block;
      vertical-align: middle;
      height: 14px;
    }
    .divider-tip.small{
      width: 1px;
    }
    .divider-tip.big{
      width: 3px;
      margin-right: 2px;
    }
    .el-tag.el-tag--info {
      background-color: #f4f4f500;
      border-color: #e9e9eb;
      color: #909399;
    }
    .gallery-divider {
      background: transparent;
      
      .el-divider__text {
        height: 19px;
        line-height: 19px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        /*font-weight: bold;*/
        color: #3c4858;
      }
      .el-divider__text.is-left {
        left: 0;
        padding:0 20px;
      }
      .divider-span{
        margin-left: 5px;
        height: 16px;
        font-size: 16px;
        color: #333;
      }
      .el-divider {
        background-color: transparent;
      }
    }
    .col-divider-style:first-of-type {
      /*margin-top: 10px;*/
      /*margin-bottom: 10px;*/
    }
    
    .card-breadcrumb-content {
      width: calc(100vw - 200px);
    }
    .title {
      /* background: #f0f0f0; */
      margin-top: 30px;
      margin-bottom: 5px;
      border-radius: 3px;
    }
    
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: '';
    }
    
    .clearfix:after {
      clear: both;
    }
    
    .card-group {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
    
    .card-breadcrumb {
      height: 36px;
      width: 100%;
      background: #f00;
      margin-left: 10px;
      margin-top: 15px;
    }
    
    .time {
      font-size: 13px;
      color: #999;
    }
    
    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }
    
    .button {
      padding: 0;
      float: right;
      font-size: 13px;
    }
    
    .float-card {
      float: left;
      margin-left: 5px;
      margin-right: 5px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    
    .card-image {
      height: 100%;
      width: 300px;
    }
    
    .img-css{
    }
    .group-content{
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction:row;
      flex-wrap: wrap;
      /*justify-content: space-between;*/
      padding: 4px 10px;
      box-sizing: border-box;
    }
  }
</style>
