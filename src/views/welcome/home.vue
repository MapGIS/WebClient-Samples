<template>
    <div :class="{ 'webclient-home': true, 'webclient-home-mobile': mobile }">
        <Header class="home-header"/>
        <el-row type="flex" justify="center" class="banner banner-developer">
            <div class="main-subtitle-area">
              <div class="main-title-text1">MapGIS Client for JavaScript</div>
              <div class="main-title-text2">MapGIS云GIS网络客户端开发平台</div>
<!--                <h1 class="text-center">MapGIS Client for JavaScript - MapGIS云GIS网络客户端开发平台</h1>-->
<!--                <h2 class="text-center" style="font-size:24px">MapGIS云GIS网络客户端开发平台</h2>-->
                <div class="text-center-detail">
                  <div>对接MapGIS云GIS服务产品，提供高性能 GIS、大数据 GIS、智能 GIS 等全 GIS 服务能力，实现传统WebGIS与云GIS完美融合</div>
                  <div>集成四大主流地图开源框架和Echarts、MapV、D3 等可视化库，进一步增强了大数据、实时流数据的高效可视化表达、计算及分析应用能力</div>
                </div>
                <el-row justify="space-around">
                    <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4" v-for="(dev, i) in develops" :key="i">
                        <div class="main-flat-card-wrapper">
                            <flat-card
                                    class="main-flat-card"
                                    :icon="dev.icon"
                                    :title="dev.title"
                                    :subtitle="dev.subtitle"
                                    :index="dev.index"
                                    :routeGallery="dev.routeGallery"
                                    :routeAPI="dev.routeAPI"
                                    :routeAPIList="dev.routeAPIList"
                            />
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-row>
        <el-row type="flex" justify="center" class="banner banner-gallery">
            <div>
                <h1 class="text-center">10.7 特色功能</h1>
                <el-row justify="space-around" v-for="(gan, i) in newGallerys" :key="i">
                    <el-col v-for="g in gan" :key="g.title" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                        <div class="main-flat-card-wrapper">
                            <router-link :to="g.index" target="_blank" class="hot-examples-content">
                                <div class="hot-examples-img-div">
                                    <img class="hot-examples-img" :src="g.icon" alt=""/>
                                </div>
                                <div class="hot-examples-title">
                                    <div class="hot-examples-title-top">
                                        <div class="hot-examples-title-text">{{ g.title }}</div>
                                    </div>
                                    <div class="hot-examples-title-bottom" :title="g.subtitle">{{ g.subtitle }}</div>
                                </div>
                            </router-link>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-row>
        <el-row type="flex" justify="center" class="banner banner-gallery">
            <div>
                <h1 class="text-center">热门示例</h1>
                <el-row justify="space-around" v-for="(ga, i) in gallyers" :key="i">
                    <el-col v-for="g in ga" :key="g.title" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                        <div class="main-flat-card-wrapper">
                            <router-link :to="g.index" target="_blank" class="hot-examples-content">
                                <div class="hot-examples-img-div">
                                    <img class="hot-examples-img" :src="g.icon" alt=""/>
                                </div>
                                <div class="hot-examples-title">
                                    <div class="hot-examples-title-top">
                                        <div class="hot-examples-title-text">{{ g.title }}</div>
                                    </div>
                                    <div class="hot-examples-title-bottom" :title="g.subtitle">{{ g.subtitle }}</div>
                                </div>
                            </router-link>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-row>
        <el-row class="banner banner-carousel">
            <div>
                <h1 class="text-center">功能特性</h1>
                <el-row class="line-menu">
                    <el-col class="menu-item" @click.native="changeCheckLine('1')" :class="{ 'check-line-item': checkLineItem === '1' }"
                    >开源框架
                    </el-col
                    >
                    <el-col class="menu-item" @click.native="changeCheckLine('2')" :class="{ 'check-line-item': checkLineItem === '2' }"
                    >开发方式
                    </el-col
                    >
                    <el-col class="menu-item" @click.native="changeCheckLine('3')" :class="{ 'check-line-item': checkLineItem === '3' }"
                    >客户端运算与可视化表达
                    </el-col
                    >
                    <el-col class="menu-item" @click.native="changeCheckLine('4')" :class="{ 'check-line-item': checkLineItem === '4' }"
                    >一体化分析与场景特效
                    </el-col
                    >
                    <el-col class="menu-item" @click.native="changeCheckLine('5')" :class="{ 'check-line-item': checkLineItem === '5' }"
                    >组件资源
                    </el-col
                    >
                </el-row>
                <div class="gradient-line"></div>
                <div class="menu-content">
                    <el-row class="menu-content-row" v-for="(b, i) in banners" :key="i" v-if="checkLineItem == i + 1">
                        <el-col :xs="24" :sm="24" :md="12" class="menu-content-item">
                            <img class="menu-content-item-image" :src="b.icon"/>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" class="menu-content-item">
                            <div class="menu-content-item-title">{{ b.title }}</div>
                            <div class="menu-content-item-detail">
                                <div class="menu-content-item-text" v-for="(d, j) in b.detail" :key="j">{{ d }}</div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-row>
    </div>
