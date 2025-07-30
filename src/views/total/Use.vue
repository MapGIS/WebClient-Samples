p<template>
    <div class="webclient-use-wrapper">
        <total-tab />
        <div class="content-wrapper">
            <div class="title">
                <img src="../../../public/static/assets/total/retouch.png"/>
                <div class="text">包结构图</div>
            </div>

        <div>
          <img src="../../../public/static/assets/total/download/mapgis_npm.jpeg" class="image-mobile"/>
        </div>
        <div>
            <a  href="https://www.npmjs.com/org/mapgis" target="_blank">更多@mapgis资源（https://www.npmjs.com/org/mapgis） </a>
        </div>
        <div class="title">
            <img src="../../../public/static/assets/total/retouch.png"/>
            <div class="text">开发指南</div>
        </div>
            <div  class="tip">
             <h4>MapGIS Client for JavaScript（Common） </h4>
            请参考 <a href="http://10.10.130.72:8086/#/guideMulti/common/development_common" target="_blank">http://10.10.130.72:8086/#/guideMulti/common/development_common</a>
            </div>
            <div  class="tip">
             <h4>MapGIS Client for JavaScript（Cesium） </h4>
            请参考 <a href="http://10.10.130.72:8086/#/guideMulti/cesium/development_cesium" target="_blank">http://10.10.130.72:8086/#/guideMulti/cesium/development_cesium</a>
            </div>
            <div  class="tip">
             <h4>MapGIS Client for JavaScript（MapboxGL） </h4>
            请参考 <a href="http://10.10.130.72:8086/#/guideMulti/mapboxgl/development_mapboxgl" target="_blank">http://10.10.130.72:8086/#/guideMulti/mapboxgl/development_mapboxgl</a>
            </div>
            <div  class="tip">
             <h4>MapGIS Client for JavaScript（Leaflet） </h4>
            请参考 <a href="http://10.10.130.72:8086/#/guideMulti/leaflet/development_leaflet" target="_blank">http://10.10.130.72:8086/#/guideMulti/leaflet/development_leaflet</a>
            </div>
            <div  class="tip">
             <h4>MapGIS Client for JavaScript（OpenLayers） </h4>
            请参考 <a href="http://10.10.130.72:8086/#/guide/openlayers/development_ol" target="_blank">http://10.10.130.72:8086/#/guide/openlayers/development_ol</a>
            </div>
        </div>

    </div>
</template>

<script>
import { isMobile } from '@/utils/mobile';
import TotalTab from '@/config/components/Tabs/TotalTab';

