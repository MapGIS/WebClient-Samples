// import { CustomLayer, defaultValue, LoadStatus } from "@mapgis/webclient-common";
var Layer = zondy.layer.Layer
var defaultValue = zondy.util.defaultValue
var LoadStatus = zondy.enum.LoadStatus

class CustomCZMLLayer extends Layer {
  constructor(options) {
    super(options)
    options = defaultValue(options, {})
    /**
     * 请求地址
     * @member {String} CZMLLayer.prototype.url
     */
    this.url = defaultValue(options.url, '')
    /**
     * 自定义图层类型
     * @member {String} CZMLLayer.prototype.customLayerType
     */
    this.customLayerType = 'custom-czml'
  }

  /**
   * 通过传入的json构造并返回一个新的几何对象<a id='fromJSON'></a>
   * @param {Object} [json] JSON对象
   * @example <caption><h7>通过传入的json构造并返回一个新的几何对象</h7></caption>
   * const json = {
   *   // 服务基地址
   *   url: 'czml数据地址'
   * }
   * const customCZMLLayer = new CustomCZMLLayer.fromJSON(json)
   */
  static fromJSON(json) {
    json = jsonClone(json)
    const _layer = new CustomCZMLLayer(json)
    _layer.loadStatus = LoadStatus.loaded
    _layer.loaded = true

    return _layer
  }

  /**
   * 导出json对象
   * @return {Object} json对象
   */
  toJSON() {
    const json = super.toJSON()

    json.url = this.url
    json.type = this.type

    return json
  }

  /**
   * 克隆CustomCZMLLayer对象
   * @return {CustomCZMLLayer} 克隆后的CustomCZMLLayer实例
   */
  clone() {
    return new CustomCZMLLayer(this.toJSON())
  }

  /**
   * 销毁图层<a id='destroy'></a>
   */
  destroy() {}
}

export default CustomCZMLLayer;
zondy.layer.CustomCZMLLayer = CustomCZMLLayer
console.log('0------zondy.layer.CustomCZMLLayer', zondy.layer.CustomCZMLLayer)