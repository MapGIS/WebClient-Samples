export const MainBanners = [
  "./static/assets/bane/banner.png",
  // "./static/assets/bane/banner2.png",
  // "./static/assets/bane/banner3.png",
];

export const DetailMains = [
  {
    title: "产品下载",
    subtitle: "产品开发包下载，获取开发库、示例、API，即刻快速开发",
    index: "/total/download",
  },
  {
    title: "资源中心",
    subtitle: "集成丰富的开发资源，技术文档、教学视频等，赋能开发者",
    link: "http://www.smaryun.com/dev/res_cen_index.html",
  },
  {
    title: "开源社区",
    subtitle: "Github开源社区，获取产品源码，共建共享",
    link: "https://github.com/MapGIS/WebClient-JavaScript",
  },
  {
    title: "云听社区",
    subtitle: "开发者社区，产品反馈、开发交流与分享，倾听您的声音",
    link: "http://www.smaryun.com/cloudlisten/index.php",
  },
];

export const Develops = [
  {
    icon: "./static/assets/home/common-new.png",
    routeGallery: "/example-gallery/common",
    routeAPI: "./static/modules/common/api/common-mapgis/index.html",
    title: "公共模块",
    subtitle: ["最大限度的实现代码在不同地图引擎上的复用", "快速实现二三维一体化应用的开发"],
    index: "/",
  },
  {
    icon: "./static/assets/home/cesium-new.png",
    routeGallery: "/example-gallery/cesium",
    routeAPI: "./static/modules/cesium/api/cesium-mapgis/index.html",
    title: "Cesium",
    subtitle: ["MapGIS M3D全新的三维交换格式", "支持桌面端、Web端、移动端多平台", "高效地质体渲染"],
    index: "/",
  },
  {
    icon: "./static/assets/home/mapboxgl-new.png",
    routeGallery: "/example-gallery/mapboxgl",
    routeAPI: "./static/modules/mapboxgl/api/mapboxgl-mapgis/index.html",
    title: "MapboxGL",
    subtitle: ["高清经纬度矢量瓦片", "个性化前端表达，前端矢量绘制", "支持海量地名地址"],
    index: "/",
  },
  {
    icon: "./static/assets/home/leaflet-new.png",
    routeGallery: "/example-gallery/leaflet",
    routeAPI: "./static/modules/leaflet/api/leaflet-mapgis/index.html",
    title: "Leaflet",
    subtitle: ["轻量级的地图脚本", "丰富插件，优秀拓展性", "适合轻应用以及移动端WebGlS开发"],
    index: "/",
  },
  {
    icon: "./static/assets/home/openlayers-new.png",
    routeGallery: "/example-gallery/openlayers",
    routeAPI: "./static/modules/openlayers/api/openlayers-mapgis/index.html",
    title: "OpenLayers",
    subtitle: ["稳定可靠的集成式地图开发脚本", "兼容老旧版本E浏览器", "适合传统的WebGlS开发"],
    index: "/",
  },
  {
    icon: "./static/assets/home/vue-new.png",
    routeGallery: "http://192.168.82.91:8086/storybook/index.html",
    routeAPI: "",
    routeAPIList: [{
      "title": "Cesium-API",
        "url": "./static/modules/component/api/vue-cesium/index.html"
      },{
        "title": "MapboxGL-API",
        "url": "/static/modules/component/api/vue-mapboxgl/index.html"
      },{
        "title": "UI-API",
        "url": "/static/modules/component/api/vue-ui/index.html"
      }],
    title: "组件",
    subtitle: ["VUE-MapboxGL、VUE-Cesium、", "MapGIS UI组件库", "适合WebGIS二三维组件应用开发"],
    index: "/",
  },
  // {
  //   icon: "./static/assets/home/vue-mapbox.png",
  //   iconHover: './static/assets/home/vue-mapboxglhover.png',
  //   routeGallery: "http://192.168.82.89:8086/storybook/index.html",
  //   routeAPI: "http://192.168.82.89:8086:8101/index.html",
  //   title: "Vue-MapboxGL",
  //   subtitle: ["MapGIS MapboxGL组件库", "丰富的二维地图组件", "适合WebGIS二维组件应用开发"],
  //   // "稳定可靠的集成式地图开发脚本，兼容老旧版本IE浏览器，适合传统的WebGIS开发 ",
  //   index: "/",
  // },
  // {
  //   icon: "./static/assets/home/vue-cesium.png",
  //   iconHover: './static/assets/home/vue-cesiumhover.png',
  //   routeGallery: "http://192.168.82.89:8086/storybook/index.html",
  //   routeAPI: "http://192.168.82.89:8086:8100/index.html",
  //   title: "Vue-Cesium",
  //   subtitle: ["MapGIS Cesium组件库", "丰富的三维场景组件", "适合WebGIS三维组件应用开发"],
  //   // "稳定可靠的集成式地图开发脚本，兼容老旧版本IE浏览器，适合传统的WebGIS开发 ",
  //   index: "/",
  // }
  // ,
  // {
  //   icon: "./static/assets/home/openlayershover.png",
  //   iconHover: './static/assets/home/openlayers-hover-1.png',
  //   routeGallery: "/storybook/index.html?path=/story/基础介绍-0-介绍--page",
  //   routeAPI: "http://192.168.82.89:8086:8102/index.html",
  //   title: "Vue-UI",
  //   subtitle: ["MapGIS UI组件库", "丰富的UI、主题模板等组件资源", "辅助开发WebGIS组件应用"],
  //   // "稳定可靠的集成式地图开发脚本，兼容老旧版本IE浏览器，适合传统的WebGIS开发 ",
  //   index: "/",
  // }
];

