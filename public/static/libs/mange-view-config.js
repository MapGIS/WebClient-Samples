;;;(config2D = {
  center: {
    spatialReference: {
      wkid: 4326
    },
    hasZ: false,
    type: 'Point',
    coordinates: [112.2380827909697, 31.151621966392387],
    extent: {
      spatialReference: {
        wkid: 4326
      },
      hasZ: false,
      type: 'Extent',
      xmin: 112.2380827909697,
      ymin: 31.151621966392387,
      xmax: 112.2380827909697,
      ymax: 31.151621966392387,
      width: 0,
      height: 0
    }
  },
  map: {
    layers: [
      {
        id: '273cfdf9-bfbd-1e25-6ab3-c05267e1f303',
        description: '图层基类',
        copyright: '中地数码版权所有',
        loadStatus: 'not-loaded',
        loaded: false,
        tokenKey: 'tk',
        tokenValue: '4c27d6e0e8a90715b23a989d42272fd8',
        title: 'img',
        minScale: 0,
        maxScale: 0,
        type: 'wmts',
        visible: true,
        opacity: 1,
        spatialReference: {
          wkid: 4490
        },
        extent: {
          spatialReference: {
            wkid: 4490
          },
          hasZ: false,
          type: 'Extent',
          xmin: -180,
          ymin: -90,
          xmax: 180,
          ymax: 90,
          width: 360,
          height: 180
        },
        autoAddTo2D: true,
        autoAddTo3D: true,
        version: '',
        customParameters: {},
        customLayerParameters: {},
        activeLayer: {
          id: 'dc6596c4-7565-838d-84e0-f3f92d00a844',
          description: 'IGS WMTS子图层',
          copyright: '中地数码版权所有',
          loadStatus: 'not-loaded',
          loaded: false,
          tokenKey: 'token',
          title: 'img',
          minScale: 0,
          maxScale: 0,
          type: 'baselayer',
          visible: true,
          opacity: 1,
          spatialReference: {
            wkid: 4326
          },
          extent: {
            spatialReference: {
              wkid: 4490
            },
            hasZ: false,
            type: 'Extent',
            xmin: -180,
            ymin: -90,
            xmax: 180,
            ymax: 90,
            width: 360,
            height: 180
          },
          autoAddTo2D: true,
          autoAddTo3D: true,
          imageFormat: 'tiles',
          identifier: 'img',
          imageFormats: ['tiles'],
          styleId: 'default',
          tileMatrixSets: [
            {
              extent: '',
              id: 'c',
              tileInfo: {
                dpi: -1,
                format: 'png',
                origin: {
                  spatialReference: {
                    wkid: 4490
                  },
                  hasZ: false,
                  type: 'Point',
                  coordinates: [-180, 90],
                  extent: {
                    spatialReference: {
                      wkid: 4490
                    },
                    hasZ: false,
                    type: 'Extent',
                    xmin: -180,
                    ymin: 90,
                    xmax: -180,
                    ymax: 90,
                    width: 0,
                    height: 0
                  }
                },
                lods: [
                  {
                    level: 0,
                    resolution: 1.4062499999999998,
                    scale: 591658710.9091312
                  },
                  {
                    level: 1,
                    resolution: 0.7031249999999999,
                    scale: 295829355.4545656
                  },
                  {
                    level: 2,
                    resolution: 0.35156249999999994,
                    scale: 147914677.7272828
                  },
                  {
                    level: 3,
                    resolution: 0.17578124999999997,
                    scale: 73957338.8636414
                  },
                  {
                    level: 4,
                    resolution: 0.08789062499999999,
                    scale: 36978669.4318207
                  },
                  {
                    level: 5,
                    resolution: 0.04394531249999999,
                    scale: 18489334.71591035
                  },
                  {
                    level: 6,
                    resolution: 0.021972656249999997,
                    scale: 9244667.357955175
                  },
                  {
                    level: 7,
                    resolution: 0.010986328125,
                    scale: 4622333.678977588
                  },
                  {
                    level: 8,
                    resolution: 0.0054931640625,
                    scale: 2311166.839488794
                  },
                  {
                    level: 9,
                    resolution: 0.00274658203125,
                    scale: 1155583.419744397
                  },
                  {
                    level: 10,
                    resolution: 0.001373291015625,
                    scale: 577791.7098721985
                  },
                  {
                    level: 11,
                    resolution: 0.0006866455078125,
                    scale: 288895.85493609926
                  },
                  {
                    level: 12,
                    resolution: 0.00034332275390625,
                    scale: 144447.92746804963
                  },
                  {
                    level: 13,
                    resolution: 0.000171661376953125,
                    scale: 72223.96373402482
                  },
                  {
                    level: 14,
                    resolution: 0.0000858306884765625,
                    scale: 36111.98186701241
                  },
                  {
                    level: 15,
                    resolution: 0.00004291534423828125,
                    scale: 18055.990933506204
                  },
                  {
                    level: 16,
                    resolution: 0.000021457672119140625,
                    scale: 9027.995466753102
                  },
                  {
                    level: 17,
                    resolution: 0.000010728836059570312,
                    scale: 4513.997733376551
                  },
                  {
                    level: 18,
                    resolution: 0.000005364418029785155,
                    scale: 2256.998866688275
                  },
                  {
                    level: 19,
                    resolution: 0.0000026822090148925777,
                    scale: 1128.4994333441375
                  }
                ],
                size: [256, 256],
                spatialReference: {
                  wkid: 4490
                }
              },
              tileMatrix: [
                {
                  identifier: '1',
                  scaleDenominator: '2.958293554545656E8',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '2',
                  matrixHeight: '1'
                },
                {
                  identifier: '2',
                  scaleDenominator: '1.479146777272828E8',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '4',
                  matrixHeight: '2'
                },
                {
                  identifier: '3',
                  scaleDenominator: '7.39573388636414E7',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '8',
                  matrixHeight: '4'
                },
                {
                  identifier: '4',
                  scaleDenominator: '3.69786694318207E7',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '16',
                  matrixHeight: '8'
                },
                {
                  identifier: '5',
                  scaleDenominator: '1.848933471591035E7',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '32',
                  matrixHeight: '16'
                },
                {
                  identifier: '6',
                  scaleDenominator: '9244667.357955175',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '64',
                  matrixHeight: '32'
                },
                {
                  identifier: '7',
                  scaleDenominator: '4622333.678977588',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '128',
                  matrixHeight: '64'
                },
                {
                  identifier: '8',
                  scaleDenominator: '2311166.839488794',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '256',
                  matrixHeight: '128'
                },
                {
                  identifier: '9',
                  scaleDenominator: '1155583.419744397',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '512',
                  matrixHeight: '256'
                },
                {
                  identifier: '10',
                  scaleDenominator: '577791.7098721985',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '1024',
                  matrixHeight: '512'
                },
                {
                  identifier: '11',
                  scaleDenominator: '288895.85493609926',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '2048',
                  matrixHeight: '1024'
                },
                {
                  identifier: '12',
                  scaleDenominator: '144447.92746804963',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '4096',
                  matrixHeight: '2048'
                },
                {
                  identifier: '13',
                  scaleDenominator: '72223.96373402482',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '8192',
                  matrixHeight: '4096'
                },
                {
                  identifier: '14',
                  scaleDenominator: '36111.98186701241',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '16384',
                  matrixHeight: '8192'
                },
                {
                  identifier: '15',
                  scaleDenominator: '18055.990933506204',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '32768',
                  matrixHeight: '16384'
                },
                {
                  identifier: '16',
                  scaleDenominator: '9027.995466753102',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '65536',
                  matrixHeight: '32768'
                },
                {
                  identifier: '17',
                  scaleDenominator: '4513.997733376551',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '131072',
                  matrixHeight: '65536'
                },
                {
                  identifier: '18',
                  scaleDenominator: '2256.998866688275',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '262144',
                  matrixHeight: '131072'
                }
              ],
              identifier: 'c',
              supportedCRS: 'urn:ogc:def:crs:EPSG::4490'
            }
          ],
          tileMatrixSetId: 'c',
          resourceURLTemplates: [],
          styles: [
            {
              id: 'default',
              isDefault: false
            }
          ]
        },
        url: 'http://t6.tianditu.gov.cn/img_c/wmts',
        corporationType: 5,
        imageWidth: 256,
        imageHeight: 256,
        sublayers: [
          {
            id: 'c0be35b7-2694-f2c6-9404-6b5f69bf59ef',
            description: 'IGS WMTS子图层',
            copyright: '中地数码版权所有',
            loadStatus: 'not-loaded',
            loaded: false,
            tokenKey: 'token',
            title: 'img',
            minScale: 0,
            maxScale: 0,
            type: 'baselayer',
            visible: true,
            opacity: 1,
            spatialReference: {
              wkid: 4326
            },
            extent: {
              spatialReference: {
                wkid: 4490
              },
              hasZ: false,
              type: 'Extent',
              xmin: -180,
              ymin: -90,
              xmax: 180,
              ymax: 90,
              width: 360,
              height: 180
            },
            autoAddTo2D: true,
            autoAddTo3D: true,
            imageFormat: 'tiles',
            identifier: 'img',
            imageFormats: ['tiles'],
            styleId: 'default',
            tileMatrixSets: [
              {
                extent: '',
                id: 'c',
                tileInfo: {
                  dpi: -1,
                  format: 'png',
                  origin: {
                    spatialReference: {
                      wkid: 4490
                    },
                    hasZ: false,
                    type: 'Point',
                    coordinates: [-180, 90],
                    extent: {
                      spatialReference: {
                        wkid: 4490
                      },
                      hasZ: false,
                      type: 'Extent',
                      xmin: -180,
                      ymin: 90,
                      xmax: -180,
                      ymax: 90,
                      width: 0,
                      height: 0
                    }
                  },
                  lods: [
                    {
                      level: 0,
                      resolution: 1.4062499999999998,
                      scale: 591658710.9091312
                    },
                    {
                      level: 1,
                      resolution: 0.7031249999999999,
                      scale: 295829355.4545656
                    },
                    {
                      level: 2,
                      resolution: 0.35156249999999994,
                      scale: 147914677.7272828
                    },
                    {
                      level: 3,
                      resolution: 0.17578124999999997,
                      scale: 73957338.8636414
                    },
                    {
                      level: 4,
                      resolution: 0.08789062499999999,
                      scale: 36978669.4318207
                    },
                    {
                      level: 5,
                      resolution: 0.04394531249999999,
                      scale: 18489334.71591035
                    },
                    {
                      level: 6,
                      resolution: 0.021972656249999997,
                      scale: 9244667.357955175
                    },
                    {
                      level: 7,
                      resolution: 0.010986328125,
                      scale: 4622333.678977588
                    },
                    {
                      level: 8,
                      resolution: 0.0054931640625,
                      scale: 2311166.839488794
                    },
                    {
                      level: 9,
                      resolution: 0.00274658203125,
                      scale: 1155583.419744397
                    },
                    {
                      level: 10,
                      resolution: 0.001373291015625,
                      scale: 577791.7098721985
                    },
                    {
                      level: 11,
                      resolution: 0.0006866455078125,
                      scale: 288895.85493609926
                    },
                    {
                      level: 12,
                      resolution: 0.00034332275390625,
                      scale: 144447.92746804963
                    },
                    {
                      level: 13,
                      resolution: 0.000171661376953125,
                      scale: 72223.96373402482
                    },
                    {
                      level: 14,
                      resolution: 0.0000858306884765625,
                      scale: 36111.98186701241
                    },
                    {
                      level: 15,
                      resolution: 0.00004291534423828125,
                      scale: 18055.990933506204
                    },
                    {
                      level: 16,
                      resolution: 0.000021457672119140625,
                      scale: 9027.995466753102
                    },
                    {
                      level: 17,
                      resolution: 0.000010728836059570312,
                      scale: 4513.997733376551
                    },
                    {
                      level: 18,
                      resolution: 0.000005364418029785155,
                      scale: 2256.998866688275
                    },
                    {
                      level: 19,
                      resolution: 0.0000026822090148925777,
                      scale: 1128.4994333441375
                    }
                  ],
                  size: [256, 256],
                  spatialReference: {
                    wkid: 4490
                  }
                },
                tileMatrix: [
                  {
                    identifier: '1',
                    scaleDenominator: '2.958293554545656E8',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '2',
                    matrixHeight: '1'
                  },
                  {
                    identifier: '2',
                    scaleDenominator: '1.479146777272828E8',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '4',
                    matrixHeight: '2'
                  },
                  {
                    identifier: '3',
                    scaleDenominator: '7.39573388636414E7',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '8',
                    matrixHeight: '4'
                  },
                  {
                    identifier: '4',
                    scaleDenominator: '3.69786694318207E7',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '16',
                    matrixHeight: '8'
                  },
                  {
                    identifier: '5',
                    scaleDenominator: '1.848933471591035E7',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '32',
                    matrixHeight: '16'
                  },
                  {
                    identifier: '6',
                    scaleDenominator: '9244667.357955175',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '64',
                    matrixHeight: '32'
                  },
                  {
                    identifier: '7',
                    scaleDenominator: '4622333.678977588',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '128',
                    matrixHeight: '64'
                  },
                  {
                    identifier: '8',
                    scaleDenominator: '2311166.839488794',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '256',
                    matrixHeight: '128'
                  },
                  {
                    identifier: '9',
                    scaleDenominator: '1155583.419744397',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '512',
                    matrixHeight: '256'
                  },
                  {
                    identifier: '10',
                    scaleDenominator: '577791.7098721985',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '1024',
                    matrixHeight: '512'
                  },
                  {
                    identifier: '11',
                    scaleDenominator: '288895.85493609926',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '2048',
                    matrixHeight: '1024'
                  },
                  {
                    identifier: '12',
                    scaleDenominator: '144447.92746804963',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '4096',
                    matrixHeight: '2048'
                  },
                  {
                    identifier: '13',
                    scaleDenominator: '72223.96373402482',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '8192',
                    matrixHeight: '4096'
                  },
                  {
                    identifier: '14',
                    scaleDenominator: '36111.98186701241',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '16384',
                    matrixHeight: '8192'
                  },
                  {
                    identifier: '15',
                    scaleDenominator: '18055.990933506204',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '32768',
                    matrixHeight: '16384'
                  },
                  {
                    identifier: '16',
                    scaleDenominator: '9027.995466753102',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '65536',
                    matrixHeight: '32768'
                  },
                  {
                    identifier: '17',
                    scaleDenominator: '4513.997733376551',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '131072',
                    matrixHeight: '65536'
                  },
                  {
                    identifier: '18',
                    scaleDenominator: '2256.998866688275',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '262144',
                    matrixHeight: '131072'
                  }
                ],
                identifier: 'c',
                supportedCRS: 'urn:ogc:def:crs:EPSG::4490'
              }
            ],
            tileMatrixSetId: 'c',
            resourceURLTemplates: [],
            styles: [
              {
                id: 'default',
                isDefault: false
              }
            ]
          }
        ],
        tileMatrixSets: [
          {
            extent: '',
            id: 'c',
            tileInfo: {
              dpi: -1,
              format: 'png',
              origin: {
                spatialReference: {
                  wkid: 4490
                },
                hasZ: false,
                type: 'Point',
                coordinates: [-180, 90],
                extent: {
                  spatialReference: {
                    wkid: 4490
                  },
                  hasZ: false,
                  type: 'Extent',
                  xmin: -180,
                  ymin: 90,
                  xmax: -180,
                  ymax: 90,
                  width: 0,
                  height: 0
                }
              },
              lods: [
                {
                  level: 0,
                  resolution: 1.4062499999999998,
                  scale: 591658710.9091312
                },
                {
                  level: 1,
                  resolution: 0.7031249999999999,
                  scale: 295829355.4545656
                },
                {
                  level: 2,
                  resolution: 0.35156249999999994,
                  scale: 147914677.7272828
                },
                {
                  level: 3,
                  resolution: 0.17578124999999997,
                  scale: 73957338.8636414
                },
                {
                  level: 4,
                  resolution: 0.08789062499999999,
                  scale: 36978669.4318207
                },
                {
                  level: 5,
                  resolution: 0.04394531249999999,
                  scale: 18489334.71591035
                },
                {
                  level: 6,
                  resolution: 0.021972656249999997,
                  scale: 9244667.357955175
                },
                {
                  level: 7,
                  resolution: 0.010986328125,
                  scale: 4622333.678977588
                },
                {
                  level: 8,
                  resolution: 0.0054931640625,
                  scale: 2311166.839488794
                },
                {
                  level: 9,
                  resolution: 0.00274658203125,
                  scale: 1155583.419744397
                },
                {
                  level: 10,
                  resolution: 0.001373291015625,
                  scale: 577791.7098721985
                },
                {
                  level: 11,
                  resolution: 0.0006866455078125,
                  scale: 288895.85493609926
                },
                {
                  level: 12,
                  resolution: 0.00034332275390625,
                  scale: 144447.92746804963
                },
                {
                  level: 13,
                  resolution: 0.000171661376953125,
                  scale: 72223.96373402482
                },
                {
                  level: 14,
                  resolution: 0.0000858306884765625,
                  scale: 36111.98186701241
                },
                {
                  level: 15,
                  resolution: 0.00004291534423828125,
                  scale: 18055.990933506204
                },
                {
                  level: 16,
                  resolution: 0.000021457672119140625,
                  scale: 9027.995466753102
                },
                {
                  level: 17,
                  resolution: 0.000010728836059570312,
                  scale: 4513.997733376551
                },
                {
                  level: 18,
                  resolution: 0.000005364418029785155,
                  scale: 2256.998866688275
                },
                {
                  level: 19,
                  resolution: 0.0000026822090148925777,
                  scale: 1128.4994333441375
                }
              ],
              size: [256, 256],
              spatialReference: {
                wkid: 4490
              }
            },
            tileMatrix: [
              {
                identifier: '1',
                scaleDenominator: '2.958293554545656E8',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '2',
                matrixHeight: '1'
              },
              {
                identifier: '2',
                scaleDenominator: '1.479146777272828E8',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '4',
                matrixHeight: '2'
              },
              {
                identifier: '3',
                scaleDenominator: '7.39573388636414E7',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '8',
                matrixHeight: '4'
              },
              {
                identifier: '4',
                scaleDenominator: '3.69786694318207E7',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '16',
                matrixHeight: '8'
              },
              {
                identifier: '5',
                scaleDenominator: '1.848933471591035E7',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '32',
                matrixHeight: '16'
              },
              {
                identifier: '6',
                scaleDenominator: '9244667.357955175',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '64',
                matrixHeight: '32'
              },
              {
                identifier: '7',
                scaleDenominator: '4622333.678977588',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '128',
                matrixHeight: '64'
              },
              {
                identifier: '8',
                scaleDenominator: '2311166.839488794',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '256',
                matrixHeight: '128'
              },
              {
                identifier: '9',
                scaleDenominator: '1155583.419744397',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '512',
                matrixHeight: '256'
              },
              {
                identifier: '10',
                scaleDenominator: '577791.7098721985',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '1024',
                matrixHeight: '512'
              },
              {
                identifier: '11',
                scaleDenominator: '288895.85493609926',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '2048',
                matrixHeight: '1024'
              },
              {
                identifier: '12',
                scaleDenominator: '144447.92746804963',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '4096',
                matrixHeight: '2048'
              },
              {
                identifier: '13',
                scaleDenominator: '72223.96373402482',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '8192',
                matrixHeight: '4096'
              },
              {
                identifier: '14',
                scaleDenominator: '36111.98186701241',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '16384',
                matrixHeight: '8192'
              },
              {
                identifier: '15',
                scaleDenominator: '18055.990933506204',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '32768',
                matrixHeight: '16384'
              },
              {
                identifier: '16',
                scaleDenominator: '9027.995466753102',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '65536',
                matrixHeight: '32768'
              },
              {
                identifier: '17',
                scaleDenominator: '4513.997733376551',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '131072',
                matrixHeight: '65536'
              },
              {
                identifier: '18',
                scaleDenominator: '2256.998866688275',
                topLeftCorner: '90.0 -180.0',
                tileWidth: '256',
                tileHeight: '256',
                matrixWidth: '262144',
                matrixHeight: '131072'
              }
            ],
            identifier: 'c',
            supportedCRS: 'urn:ogc:def:crs:EPSG::4490'
          }
        ]
      },
      {
        id: 'c95432eb-a922-2a3c-d3cb-b190ed280b04',
        description: '图层基类',
        copyright: '中地数码版权所有',
        loadStatus: 'not-loaded',
        loaded: false,
        tokenKey: 'token',
        minScale: 0,
        maxScale: 0,
        type: 'graphics',
        visible: true,
        opacity: 1,
        autoAddTo2D: true,
        autoAddTo3D: true,
        elevationInfo: {
          unit: 'meters',
          mode: 'AbsoluteHeight',
          offset: 0,
          featureExpressionInfo: {
            expression: ''
          }
        },
        graphics: [
          {
            id: 'f16f5b82-ed10-6250-e33a-8096047eb33c',
            attributes: {},
            geometry: {
              spatialReference: {
                wkid: 4326
              },
              hasZ: false,
              type: 'Point',
              coordinates: [113.2, 30.5],
              extent: {
                spatialReference: {
                  wkid: 4326
                },
                hasZ: false,
                type: 'Extent',
                xmin: 113.2,
                ymin: 30.5,
                xmax: 113.2,
                ymax: 30.5,
                width: 0,
                height: 0
              }
            },
            symbol: {
              color: {
                red: 0,
                green: 0,
                blue: 255,
                alpha: 1
              },
              type: 'simple-marker',
              extendOptions: {},
              angle: 0,
              xoffset: 0,
              yoffset: 0,
              size: 30,
              outline: {
                color: {
                  red: 255,
                  green: 0,
                  blue: 0,
                  alpha: 1
                },
                type: 'simple-line',
                extendOptions: {},
                width: 2,
                cap: 'round',
                join: 'round',
                miterLimit: 2,
                style: 'solid',
                marker: null
              },
              style: 'circle',
              path: ''
            },
            visible: true,
            type: 'Feature',
            elevationInfo: {
              unit: 'meters',
              mode: 'AbsoluteHeight',
              offset: 0,
              featureExpressionInfo: {
                expression: ''
              }
            }
          },
          {
            id: 'f89b9e92-b7a8-0165-ea79-2ba681372b34',
            attributes: {},
            geometry: {
              spatialReference: {
                wkid: 4326
              },
              hasZ: false,
              type: 'LineString',
              coordinates: [
                [113.4, 30],
                [113.8, 31]
              ],
              extent: {
                spatialReference: {
                  wkid: 4326
                },
                hasZ: false,
                type: 'Extent',
                xmin: 113.4,
                ymin: 30,
                xmax: 113.8,
                ymax: 31,
                width: 0.3999999999999915,
                height: 1
              }
            },
            symbol: {
              color: {
                red: 0,
                green: 0,
                blue: 255,
                alpha: 1
              },
              type: 'simple-line',
              extendOptions: {},
              width: 4,
              cap: 'round',
              join: 'round',
              miterLimit: 2,
              style: 'solid',
              marker: null
            },
            visible: true,
            type: 'Feature',
            elevationInfo: {
              unit: 'meters',
              mode: 'AbsoluteHeight',
              offset: 0,
              featureExpressionInfo: {
                expression: ''
              }
            }
          }
        ]
      }
    ],
    exportTime: '2023-11-08T06:07:31.284Z'
  },
  viewId: 'mapgis-viewer',
  animation: true,
  width: 564,
  height: 930,
  zoom: 4,
  scale: 6012.2343348242375,
  preferCanvas: false,
  spatialReferenceLocked: false
}),
  (config3D = {
    enableAnimation: true,
    skyBox: true,
    skyAtmosphere: true,
    sceneMode: 3,
    enableShadows: false,
    terrainShadowMode: 3,
    enableGeocoderWidget: false,
    enableHomeButtonWidget: false,
    enableSceneModePickerWidget: false,
    enableNavigationHelpButtonWidget: false,
    enableAnimationWidget: false,
    enableTimeLineWidget: false,
    enableFullScreenButtonWidget: false,
    enableFPSWidget: false,
    center: {
      spatialReference: {
        wkid: 4326
      },
      hasZ: false,
      type: 'Point',
      coordinates: [112.2380827909697, 31.151621966392387],
      extent: {
        spatialReference: {
          wkid: 4326
        },
        hasZ: false,
        type: 'Extent',
        xmin: 112.2380827909697,
        ymin: 31.151621966392387,
        xmax: 112.2380827909697,
        ymax: 31.151621966392387,
        width: 0,
        height: 0
      }
    },
    map: {
      layers: [
        {
          id: '273cfdf9-bfbd-1e25-6ab3-c05267e1f303',
          description: '图层基类',
          copyright: '中地数码版权所有',
          loadStatus: 'not-loaded',
          loaded: false,
          tokenKey: 'tk',
          tokenValue: '4c27d6e0e8a90715b23a989d42272fd8',
          title: 'img',
          minScale: 0,
          maxScale: 0,
          type: 'wmts',
          visible: true,
          opacity: 1,
          spatialReference: {
            wkid: 4490
          },
          extent: {
            spatialReference: {
              wkid: 4490
            },
            hasZ: false,
            type: 'Extent',
            xmin: -180,
            ymin: -90,
            xmax: 180,
            ymax: 90,
            width: 360,
            height: 180
          },
          autoAddTo2D: true,
          autoAddTo3D: true,
          version: '',
          customParameters: {},
          customLayerParameters: {},
          activeLayer: {
            id: 'dc6596c4-7565-838d-84e0-f3f92d00a844',
            description: 'IGS WMTS子图层',
            copyright: '中地数码版权所有',
            loadStatus: 'not-loaded',
            loaded: false,
            tokenKey: 'token',
            title: 'img',
            minScale: 0,
            maxScale: 0,
            type: 'baselayer',
            visible: true,
            opacity: 1,
            spatialReference: {
              wkid: 4326
            },
            extent: {
              spatialReference: {
                wkid: 4490
              },
              hasZ: false,
              type: 'Extent',
              xmin: -180,
              ymin: -90,
              xmax: 180,
              ymax: 90,
              width: 360,
              height: 180
            },
            autoAddTo2D: true,
            autoAddTo3D: true,
            imageFormat: 'tiles',
            identifier: 'img',
            imageFormats: ['tiles'],
            styleId: 'default',
            tileMatrixSets: [
              {
                extent: '',
                id: 'c',
                tileInfo: {
                  dpi: -1,
                  format: 'png',
                  origin: {
                    spatialReference: {
                      wkid: 4490
                    },
                    hasZ: false,
                    type: 'Point',
                    coordinates: [-180, 90],
                    extent: {
                      spatialReference: {
                        wkid: 4490
                      },
                      hasZ: false,
                      type: 'Extent',
                      xmin: -180,
                      ymin: 90,
                      xmax: -180,
                      ymax: 90,
                      width: 0,
                      height: 0
                    }
                  },
                  lods: [
                    {
                      level: 0,
                      resolution: 1.4062499999999998,
                      scale: 591658710.9091312
                    },
                    {
                      level: 1,
                      resolution: 0.7031249999999999,
                      scale: 295829355.4545656
                    },
                    {
                      level: 2,
                      resolution: 0.35156249999999994,
                      scale: 147914677.7272828
                    },
                    {
                      level: 3,
                      resolution: 0.17578124999999997,
                      scale: 73957338.8636414
                    },
                    {
                      level: 4,
                      resolution: 0.08789062499999999,
                      scale: 36978669.4318207
                    },
                    {
                      level: 5,
                      resolution: 0.04394531249999999,
                      scale: 18489334.71591035
                    },
                    {
                      level: 6,
                      resolution: 0.021972656249999997,
                      scale: 9244667.357955175
                    },
                    {
                      level: 7,
                      resolution: 0.010986328125,
                      scale: 4622333.678977588
                    },
                    {
                      level: 8,
                      resolution: 0.0054931640625,
                      scale: 2311166.839488794
                    },
                    {
                      level: 9,
                      resolution: 0.00274658203125,
                      scale: 1155583.419744397
                    },
                    {
                      level: 10,
                      resolution: 0.001373291015625,
                      scale: 577791.7098721985
                    },
                    {
                      level: 11,
                      resolution: 0.0006866455078125,
                      scale: 288895.85493609926
                    },
                    {
                      level: 12,
                      resolution: 0.00034332275390625,
                      scale: 144447.92746804963
                    },
                    {
                      level: 13,
                      resolution: 0.000171661376953125,
                      scale: 72223.96373402482
                    },
                    {
                      level: 14,
                      resolution: 0.0000858306884765625,
                      scale: 36111.98186701241
                    },
                    {
                      level: 15,
                      resolution: 0.00004291534423828125,
                      scale: 18055.990933506204
                    },
                    {
                      level: 16,
                      resolution: 0.000021457672119140625,
                      scale: 9027.995466753102
                    },
                    {
                      level: 17,
                      resolution: 0.000010728836059570312,
                      scale: 4513.997733376551
                    },
                    {
                      level: 18,
                      resolution: 0.000005364418029785155,
                      scale: 2256.998866688275
                    },
                    {
                      level: 19,
                      resolution: 0.0000026822090148925777,
                      scale: 1128.4994333441375
                    }
                  ],
                  size: [256, 256],
                  spatialReference: {
                    wkid: 4490
                  }
                },
                tileMatrix: [
                  {
                    identifier: '1',
                    scaleDenominator: '2.958293554545656E8',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '2',
                    matrixHeight: '1'
                  },
                  {
                    identifier: '2',
                    scaleDenominator: '1.479146777272828E8',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '4',
                    matrixHeight: '2'
                  },
                  {
                    identifier: '3',
                    scaleDenominator: '7.39573388636414E7',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '8',
                    matrixHeight: '4'
                  },
                  {
                    identifier: '4',
                    scaleDenominator: '3.69786694318207E7',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '16',
                    matrixHeight: '8'
                  },
                  {
                    identifier: '5',
                    scaleDenominator: '1.848933471591035E7',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '32',
                    matrixHeight: '16'
                  },
                  {
                    identifier: '6',
                    scaleDenominator: '9244667.357955175',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '64',
                    matrixHeight: '32'
                  },
                  {
                    identifier: '7',
                    scaleDenominator: '4622333.678977588',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '128',
                    matrixHeight: '64'
                  },
                  {
                    identifier: '8',
                    scaleDenominator: '2311166.839488794',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '256',
                    matrixHeight: '128'
                  },
                  {
                    identifier: '9',
                    scaleDenominator: '1155583.419744397',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '512',
                    matrixHeight: '256'
                  },
                  {
                    identifier: '10',
                    scaleDenominator: '577791.7098721985',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '1024',
                    matrixHeight: '512'
                  },
                  {
                    identifier: '11',
                    scaleDenominator: '288895.85493609926',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '2048',
                    matrixHeight: '1024'
                  },
                  {
                    identifier: '12',
                    scaleDenominator: '144447.92746804963',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '4096',
                    matrixHeight: '2048'
                  },
                  {
                    identifier: '13',
                    scaleDenominator: '72223.96373402482',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '8192',
                    matrixHeight: '4096'
                  },
                  {
                    identifier: '14',
                    scaleDenominator: '36111.98186701241',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '16384',
                    matrixHeight: '8192'
                  },
                  {
                    identifier: '15',
                    scaleDenominator: '18055.990933506204',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '32768',
                    matrixHeight: '16384'
                  },
                  {
                    identifier: '16',
                    scaleDenominator: '9027.995466753102',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '65536',
                    matrixHeight: '32768'
                  },
                  {
                    identifier: '17',
                    scaleDenominator: '4513.997733376551',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '131072',
                    matrixHeight: '65536'
                  },
                  {
                    identifier: '18',
                    scaleDenominator: '2256.998866688275',
                    topLeftCorner: '90.0 -180.0',
                    tileWidth: '256',
                    tileHeight: '256',
                    matrixWidth: '262144',
                    matrixHeight: '131072'
                  }
                ],
                identifier: 'c',
                supportedCRS: 'urn:ogc:def:crs:EPSG::4490'
              }
            ],
            tileMatrixSetId: 'c',
            resourceURLTemplates: [],
            styles: [
              {
                id: 'default',
                isDefault: false
              }
            ]
          },
          url: 'http://t6.tianditu.gov.cn/img_c/wmts',
          corporationType: 5,
          imageWidth: 256,
          imageHeight: 256,
          sublayers: [
            {
              id: 'c0be35b7-2694-f2c6-9404-6b5f69bf59ef',
              description: 'IGS WMTS子图层',
              copyright: '中地数码版权所有',
              loadStatus: 'not-loaded',
              loaded: false,
              tokenKey: 'token',
              title: 'img',
              minScale: 0,
              maxScale: 0,
              type: 'baselayer',
              visible: true,
              opacity: 1,
              spatialReference: {
                wkid: 4326
              },
              extent: {
                spatialReference: {
                  wkid: 4490
                },
                hasZ: false,
                type: 'Extent',
                xmin: -180,
                ymin: -90,
                xmax: 180,
                ymax: 90,
                width: 360,
                height: 180
              },
              autoAddTo2D: true,
              autoAddTo3D: true,
              imageFormat: 'tiles',
              identifier: 'img',
              imageFormats: ['tiles'],
              styleId: 'default',
              tileMatrixSets: [
                {
                  extent: '',
                  id: 'c',
                  tileInfo: {
                    dpi: -1,
                    format: 'png',
                    origin: {
                      spatialReference: {
                        wkid: 4490
                      },
                      hasZ: false,
                      type: 'Point',
                      coordinates: [-180, 90],
                      extent: {
                        spatialReference: {
                          wkid: 4490
                        },
                        hasZ: false,
                        type: 'Extent',
                        xmin: -180,
                        ymin: 90,
                        xmax: -180,
                        ymax: 90,
                        width: 0,
                        height: 0
                      }
                    },
                    lods: [
                      {
                        level: 0,
                        resolution: 1.4062499999999998,
                        scale: 591658710.9091312
                      },
                      {
                        level: 1,
                        resolution: 0.7031249999999999,
                        scale: 295829355.4545656
                      },
                      {
                        level: 2,
                        resolution: 0.35156249999999994,
                        scale: 147914677.7272828
                      },
                      {
                        level: 3,
                        resolution: 0.17578124999999997,
                        scale: 73957338.8636414
                      },
                      {
                        level: 4,
                        resolution: 0.08789062499999999,
                        scale: 36978669.4318207
                      },
                      {
                        level: 5,
                        resolution: 0.04394531249999999,
                        scale: 18489334.71591035
                      },
                      {
                        level: 6,
                        resolution: 0.021972656249999997,
                        scale: 9244667.357955175
                      },
                      {
                        level: 7,
                        resolution: 0.010986328125,
                        scale: 4622333.678977588
                      },
                      {
                        level: 8,
                        resolution: 0.0054931640625,
                        scale: 2311166.839488794
                      },
                      {
                        level: 9,
                        resolution: 0.00274658203125,
                        scale: 1155583.419744397
                      },
                      {
                        level: 10,
                        resolution: 0.001373291015625,
                        scale: 577791.7098721985
                      },
                      {
                        level: 11,
                        resolution: 0.0006866455078125,
                        scale: 288895.85493609926
                      },
                      {
                        level: 12,
                        resolution: 0.00034332275390625,
                        scale: 144447.92746804963
                      },
                      {
                        level: 13,
                        resolution: 0.000171661376953125,
                        scale: 72223.96373402482
                      },
                      {
                        level: 14,
                        resolution: 0.0000858306884765625,
                        scale: 36111.98186701241
                      },
                      {
                        level: 15,
                        resolution: 0.00004291534423828125,
                        scale: 18055.990933506204
                      },
                      {
                        level: 16,
                        resolution: 0.000021457672119140625,
                        scale: 9027.995466753102
                      },
                      {
                        level: 17,
                        resolution: 0.000010728836059570312,
                        scale: 4513.997733376551
                      },
                      {
                        level: 18,
                        resolution: 0.000005364418029785155,
                        scale: 2256.998866688275
                      },
                      {
                        level: 19,
                        resolution: 0.0000026822090148925777,
                        scale: 1128.4994333441375
                      }
                    ],
                    size: [256, 256],
                    spatialReference: {
                      wkid: 4490
                    }
                  },
                  tileMatrix: [
                    {
                      identifier: '1',
                      scaleDenominator: '2.958293554545656E8',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '2',
                      matrixHeight: '1'
                    },
                    {
                      identifier: '2',
                      scaleDenominator: '1.479146777272828E8',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '4',
                      matrixHeight: '2'
                    },
                    {
                      identifier: '3',
                      scaleDenominator: '7.39573388636414E7',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '8',
                      matrixHeight: '4'
                    },
                    {
                      identifier: '4',
                      scaleDenominator: '3.69786694318207E7',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '16',
                      matrixHeight: '8'
                    },
                    {
                      identifier: '5',
                      scaleDenominator: '1.848933471591035E7',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '32',
                      matrixHeight: '16'
                    },
                    {
                      identifier: '6',
                      scaleDenominator: '9244667.357955175',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '64',
                      matrixHeight: '32'
                    },
                    {
                      identifier: '7',
                      scaleDenominator: '4622333.678977588',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '128',
                      matrixHeight: '64'
                    },
                    {
                      identifier: '8',
                      scaleDenominator: '2311166.839488794',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '256',
                      matrixHeight: '128'
                    },
                    {
                      identifier: '9',
                      scaleDenominator: '1155583.419744397',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '512',
                      matrixHeight: '256'
                    },
                    {
                      identifier: '10',
                      scaleDenominator: '577791.7098721985',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '1024',
                      matrixHeight: '512'
                    },
                    {
                      identifier: '11',
                      scaleDenominator: '288895.85493609926',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '2048',
                      matrixHeight: '1024'
                    },
                    {
                      identifier: '12',
                      scaleDenominator: '144447.92746804963',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '4096',
                      matrixHeight: '2048'
                    },
                    {
                      identifier: '13',
                      scaleDenominator: '72223.96373402482',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '8192',
                      matrixHeight: '4096'
                    },
                    {
                      identifier: '14',
                      scaleDenominator: '36111.98186701241',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '16384',
                      matrixHeight: '8192'
                    },
                    {
                      identifier: '15',
                      scaleDenominator: '18055.990933506204',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '32768',
                      matrixHeight: '16384'
                    },
                    {
                      identifier: '16',
                      scaleDenominator: '9027.995466753102',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '65536',
                      matrixHeight: '32768'
                    },
                    {
                      identifier: '17',
                      scaleDenominator: '4513.997733376551',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '131072',
                      matrixHeight: '65536'
                    },
                    {
                      identifier: '18',
                      scaleDenominator: '2256.998866688275',
                      topLeftCorner: '90.0 -180.0',
                      tileWidth: '256',
                      tileHeight: '256',
                      matrixWidth: '262144',
                      matrixHeight: '131072'
                    }
                  ],
                  identifier: 'c',
                  supportedCRS: 'urn:ogc:def:crs:EPSG::4490'
                }
              ],
              tileMatrixSetId: 'c',
              resourceURLTemplates: [],
              styles: [
                {
                  id: 'default',
                  isDefault: false
                }
              ]
            }
          ],
          tileMatrixSets: [
            {
              extent: '',
              id: 'c',
              tileInfo: {
                dpi: -1,
                format: 'png',
                origin: {
                  spatialReference: {
                    wkid: 4490
                  },
                  hasZ: false,
                  type: 'Point',
                  coordinates: [-180, 90],
                  extent: {
                    spatialReference: {
                      wkid: 4490
                    },
                    hasZ: false,
                    type: 'Extent',
                    xmin: -180,
                    ymin: 90,
                    xmax: -180,
                    ymax: 90,
                    width: 0,
                    height: 0
                  }
                },
                lods: [
                  {
                    level: 0,
                    resolution: 1.4062499999999998,
                    scale: 591658710.9091312
                  },
                  {
                    level: 1,
                    resolution: 0.7031249999999999,
                    scale: 295829355.4545656
                  },
                  {
                    level: 2,
                    resolution: 0.35156249999999994,
                    scale: 147914677.7272828
                  },
                  {
                    level: 3,
                    resolution: 0.17578124999999997,
                    scale: 73957338.8636414
                  },
                  {
                    level: 4,
                    resolution: 0.08789062499999999,
                    scale: 36978669.4318207
                  },
                  {
                    level: 5,
                    resolution: 0.04394531249999999,
                    scale: 18489334.71591035
                  },
                  {
                    level: 6,
                    resolution: 0.021972656249999997,
                    scale: 9244667.357955175
                  },
                  {
                    level: 7,
                    resolution: 0.010986328125,
                    scale: 4622333.678977588
                  },
                  {
                    level: 8,
                    resolution: 0.0054931640625,
                    scale: 2311166.839488794
                  },
                  {
                    level: 9,
                    resolution: 0.00274658203125,
                    scale: 1155583.419744397
                  },
                  {
                    level: 10,
                    resolution: 0.001373291015625,
                    scale: 577791.7098721985
                  },
                  {
                    level: 11,
                    resolution: 0.0006866455078125,
                    scale: 288895.85493609926
                  },
                  {
                    level: 12,
                    resolution: 0.00034332275390625,
                    scale: 144447.92746804963
                  },
                  {
                    level: 13,
                    resolution: 0.000171661376953125,
                    scale: 72223.96373402482
                  },
                  {
                    level: 14,
                    resolution: 0.0000858306884765625,
                    scale: 36111.98186701241
                  },
                  {
                    level: 15,
                    resolution: 0.00004291534423828125,
                    scale: 18055.990933506204
                  },
                  {
                    level: 16,
                    resolution: 0.000021457672119140625,
                    scale: 9027.995466753102
                  },
                  {
                    level: 17,
                    resolution: 0.000010728836059570312,
                    scale: 4513.997733376551
                  },
                  {
                    level: 18,
                    resolution: 0.000005364418029785155,
                    scale: 2256.998866688275
                  },
                  {
                    level: 19,
                    resolution: 0.0000026822090148925777,
                    scale: 1128.4994333441375
                  }
                ],
                size: [256, 256],
                spatialReference: {
                  wkid: 4490
                }
              },
              tileMatrix: [
                {
                  identifier: '1',
                  scaleDenominator: '2.958293554545656E8',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '2',
                  matrixHeight: '1'
                },
                {
                  identifier: '2',
                  scaleDenominator: '1.479146777272828E8',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '4',
                  matrixHeight: '2'
                },
                {
                  identifier: '3',
                  scaleDenominator: '7.39573388636414E7',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '8',
                  matrixHeight: '4'
                },
                {
                  identifier: '4',
                  scaleDenominator: '3.69786694318207E7',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '16',
                  matrixHeight: '8'
                },
                {
                  identifier: '5',
                  scaleDenominator: '1.848933471591035E7',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '32',
                  matrixHeight: '16'
                },
                {
                  identifier: '6',
                  scaleDenominator: '9244667.357955175',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '64',
                  matrixHeight: '32'
                },
                {
                  identifier: '7',
                  scaleDenominator: '4622333.678977588',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '128',
                  matrixHeight: '64'
                },
                {
                  identifier: '8',
                  scaleDenominator: '2311166.839488794',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '256',
                  matrixHeight: '128'
                },
                {
                  identifier: '9',
                  scaleDenominator: '1155583.419744397',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '512',
                  matrixHeight: '256'
                },
                {
                  identifier: '10',
                  scaleDenominator: '577791.7098721985',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '1024',
                  matrixHeight: '512'
                },
                {
                  identifier: '11',
                  scaleDenominator: '288895.85493609926',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '2048',
                  matrixHeight: '1024'
                },
                {
                  identifier: '12',
                  scaleDenominator: '144447.92746804963',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '4096',
                  matrixHeight: '2048'
                },
                {
                  identifier: '13',
                  scaleDenominator: '72223.96373402482',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '8192',
                  matrixHeight: '4096'
                },
                {
                  identifier: '14',
                  scaleDenominator: '36111.98186701241',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '16384',
                  matrixHeight: '8192'
                },
                {
                  identifier: '15',
                  scaleDenominator: '18055.990933506204',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '32768',
                  matrixHeight: '16384'
                },
                {
                  identifier: '16',
                  scaleDenominator: '9027.995466753102',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '65536',
                  matrixHeight: '32768'
                },
                {
                  identifier: '17',
                  scaleDenominator: '4513.997733376551',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '131072',
                  matrixHeight: '65536'
                },
                {
                  identifier: '18',
                  scaleDenominator: '2256.998866688275',
                  topLeftCorner: '90.0 -180.0',
                  tileWidth: '256',
                  tileHeight: '256',
                  matrixWidth: '262144',
                  matrixHeight: '131072'
                }
              ],
              identifier: 'c',
              supportedCRS: 'urn:ogc:def:crs:EPSG::4490'
            }
          ]
        },
        {
          id: 'c95432eb-a922-2a3c-d3cb-b190ed280b04',
          description: '图层基类',
          copyright: '中地数码版权所有',
          loadStatus: 'not-loaded',
          loaded: false,
          tokenKey: 'token',
          minScale: 0,
          maxScale: 0,
          type: 'graphics',
          visible: true,
          opacity: 1,
          autoAddTo2D: true,
          autoAddTo3D: true,
          elevationInfo: {
            unit: 'meters',
            mode: 'AbsoluteHeight',
            offset: 0,
            featureExpressionInfo: {
              expression: ''
            }
          },
          graphics: [
            {
              id: 'f16f5b82-ed10-6250-e33a-8096047eb33c',
              attributes: {},
              geometry: {
                spatialReference: {
                  wkid: 4326
                },
                hasZ: false,
                type: 'Point',
                coordinates: [113.2, 30.5],
                extent: {
                  spatialReference: {
                    wkid: 4326
                  },
                  hasZ: false,
                  type: 'Extent',
                  xmin: 113.2,
                  ymin: 30.5,
                  xmax: 113.2,
                  ymax: 30.5,
                  width: 0,
                  height: 0
                }
              },
              symbol: {
                color: {
                  red: 0,
                  green: 0,
                  blue: 255,
                  alpha: 1
                },
                type: 'simple-marker',
                extendOptions: {},
                angle: 0,
                xoffset: 0,
                yoffset: 0,
                size: 30,
                outline: {
                  color: {
                    red: 255,
                    green: 0,
                    blue: 0,
                    alpha: 1
                  },
                  type: 'simple-line',
                  extendOptions: {},
                  width: 2,
                  cap: 'round',
                  join: 'round',
                  miterLimit: 2,
                  style: 'solid',
                  marker: null
                },
                style: 'circle',
                path: ''
              },
              visible: true,
              type: 'Feature',
              elevationInfo: {
                unit: 'meters',
                mode: 'AbsoluteHeight',
                offset: 0,
                featureExpressionInfo: {
                  expression: ''
                }
              }
            },
            {
              id: 'f89b9e92-b7a8-0165-ea79-2ba681372b34',
              attributes: {},
              geometry: {
                spatialReference: {
                  wkid: 4326
                },
                hasZ: false,
                type: 'LineString',
                coordinates: [
                  [113.4, 30],
                  [113.8, 31]
                ],
                extent: {
                  spatialReference: {
                    wkid: 4326
                  },
                  hasZ: false,
                  type: 'Extent',
                  xmin: 113.4,
                  ymin: 30,
                  xmax: 113.8,
                  ymax: 31,
                  width: 0.3999999999999915,
                  height: 1
                }
              },
              symbol: {
                color: {
                  red: 0,
                  green: 0,
                  blue: 255,
                  alpha: 1
                },
                type: 'simple-line',
                extendOptions: {},
                width: 4,
                cap: 'round',
                join: 'round',
                miterLimit: 2,
                style: 'solid',
                marker: null
              },
              visible: true,
              type: 'Feature',
              elevationInfo: {
                unit: 'meters',
                mode: 'AbsoluteHeight',
                offset: 0,
                featureExpressionInfo: {
                  expression: ''
                }
              }
            }
          ]
        }
      ],
      exportTime: '2023-11-08T06:07:31.284Z'
    },
    viewId: 'mapgis-viewer',
    animation: true,
    width: 564,
    height: 930,
    zoom: 4,
    scale: 6012.2343348242375,
    preferCanvas: false,
    spatialReferenceLocked: false
  })
