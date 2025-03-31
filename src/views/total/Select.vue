<template>
    <div class="webclient-select-panel">
        <total-tab />
        <div class="content-head">
            <el-row :class="['row-bg', { mobile: mobile }]" justify="space-around" :gutter="20">
                <el-col :span="mobile ? 24 : 6" v-for="github in githubs" :key="github.name" class="card">
                    <el-card :body-style="{ padding: '0px' }">
                        <div style="padding: 14px">
                            <div class="head-area">
                                <img src="../../../public/static/assets/total/retouch.png" />
                                <div class="info">
                                    <div class="name">{{ github.name }}</div>
                                    <div class="star">★ {{ github.star }}</div>
                                </div>
                            </div>
                            <ul class="head-list">
                                <li>{{ github.commit }} Commits提交</li>
                                <li>{{ github.branches }} Branches分支</li>
                                <li>{{ github.release }} Release版本</li>
                                <li>{{ github.contributors }} Contributors维护人员</li>
                            </ul>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <div >
                <p>注:开源框架社区活跃度统计时间截止于2021年1月</p>
            </div>
        </div>

        <div class="content-main">
            <el-row type="flex" justify="space-around" class="banner">
                <el-col :span="20">
                    <div class="warning">
                        开源地图框架的选择，除了根据框架的活跃度、成熟度、生命周期等生态社区的好坏外，更需要根据业务需求及应用场景进行选择：
                        <p>以三维场景为主，涉及多种模型的可视化与分析场景时，可选择Cesium</p>
                        <p>涉及大数据（千万级）矢量数据的渲染及可视化效果要求较高时，可选择MapboxGL</p>
                        <p>应用要求体量小，能适配多端，强调移动端的支撑，且具备一定数据量的渲染时，可选择Leaflet</p>
                        <p>对于强GIS应用，且对投影参考系要求较高，要求提供专业级的GIS功能时，可选择OpenLayers</p>
                    </div>
                </el-col>
            </el-row>

            <el-row type="flex" justify="space-around" class="banner">
                <el-col :span="20">
                    <el-tabs tab-position="top" style="margin-top: 30px">
                        <el-tab-pane :label="map.name" v-for="map in details" :key="map.name">
                            <div>
                                <div class="warning">
                                    {{ map.info }}
                                </div>

                                <div class="title">
                                    <img src="../../../public/static/assets/total/retouch.png" />
                                    <div class="text">优点</div>
                                </div>

                                <div class="advantage-container">
                                    <div :class="['content', { mobile: mobile }]" v-for="(adv, index) in map.advs" :key="index">
                                        <img :src="adv.image" class="card-image" />
                                        <div class="info">{{ adv.info }}</div>
                                        <div class="tag-area">
                                            <el-tag v-for="t in adv.tags" :key="t">{{ t }}</el-tag>
                                        </div>
                                        <div class="detail">{{ adv.detail }}</div>
                                    </div>
                                </div>

                                <div class="title">
                                    <img src="../../../public/static/assets/total/retouch.png" />
                                    <div class="text">缺点</div>
                                </div>

                                <div class="warning" v-for="d in map.disadvs" :key="d">{{ d }}</div>

                                <!-- <div class="title">
                <img/>
                <div class="text">维护人员</div>
              </div>

              <div class="warning" v-for="d in map.develops" :key="d">{{d}}</div> -->

                                <div class="title">
                                    <img src="../../../public/static/assets/total/retouch.png" />
                                    <div class="text">教程</div>
                                </div>

                                <el-row>
                                    <img class="tutorials-icon" src="../../../public/static/assets/total/select/material.png" />
                                    <div v-for="h in map.helper" :key="h.name">
                                        <el-link type="primary" :href="h.link" target="_blank">{{ h.name }}</el-link>
                                    </div>
                                </el-row>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
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
            type: isMobile() ? 'none' : 'flex',
            githubs: [
                {
                    name: 'Cesium',
                    star: 6531,
                    commit: 32928,
                    branches: 190,
                    release: 117,
                    contributors: 232
                },
                {
                    name: 'MapboxGL',
                    star: 7271,
                    commit: 9533,
                    branches: 249,
                    release: 226,
                    contributors: 299
                },
                {
                    name: 'Leaflet',
                    star: 29913,
                    commit: 6880,
                    branches: 49,
                    release: 47,
                    contributors: 666
                },
                {
                    name: 'OpenLayers',
                    star: 7781,
                    commit: 28908,
                    branches: 9,
                    release: 222,
                    contributors: 290
                }
            ],
            details: [
                {
                    name: 'Cesium',
                    info: 'Cesium面向三维应用，支持地形、BIM三维模型、倾斜摄影、点云、精细模型、地质体、管线等模型的三维可视化表达与分析，侧重于三维建模与时态模拟',
                    advs: [
                        {
                            image: './static/assets/total/select/cesium-good-1.jpg',
                            info: '倾斜摄影',
                            tags: ['MODEL'],
                            detail: '支持倾斜摄影，地形，海洋环境等三维场景展现...'
                        },
                        {
                            info: 'M3D 3d瓦片',
                            image: './static/assets/total/select/cesium-good-2.jpg',
                            tags: ['3D TILES/ M3D'],
                            detail: '支持中地数码独家的三维瓦片格式：m3d.'
                        },
                        {
                            info: '三维建模',
                            image: './static/assets/total/select/cesium-good-3.jpg',
                            tags: ['BIM', 'MODEL'],
                            detail: '支持BIM管网建模和3dx,gltf,M3D模型的展示.'
                        },
                        {
                            info: '时态表达',
                            image: './static/assets/total/select/cesium-good-4.jpg',
                            tags: ['TIME'],
                            detail: '支持时态，时间播放，时间动画，时空聚类等时空展现.'
                        }
                    ],
                    disadvs: [
                        '1.采用webgl的渲染，相较于unity提供的特殊光晕效果，渲染效果略显平庸',
                        '2.自成体系的模型与几何绘制策略，需要一定的学习成本',
                        '3.代码过重，并且主视图必须获取顶级div，影响工程代码结构,复杂场景需要手动开辟释放内存'
                    ],
                    develops: ['Cesium-主框架：基础平台-邱文坤、冯桂英、周凌风', 'Cesium-插件：基础平台-潘卓然'],
                    helper: [{ name: 'Cesium相关资料汇总', link: 'https://github.com/vtxf/Cesium-Tutorials-Index' }]
                },
                {
                    name: 'MapboxGL',
                    info: 'MapboxGL的宗旨是构建世界上最漂亮的地图，因此核心功能就是一个“看”字。支持 3D 特性和多种可视化效果，且原生支持矢量瓦片，具备良好的性能。在大数据高效渲染方面表现突出',
                    advs: [
                        {
                            info: '高效矢量瓦片',
                            image: './static/assets/total/select/mapboxgl-good-1.png',
                            tags: ['VECTOR TILE'],
                            detail: '原生支持矢量瓦片，是真正高效实用的矢量瓦片'
                        },
                        {
                            info: '顶级可视化',
                            image: './static/assets/total/select/mapboxgl-good-2.png',
                            tags: ['DATAVIEW'],
                            detail: '真正顶级的可视化渲染，mapboxGL,echartGL，KeplerGl等'
                        },
                        {
                            info: '高清矢量图形',
                            image: './static/assets/total/select/mapboxgl-good-3.png',
                            tags: ['VECTOR GRAPHIC'],
                            detail: '真正顶级的高清矢量图形绘制SVG，Canvas.'
                        },
                        {
                            info: 'Top级互联网技术加持',
                            image: './static/assets/total/select/mapboxgl-good-4.png',
                            tags: ['Top'],
                            detail: '国内Baidu，国外Uber，Mapbox等顶级可视化巨头技术加持.'
                        }
                    ],
                    disadvs: ['1.原生只支持经纬度/web墨卡托投影：EPSG：4326/3857，对自定义或地方坐标系支持不够', '2.三维表达局限于高程，提供的基本高程无法支持海量三维模型/倾斜摄影，与Cesium相差较远'],
                    develops: ['MapboxGL主框架：基础平台-潘卓然', 'MapboxGL主框架：基础平台-潘卓然'],
                    helper: [{ name: 'Mapbox相关资料汇总', link: 'https://www.zhihu.com/topic/20067211/hot' }]
                },
                {
                    name: 'Leaflet',
                    info: 'Leaflet是一款轻量级地图引擎，其具备丰富的插件资源，扩展性较好，移动端适配友好。适合于大众化、通用性二维gis应用开发和跨端应用研发',
                    advs: [
                        {
                            info: '支持主流投影坐标',
                            image: './static/assets/total/select/leaflet-good-1.png',
                            tags: ['projection'],
                            detail: '几乎所有的主流投影坐标系都可以支持'
                        },
                        {
                            info: '矢量表达',
                            image: './static/assets/total/select/leaflet-good-2.gif',
                            tags: ['VECTOR GRAPHIC'],
                            detail: '矢量专题图，矢量空间分析，矢量瓦片，矢量可视化等矢量表达'
                        },
                        {
                            info: '全样式表达',
                            image: './static/assets/total/select/leaflet-good-3.gif',
                            tags: ['D3', 'Echarts', 'MapV'],
                            detail: '结合主流的互联网客户四化技术D3,Echarts,Mapv，几乎主要的地图的可视化表达都可以实现.'
                        },
                        {
                            info: '功能全，操作友好',
                            image: './static/assets/total/select/leaflet-good-4.jpg',
                            tags: ['GITHUB', 'BAIDU', 'GOOGLE'],
                            detail: '功能全，插件丰富，社区生态完善.出现bug几乎百度找到，对开发者友好.'
                        },
                        {
                            info: '跨平台',
                            image: './static/assets/total/select/leaflet-good-5.png',
                            tags: ['CHROME', 'IE', 'FIREFOX'],
                            detail: '兼容大部分浏览器，跨平台强.'
                        },
                        {
                            info: '支持移动设备',
                            image: './static/assets/total/select/leaflet-good-6.png',
                            tags: ['MOBILE'],
                            detail: '内部代码框架设计的时候考虑到移动设备的支持.针对移动设备天然支持.'
                        }
                    ],
                    disadvs: [
                        '1.没有使用webgl进行渲染，相较到MapboxGL引擎在可视化表达效果上差一点点（其实是显卡越贵差距越大）',
                        '2.没有使用硬件加速，在数据量上没有发挥硬件的最大效果'
                    ],
                    develops: ['Leaflet-IGSserver主框架:基础平台-龚跃健', 'Leaflet-DataStore/开源插件:基础平台-潘卓然']
                },
                {
                    name: 'Openlayers',
                    info: 'Openlayers问世较早，积累了大量的GIS功能，功能灵活、稳定高、扩展性强，原生支持html5特性，对浏览器兼容性较好。相较于MapboxGL、Leaflet等后起之秀，地图库偏重量级，但优势在于功能强大、适配性好。适用于强GIS应用研发',
                    advs: [
                        {
                            info: '支持主流投影坐标系',
                            image: './static/assets/total/select/openlayer-good-1.png',
                            tags: ['PROJECTION'],
                            detail: '几乎所有的主流投影坐标系都可以支持'
                        },
                        {
                            info: '脚本一体化',
                            image: './static/assets/total/select/openlayer-good-2.png',
                            tags: ['JAVASCRIPT'],
                            detail: '功能全并且集成到官方脚本'
                        },
                        {
                            info: 'ogc协议',
                            image: './static/assets/total/select/openlayer-good-3.png',
                            tags: ['OGC'],
                            detail: '几乎是最遵循ogc协议的地图引擎,很多贡献者本身就是OGC标准参与者'
                        },
                        {
                            info: '兼容性',
                            image: './static/assets/total/select/openlayer-good-4.jpg',
                            tags: ['IE'],
                            detail: '兼容老的ie6789等疑难浏览器问题.'
                        }
                    ],
                    disadvs: ['1.功能大，但相较于其它地图引擎效果欠佳', '2.可视化表达一般','3.由于具备高可扩展性，可适配标准、非标准、地方自定义等多种坐标系'],
                    develops: ['Openlayers-主框架：基础平台-龚跃健', 'Openlayers-插件：基础平台-潘卓然']
                }
            ]
        };
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.webclient-select-panel {
    margin-bottom: 30px;

    .advantage-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 17%;
            margin: 0 4%;

            &.mobile {
                width: 100%;
                margin: 5%;
            }

            img {
                width: 160px;
                height: 160px;
                border-radius: 50%;
            }

            .info {
                margin-top: 24px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #3c4858;
            }

            .tag-area {
                margin-top: 16px;

                .el-tag + .el-tag {
                    margin-left: 8px;
                    margin-top: 8px;
                }
            }

            .detail {
                margin-top: 8px;
            }
        }
    }

    ::v-deep .el-tabs__nav-wrap {
        &::after {
            bottom: 12px;
        }

        .el-tabs__active-bar {
            width: 0;
            height: 0;
            position: relative;

            &::before {
                content: ' ';
                position: absolute;
                left: calc(50% - 8px);
                top: 34px;
                width: 16px;
                height: 16px;
                border: 1px solid #b0b9c8;
                background: #ffffff;
                transform: rotate(45deg);
            }

            &::after {
                content: ' ';
                position: absolute;
                left: calc(50% - 3px);
                top: 39px;
                width: 8px;
                height: 8px;
                background: linear-gradient(90deg, #4794fa, #31e1e6);
                transform: rotate(45deg);
            }
        }

        .el-tabs__item {
            height: 56px;
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #3c4858;

            &.is-active {
                color: #3a85c6;
            }
        }
    }
}
.banner {
    padding-top: 20px;
    text-align: space-around;
}

