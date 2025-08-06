开发库分为正式版和 Beta 版：

- 正式版：面向外部和内部用户，所含功能都经过了测试部的测试，某一正式版发行后，不会增加新功能，仅会修订 BUG。npm 版本号中间一位为偶数，如 17.4.x。
- Beta 版：面向内部用户，已经对外发行的和未正式对外发行的新功能会体现在该版本，npm 版本号中间一位为奇数，如 17.5.x。

# 1、获取 MapGIS Client for JavaScript（Leaflet） 开发包


开发时需要引入 MapGIS Client for JavaScript（Leaflet） 开发包；其中包括必备的 CSS 文件和 JS 文件。


**前往内网开发库下载 MapGIS Client for JavaScript（Leaflet） 相关开发包，内网 npm 上既有正式版也有 beta 版，但公网 npm 上只有正式版。**

- [@mapgis/webclient-leaflet-plugin](http://192.168.11.130:4873/-/web/detail/@mapgis/webclient-leaflet-plugin)

- [@mapgis/leaflet](http://192.168.11.130:4873/-/web/detail/@mapgis/leaflet)

以 17.5.0 版本为例进行说明

1.在该网页中请先选择要下载的版本

<center>

<img src="http://webclient.smaryun.com/static/modules/leaflet/source/img/开发指南_1.png" style="zoom:100%;" />

</center>

2.之后点击相应的版本号，在右侧点击下载按钮，下载压缩包

<center>

<img src="http://webclient.smaryun.com/static/modules/leaflet/source/img/开发指南_2.png" style="zoom:100%;" />

</center>

**开发包位于如下位置**

- @mapgis/webclient-leaflet-plugin 库：`webclient-leaflet-plugin-17.5.0\package\dist\webclient-leaflet-plugin.min.js`

- @mapgis/leaflet 库：`leaflet-17.5.0\package\dist`

# 2、引入开发库

支持通过文件方式引入和 npm 方式引入，您可以根据自身情况选择其中一种。

## 2.1、文件方式引入

**在 index.html 中引入引擎库和插件库**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <!--引擎库-->
    <link rel="stylesheet" href="http://{ip}:{port}/{你的路径}/leaflet/leaflet.css">
    <script src="http://{ip}:{port}/{你的路径}/leaflet/leaflet.js"></script>
    <!--plugin库-->
    <script src="http://{ip}:{port}/{你的路径}/zondyclient/webclient-leaflet-plugin.min.js"></script>
</head>
</html>
```

**引入项目本地的库时，将 webclient-leaflet-plugin.min.js 文件和 leaflet 文件夹拷贝出来，放入项目的静态资源目录。**

## 2.2、npm 方式引入

使用此方式前请先检查电脑中是否已安装应用程序 Node.js，**请先将 npm 源切换为内网：**

```plain
npm set registry http://192.168.11.130:4873/
```

获取 npm 包，两种 npm install 方式：

&ensp;&ensp;&ensp;&ensp;1.直接安装：

```plain
npm install @mapgis/webclient-leaflet-plugin
```

&ensp;&ensp;&ensp;&ensp;2.在项目 package.json 文件中的 dependencies 内增加 @mapgis/webclient-leaflet-plugin 及对应版本号，例如：

```plain
{
  "version": "0.0.0",
  "scripts": {},
  "dependencies": {
    "@mapgis/webclient-leaflet-plugin": "^17.5.0"
  },
  "devDependencies": {}
}
```
&ensp;&ensp;&ensp;&ensp;然后再进行安装：

```plain
npm install
```

&ensp;&ensp;&ensp;&ensp;安装完毕后，在项目`node_modules/@mapgis`文件夹中可找到`webclient-leaflet-plugin`文件夹、`leaflet`文件夹。

<br />

**说明：**
- 对于 @mapgis/webclient-leaflet-plugin 库：
同时支持文件方式引入和 npm 引入方式。
`@mapgis/webclient-leaflet-plugin/dist/es5`文件夹中 webclient-leaflet-plugin.min.js 文件支持文件方式引入开发库，需要将 webclient-leaflet-plugin.min.js 文件拷贝到项目的静态资源目录，引入开发库方法请参考“2、引入开发库 - 2.1文件方式” 。

# 3、调用库中的接口进行功能开发

以下以“初始化场景视图”为例进行说明。

## 3.1、文件方式

**在项目的css文件中设置地图视图容器的样式，否则地图视图无法显示**

```css
/*设置地图视图的样式，一定要设置否则地图无法显示*/
#你的地图视图的id {
    width: 100%;
    height: 100%;
    position: absolute;
}
```

**初始化地图视图对象**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
     <!--引擎库-->
    <link rel="stylesheet" href="http://{ip}:{port}/{你的路径}/leaflet/leaflet.css">
    <script src="http://{ip}:{port}/{你的路径}/leaflet/leaflet.js"></script>
    <!--plugin库-->
    <script src="http://{ip}:{port}/{你的路径}/zondyclient/webclient-leaflet-plugin.min.js"></script>
    <style>
      /*设置地图视图的样式，一定要设置否则地图无法显示*/
      #你的地图视图的id {
        width: 100%;
        height: 100%;
        position: absolute;
      }
    </style>
    <script>
      // 初始化图层管理容器
      const map = new zondy.Map()
      // 初始化地图视图对象
      const mapView = new zondy.leaflet.MapView({
        // 视图id
        viewId: '你的地图视图的id',
        // 图层管理容器
        map: map
      })
    </script>
</head>
<!--地图视图容器div-->
<div id="你的地图视图的id">
</div>
</html>
```

## 3.2、npm 方式

以 VUE 项目为例，React 和 Angular 类似。

**在项目的 css 文件中设置地图视图容器的样式，否则地图视图无法显示**

```css
/*设置地图视图的样式，一定要设置否则地图无法显示*/
#你的地图视图的id {
    width: 100%;
    height: 100%;
    position: absolute;
}
```

**在你的 vue 组件的 template 中设置地图视图容器的 div 元素**

```html
<!--地图视图容器div-->
<div id="你的地图视图的id">
</div>
```

**引入需要的构造函数**

```javascript
import { MapView } from '@mapgis/webclient-leaflet-plugin'
import { Map } from "@mapgis/webclient-common"
```

**在 mounted 生命周期中初始化地图视图**

```javascript
// 初始化图层管理容器
const map = new Map();
// 初始化地图视图对象
const mapView = new MapView({
  // 视图id
  viewId: "你的地图视图的id",
  // 图层管理容器
  map: map
});
```