</template>

<script>
import {isMobile} from '@/utils/mobile';
import {Header} from '../layout/components';
import {MainBanners, DetailMains, Develops, Gallerys, NewGallerys,DetailBanners, Histroys} from './config';
import FlatCard from './components/FlatCard';

export default {
  name: 'home',
  data() {
    return {
      mobile: isMobile(),
      carouselSpan: isMobile() ? 24 : 16,
      carouselHeight: isMobile() ? '40vh' : '300px',
      carouselWidth: isMobile() ? '100vw' : '80vw',
      mains: MainBanners,
      detailMains: DetailMains,
      develops: Develops,
      gallyers: [],
      newGallerys:[],
      banners: DetailBanners,
      historys: Histroys,
      carouselIndex: 0,
      checkLineItem: '1'
    };
  },

  components: {
    Header,
    FlatCard
  },
  mounted() {
    this.splitGallyers();
  },
  methods: {
    handleCarousel(index) {
      this.carouselIndex = index;
    },
    changeCheckLine(i) {
      this.checkLineItem = i;
    },
    splitGallyers() {
      //4个为一组
      this.gallyers = [];
      let index = 0;
      for (let i = 0; i < Gallerys.length; i++) {
        if (i % 4 === 0) {
          this.gallyers[index] = [];
          this.gallyers[index].push(Gallerys[i]);
        } else if (i % 4 === 3) {
          this.gallyers[index].push(Gallerys[i]);
          index++;
        } else {
          this.gallyers[index].push(Gallerys[i]);
        }
      }

      this.newGallerys=[];
      let index_=0
      for (let j = 0; j < NewGallerys.length; j++) {
        if (j % 4 === 0) {
          this.newGallerys[index_] = [];
          this.newGallerys[index_].push(NewGallerys[j]);
        } else if (j % 4 === 3) {
          this.newGallerys[index_].push(NewGallerys[j]);
          index_++;
        } else {
          this.newGallerys[index_].push(NewGallerys[j]);
        }
      }
    }
  }
};
</script>

<style lang="scss">
$padding-left: 60px;
$margin-left: 80px;
.webclient-home-mobile {
  font-family: '微软雅黑', sans-serif;
  h1 {
    font-family: MicrosoftYaHei;
    font-size: 24px !important;
    margin-top: 40px !important;
  }

  h3 {
    margin-top: 10px !important;
  }

  .main-title-text1 {
    line-height: 50px !important;
    font-size: 26px !important;
    margin-top: 40px !important;
  }

  .main-title-text2 {
    line-height: 50px !important;
    font-size: 22px !important;
  }

  .text-detail {
    width: 80vw !important;
    margin-left: 10vw !important;
  }

  .main-flat-card {
    //margin: 35px 5px !important;
    margin: 0 auto !important;
  }

  .banner-gallery {
    //padding: 30px 10px !important;
  }

  .banner-carousel {
    padding: 0 10px !important;
  }

  .feature-image {
    width: 250px !important;
    height: 180px !important;
    background: transparent;
  }

  .banner-developer {
    margin-top: 48px !important;
  }

  .menu-content {
    height: 370px !important;
    margin-top: 3px;
  }

  .menu-content-item-detail {
    padding-right: 0 !important;
  }
}