export default {
    components: { TotalTab },
    data() {
        return {
            mobile: isMobile(),
            useCoreImg: './static/assets/total/use/use-core.png',
            useLocalImg: './static/assets/total/use/use-local.png',
            useLocalFileImg: './static/assets/total/use/use-local-file.png',
            useOnlineImg: './static/assets/total/use/use-online.png',
            useInnerImg: './static/assets/total/use/use-inner.png',
            useOnlineInnerImg: './static/assets/total/use/use-online-inner.png',
            useNode1Img: './static/assets/total/use/node-1.png',
            useNode2Img: './static/assets/total/use/node-2.png',
            useNode3Img: './static/assets/total/use/node-3.png',

            datastore: [
                {
                    func: '创建大数据存储-Windows',
                    detail: '创建大数据存储window版本（postgresql、ES集群、mongoDB集群）',
                    url: '无说明'
                },
                {
                    func: '创建大数据存储-Linux',
                    detail: '创建大数据存储linux版本（postgresql、ES集群、mongoDB集群、hdfs集群）',
                    url: '无说明'
                },
                {
                    func: '数据导入',
                    detail: 'MapGisDataStore数据导入工具',
                    url: '无说明'
                },
                {
                    func: '数据管理',
                    detail: 'MapGisDataStores数据管理（数据目录、数据预览、词典上传（ES）、文件操作（hdfs））',
                    url: '无说明'
                },
                {
                    func: '时空查询功能',
                    detail: '根据空间、时间、ID列表、其它属性条件进行分页查询',
                    url: '/es/stQuery?'
                },
                {
                    func: '时空聚合统计功能',
                    detail: '	根据空间、时间、其它属性条件以及聚合条件（sum、max、min、average等）进行聚合查询',
                    url: '/es/stQueryByAgg?'
                },
                {
                    func: '时空聚合查询功能（GeoHash聚合）',
                    detail: '根据空间、时间、其它属性条件对指定属性字段的值进行GeoHash聚合',
                    url: '/es/stGeoHashQueryByAgg?'
                },
                {
                    func: '	地理围栏功能',
                    detail: '根据空间围栏、时间、属性围栏条件进行查询返回结果确定对象是否在围栏内',
                    url: '/es/GeoEnclosureQuery?'
                }
            ],

            smaryun: [
                {
                    name: 'Openlayers',
                    href: 'http://10.10.130.72:8086/static/libs/include-openlayers-local.js'
                },
                {
                    name: 'leaflet',
                    href: 'http://10.10.130.72:8086/static/libs/include-leaflet-local.js'
                },
                {
                    name: 'mapboxgl',
                    href: 'http://10.10.130.72:8086/static/libs/include-mapboxgl-local.js'
                },
                {
                    name: 'cesium',
                    href: 'http://10.10.130.72:8086/static/libs/include-cesium-local.js'
                }
            ],

            npm: [
                {
                    name: 'MapboxGL基础库',
                    install: 'npm install --save @mapgis/@mapgis/mapbox-gl'
                },
                {
                    name: 'MapboxGL组件库',
                    install: 'npm install --save @mapgis/webclient-vue-mapboxgl'
                }
            ]
        };
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.webclient-use-wrapper {
    padding-bottom: 30px;
    .content-wrapper {
        margin-left: 10%;
        margin-right: 10%;
        padding-top: 40px;
        .steps {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 38px;

            .index {
                display: flex;
                align-items: center;

                .number {
                    font-size: 48px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    font-style: italic;
                    color: rgba(51, 51, 51, 0.2);
                }

                .content {
                    margin-left: 16px;
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    font-style: italic;
                    color: #3c4858;
                }
            }

            img {
                width: 77px;
                height: 34px;
            }
        }

        .mobile {
            display: flex;
            justify-content: space-between;

            .index {
                width: 54px;

                .number {
                    font-size: 36px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    font-style: italic;
                    color: rgba(51, 51, 51, 0.2);
                }

                .content {
                    font-size: 12px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    font-style: italic;
                    color: #3c4858;
                }
            }

            img {
                margin-top: 12px;
                width: 48px;
                height: 24px;
            }
        }

        .first-title {
            margin-top: 50px;
        }

        .title {
            display: flex;
            align-items: center;
            height: 22px;
            margin: 56px 0 24px 0;

            img {
                width: 10px;
                height: 22px;
            }

            .main {
                margin-left: 8px;
                font-size: 20px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #3c4858;
            }

            .sub {
                margin-left: 16px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #999999;
            }
            .text {
                margin-left: 8px;
                font-size: 20px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #3c4858;
            }
        }

        .tip {
            padding: 8px 16px;
            background-color: #ecf8ff;
            border-radius: 4px;
            border-left: 5px solid #50bfff;
            margin: 20px 0;
            .image-mobile {
                width: 70vw;
            }
        }

        .warning {
            padding: 8px 16px;
            background-color: #fff6f7;
            border-radius: 4px;
            border-left: 5px solid #fe6c6f;
            margin: 20px 0;
        }

        .important {
            color: #e91e63 !important;
            font-weight: bold;
        }

        .information {
            color: #67c23a;
            font-weight: bold;
        }

        .image-mobile {
            width: 80vw;
        }

        .download-tag {
            width: 100%;
            font-size: 14px;
            background-color: #f5f5f5;
            border: 1px solid #ccc;
            border-radius: 4px;
            color: #3F454D;
        }
    }
    .image-mobile {
        width: 90vw;
    }
}
</style>
