# 1、获取 MapGIS Client for JavaScript（common） 开发包

开发时需要引入 MapGIS Client for JavaScript（common） 开发包；其中包括必备的 JS 文件。

**前往**[司马云官网](http://smaryun.com/dev/download_detail.html#/download828)**下载 MapGIS Client for JavaScript（common） 开发库**

以 10.7.6.12 为例，其中：

**前往**[司马云官网](http://smaryun.com/dev/download_detail.html#/download828)**下载MapGIS Client for JavaScript开发库**

以 10.7.6.12 为例，其中：

- mapgis-client-for-javascript-dist-v10.7.6.12.rar为开发库

- mapgis-client-for-javascript-all-v10.7.6.12.rar为开发库+示例站点

**开发包位于如下位置**

- @mapgis/webclient-common 库：`mapgis-client-for-javascript-all-v10.7.6.12\static\libs\cdn\zondyclient\webclient-common.min.js`以及`mapgis-client-for-javascript-all-v10.7.6.12\dist\cdn\zondyclient\webclient-common-resource`

# 2、引入开发库

支持通过文件方式引入和 npm 方式引入，您可以根据自身情况选择其中一种。

## 2.1、文件方式引入

第一步，将开发包中的 webclient-common.min.js 文件和 webclient-common-resource 文件夹拷贝到项目的静态资源目录中，并在 index.html 中引入 common 库。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <!--common库-->
    <script src="http://{ip}:{port}/{你的路径}/zondyclient/webclient-common.min.js"></script>
</head>
</html>
```

从 10.7.6.12 版本开始，webclient-common 库新增了静态资源，因此在使用时需要执行以下额外的操作步骤：
第二步，配置 webclient-common 库资源路径全局变量 MAPGIS_BASE_URL。如果不做配置，则默认使用 webclient-common.min.js 文件所在的录路径作为 MAPGIS_BASE_URL 的值。

## 2.2、npm 方式引入

使用此方式前请先检查电脑中是否已安装应用程序 Node.js，并切换 npm 源为公网。

第一步，获取 npm 包

&ensp;&ensp;&ensp;&ensp;两种 npm install 方式：

&ensp;&ensp;&ensp;&ensp;1.直接安装：
```plain
npm install @mapgis/webclient-common
```
&ensp;&ensp;&ensp;&ensp;2.在项目 package.json 文件中的 dependencies 内增加 @mapgis/webclient-common 及对应版本号，例如：

```plain
{
  "version": "0.0.0",
  "scripts": {},
  "dependencies": {
    "@mapgis/webclient-common": "^17.4.0"
  },
  "devDependencies": {}
}
```

&ensp;&ensp;&ensp;&ensp;然后再进行安装：
```plain
npm install
```
&ensp;&ensp;&ensp;&ensp;安装完毕后，在项目`node_modules/@mapgis`文件夹中可找到`webclient-common`文件夹。

从 @mapgis/webclient-common v17.6.8 版本开始，webclient-common 库增加了静态资源，因此在使用时需要执行以下两个额外的操作步骤：

第二步，资源导入。

&ensp;&ensp;&ensp;&ensp;将 `@mapgis/webclient-common` 中的静态资源 `webclient-common-resource`文件夹，拷贝到项目静态资源目录中。

第三步，配置资源路径全局变量。

&ensp;&ensp;&ensp;&ensp;在引入 webclient-common 库之前，需要预先设置 MAPGIS_BASE_URL 全局变量。将 webclient-common-resource 资源文件夹所在的目录路径赋值给 window 上的变量 MAPGIS_BASE_URL。
&ensp;&ensp;&ensp;&ensp;通过 npm 方式引入库文件时，必须设置 MAPGIS_BASE_UR（无默认值），否则 webclient-common 库无法使用其静态资源文件。以 VUE 项目为例，推荐在 src/main.js 中设置 window.MAPGIS_BASE_URL =  “xxx”（资源路径）。例如，若将 webclient-common-resource 文件夹放置在 public 目录下，则应在 src/main.js 中设置 window.MAPGIS_BASE_URL = “http://xxx/”。

&ensp;&ensp;&ensp;&ensp;备注：webclient-common 和 webclient-cesium-plugin 库对 MAPGIS_BASE_URL 的配置方式相同，两个库共享同一个资源路径变量 MAPGIS_BASE_URL。

&ensp;&ensp;&ensp;&ensp;**示例**：
&ensp;&ensp;&ensp;&ensp;以 VUE 项目为例（React 和 Angular 类似）：在 src/main.js 中配置全局变量 window.MAPGIS_BASE_URL。

```javascript
import Vue from 'vue'
import router from './sys/router'

// 配置 webclient-common 资源路径全局变量
window.MAPGIS_BASE_URL = 'http://localhost:8080/'

import App from './App.vue'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
```

<br />

**说明：**
- 第二步资源导入、第三步配置资源路径全局变量，也可通过 webpack 配置完成。

&ensp;&ensp;&ensp;&ensp;首先在 webpack.config.js 中配置资源导入和资源路径全局变量。以 webpack4 配置为例：
```javascript
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// @mapgis/webclient-common 库所在路径
const commonSource = "node_modules/@mapgis/webclient-common";
// 项目的静态资源目录
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
    // 拷贝 webclient-common 库静态资源 webclient-common-resource 到项目静态资源目录'public'
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(commonSource, "webclient-common-resource"),
          to: `${mapgisBaseUrl}/webclient-common-resource`,
        },
      ],
    }),
    new webpack.DefinePlugin({
      // 定义 webclient-common 库静态资源路径全局变量
      MAPGIS_BASE_URL: JSON.stringify(mapgisBaseUrl),
    }),
  ],
  devServer: {
    static: "./dist",
  },
  mode: "development",
};
```

- 对于 @mapgis/webclient-common 库：
同时支持文件方式引入和 npm 引入方式。
`@mapgis/webclient-common/dist/es5`文件夹中 webclient-common.min.js 文件支持文件方式引入开发库，需要将 webclient-common.min.js 文件和 webclient-common-resource 文件夹拷贝到项目的静态资源目录，引入开发库方法请参考“2、引入开发库 - 2.1文件方式” 。

# 3、调用库中的接口进行功能开发

以下以“初始化图层对象”为例进行说明。

## 3.1、文件方式

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <!--common库-->
    <script src="http://{ip}:{port}/{你的路径}/zondyclient/webclient-common.min.js"></script>
    <script>
      // 例如初始化一个图层对象
      const mapImageLayer = new zondy.layer.IGSMapImageLayer()
    </script>
</head>
</html>
```

## 3.2、npm 方式

以 VUE 项目为例，React 和 Angular 类似。

**引入需要的构造函数**

```javascript
import { IGSMapImageLayer } from "@mapgis/webclient-common"
```

**例如在 mounted 生命周期中初始化一个地图图片图层**

```javascript
// 初始化一个地图图片图层
const mapImageLayer = new IGSMapImageLayer();
```
