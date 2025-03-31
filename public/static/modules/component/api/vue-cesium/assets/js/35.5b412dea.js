(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{513:function(t,v,_){"use strict";_.r(v);var e=_(72),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"地图场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#地图场景"}},[t._v("#")]),t._v(" 地图场景")]),t._v(" "),_("blockquote",[_("p",[t._v("mapgis-web-scene")])]),t._v(" "),_("h2",{attrs:{id:"属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("是否监听")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("libPath")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[_("code",[t._v("http://develop.smaryun.com:8899/static/libs/cdn/cesium/Cesium.js")])]),t._v(" "),_("td",[t._v("cesium 原生 js 实现. 一般是指定为用户代码 public 的"),_("code",[t._v("path/to/cesium")]),t._v("的路径。")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("pluginPath")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[_("code",[t._v("http://develop.smaryun.com:8899/static/libs/cdn/zondyclient/webclient-cesium-plugin.min.js")])]),t._v(" "),_("td",[t._v("cesium 中地插件增强实现， 一般是指定为用户代码 public 的"),_("code",[t._v("path/to/cesium")]),t._v("的路径。")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("vueKey")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("default")]),t._v(" "),_("td",[t._v("mapgis-web-scene 组件的 ID，当使用多个 mapgis-web-scene 组件时，需要指定该值，来唯一标识 mapgis-web-scene 组件 "),_("br"),t._v(" 同时 mapgis-web-scene 插槽中的组件也需要传入相同的 vueKey，让组件知道应该作用于哪一个 mapgis-web-scene。")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("vueIndex")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("(Math.random() * 1000000).toFixed(0)")]),t._v(" "),_("td",[t._v("当 该 key 的主要作用是用来记录 Cesium 的 Source,primitive,entity 的内存中的引用数组的下标，从而避免 vue 对 cesium 的内存劫持")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("height")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("解决分屏时，cesium 无限拉长的问题，要给一个固定高度")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("container")]),t._v(" "),_("td",[t._v("String 或者 HTMLElement")]),t._v(" "),_("td",[t._v('cesium-${("" + Math.random()).split(".")[1]}')]),t._v(" "),_("td",[t._v("Cesium-viewer 绑定的 Dom 元素对象")]),t._v(" "),_("td",[t._v("否")])])])]),t._v(" "),_("p",[t._v("其中 "),_("code",[t._v("path/to/cesium")]),t._v("的目录下一般是成对存在")]),t._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("path-to-cesium\n   "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--- Cesium.js                        "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# libPath")]),t._v("\n   "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--- webclient-cesium-plugin.html     "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Debug 版本说明文件")]),t._v("\n   "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--- webclient-cesium-plugin.js       "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Debug pluginPath")]),t._v("\n   "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--- webclient-cesium-plugin.min.html "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Release 版本说明文件")]),t._v("\n   "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--- webclient-cesium-plugin.min.js   "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Release pluginPath")]),t._v("\n")])])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("下面基础属性可以参考 Cesium.Viewer.ConstructorOptions")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("是否监听")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("animation")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("默认动画控件不显示")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("timeline")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("默认时间轴控制不显示")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("baseLayerPicker")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("默认图层选择器不实现")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("fullscreenButton")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("默认全屏控件不显示")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("vrButton")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("null")]),t._v(" "),_("td",[t._v("默认 VR 控件不显示")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("contextOptions")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("{ webgl:{ preserveDrawingBuffer: true; //默认激活 WebGL 打印输出能力 } }")]),t._v(" "),_("td",[t._v("上下文环境")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("cameraView")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("{ destination:{x: -5087907.392038159,y: 14207074.175879652,z: 3655215.2541255946},orientation:{ heading: 6.1827568973283045,pitch: -1.2409374391413084,roll: 0.0003114284469649675 }}")]),t._v(" "),_("td",[t._v("默认视图位置")]),t._v(" "),_("td",[t._v("否")])])])]),t._v(" "),_("h2",{attrs:{id:"事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),_("p",[t._v("事件载荷由以下三部分组成")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Cesium")]),t._v(" Cesium 原生 js 脚本")]),t._v(" "),_("li",[_("code",[t._v("vueCesium")]),t._v(" Cesium 对象存储管理器")]),t._v(" "),_("li",[_("code",[t._v("CesiumZondy")]),t._v(" CesiumZondy 中地数码的 Cesium 增强插件(持续移除，后期不再使用)")]),t._v(" "),_("li",[_("code",[t._v("component")]),t._v(" 发送当前事件的组件")])]),t._v(" "),_("h3",{attrs:{id:"load"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[t._v("#")]),t._v(" "),_("code",[t._v("@load")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Description:")]),t._v(" 在地图场景加载完毕后发送该事件")]),t._v(" "),_("li",[_("strong",[t._v("Payload")]),t._v(" "),_("code",[t._v("{ Cesium, CesiumZondy, component }")])]),t._v(" "),_("li",[_("ul",[_("li",[_("code",[t._v("Cesium")]),t._v(" Cesium 原生 js 脚本")])])]),t._v(" "),_("li",[_("ul",[_("li",[_("code",[t._v("vueCesium")]),t._v(" Cesium 对象存储管理器")])])]),t._v(" "),_("li",[_("ul",[_("li",[_("code",[t._v("CesiumZondy")]),t._v(" CesiumZondy 中地数码的 Cesium 增强插件(持续移除，后期不再使用)")])])]),t._v(" "),_("li",[_("ul",[_("li",[_("code",[t._v("component")]),t._v(" 发送当前事件的组件")])])])]),t._v(" "),_("p",[t._v("请注意 Cesium"),_("code",[t._v("原生的")]),t._v("EventHandle 的事件还是由原生的方式来控制，此处只上传"),_("code",[t._v("vue框架")]),t._v("层面的事件")])])}),[],!1,null,null,null);v.default=s.exports}}]);