# 1、获取 MapGIS 3DClient for WebGL 开发包

开发时需要引入 MapGIS 3DClient for WebGL 开发包；其中包括必备的 CSS 文件和 JS 文件。

**前往**[司马云官网](http://smaryun.com/dev/download_detail.html#/download828)**下载 MapGIS 3DClient for WebGL 开发库**

以 10.7.6.10 为例，其中：

- mapgis-client-for-javascript-dist-v10.7.6.10.rar 为开发库

- mapgis-client-for-javascript-all-v10.7.6.10.rar 为开发库+示例站点

**开发包位于如下位置**

- @mapgis/webclient-cesium-plugin 库：`mapgis-client-for-javascript-all-v10.7.6.10\dist\cdn\zondyclient\webclient-cesium-plugin.min.js`以及`mapgis-client-for-javascript-all-v10.7.6.10\dist\cdn\zondyclient\webclient-cesium-plugin-resource`

- @mapgis/cesium 库：`mapgis-client-for-javascript-all-v10.7.6.10\dist\cdn\cesium`

# 2、引入开发库

支持通过文件方式引入和 npm 方式引入，您可以根据自身情况选择其中一种。

## 2.1、文件方式引入

第一步，将开发包中的 webclient-cesium-plugin.min.js 文件、webclient-cesium-plugin-resource 文件夹和 cesium 文件夹拷贝到项目的静态资源目录中，并在 index.html 中引入引擎库和插件库。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
    />
    <!--引擎库-->
    <script src="http://{ip}:{port}/{你的路径}/cesium/Cesium.js"></script>
    <link
      rel="stylesheet"
      href="http://{ip}:{port}/{你的路径}/cesium/Widgets/widgets.css"
    />
    <!--插件库-->
    <script src="http://{ip}:{port}/{你的路径}/zondyclient/webclient-cesium-plugin.min.js"></script>
  </head>
</html>
```

从 10.7.4.10 版本开始，webclient-cesium-plugin 库新增了静态资源，因此在使用时需要执行以下额外的操作步骤：
第二步，配置 webclient-cesium-plugin 库资源路径全局变量 MAPGIS_BASE_URL。如果不做配置，则默认 webclient-cesium-plugin.min.js 文件所在的录路径为 MAPGIS_BASE_URL 的值。

## 2.2、npm（或yarn、pnpm） 方式引入

使用此方式前请先检查电脑中是否已安装应用程序 Node.js，并切换 npm 源为公网。

第一步，获取 js 包

&ensp;&ensp;&ensp;&ensp;两种 install 方式：

&ensp;&ensp;&ensp;&ensp;1.直接安装：

```plain
// 使用 npm 安装
npm install @mapgis/cesium
npm install @mapgis/webclient-common
npm install @mapgis/webclient-cesium-plugin
// 使用 yarn 安装
yarn add @mapgis/cesium
yarn add @mapgis/webclient-common
yarn add @mapgis/webclient-cesium-plugin
// 使用 pnpm 安装
pnpm add @mapgis/cesium
pnpm add @mapgis/webclient-common
pnpm add @mapgis/webclient-cesium-plugin
```

&ensp;&ensp;&ensp;&ensp;2.在项目 package.json 文件中的 dependencies 内增加@mapgis/cesium、@mapgis/webclient-cesium-plugin 及对应版本号，例如：

```plain
{
  "version": "0.0.0",
  "scripts": {},
  "dependencies": {
    "@mapgis/cesium": "^17.6.0",
    "@mapgis/webclient-common": "^17.6.0",
    "@mapgis/webclient-cesium-plugin": "^17.6.0"
  },
  "devDependencies": {}
}
```

&ensp;&ensp;&ensp;&ensp;然后再进行安装：

```plain
// 使用 npm 安装
npm install
// 使用 yarn 安装
yarn install
// 使用 pnpm 安装
pnpm install
```

&ensp;&ensp;&ensp;&ensp;安装完毕后，在项目`node_modules/@mapgis`文件夹中可找到`cesium`文件夹、`webclient-cesium-plugin`文件夹。

从 @mapgis/webclient-common v17.4.0 版本开始，webclient-common 库增加了静态资源，因此在使用时需要执行以下两个额外的操作步骤：

第二步，资源导入。
- webclient-cesium 资源导入：将`@mapgis/cesium/Build/Cesium`中的静态资源 `Assets`、`ThirdParty`、 `Widgets`、`Workers`、`MapGIS`文件夹，拷贝到项目静态资源目录中。以 VUE 项目为例，推荐将静态资源文件夹，拷贝到项目静态资源目录 public/cesiumStatic。
- webclient-cesium-plugin 资源导入：将`@mapgis/webclient-cesium-plugin`中的静态资源`webclient-cesium-plugin-resource`文件夹，拷贝到项目静态资源目录中。


第三步，配置全局变量。
- 配置 webclient-cesium 库的 Cesium 对象全局变量和资源路径全局变量 CESIUM_BASE_URL ：

&ensp;&ensp;&ensp;&ensp;将 Cesium 对象挂载到全局 window 对象上，并将 webclient-cesium 资源目录路径赋给 window  对象上的全局变量 CESIUM_BASE_URL。以 VUE 项目为例，在 src/main.js 中设置 window.CESIUM_BASE_URL = “http://xxx/cesiumStatic”。

- 配置 webclient-cesium-plugin 库的资源路径全局变量 MAPGIS_BASE_URL ：

&ensp;&ensp;&ensp;&ensp;在引入 webclient-cesium-plugin 之前，需要预先设置 MAPGIS_BASE_URL 全局变量。将 webclient-cesium-plugin-resource 资源文件夹所在的目录路径赋值给 window 上的变量 MAPGIS_BASE_URL。
&ensp;&ensp;&ensp;&ensp;通过 npm 方式引入库文件时，必须设置 MAPGIS_BASE_URL（无默认值），否则 webclient-cesium-plugin 库无法使用其静态资源文件。以 VUE 项目为例，推荐在 src/main.js 中设置 window.MAPGIS_BASE_URL =  “xxx”（资源路径）。例如，若将 webclient-cesium-plugin-resource 文件夹放置在 public 目录下，则应在 src/main.js 中设置 window.MAPGIS_BASE_URL = “http://xxx/”。

&ensp;&ensp;&ensp;&ensp;备注：
&ensp;&ensp;&ensp;&ensp;webclient-cesium-plugin 的依赖库 webclient-common 库的静态资源导入方法和配置方法，请参考<a href="http://webclient.smaryun.com/#/guideMulti/common/development_common" target="_blank">**webclient-common 库的开发指南** </a>。
&ensp;&ensp;&ensp;&ensp;webclient-common 和 webclient-cesium-plugin 库对 MAPGIS_BASE_URL 的配置方式相同，两个库共享同一个资源路径变量 MAPGIS_BASE_URL。

&ensp;&ensp;&ensp;&ensp;**示例**：
&ensp;&ensp;&ensp;&ensp;以 VUE 项目为例（React 和 Angular 类似）：在 src/main.js 中导入@mapgis/cesium 库，并配置全局变量 window.Cesium、window.CESIUM_BASE_URL、window.MAPGIS_BASE_URL。

```javascript
import Vue from 'vue'
import router from './sys/router'

// 配置全局 Cesium 对象
import * as Cesium from '@mapgis/cesium'
import '@mapgis/cesium/Build/Cesium/Widgets/widgets.css'
window.Cesium = Cesium
// 配置 cesium 和 webclient-cesium-plugin 资源路径全局变量
window.CESIUM_BASE_URL = 'http://localhost:8080/cesiumStatic'
window.MAPGIS_BASE_URL = 'http://localhost:8080/'

import App from './App.vue'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
```

<br/>

**说明：** 
- 第二步资源导入、第三步配置资源路径全局变量，也可通过 webpack 配置完成。Cesium 对象全局变量仍需在项目中配置。

&ensp;&ensp;&ensp;&ensp;首先在 webpack.config.js 中配置资源导入和资源路径全局变量。以 webpack4 配置为例：（**webpack 更详细的配置，请参考<a href="https://github.com/CesiumGS/cesium-webpack-example" target="_blank">CesiumGS/cesium-webpack-example</a>**）
```javascript
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// @mapgis/cesium 库所在路径
const cesiumSource = "node_modules/@mapgis/cesium/Build/Cesium";
// @mapgis/webclient-cesium-plugin 库所在路径
const cesiumPluginSource = "node_modules/@mapgis/webclient-cesium-plugin";
// 项目的静态资源目录
const cesiumBaseUrl = "cesiumStatic";
const mapgisBaseUrl = "";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    unknownContextCritical: false,
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: {
          and: [/node_modules/],
          not: [/cesium/],
        },
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "defaults, not ie 11" }],
              ],
              plugins: ["@babel/plugin-transform-optional-chaining"],
            },
          },
          require.resolve("@open-wc/webpack-import-meta-loader"),
        ],
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // 拷贝 Cesium 静态资源 Assets,ThirdParty,Widgets, Workers and MapGIS 到项目静态资源目录'public/cesiumStatic'
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(cesiumSource, "Workers"),
          to: `${cesiumBaseUrl}/Workers`,
        },
        {
          from: path.join(cesiumSource, "ThirdParty"),
          to: `${cesiumBaseUrl}/ThirdParty`,
        },
        {
          from: path.join(cesiumSource, "Assets"),
          to: `${cesiumBaseUrl}/Assets`,
        },
        {
          from: path.join(cesiumSource, "Widgets"),
          to: `${cesiumBaseUrl}/Widgets`,
        },
        {
          from: path.join(cesiumSource, "MapGIS"),
          to: `${cesiumBaseUrl}/MapGIS`,
        },
        {
          from: path.join(cesiumPluginSource, "webclient-cesium-plugin-resource"),
          to: `${mapgisBaseUrl}/webclient-cesium-plugin-resource`,
        },
      ],
    }),
    new webpack.DefinePlugin({
      // Define relative base path in cesium for loading assets
      // 定义Cesium资源路径和webclient-cesium-plugin资源路径
      CESIUM_BASE_URL: JSON.stringify(cesiumBaseUrl),
      MAPGIS_BASE_URL: JSON.stringify(mapgisBaseUrl),
    }),
  ],
  devServer: {
    static: "./dist",
  },
  mode: "development",
};
```

&ensp;&ensp;&ensp;&ensp;然后在 src/main.js 中导入 @mapgis/cesium 库，并配置全局变量 window.Cesium。以VUE 项目为例（React 和 Angular 类似）：

```javascript
import Vue from 'vue'
import router from './sys/router'

