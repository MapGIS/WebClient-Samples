开发库分为正式版和 Beta 版：

- 正式版：面向外部和内部用户，所含功能都经过了测试部的测试，某一正式版发行后，不会增加新功能，仅会修订 BUG。npm 版本号中间一位为偶数，如 17.4.x。
- Beta 版：面向内部用户，已经对外发行的和未正式对外发行的新功能会体现在该版本，npm 版本号中间一位为奇数，如 17.5.x。

# 1、获取 MapGIS Client for JavaScript（common） 开发包

开发时需要引入 MapGIS Client for JavaScript（common） 开发包；其中包括必备的 JS 文件。

**前往内网 npm 站点下载 MapGIS Clientfor JavaScript（common） 相关开发包，内网 npm 上既有正式版也有 beta 版，但公网 npm 上只有正式版。**

* [@mapgis/](http://192.168.11.130:4873/-/web/detail/@mapgis/webclient-common)[webclient-common](http://192.168.11.130:4873/-/web/detail/@mapgis/webclient-common)

以 17.5.0 版本为例进行说明

1.在该网页中请先选择要下载的版本

<center>

  <img src="http://10.10.130.72:8086/static/modules/common/source/img/开发指南_1.png" style="zoom:100%;" />

</center>


2.之后点击相应的版本号，在右侧点击下载按钮，下载压缩包


<center>

  <img src="http://10.10.130.72:8086/static/modules/common/source/img/开发指南_2.png" style="zoom:100%;" />

</center>

**开发包位于如下位置**

- @mapgis/webclient-common 库：`webclient-common-17.5.0\package\dist\webclient-common.min.js`

# 2、引入开发库

支持通过文件方式引入和 npm 方式引入，您可以根据自身情况选择其中一种。

## 2.1、文件方式引入

**在 index.html 中引入 common 库**

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

**引入项目本地的库时，请将 webclient-common.min.js 文件拷贝出来，放入项目的静态资源目录。**

## 2.2、npm 方式引入

使用此方式前请先检查电脑中是否已安装应用程序 Node.js，**请先将 npm 源切换为内网：**

```plain
npm set registry http://192.168.11.130:4873/
```

获取 npm 包，两种 npm install 方式：

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
    "@mapgis/webclient-common": "^17.5.0"
  },
  "devDependencies": {}
}
```

&ensp;&ensp;&ensp;&ensp;然后再进行安装：
```plain
npm install
```
&ensp;&ensp;&ensp;&ensp;安装完毕后，在项目`node_modules/@mapgis`文件夹中可找到`webclient-common`文件夹。

<br />

**说明：**
- 对于 @mapgis/webclient-common 库：
同时支持文件方式引入和 npm 引入方式。
`@mapgis/webclient-common/dist/es5`文件夹中 webclient-common.min.js 文件支持文件方式引入开发库，需要将 webclient-common.min.js 文件拷贝到项目的静态资源目录，引入开发库方法请参考“2、引入开发库 - 2.1文件方式” 。

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