.webclient-home {
  font-family: '微软雅黑', sans-serif;
  .main-title {
    position: absolute;
    height: 48px;
    font-size: 43px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 48px;
    top: 251px;
    left: 89px;

    span {
      margin-left: 15px;
      color: rgba(255, 255, 255, 0.3);
    }
  }

  .main-title-text1 {
    text-align: center;
    line-height: 64px;
    font-weight: 700;
    font-size: 48px;
    color: rgba(222, 227, 242, 0.8);
    margin-top: 88px;
  }

  .main-title-text2 {
    text-align: center;
    line-height: 64px;
    font-weight: 400;
    font-size: 26px;
    color: #000333;
  }

  .sub-title {
    position: absolute;
    height: 33px;
    font-size: 30px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.3);
    line-height: 36px;
    opacity: 0.85;
    top: 334px;
    left: 89px;
  }

  .mapgis-header {
    background: #ffffff !important;
    //box-shadow: 0px 3px 7px 0px transparent !important;
    box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.1) !important;
  }

  .mapgis-webclient-header {
    background: transparent !important;
  }

  .mapgis-webclient-text {
    color: #0C85CA;
  }

  .mapgis-header .mapgis-webclient-menu span {
    color: #333333;
  }

  .mapgis-webclient-menu-icon {
    color: #ffffff !important;
  }

  .home-header {
    position: fixed;
    top: 0px;
    z-index: 100;
  }

  a {
    color: #3a85c6;
    text-decoration: none;
    word-wrap: break-word;
  }

  .banner-developer .actions a:hover {
    color: #65a6de;
  }

  h1 {
    height: 36px;
    font-family: MicrosoftYaHei;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 36px;
    letter-spacing: 0px;
    color: #333333;
    margin: 98px 0 25px 0;
  }

  h3 {
    height: 26px;
    font-family: MicrosoftYaHei;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 36px;
    letter-spacing: 0px;
    color: #333333;
    margin-top: 70px;
  }

  h6 {
    margin-top: 0px;
  }

  .text-center {
    text-align: center;
    font-weight: 400;
    font-size: 26px;
    color: #000333;
  }

  .text-detail {
    width: 60vw;
    margin-left: calc(20vw - 80px);
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 300;
    color: rgba(102, 102, 102, 1);
    line-height: 25px;
  }

  .text-center-detail {
    margin: 0 auto;
    margin-bottom: 50px;
    color: rgba(60, 72, 88, 0.8);
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    font-size: 14px;
  }

  .text-center-detail > div {
    padding-left: 10px;
    padding-right: 10px;
  }

  .main-bane-img {
    height: 100%;
    width: 100%;
  }

  .main-div-flex {
    display: flex;
  }

  .banner {
  }

  .banner-desc-wrapper {
    width: 100%;
    height: 640px;

    .banner-logo {
      width: 100vw;
    }
  }

  .banner-desc-wrapper-mobile {
    width: 100%;
    height: 240px !important;
  }

  .banner-developer {
    min-height: 630px;
    background: #F5F8FF;
    margin-top: 56px;
    overflow-x: hidden;
  }

  .banner-gallery {
    background: #EEF3FF;
    padding-bottom: 50px;

    .el-divider__text {
      background-color: rgba(245, 245, 245, 1);
    }
  }

  .banner-carousel {
    padding: 0 80px;
    background: #F5F8FF;
    min-height: 630px;

    .feature-image {
      width: 492px;
      height: 374px;
      background: transparent;
    }

    .banner-right {
      float: right;
    }

    .h3-divider {
      width: 121px;
      height: 2px;
      margin-bottom: 28px;
      background-image: linear-gradient(90deg, #4794fa 0%, #31e1e6 100%), linear-gradient(#2575f2, #2575f2);
      background-blend-mode: normal, normal;
    }

    span {
      font-size: 16px;
      color: #666666;
    }

    img {
      color: rgba(102, 102, 102, 1);
      background: rgba(102, 102, 102, 1);
      height: 100%;
      width: 100%;
    }
  }

  .banner-history {
    padding: 0 10%;
    min-height: 720px;
    background-image: url('../../../public/static/assets/home/version.png');
    background-size: 100% 720px;

    .history-content {
      padding-bottom: 56px;
    }

    .history-title {
      text-align: center;
      padding: 100px 0 56px 0;
      font-size: 36px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      line-height: 36px;
    }

    .history-content-time {
      text-align: right;

      .history-content-timedata {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        line-height: 36px;
      }

      .history-content-timeicon {
        width: 100%;
        text-align: right;
      }
    }

    .history-content-text {
      padding-left: 10%;

      .history-content-text-title {
        padding: 6px 0 15px 0;
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
        line-height: 26px;
      }

      .history-content-text-link {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #3a85c6;
        line-height: 26px;
      }

      .history-content-text-detail {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 26px;
      }
    }
  }

  .main-bane-texts {
    position: absolute;
    z-index: 1000;
    bottom: 0;
    height: fit-content;
    background: rgba(255, 255, 255, 0.1);
    width: 100%;
    display: flex;
  }

  .main-bane-text {
    height: fit-content;
    width: calc(((100vw - 2 * #{$margin-left})) / 4);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    padding: 22px 60px;

    .title {
      height: 18px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      margin-top: 0px;
      margin-bottom: 16px;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
    }

    span {
      width: 256px;
      height: 34px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 21px;
      opacity: 0.4;
    }
  }

  .main-bane-text:first-child {
    margin-left: $margin-left;
  }

  .main-bane-text:last-child {
    margin-right: $margin-left;
  }

  .main-flat-card-wrapper {
    text-align: center;
    margin: auto;
  }

  .main-flat-card {
    //margin: 0px 45px 50px;
    //padding: 26px 0;
    //margin: 0px 12px 50px;
    //padding: 26px 26px;
    margin: 0px 5px 50px;
    padding: 26px 5px;
    display: inline-block;
    width: 238px;
    //width: auto;
    box-sizing: border-box;

    .subtitle {
      color: rgba(102, 102, 102, 0.8);
    }
  }

  .main-flat-card:hover {
    background: #ffffff;
  }

  .gallery-card {
    margin: 8px 4px;
  }
}
</style>

<style scoped>
.line-menu {
  margin: 40px 0 21px 0;
  text-align: center;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
  line-height: 36px;
}

.line-menu .menu-item{
  width: 20%;
}

.gradient-line {
  height: 2px;
  width: 100%;
  background: -webkit-linear-gradient(-90deg, rgba(176, 185, 200, 0), #b0b9c8, rgba(176, 185, 200, 0));
  background: linear-gradient(-90deg, rgba(176, 185, 200, 0), #b0b9c8, rgba(176, 185, 200, 0));
}

.menu-item {
  position: relative;
  cursor: pointer;
}

.check-line-item {
  color: #3a85c6;
  position: relative;
  z-index: 1;
}

.check-line-item::before {
  content: ' ';
  position: absolute;
  left: calc(50% - 8px);
  top: 49px;
  width: 16px;
  height: 16px;
  border: 1px solid #b0b9c8;
  background: #ffffff;
  transform: rotate(45deg);
}

.check-line-item::after {
  content: ' ';
  position: absolute;
  left: calc(50% - 3px);
  top: 54px;
  width: 8px;
  height: 8px;
  background: linear-gradient(90deg, #4794fa, #31e1e6);
  transform: rotate(45deg);
}

.menu-content {
  width: 100%;
  height: 512px;
}

.menu-content-row {
  height: 100%;
}

.menu-content-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 100%;
}

.menu-content-item-image {
  max-width: 100%;
  width: 492px !important;
  //height: 374px !important;
  height: auto !important;
  background: transparent !important;
}

.menu-content-item-title {
  width: 100%;
  font-size: 26px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  line-height: 36px;
  padding-bottom: 45px;
}

.menu-content-item-detail {
  width: 100%;
  padding-right: 46px;
  box-sizing: border-box;
}

.menu-content-item-text {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #666666;
  line-height: 26px;
  padding: 5px 0;
  padding-left: 24px;
  position: relative;

}

.menu-content-item-text:before {
  content: '√';
  display: inline-block;
  width: 10px;
  height: 10px;
  position: absolute;
  left: 0px;
}

.hot-examples-img-div {
  width: 100%;
  height: 170px;
  overflow: hidden;
}

.hot-examples-img {
  width: 100%;
  height: 100%;
  transition: transform 2s cubic-bezier(.23, 1, .32, 1);
}

.hot-examples-content:hover .hot-examples-img {
  transform: scale(1.2);
}

.hot-examples-content {
  position: relative;
  font-size: 0;
  margin-bottom: 24px;
}

.hot-examples-imghover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 236px;
  opacity: 0;
}

.hot-examples-imghover:hover {
  background: linear-gradient(90deg, rgba(14, 98, 210, 0.5), rgba(0, 192, 197, 0.5));
  opacity: 1;
}

.hot-examples-text {
  padding: 13px 44px 13px 16px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 21px;
}

.hot-examples-detail {
  cursor: pointer;
  padding: 13px 44px 13px 16px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 21px;
}

.right-icon {
  margin-left: 3px;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #fff;
  color: #000;
  line-height: 16px;
  text-align: center;
}

.hot-examples-content {
  display: inline-block;
  box-shadow: 0px 4px 8px 0px rgba(104, 104, 104, 0.2);
  transition: all .2s;
  width: 300px;
  text-align: left;
  margin: 0px 12px 24px;
}

.hot-examples-content:hover {
  cursor: pointer;
  transform: translateY(-2px);
  box-shadow: 0px 4px 8px 0px rgba(8, 145, 217, 0.2);
}

.hot-examples-title {
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  background: #ffffff;
  border: 1px solid #e0e4ea;
  padding: 16px 24px;
}

.hot-examples-title-top::after {
  content: '';
  display: block;
  clear: both;
}

.hot-examples-title-text {
  display: inline-block;
  font-size: 18px;
  line-height: 24px;
  float: left;
}

.hot-examples-content:hover .hot-examples-title-text, .hot-examples-content:hover .hot-examples-title-bottom {
  color: #3A85C6;
}

.hot-examples-title-bottom {
  font-size: 14px;
  color: #666;
  line-height: 18px;
  margin-top: 12px;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.banner-gallery .text-center, .banner-carousel .text-center {
  margin-bottom: 75px;
}

.main-flat-card{
    position: relative;
}

.main-flat-card:hover {
    box-shadow: 0px 4px 8px 0px rgba(8, 145, 217, 0.2);
}

@media only screen and (min-width: 992px)
{
  .main-subtitle-area .el-col-lg-5{
    width: 20%;
  }
}
@media only screen and (min-width: 1200px)
{
  .main-subtitle-area .el-col-lg-5{
    width: 20%;
  }
}
@media only screen and (min-width: 1920px)
{
  .main-subtitle-area .el-col-lg-5{
   width: 20%;
  }
}


/* 2022.10.31 by zj 首页样式优化end */
</style>
