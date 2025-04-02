# MapGIS Client for JavaScript 示例站点使用说明

- [MapGIS Client for JavaScript 示例站点使用说明](#mapgis-client-for-javascript-示例站点使用说明)
  - [一、目录结构](#一目录结构)
  - [二、示例运行](#二示例运行)
    - [1、安装依赖环境](#1安装依赖环境)
    - [2、编译测试](#2编译测试)
    - [3、代码格式检查](#3代码格式检查)
    - [4、替换资源引用地址](#4替换资源引用地址)
    - [5、打包](#5打包)
    - [6、自定义配置](#6自定义配置)
  - [三、站点发布](#三站点发布)
    - [1. Windows](#1-windows)
      - [MIME](#mime)
      - [IIS WebConfig](#iis-webconfig)
    - [2. Linux](#2-linux)
    - [3. Node.js](#3-nodejs)
    - [4. express windows-server-2003](#4-express-windows-server-2003)

## 一、目录结构

```text
  |-- dist                    	-- 打包好的示例站点存放路径
  |-- express                   -- node服务，在一些wind2003等老机器上替代IIS
  |-- public                    -- 网页的公共路径
    |-- static                  -- 示例目录
      |-- assets                -- 公共图片
      |-- data                	-- 示例数据，由于示例数据所占内存较大，项目里面默认不带有示例数据，由开发者自行准备
      |-- modules               -- 示例代码
        |-- cesium              -- Cesium示例
          |-- example           -- Cesium示例代码
          |-- example-gallery   -- Cesium示例功能效果图
          |-- example-introduce -- 10.6.0.10以前的示例说明文档
          |-- guide           	-- Cesium产品介绍相关文档
          |-- produce           -- Cesium开发教程相关文档
          |-- fqa               -- 常见问题相关文档
          |-- source           	-- Cesium产品介绍和开发教程文档引用的图片资源
          |-- config-cesium.json-- Cesium示例目录配置文件
       	|-- common              -- common示例
      	|-- component           -- 组件示例
        |-- config              -- 示例站点导航相关配置含示例目录配置文件
        |-- leaflet             -- Leaflet示例
        |-- mapboxgl            -- MapBoxGL示例
        |-- openlayers          -- OpenLayers示例
      |-- libs                  -- 示例代码需要的引用库
    |-- favicon.svg             -- 示例站点Tab标签图标
    |-- index.html             	-- 示例站点入口
  |-- src                       -- 示例网页的vue代码
  |-- .eslintignore             -- eslint检查忽略项
  |-- .gitignore                -- git上传忽略项
  |-- babel.config.js			-- babel设置项
  |-- package.json				-- package.json
  |-- README.md					-- 项目介绍
  |-- vue.config.js				-- vue配置
```

## 二、示例运行

提供 npm 和 yarn 两种方式编译、运行、打包站点，在安装依赖环境前，需配置 Node.js 或 yarn 环境，然后采用对应的命令执行相应的操作。

### 1、安装依赖环境

**node版本：Node 14.x版本**

```
npm install
# or
yarn install
```

### 2、编译测试

```
npm run serve
# or
yarn serve
```

### 3、代码格式检查

```
npm run lint
# or
yarn lint
```

### 4、替换资源引用地址
若将站点部署在内网服务器上时，需要将示例中的依赖库和服务地址改为对应的内网地址

#### 4.1.依赖库地址
将 “http://192.168.82.91:8086/” 或 “http://webclient.smaryun.com/” 替换为  “http://你的内网服务器地址/”
#### 4.2.服务地址

- 文件服务：将 “http://192.168.82.91:8200/” 或 “http://webclient.smaryun.com:8200/” 替换为  “http://你的内网文件服务地址/”

- IGS服务1.0：将 “http://192.168.82.91:6163/” 或 “http://webclient.smaryun.com:6163/” 替换为  “http://你的内网IGS1.0服务地址/”

- IGS服务2.0：将 “http://192.168.82.91:8089/” 或 “http://webclient.smaryun.com:8089/” 替换为  “http://你的内网IGS2.0服务地址/”

#### 4.3.OpenLayers示例引用地址替换

在打包号的dist文件夹中，打开dist/static/libs/下的include-openlayers-local.js文件，拉倒最底下，将如下代码中的ip和port修改为内网服的ip和port

```
  window.webclient = {
    ip: "192.168.82.91",
    port: 6163,
    protocol: "http",
  };
```

### 5、打包

```
npm run build
# or
yarn build
```
打包后的示例站点，在和package.json同级的dist文件夹中，将dist文件夹中的内容拷贝到你的服务目录文件夹中
**打包后需要额外拷贝如下文件**

#### 5.1.拷贝 webclient 库
1. 拷贝 webclient-common 库JS包 “webclient-common\dist\es5” 到文件夹 “\static\libs\cdn\zondyclient” 下
2. 拷贝 webclient-cesium-plugin 库 JS 包 “webclient-cesium-plugin\dist\es5” 到文件夹 “\static\libs\cdn\zondyclient” 下
3. 拷贝 webclient-leaflet-plugin 库 JS 包 “webclient-leaflet-plugin\dist\es5” 到文件夹 “\static\libs\cdn\zondyclient” 下
4. 拷贝 webclient-mapboxgl-plugin 库 JS 包 “webclient-mapboxgl-plugin\dist\es5” 到文件夹 “\static\libs\cdn\zondyclient” 下
5. 拷贝 webclient-video-plugin 库 JS 包 “webclient-video-plugin\dist\es5” 到文件夹 “\static\libs\cdn\zondyclient” 下
6. 拷贝 webclient-plot 库 JS 包 “webclient-plot\dist” 到文件夹 “\static\libs\cdn\zondyclient” 下
7. 拷贝 webclient-cesium 库 JS 包 “cesium\Build\Cesium” 到文件夹 “\static\libs\cdn\cesium” 下
8. 拷贝 webclient-cesium 库（10.7.2.10）JS 包 “cesium\dist” 到文件夹 “\static\libs\cdn\cesium-10.7.2.10” 下
9. 拷贝 webclient-leaflet 库 JS 包 “leaflet\dist” 到文件夹 “\static\libs\cdn\leaflet” 下
10. 拷贝 webclient-mapboxgl 库 JS包 “mapbox-gl\dist” 到文件夹 “\static\libs\cdn\mapboxgl” 下

#### 5.2.拷贝 API 文档和 storybook
1. 拷贝 webclient-common 库 API 文档 “webclient-common\documentation” 到文件夹 “\static\modules\common\api\common-mapgis” 下。
2. 拷贝 webclient-cesium-plugin 库 API 文档 “webclient-cesium-plugin\documentation” 到文件夹 “\static\modules\cesium\api\cesium-mapgis” 下
3. 拷贝 webclient-leaflet-plugin 库 API 文档 “webclient-leaflet-plugin\documentation” 到文件夹 “\static\modules\leaflet\api\leaflet-mapgis” 下
4. 拷贝 webclient-mapboxgl-plugin 库 API 文档 “webclient-mapboxgl-plugin\documentation” 到文件夹 “\static\modules\mapboxgl\api\mapboxgl-mapgis” 下
5. 拷贝 webclient-video-plugin 库 API 文档 “webclient-video-plugin\documentation” 到文件夹 “\static\modules\video\api\video-mapgis” 下
6. 拷贝 webclient-openlayers-plugin 库 API 文档 “mapgis-client-for-javascript-dist-vx.x.x.x\static\modules\openlayers\api\openlayers-mapgis” 到文件夹 “\static\modules\openlayers\api\openlayers-mapgis” 下
7. 拷贝 webclient-plot 库 API 文档 “webclient-plot\documentation” 到文件夹 “\static\modules\common\api\common-plot” 下
8. 拷贝 webclient-cesium 库 API 文档 “cesium\documentation” 到文件夹 “\static\modules\cesium\api\cesium” 下
9. 拷贝 webclient-cesium 库（10.7.2.10）API 文档 “cesium\documentation” 到文件夹 “\static\modules\cesium\api\cesium-10.7.2.10” 下
10. 拷贝 webclient-mapboxgl 库 API 文档 “mapbox-gl\documentation” 到文件夹 “\static\modules\mapboxgl\api\mapboxgl” 下
11. 拷贝 webclient-vue 库 API 文档 “mapgis-client-for-javascript-dist-vx.x.x.x\static\modules\component\api” 到文件夹 “\static\modules\component\api” 下
12. 拷贝 webclient-vue 库 storybook “mapgis-client-for-javascript-dist-vx.x.x.x\storybook” 到文件夹 “\storybook” 下

#### 5.3.拷贝示例数据
1. 拷贝示例数据 data 包 “mapgis-client-for-javascript-dist-vx.x.x.x\static\data” 到文件夹 “\static\data” 下

### 6、自定义配置

请看 [配置引用](https://cli.vuejs.org/config/).

## 三、站点发布

在示例站点目录执行如下命令打包，打包成功后会在目录下生成 dist 文件夹，站点发布时需将此目录发布

```
npm run build
# or
yarn build
```

### 1、Windows

> 对于 Windows 2008 后（包括 2008）的版本，直接使用 IIS 将 website/dist 目录发布到 IIS 服务中即可正常使用。
#### MIME

| 后缀     | 类型                                 |
| :------- | :----------------------------------- |
| .md      | application/markdown                 |
| .b3dm    | application/octet-stream             |
| .b3im    | application/octet-stream             |
| .geojson | application/json                     |
| pbf      | application/x-protobuf               |
| .czml    | application/json                     |
| .gltf    | model/gltf+json                      |
| .kml     | application/vnd.google-earth.kml+xml |
| .kmz     | application/vnd.google-earth.kmz     |
| .webp    | image/webp                           |
| .wasm    | application/wasm                     |
| .m3d     | application/octet-stream             |
| .csv     | text/csv                             |
| .dbf     | application/octet-stream             |
| .shp     | application/octet-stream             |

#### IIS WebConfig

> 为了解决 jsdoc 在 window 下的`IIS请求筛选模块被配置为拒绝包含双重转义序列的请求`，需要设置以下安全策略
web.config 文件如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <httpProtocol>
            <customHeaders>
                <add name="Access-Control-Allow-Origin" value="*" />
            </customHeaders>
        </httpProtocol>
        <staticContent>
            <mimeMap fileExtension=".czml" mimeType="application/json" />
            <mimeMap fileExtension=".glsl" mimeType="text/plain" />
            <mimeMap fileExtension=".m3d" mimeType="application/octet-stream" />
            <mimeMap fileExtension=".mcj" mimeType="application/octet-stream" />
            <mimeMap fileExtension=".gltf" mimeType="model/gltf+json" />
            <mimeMap fileExtension=".bgltf" mimeType="model/gltf-binary" />
            <mimeMap fileExtension=".glb" mimeType="application/json" />
            <mimeMap fileExtension=".models" mimeType="application/json" />
            <mimeMap fileExtension=".topojson" mimeType="application/json" />
            <mimeMap fileExtension=".kml" mimeType="application/vnd.google-earth.kml+xml" />
            <mimeMap fileExtension=".kmz" mimeType="application/vnd.google-earth.kmz" />
            <mimeMap fileExtension=".terrain" mimeType="application/vnd.quantized-mesh" />
            <mimeMap fileExtension=".ktx" mimeType="image/ktx" />
            <mimeMap fileExtension=".webp" mimeType="image/webp" />
            <mimeMap fileExtension=".wasm" mimeType="application/wasm" />
        </staticContent>
	    <security>
		    <requestFiltering allowDoubleEscaping="true"/>
	    </security>
    </system.webServer>
</configuration>
```

### 2、Linux

> 使用 nginx / tomcat 发布 dist 目录的网页

### 3、Node.js

> 请使用 http-server 来预览网页

需在 website 目录中配置 http-server 环境：

```
npm install -g http-server
```

然后调用如下命令发布网站：

```
cd /path/to/website/dist
http-server -p 8899
```

### 4、express windows-server-2003

express 后台运行发布

> 针对 windows-server-2003 的老操作系统,由于其不支持各种新的三维纹理以及特殊的 json 格式，mvt.pbf 格式因此统一处理成二进制文件

1. 安装全局的 express 环境
    ```sh
    npm install -g express-generator@4
    ```

2. 进入对应的 webclient-javascript-vue 的 express 目录下
    ```sh
    cd path/to/website/express
    ```

3. 在 express 目录下新建 server 文件夹,并按需修改 app.js 中的端口
    ```sh
    express server && cd server
    ```
    ```js
    app.listen(8899);
    ```

4. 在 server 目录下安装依赖
    ```sh
    npm install
    npm install --save node-windows
    npm start
    ```

5. 复制上一级中的 windowserver.js 到当前目录，并修改里面的路径
    ```js
    let svc = new Service({
        name: 'WebClientTest', //服务名称
        description: 'WebClient项目NodeJs服务器', //描述
        script: 'path/to/webclient-javascript-vue/express/server/bin/www' //nodejs项目要启动的文件路径
    });
    ```

6. 启动对应的 windowserver 脚本，注册为 windows 的服务
    ```sh
    node windowserver.js
    ```

7. 在 Windows 的服务中，启动服务，默认情况是随开机自启的