// 热门示例
export const Gallerys = [
  {
    icon: "./static/modules/cesium/example-gallery/layer/layerControl/image-layer-elevation-mode-setting.png",
    title: "二维图件与模型融合展示",
    subtitle: "实现二维影像在三维地质体模型上贴合显示效果",
    index:
      "/modules/cesium/layer/layerControl/image-layer-elevation-mode-setting",
  },
  {
    icon: "./static/modules/cesium/example-gallery/comprehensive/stitch-drone-images.jpg",
    title: "无人机图像拼接",
    subtitle: "实现无人机系列全景图片的拼接与展示",
    index: "/modules/cesium/comprehensive/stitch-drone-images",
  },
  {
    icon: "./static/assets/gallery/roller-shutter.png",
    title: "自定义范围卷帘",
    subtitle:
      "统一影像图层、M3D模型缓存图层卷帘分析的接口，除了支持纵向、横向、矩形、圆形等常用的卷帘方式外，还支持自定义范围的卷帘",
    index: "/modules/cesium/analyse/compareAnalyse/roller-shutter",
  },
  {
    icon: "./static/modules/cesium/example-gallery/layer/modelCacheLayer/3dtiles1_1.png",
    title: "3DTiles1.1数据接入",
    subtitle: "支持3DTiles1.1数据的加载",
    index: "/modules/cesium/layer/modelCacheLayer/3dtiles1_1",
  },
  {
    icon: "./static/modules/cesium/example-gallery/visualization/themeLayer/dynamic-label.png",
    title: "动态注记",
    subtitle:
      "支持多种标注策略；支持了避让和淡入淡出、描边、背景色、上下标、分式等效果",
    index: "/modules/cesium/visualization/themeLayer/dynamic-label",
  },
  {
    icon: "./static/modules/cesium/example-gallery/query/clientQuery/model-wireframe-and-outline-display.png",
    title: "模型线框和轮廓显示",
    subtitle: "可以展示模型的轮廓，应用于BIM模型及其构件的展示，方便观察其结构",
    index:
      "/modules/cesium/query/clientQuery/model-wireframe-and-outline-display",
  },
  {
    icon: "./static/modules/cesium/example-gallery/analyse/commonAnalyse/keyboard-roaming.png",
    title: "碰撞检测",
    subtitle: "有效解决室内、隧道、巷道漫游中”穿模“的问题",
    index: "/modules/cesium/analyse/commonAnalyse/keyboard-roaming",
  },
  {
    icon: "./static/modules/cesium/example-gallery/analyse/geologyAnalyse/model-draw.png",
    title: "地质体夸张显示",
    subtitle: "地下部分沿地心方向拉伸",
    index: "/modules/cesium/analyse/geologyAnalyse/model-draw",
  }
];
//新版本特色示例
export const NewGallerys = [
  {
    icon: "./static/modules/common/example-gallery/editor/sketchEditor/sketch-editor-tool.png",
    title: "WebClient-Common",
    subtitle: "实现代码在不同地图引擎上的复用，快速实现二三维一体化应用",
    index: "/modules/common/comprehensive/sketch-editor-tool",
  },
  {
    icon: "./static/modules/common/example-gallery/layers/layer-management/layer-list.png",
    title: "自定义空间参照系数据接入",
    subtitle:
      "二维地图和三维场景同时增加自定义空间参照系数据和服务（含矢量瓦片）的接入",
    index: "/modules/common/layers/layer-management/layer-list",
  },
  {
    icon: "./static/modules/common/example-gallery/layers/modelCacheLayer/voxel-model.gif",
    title: "栅格体元数据接入",
    subtitle: "支持M3D服务栅格体元数据的加载",
    index: "/modules/common/layers/modelCacheLayer/voxel-model",
  },
  {
    icon: "./static/modules/cesium/example-gallery/visualization/themeLayer/breaks-hybrid.png",
    title: "混合开发",
    subtitle: "支持WebClient库与第三方Cesium库混合开发",
    index: "/modules/cesium/visualization/themeLayer/breaks-hybrid",
  },
  {
    icon: "./static/modules/cesium/example-gallery/layer/modelCacheLayer/i3s.png",
    title: "I3S数据接入",
    subtitle: "支持I3S服务数据的加载",
    index: "/modules/cesium/layer/modelCacheLayer/i3s",
  },
  {
    icon: "./static/assets/gallery/model-banding.png",
    title: "地质体封边",
    subtitle: "动态剖切地质体后对新地质体封边",
    index: "/modules/cesium/analyse/geologyAnalyse/model-banding",
  },
  {
    icon: "./static/modules/cesium/example-gallery/simulation/fluid-dam-break.png",
    title: "流体模拟 - 筑坝溃坝",
    subtitle: "基于流体模拟功能实现的筑坝溃坝场景展示",
    index: "/modules/cesium/simulation/fluid-dam-break"
  },
  {
    icon: "./static/modules/common/example-gallery/plot/plot-profess/plot-link-animation.png",
    title: "二三维联合标绘",
    subtitle: "实现二三维场景联合动态标绘态势推演",
    index: "/modules/common/plot/plot-profess/plot-link-animation",
  }
];

