# 1、获取 MapGIS 3DClient for WebGL 开发包

开发时需要引入 MapGIS 3DClient for WebGL 开发包；其中包括必备的 CSS 文件和 JS 文件。

**前往**[司马云官网](http://smaryun.com/dev/download_detail.html#/download828)**下载 MapGIS 3DClient for WebGL 开发库**

以 10.7.4.10 为例，其中：

- mapgis-client-for-javascript-dist-v10.7.4.10.rar 为开发库

- mapgis-client-for-javascript-all-v10.7.4.10.rar 为开发库+示例站点

**开发包位于如下位置**

- @mapgis/webclient-cesium-plugin 库：`mapgis-client-for-javascript-all-v10.7.4.10\dist\cdn\zondyclient\webclient-cesium-plugin.min.js`以及`mapgis-client-for-javascript-all-v10.7.4.10\dist\cdn\zondyclient\webclient-cesium-plugin-resource`

- @mapgis/cesium 库：`mapgis-client-for-javascript-all-v10.7.4.10\dist\cdn\cesium`

# 2、引入开发库

支持通过文件方式引入和 npm 方式引入，您可以根据自身情况选择其中一种。

## 2.1、文件方式引入

**在 index.html 中引入引擎库和插件库**

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

**引入项目本地的库时，请将 webclient-cesium-plugin.min.js 文件、webclient-cesium-plugin-resource 文件夹和 cesium 文件夹拷贝出来，放入项目的静态资源目录。**

## 2.2、npm 方式引入

使用此方式前请先检查电脑中是否已安装应用程序 Node.js，并切换 npm 源为公网。

第一步，获取 npm 包

&ensp;&ensp;&ensp;&ensp;两种 npm install 方式：

&ensp;&ensp;&ensp;&ensp;1.直接安装：

```plain
npm install @mapgis/cesium
npm install @mapgis/webclient-cesium-plugin
```

&ensp;&ensp;&ensp;&ensp;2.在项目 package.json 文件中的 dependencies 内增加@mapgis/cesium、@mapgis/webclient-cesium-plugin 及对应版本号，例如：

```plain
{
  "version": "0.0.0",
  "scripts": {},
  "dependencies": {
    "@mapgis/cesium": "^17.4.0",
    "@mapgis/webclient-cesium-plugin": "^17.4.0"
  },
  "devDependencies": {}
}
```

&ensp;&ensp;&ensp;&ensp;然后再进行安装：

```plain
npm install
```

&ensp;&ensp;&ensp;&ensp;安装完毕后，在项目`node_modules/@mapgis`文件夹中可找到`cesium`文件夹、`webclient-cesium-plugin`文件夹。

第二步，资源导入，**将`node_modules/@mapgis`文件夹下的静态资源 `Assets`、`ThirdParty`、`Widgets`、`Workers`、`MapGIS`文件夹，拷贝到项目静态资源目录`public/[你的cesium静态资源文件夹]`中，例如你的 cesium 静态资源文件夹可为`cesiumStatic`。**

第三步，配置全局变量，资源路径全局变量和 Cesium 对象全局变量。**将 webclient-cesium-plugin.min.js 文件、webclient-cesium-plugin-resource 文件夹和 cesium 文件夹拷贝出来，放入项目的静态资源目录。将 Cesium 对象挂载到全局，并配置 cesium 资源路径 window.CESIUM_BASE_URL 和 webclient-cesium-plugin 资源路径 window.MAPGIS_BASE_URL。**
&ensp;&ensp;&ensp;&ensp;关于 cesium 资源路径和 webclient-cesium-plugin 资源路径的说明，请参考<a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_122_update" target="_blank">《**10.7.2.10 到 10.7.4.10 接口升级**》 </a>中的章节 “二、变更 Q&A - 10.7.4.10 版本引入库的方式发生了哪些变化?” 。
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

**说明：** 第二步资源导入、第三步配置资源路径全局变量，也可通过 webpack 配置完成。Cesium 对象全局变量仍需在项目中配置。

&ensp;&ensp;&ensp;&ensp;以 webpack4 配置为例：在 webpack.config.js 中配置资源导入和资源路径全局变量。（**webpack 更详细的配置，请参考<a href="https://github.com/CesiumGS/cesium-webpack-example" target="_blank">CesiumGS/cesium-webpack-example</a>**）
```javascript
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// @mapgis/cesium 库所在路径
const cesiumSource = "node_modules/@mapgis/cesium/Build/Cesium";
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

&ensp;&ensp;&ensp;&ensp;以 VUE 项目为例（React 和 Angular 类似）：在 src/main.js 中导入 @mapgis/cesium 库，并配置全局变量 window.Cesium。

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

<br />

**说明：**

- 对于 @mapgis/cesium 库：
  **17.4.0 及之后的版本，可同时支持文件方式引入和 npm 方式引入。17.4.0 之前的版本，仅支持文件方式引入。**
  采用文件方式引入，需要将`cesium`文件夹拷贝出来，放入项目的静态资源目录。引入开发库方法请参考 “2、引入开发库 - 2.1 文件方式” ；
  采用 npm 方式引入，需要将`cesium`文件夹拷贝出来，放入项目的`node_modules/@mapgis`文件夹下。此外，@mapgis/cesium 库中位于`node_modules/@mapgis/cesium/Build/Cesium`文件夹下的静态资源 `Assets`、`ThirdParty`、`Widgets`、`Workers`、`MapGIS`文件夹，需要拷贝到项目静态资源目录。引入开发库方法请参考 “2、引入开发库 - 2.2npm 方式” 。
- 对于 @mapgis/webclient-cesium-plugin 库：
  同时支持文件方式引入和 npm 引入方式。
  `@mapgis/webclient-cesium-plugin/dist/es5`文件夹中 webclient-cesium-plugin.min.js 文件支持文件方式引入开发库，需要将 webclient-cesium-plugin.min.js 文件和 webclient-cesium-plugin-resource 文件夹拷贝到项目的静态资源目录，引入开发库方法请参考“2、引入开发库 - 2.1 文件方式” 。

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