import * as Cesium from '@mapgis/cesium'
import '@mapgis/cesium/Build/Cesium/Widgets/widgets.css'
window.Cesium = Cesium

import App from './App.vue'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
```

- 对于 @mapgis/cesium 库：
  **17.4.0 及之后的版本，可同时支持文件方式引入和 npm 方式引入。17.4.0 之前的版本，仅支持文件方式引入。**
  采用文件方式引入，需要将`cesium`文件夹拷贝出来，放入项目的静态资源目录。引入开发库方法请参考 “2、引入开发库 - 2.1 文件方式” ；
  采用 npm 方式引入，需要将`cesium`文件夹拷贝出来，放入项目的`node_modules/@mapgis`文件夹下。此外，@mapgis/cesium 库中位于`node_modules/@mapgis/cesium/Build/Cesium`文件夹下的静态资源 `Assets`、`ThirdParty`、`Widgets`、`Workers`、`MapGIS`文件夹，需要拷贝到项目静态资源目录。引入开发库方法请参考 “2、引入开发库 - 2.2npm 方式” 。

- 对于 @mapgis/webclient-cesium-plugin 库：
  同时支持文件方式引入和 npm 引入方式。
  `@mapgis/webclient-cesium-plugin/dist/es5`文件夹中 webclient-cesium-plugin.min.js 文件支持文件方式引入开发库，需要将 webclient-cesium-plugin.min.js 文件和 webclient-cesium-plugin-resource 文件夹拷贝到项目的静态资源目录，引入开发库方法请参考“2、引入开发库 - 2.1 文件方式” 。

## 2.3、查看 webclient-cesium-plugin 库版本号

@mapgis/webclient-cesium-plugin 库版本号查看方式：
zondy.cesium.VERSION

附：其他 weblcient-javascript 基础库版本查看方式
@mapgis/webclient-common 库：zondy.VERSION
@mapgis/webclient-leaflet-plugin 库：zondy.leaflet.VERSION
@mapgis/webclient-mapboxgl-plugin 库：zondy.mapboxgl.VERSION
@mapgis/webclient-cesium 库：Cesium.MAPGIS_VERSION

# 3、调用库中的接口进行功能开发

以下以“初始化场景视图”为例进行说明。

## 3.1、文件方式

**在项目的 css 文件中设置场景视图容器的样式，否则场景视图无法显示**

```css
/*设置场景视图的样式，一定要设置否则地图无法显示*/
#你的场景视图的id {
  width: 100%;
  height: 100%;
  position: absolute;
}
```

**初始化场景视图对象**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
    />
    <!--引擎库-->
    <script src="http://{ip}:{port}/{你的路径}/cesium/Cesium.js"></script>
    <link
      rel="stylesheet"
      href="http://{ip}:{port}/{你的路径}/cesium/Widgets/widgets.css"
    />
    <!--插件库-->
    <script src="http://{ip}:{port}/{你的路径}/zondyclient/webclient-cesium-plugin.min.js"></script>
    <style>
      /*设置地图视图的样式，一定要设置否则地图无法显示*/
      #你的场景视图的id {
        width: 100%;
        height: 100%;
        position: absolute;
      }
    </style>
    <script>
      //初始化图层管理容器
      const map = new zondy.Map()
      //初始化场景视图对象
      const sceneView = new zondy.cesium.SceneView({
        //视图id
        viewId: '你的场景视图的id',
        //图层管理容器
        map: map
      })
    </script>
  </head>
  <!--场景视图容器div-->
  <div id="你的场景视图的id"></div>
</html>
```

## 3.2、npm 方式

以 VUE 项目为例，React 和 Angular 类似。

**在项目的 css 文件中设置场景视图容器的样式，否则场景视图无法显示**

```css
/*设置场景视图的样式，一定要设置否则地图无法显示*/
#你的场景视图的id {
  width: 100%;
  height: 100%;
  position: absolute;
}
```

**在你的 vue 组件的 template 中设置场景视图容器的 div 元素**

```html
<!--场景视图容器div-->
<div id="你的场景视图的id"></div>
```

**引入需要的构造函数**

```javascript
import * as Cesium from '@mapgis/cesium'
import { SceneView } from '@mapgis/webclient-cesium-plugin'
import { Map } from '@mapgis/webclient-common'
```

**在 mounted 生命周期中初始化场景视图**

```javascript
// 初始化图层管理容器
const map = new Map()
// 初始化地图视图对象
const sceneView = new SceneView({
  // 视图id
  viewId: '你的场景视图的id',
  // 图层管理容器
  map: map
})
```