export const DetailBanners = [
  {
    title: "深度融合的开源框架",
    detail: [
      '集成 OpenLayers、Leaflet、MapboxGL、Cesium 四大开源地图库',
      '深度融合 ECharts、ECharts-GL、MapV、D3 等优秀的可视化库，集成 Turf.js 客户端计算库',
      '支持融合 Apache Cordova、Electron 等跨平台框架，开发跨平台、跨终端应用'
    ],
    icon: "./static/assets/bane/sub1.gif",
  },
  {
    title: "灵活的开发方式",
    detail:[
      '支持 H5 原生 JavaScript 开发、Vue 组件式开发，开发方式更灵活',
      '支持本地离线、CDN 在线、NPM 安装等方式引入，项目管理更便捷'
    ],
    icon: "./static/assets/bane/sub3.gif",
  },
  {
    title: "高效的客户端运算与可视化表达",
    detail:[
      '支持客户端运算，包括缓冲、叠加、泰森多边形、Tin 三角网、插值计算、光滑曲线、中心点计算等',
      '支持 MVT 开放标准，支持 Web Mercator、WGS84、CGCS2000、Beijing54、Xian80 等坐标系',
      '支持时空动静态数据可视化表达，包括热力图、散点图、迁徙图、三维建筑图、O-D 图、聚类等可视化效果'
    ],
    icon: "./static/assets/bane/可视化.gif",
  },
  {
    title: "专业的二三维一体化分析与场景特效",
    detail:[
      '支持覆盖高性能空间分析、三维分析、大数据分析、智能分析等 100+ 种服务端一体化分析功能',
      '提供丰富的客户端分析功能，覆盖矢量分析、地形分析、模型分析、场景分析、可视分析等 30+种分析',
      '支持多种三维粒子特效，以及多种后处理效果'
    ],
    icon: "./static/assets/bane/分析.gif",
  },
  {
    title: "丰富的组件资源",
    detail:[
      '提供视图、场景、图层、可视化表达、分析、模拟仿真、UI 等 300+ 个组件',
      '新增 CIM 应用组件，包括规划设计、不动产智治、BIM管理、仿真模拟、综合分析等多类组件',
      '增强动态标绘系列组件，实现行业符号资源管理、动态标绘、态势推演等二三维场景一体化管理和联合操作',
      '新增 CIM大屏模板，包括城市概况、城市规划、城市建设、城市管理 4 大版块 20 多个子模块，支撑城市运营',
      '新增多套 UI 主题，支持一键切换主题'
    ],
    icon: "./static/assets/bane/组件.gif",
  },

];

export const Histroys = [
  {
    type: "success",
    timestamp: "2020/7/30",
    title: "九州 10.5.0",
    link: [
      "https://gitee.com/osmapgis/WebClient-JavaScript",
      "https://github.com/MapGIS/WebClient-JavaScript",
    ],
    detail:
      "结构上重新设计了WebGL的结构，采用最新的ES6以及Vue、React框架，正式对外推出高级Pro版本功能",
  },
  {
    type: "info",
    timestamp: "2020/1/16",
    title: "司马云正式版本 10.3.4",
    link: ["http://192.168.82.89:8086"],
    detail:
      "逻辑上重构设计webclient-javascript，整合统一igserver,datastore,d3,mapv,echarts主流开源技术",
  },
  {
    type: "danger",
    timestamp: "2018/9/10",
    title: "Github初始开发模板 10.3.0-beta",
    link: ["https://github.com/MapGIS/WebClient-JavaScript"],
    detail:
      "物理上整合了leaflet,mapboxgl,cesium,openlayers, zondyclient等多个脚本",
  },
];