h2 {
    margin: 0;
    line-height: 48px;
    color: #555;
}

.left-text h3 {
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 30px;
    color: #1f2d3d;
}

.left-text h4 {
    color: #5e6d82;
    font-weight: 400;
}

.content-head {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 50px;

    .mobile {
        display: block;

        .card + .card {
            margin-top: 10px;
        }
    }
}

.content-main {
    box-sizing: border-box;
    border-radius: 10px;
    /* background-color: #eee; */
    text-align: space-around;
    padding: 10px;
}

.head-area {
    display: flex;

    img {
        width: 10px;
        height: 56px;
    }

    .info {
        margin-left: 16px;

        .name {
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #3a85c6;
        }

        .star {
            font-size: 30px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #3a85c6;
        }
    }
}

.head-list {
    padding: 0;
    font-size: 15px;
    font-weight: bold;
    color: #070707;

    li {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #3c4858;
        list-style-type: none;
    }
}

.left-text {
    text-align: left;
}

.image-head {
    height: 300px;
}

.first-title {
    margin-top: 50px;
}

.warning {
    padding: 25px 20px;
    background-color: #eeeeee;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333;
}

.warning + .warning {
    margin-top: 20px;
}

.title {
    display: flex;
    align-items: center;
    height: 22px;
    margin-top: 56px;
    margin-bottom: 32px;

    img {
        width: 10px;
        height: 22px;
    }

    .text {
        margin-left: 8px;
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #3c4858;
    }
}

.el-row {
    display: flex;
    align-items: center;

    .tutorials-icon {
        width: 24px;
        height: 24px;
        margin-left: 20px;
        margin-right: 16px;
    }
}

.important {
    color: #e91e63 !important;
    font-weight: bold;
}

.primaryrmation {
    color: #67c23a;
    font-weight: bold;
}
</style>
