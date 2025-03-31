(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{570:function(t,a,s){"use strict";s.r(a);var e=s(72),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("mapgis-3d-city-grow")])]),t._v(" "),s("p",[s("font",{staticStyle:{color:"red"}},[t._v(" 注意：")]),t._v("由于三维底层支持原因，目前仅支持二维矢量文档形式的数据。\n数据中必须包含的字段有开始时间字段（时间戳格式）、结束时间字段（时间戳形式）以及表示高程的字段。")],1),t._v(" "),s("h2",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("h3",{attrs:{id:"vuekey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuekey"}},[t._v("#")]),t._v(" "),s("code",[t._v("vueKey")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("String")])]),t._v(" "),s("li",[s("strong",[t._v("可选")])]),t._v(" "),s("li",[s("strong",[t._v("非侦听属性")])]),t._v(" "),s("li",[s("strong",[t._v("默认值:")]),t._v(" "),s("code",[t._v("default")])]),t._v(" "),s("li",[s("strong",[t._v("描述:")]),t._v(" mapgis-web-scene 组件的 ID，当使用多个 mapgis-web-scene 组件时，需要指定该值，来唯一标识 mapgis-web-scene 组件，同时 mapgis-web-scene 插槽中的组件也需要传入相同的 vueKey，让组件知道应该作用于哪一个 mapgis-web-scene。")])]),t._v(" "),s("h3",{attrs:{id:"vueindex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vueindex"}},[t._v("#")]),t._v(" "),s("code",[t._v("vueIndex")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("Number")])]),t._v(" "),s("li",[s("strong",[t._v("可选")])]),t._v(" "),s("li",[s("strong",[t._v("非侦听属性")])]),t._v(" "),s("li",[s("strong",[t._v("默认值:")]),t._v(" "),s("code",[t._v("(Math.random() * 100000000).toFixed(0)")]),t._v("随机计算值")]),t._v(" "),s("li",[s("strong",[t._v("描述:")]),t._v(" 当 mapgis-web-scene 插槽中使用了多个相同组件时，例如多个 mapgis-3d-igs-doc-layer 组件，用来区分组件的标识符。")])]),t._v(" "),s("h3",{attrs:{id:"baseurl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#baseurl"}},[t._v("#")]),t._v(" "),s("code",[t._v("baseUrl")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("String")])]),t._v(" "),s("li",[s("strong",[t._v("非侦听属性")])]),t._v(" "),s("li",[s("strong",[t._v("描述:")]),t._v(" 二维矢量文档形式的url")]),t._v(" "),s("li",[s("strong",[t._v("默认值:")]),t._v("  服务基地址：发布的二维文档地址， eg：二维地图文档地址：http://[host]:[port]/igs/rest/mrfs/docs/{docName}/mapIndex/LayerIndex。")])]),t._v(" "),s("h3",{attrs:{id:"autoreset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autoreset"}},[t._v("#")]),t._v(" autoReset")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("Boolean")])]),t._v(" "),s("li",[s("strong",[t._v("可选")])]),t._v(" "),s("li",[s("strong",[t._v("非侦听属性")])]),t._v(" "),s("li",[s("strong",[t._v("描述:")]),t._v(" 视角是否自动切换到地图文档范围。")])]),t._v(" "),s("h3",{attrs:{id:"filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" filter")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("Object")])]),t._v(" "),s("li",[s("strong",[t._v("可选")])]),t._v(" "),s("li",[s("strong",[t._v("侦听属性")])]),t._v(" "),s("li",[s("strong",[t._v("描述:")]),t._v(" 过滤条件对象，空对象则默认无过滤。该对象中可传属性：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Where")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要素过滤条件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("geometry")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("几何类型对应的图层信息，也就是构成几何类型的坐标信息。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("geometryType")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("几何类型，代表空间查询时传入的几何类型")])])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("示例:")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    filter: {\n           where: 'OBJECTID>500'\n     }\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"featurestyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#featurestyle"}},[t._v("#")]),t._v(" featureStyle")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("Object")])]),t._v(" "),s("li",[s("strong",[t._v("可选")])]),t._v(" "),s("li",[s("strong",[t._v("侦听属性")])]),t._v(" "),s("li",[s("strong",[t._v("描述:")]),t._v(" 矢量地图文档对应图层做城市生长的style 样式对象,\nfeatureStyle对象中包括以下属性：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("startTimeField")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'startTime'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("矢量文档数据中的建筑生长开始时间字段名。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("endTimeField")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'endTime'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("矢量文档数据中的建筑生长结束时间字段名。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("heightField")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'height'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("矢量文档数据中的建筑用作高程的属性字段名称，不设置则高程为零")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("heightRatio")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("建筑生长高程的缩放比例")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("startTime")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("城市建筑生长的起始时间（）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("endTime")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("城市建筑生长的结束时间（）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("colors")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('["#fff0f6","#ff85c0","#eb2f96"]')]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("城市生长的时间段对应颜色设置")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("times")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("[]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("城市生长的时间段设置，默认值为空，不传该参数则按colors数组长度等分设置时间段")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("displayWithTile")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Line或Tile 根据时间线性加载(false)或网格动态加载(true)，适用不同的数据量展示，默认为线性加载。1. Line：线性加载，是指依照时间段进行加载，每个时间段的加载量由buildingLimit来限制；2.Tile：网格动态加载，是指内部逻辑实现根据当前视角距离计算满足显示精度的瓦片，并请求加载数据渲染城市建筑。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("growTime")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("60")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("城市生长的总播放时长，单位秒。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("buildingsLimit")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("400")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("线性加载时每一时段的矢量要素数量限制")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("updateInterval")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("城市生长过程中建筑物颜色和高度更新间隔，默认1s更新一次")])])])]),t._v(" "),s("h3",{attrs:{id:"tilefeaturescount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tilefeaturescount"}},[t._v("#")]),t._v(" "),s("code",[t._v("tileFeaturesCount")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("Number")])]),t._v(" "),s("li",[s("strong",[t._v("非侦听属性")])]),t._v(" "),s("li",[s("strong",[t._v("描述:")]),t._v(" 网格加载时请求的矢量要素数量")]),t._v(" "),s("li",[s("strong",[t._v("默认值:")]),t._v(" 400")])]),t._v(" "),s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("h3",{attrs:{id:"startgrow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#startgrow"}},[t._v("#")]),t._v(" "),s("code",[t._v("startGrow")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Description:")]),t._v(" 开启城市生长")])]),t._v(" "),s("h3",{attrs:{id:"stopgrow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stopgrow"}},[t._v("#")]),t._v(" "),s("code",[t._v("stopGrow")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Description:")]),t._v(" 暂停城市生长")])]),t._v(" "),s("h2",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),s("h3",{attrs:{id:"loaded"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loaded"}},[t._v("#")]),t._v(" "),s("code",[t._v("loaded")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Description:")]),t._v(" 在 城市生长 加载完毕后发送该事件")]),t._v(" "),s("li",[s("strong",[t._v("Payload")]),t._v(" 城市生长组件对象")])]),t._v(" "),s("h3",{attrs:{id:"citygrow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#citygrow"}},[t._v("#")]),t._v(" "),s("code",[t._v("CityGrow")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Description:")]),t._v(" 在 开始城市生长 加载完毕后发送该事件")]),t._v(" "),s("li",[s("strong",[t._v("Payload")]),t._v(" 城市生长图层 对象")])]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapgis-web-scene")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("95vh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("load")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleLoad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapgis-rastertile-layer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("layerId")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tdt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://t0.tianditu.com/DataServer?T=vec_c&L={z}&Y={y}&X={x}&tk=9c157e9585486c02edf817d2ecbc7752"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapgis-3d-city-grow")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("citygrow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-bind")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mapgis-web-scene")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("720")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseUrl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://192.168.21.192:6163/igs/rest/mrfs/docs/shengZhenBaiMo/0/0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("featureStyle")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("startTimeField")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"startTime"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("endTimeField")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"endTime"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("heightField")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"height"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("startTime")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1068543416")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("endTime")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1636639287")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("heightRadio")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("isGrowHeight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("colors")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rgba(245,33,0,1)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rgba(255,121,26,1)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rgba(255,164,46,1)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rgba(255,209,82,1)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("times")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2005")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2010")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2015")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);