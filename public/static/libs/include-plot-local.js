;(function () {
  var r = new RegExp('(^|(.*?\\/))(include-plot-local.js)(\\?|$)'),
    s = document.getElementsByTagName('script'),
    targetScript,
    targetUrl
  for (var i = 0; i < s.length; i++) {
    var src = s[i].getAttribute('src')
    if (src) {
      var m = src.match(r)
      if (m) {
        targetUrl = src
        targetScript = s[i]
        break
      }
    }
  }

  function inputScript(url) {
    var script =
      '<script type="text/javascript" src="' + url + '"><' + '/script>'
    document.writeln(script)
  }

  function inputCSS(url) {
    var css = '<link rel="stylesheet" href="' + url + '">'
    document.writeln(css)
  }

  function inArray(arr, item) {
    for (i in arr) {
      if (arr[i] == item) {
        return true
      }
    }
    return false
  }

  function getInitPath() {
    var loadPath = targetUrl.split('/include-plot-local')
    return loadPath[0]
  }

  //comman leaflet librarys
  function load() {
    var includes = (targetScript.getAttribute('include') || '').split(',')
    var excludes = (targetScript.getAttribute('exclude') || '').split(',')

    var httpUrl = getInitPath()

    if (!inArray(excludes, 'plot')) {
      inputScript(httpUrl + '/cdn/zondyclient/webclient-plot.min.js')
    }

    if (inArray(includes, '3D')) {
      // 引入Cesium1.84版本 对应10.5.6之间的版本
      inputCSS(httpUrl + '/cdn/cesium/Widgets/widgets.css')
      inputCSS(httpUrl + '/cdn/cesium/MapGIS/css/mapgis.css')
      inputScript(httpUrl + '/cdn/cesium/Cesium.js')
      inputScript(httpUrl + '/cdn/zondyclient/webclient-es6-service.js')
    }
    if (inArray(includes, '2D')) {
      inputCSS(httpUrl + '/cdn/mapboxgl/mapbox-gl.css')
      inputScript(httpUrl + '/cdn/mapboxgl/mapbox-gl.js')
      inputCSS(httpUrl + '/cdn/leaflet/leaflet.css')
      inputScript(httpUrl + '/cdn/leaflet/leaflet.js')
      inputCSS(httpUrl + '/cdn/ol/ol.css')
      inputScript(httpUrl + '/cdn/ol/ol.js')
      if (!localStorage.getItem('engine-type')) {
        localStorage.setItem('engine-type', 'mapboxgl')
      }

      const type = localStorage.getItem('engine-type')

      window.initView = function (domId) {
        // 创建切换引擎元素
        const contentDom = document.getElementById(domId)
        if (contentDom) {
          const switchDom = document.createElement('div')
          if (!document.getElementById('switch-engine')) {
            switchDom.id = 'switch-engine'
            switchDom.style.position = 'absolute'
            switchDom.style.bottom = '10px'
            switchDom.style.right = '10px'
            switchDom.style.padding = '5px'
            switchDom.style.backgroundColor = 'rgb(44, 44, 44)'
            switchDom.style.zIndex = 9999
            switchDom.style.display ='flex'
            switchDom.style.alignItems = 'center'
            switchDom.style.justifyContent = 'center'

            const span = document.createElement('div')
            span.innerText = '切换引擎'
            span.style =`  font-size: 13px;
            font-weight: 400;
            line-height: 1.53846154;
            text-align: center;
            white-space: nowrap;
            cursor: pointer;
            color: #fff;
            padding-right:5px`

            const buttonContainer = document.createElement('div')

            const refresh = () => {
              const dom =
                window.parent.document.getElementById('frame-run-button')
              if (dom) {
                dom.click()
              }
            }

            const button1 = document.createElement('button')
            button1.innerText = 'mapboxgl'
            button1.onclick = () => {
              localStorage.setItem('engine-type', 'mapboxgl')
              refresh()
            }

            const button2 = document.createElement('button')
            button2.style.flex = 1
            button2.innerText = 'leaflet'
            button2.onclick = () => {
              localStorage.setItem('engine-type', 'leaflet')
              refresh()
            }


            const button3 = document.createElement('button')
            button3.innerText = 'openlayers'
            button3.onclick = () => {
              localStorage.setItem('engine-type', 'openlayers')
              refresh()
            }

            switchDom.appendChild(span)

            buttonContainer.appendChild(button1)
            buttonContainer.appendChild(button2)
            buttonContainer.appendChild(button3)

            const buttons = [button1,button2,button3]
            buttons.forEach((b)=>{
              b.style = `
                    margin: 2px;
                    background-color: #93afc8;
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 1.53846154;
                    text-align: center;
                    white-space: nowrap;
                    cursor: pointer;
                    color: #fff;
                    border-color: #1970fc;
                    user-select: none;
                    border: 1px solid transparent;
                    border-radius: 4px;
                }`
              if(b.innerText === type){
                b.style.backgroundColor = 'rgb(58, 133, 198)'
              }
            })

            switchDom.appendChild(buttonContainer)
            contentDom.appendChild(switchDom)
          }
        }

        if (type === 'leaflet') {
          ;(function (global) {
            const token = '4c27d6e0e8a90715b23a989d42272fd8'
            const VEC_C =
              'http://t0.tianditu.com/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles&tk='
            const CVA_C =
              'http://t0.tianditu.com/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles&tk='
            var imgUrl = VEC_C + token
            var cvaUrl = CVA_C + token

            const leafletOptions = {
              dragging: true,
              doubleClickZoom: false,
              zoomControl: false,
              zoom: 9,
              center: [34.23585315456168, 117.19504487039819]
            }
            const map = window.L.map(domId, leafletOptions)

            window.L.tileLayer(imgUrl).addTo(map, {})

            window.L.tileLayer(cvaUrl).addTo(map, {})

            global.leafletMap = map
          })(window)
          return window.leafletMap
        } else if (type === 'openlayers') {
          ;(function (global) {
            const map = new window.ol.Map({
              target: domId,
              view: new window.ol.View({
                projection: 'EPSG:3857',
                center: window.ol.proj.transform(
                  [120, 30],
                  'EPSG:4326',
                  'EPSG:3857'
                ),
                maxZoom: 28, //最大瓦片显示级数
                minZoom: 1, //最小瓦片显示级数
                zoom: 6 //地图初始显示级数
              })
            })

            const token = '63c5c4f101d68229494bb45d3bf60277'

            //加载天地图瓦片图层数据
            const TiandiMap_vect = new window.ol.layer.Tile({
              title: '天地图矢量图层',
              source: new window.ol.source.XYZ({
                url:
                  'http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=' +
                  token,
                wrapX: false
              })
            })

            const TiandiMap_vectcia = new window.ol.layer.Tile({
              title: '天地图矢量注记图层',
              source: new window.ol.source.XYZ({
                url:
                  'http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=' +
                  token,
                wrapX: false
              })
            })

            map.addLayer(TiandiMap_vect)
            map.addLayer(TiandiMap_vectcia)
            global.openlayersMap = map
          })(window)

          return window.openlayersMap
        } else {
          ;(function (global) {
            const token = '63c5c4f101d68229494bb45d3bf60277'

            var imgUrl = 'http://t0.tianditu.com/vec_w/wmts?tk=' + token
            var cvaUrl = 'http://t0.tianditu.com/cva_w/wmts?tk=' + token
            var tdtImg = {
              //类型为栅格瓦片
              type: 'raster',
              tiles: [
                //请求地址
                imgUrl +
                  '&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles'
              ],
              //分辨率
              tileSize: 256
            }
            var tdtCva = {
              type: 'raster',
              tiles: [
                cvaUrl +
                  '&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles'
              ],
              tileSize: 256
            }

            const map = new window.mapboxgl.Map({
              container: domId,
              zoom: 10,
              center: [117.19504487039819, 34.23585315456168],
              style: {
                //设置版本号，一定要设置
                version: 8,
                //添加来源
                sources: {
                  tdtImg: tdtImg,
                  tdtCva: tdtCva
                },
                layers: [
                  {
                    //图层id，要保证唯一性
                    id: 'tdtImg',
                    //图层类型
                    type: 'raster',
                    //数据源
                    source: 'tdtImg',
                    //图层最小缩放级数
                    minzoom: 0,
                    //图层最大缩放级数
                    maxzoom: 17
                  },
                  {
                    id: 'tdtCva',
                    type: 'raster',
                    source: 'tdtCva',
                    minzoom: 0,
                    maxzoom: 17
                  }
                ]
              }
            })

            global.mapboxglMap = map
          })(window)
          return window.mapboxglMap
        }
      }
    }

    inputScript(httpUrl + '/cdn/jquery/jquery-3.7.1.min.js')

    if (inArray(includes, 'menu')) {
      inputCSS(httpUrl + '/cdn/exampleThirdParty/plot-profess/PlotMenu/index.css')
      inputScript(httpUrl + '/cdn/exampleThirdParty/plot-profess/PlotMenu/index.js')
    }

    if (inArray(includes, 'editor')) {
      inputCSS(httpUrl + '/cdn/exampleThirdParty/plot-profess/Pickr/nano.min.css')
      inputScript(httpUrl + '/cdn/exampleThirdParty/plot-profess/Pickr/pickr.min.js')
      inputCSS(
        httpUrl + '/cdn/exampleThirdParty/plot-profess/PlotStyleEditor/index.css'
      )
      inputScript(
        httpUrl + '/cdn/exampleThirdParty/plot-profess/PlotStyleEditor/index.js'
      )
    }

    if (inArray(includes, 'panel')) {
      inputCSS(httpUrl + '/cdn/exampleThirdParty/plot-profess/PlotPanel/index.css')
      inputScript(httpUrl + '/cdn/exampleThirdParty/plot-profess/PlotPanel/index.js')
    }
  }

  load();
  window.webclient = {
    ip: '10.10.130.72',
    port: '8086',
    protocol: 'http'
  };
  window.isLocal = false;
  window.server = document.location.toString().match(/file:\/\//) ? 'http://localhost:8899' : 'http://' + document.location.host;
})();
