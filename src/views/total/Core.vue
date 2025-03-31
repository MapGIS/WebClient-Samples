<template>
    <div class="webclient-core-wrapper">
        <total-tab />
        <el-row type="flex" justify="center" class="banner">
            <el-col :span="mobile ? 22 : 18">
                <el-image class="framework-style-image" :src="framework" :preview-src-list="frameworks"> </el-image>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" class="banner">
            <el-col :span="mobile ? 22 : 18">
                <el-tabs tab-position="top" style="height: 100%">
                    <el-tab-pane label="主要服务及功能">
                        <el-table
                            :data="server"
                            border
                            stripe
                            style="width: 100%"
                            :header-cell-style="headerCellStyle"
                        >
                            <el-table-column type="index" label="序号" width="60"> </el-table-column>
                            <el-table-column prop="func" label="主要服务及功能"> </el-table-column>
                            <el-table-column prop="detail" label="功能描述" width="360"> </el-table-column>
                            <el-table-column prop="leaflet" label="Leaflet"> </el-table-column>
                            <el-table-column prop="openlayers" label="OpenLayers"> </el-table-column>
                            <el-table-column prop="mapboxgl" label="MapboxGL"> </el-table-column>
                            <el-table-column prop="cesium" label="Cesium"> </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!--
                     <el-tab-pane label="MapGIS IGServer 1.0">
                        <el-table
                            :data="igserver"
                            border
                            stripe
                            style="width: 100%"
                            :header-cell-style="headerCellStyle"
                        >
                            <el-table-column type="index" label="序号" width="60"> </el-table-column>
                            <el-table-column prop="func" label="服务名称"> </el-table-column>
                            <el-table-column prop="detail" label="功能说明"> </el-table-column>
                            <el-table-column prop="leaflet" label="Leaflet"> </el-table-column>
                            <el-table-column prop="openlayers" label="OpenLayers"> </el-table-column>
                            <el-table-column prop="mapboxgl" label="MapboxGL"> </el-table-column>
                            <el-table-column prop="cesium" label="Cesium"> </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="MapGIS IGServer 2.0">
                        <el-table
                            :data="igserver2"
                            border
                            stripe
                            style="width: 100%"
                            :header-cell-style="headerCellStyle"
                        >
                            <el-table-column type="index" label="序号" width="60"> </el-table-column>
                            <el-table-column prop="func" label="服务名称"> </el-table-column>
                            <el-table-column prop="detail" label="功能说明"> </el-table-column>
                            <el-table-column prop="leaflet" label="Leaflet"> </el-table-column>
                            <el-table-column prop="openlayers" label="OpenLayers"> </el-table-column>
                            <el-table-column prop="mapboxgl" label="MapboxGL"> </el-table-column>
                            <el-table-column prop="cesium" label="Cesium"> </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="MapGIS DataStore">
                        <el-table
                            :data="datastore"
                            border
                            stripe
                            style="width: 100%"
                            :header-cell-style="headerCellStyle"
                        >
                            <el-table-column type="index" label="序号" width="60"> </el-table-column>
                            <el-table-column prop="func" label="功能"> </el-table-column>
                            <el-table-column prop="detail" label="说明"> </el-table-column>
                            <el-table-column prop="url" label="Url地址"> </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="DataAnalysis">
                        <el-table
                            :data="dataanalysis"
                            border
                            stripe
                            style="width: 100%"
                            :header-cell-style="headerCellStyle"
                        >
                            <el-table-column type="index" label="序号" width="60"> </el-table-column>
                            <el-table-column prop="func" label="功能"> </el-table-column>
                            <el-table-column prop="detail" label="说明"> </el-table-column>
                            <el-table-column prop="url" label="Url地址"> </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="DataView">
                        <el-table
                            :data="dataview"
                            border
                            stripe
                            style="width: 100%"
                            :header-cell-style="headerCellStyle"
                        >
                            <el-table-column type="index" label="序号" width="60"> </el-table-column>
                            <el-table-column prop="func" label="功能"> </el-table-column>
                            <el-table-column prop="detail" label="说明"> </el-table-column>
                            <el-table-column prop="url" label="环境依赖"> </el-table-column>
                        </el-table>
                    </el-tab-pane>
                   -->
                </el-tabs>
            </el-col>
        </el-row>
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
            framework: './static/assets/logo/framework.png',
            frameworks: ['./static/assets/logo/framework.png'],
            // datastore: [
            //     {
            //         func: '创建大数据存储-Windows',
            //         detail: '创建大数据存储window版本（postgresql、ES集群、mongoDB集群）',
            //         url: '无说明'
            //     },
            //     {
            //         func: '创建大数据存储-Linux',
            //         detail: '创建大数据存储linux版本（postgresql、ES集群、mongoDB集群、hdfs集群）',
            //         url: '无说明'
            //     },
            //     {
            //         func: '数据导入',
            //         detail: 'MapGisDataStore数据导入工具',
            //         url: '无说明'
            //     },
            //     {
            //         func: '数据管理',
            //         detail: 'MapGisDataStores数据管理（数据目录、数据预览、词典上传（ES）、文件操作（hdfs））',
            //         url: '无说明'
            //     },
            //     {
            //         func: '时空查询功能',
            //         detail: '根据空间、时间、ID列表、其它属性条件进行分页查询',
            //         url: '/es/stQuery?'
            //     },
            //     {
            //         func: '时空聚合统计功能',
            //         detail: '	根据空间、时间、其它属性条件以及聚合条件（sum、max、min、average等）进行聚合查询',
            //         url: '/es/stQueryByAgg?'
            //     },
            //     {
            //         func: '时空聚合查询功能（GeoHash聚合）',
            //         detail: '根据空间、时间、其它属性条件对指定属性字段的值进行GeoHash聚合',
            //         url: '/es/stGeoHashQueryByAgg?'
            //     },
            //     {
            //         func: '	地理围栏功能',
            //         detail: '根据空间围栏、时间、属性围栏条件进行查询返回结果确定对象是否在围栏内',
            //         url: '/es/GeoEnclosureQuery?'
            //     }
            // ],
            // dataanalysis: [
            //     {
            //         func: '拷贝数据任务',
            //         detail: '拷贝数据任务提交接口',
            //         url: '/analysticservice/job/copyData/submit?'
            //     },
            //     {
            //         func: '计算字段任务',
            //         detail: '计算字段任务提交接口',
            //         url: '/analysticservice/job/calculateField/submit?'
            //     },
            //     {
            //         func: '连接要素图层任务',
            //         detail: '连接要素图层任务提交接口',
            //         url: '/analysticservice/job/joinFeature/submit?'
            //     },
            //     {
            //         func: '属性汇总任务',
            //         detail: '属性汇总任务提交接口',
            //         url: '/analysticservice/job/summaryAttribute/submit?'
            //     },
            //     {
            //         func: '范围内汇总要素任务',
            //         detail: '范围内汇总要素任务提交接口',
            //         url: '/analysticservice/job/summaryWithin/submit?'
            //     },
            //     {
            //         func: '格网聚合点要素任务',
            //         detail: '格网聚合点要素任务提交接口',
            //         url: '/analysticservice/job/summaryMesh/submit?'
            //     },
            //     {
            //         func: '构建追踪轨迹任务',
            //         detail: '构建追踪轨迹任务提交接口',
            //         url: '/analysticservice/job/reconstructTracks/submit?'
            //     },
            //     {
            //         func: '创建缓冲分析任务',
            //         detail: '创建缓冲分析任务提交接口',
            //         url: '/analysticservice/job/createBuffer/submit?'
            //     },
            //     {
            //         func: '探测事件分析任务',
            //         detail: '探测事件分析任务提交接口',
            //         url: '/analysticservice/job/detectIncidents/submit?'
            //     },
            //     {
            //         func: '查找相似位置任务',
            //         detail: '查找相似位置任务提交接口',
            //         url: '/analysticservice/job/findSimilarLocation/submit?'
            //     },
            //     {
            //         func: '计算密度任务',
            //         detail: '计算密度任务提交接口',
            //         url: '/analysticservice/job/calculateDensity/submit?'
            //     },
            //     {
            //         func: '计算热点任务',
            //         detail: '计算热点任务提交接口',
            //         url: '	/analysticservice/job/findHotSpot/submit?'
            //     },
            //     {
            //         func: '计算时空立方体任务',
            //         detail: '计算时空立方体任务提交接口',
            //         url: '/analysticservice/job/createSpaceTimeCube/submit?'
            //     }
            // ],
            // dataview: [
            //     {
            //         func: '矢量瓦片',
            //         detail: '支持mvt.pbf的矢量瓦片功能',
            //         url: 'igserver的矢量瓦片的出图服务'
            //     },
            //     {
            //         func: '矢量专题图',
            //         detail: '支持geojson，object的矢量专题图功能',
            //         url: 'igserver的矢量元素的出图服务'
            //     },
            //     {
            //         func: '百度EchartGL',
            //         detail: '支持百度EchartGL三维球的地图服务功能',
            //         url: '编辑样式的时候必须严格遵守百度EchartGL的格式'
            //     },
            //     {
            //         func: '百度MapV',
            //         detail: '支持百度MapV的二维地图数据可视化表达',
            //         url: '编辑样式的时候必须严格遵守百度MapV的格式'
            //     },
            //     {
            //         func: '聚类图/热力图/密度图',
            //         detail: '支持四大引擎的聚类热力密度图可视化表达',
            //         url: 'MapBoxGl/Openlayers/Cesium无要求，leaflet必须引入对应插件'
            //     },
            //     {
            //         func: 'ElasticSearch服务对接',
            //         detail: '封装了原始的ElasticSearch.js接口和适应空间信息的中地接口，按照各自需求进行选择',
            //         url: '必须引入对应elasticSearch/datastore的脚本'
            //     },
            //     {
            //         func: 'GeoSpark服务对接',
            //         detail: '针对分布式空间分析的结构进行的中地业务的封装，提供Rest的服务',
            //         url: '必须引入对应dataanalysis的脚本'
            //     },
            //     {
            //         func: '基本地图操作',
            //         detail: '针对四大地图引擎的基本地图操作',
            //         url: '必须引入对应地图引擎如leaflet.js/mapbox-gl.js/openlayers.js/cesium.js'
            //     },
            //     {
            //         func: '前端空间分析服务',
            //         detail: '针对四大地图引擎的前端空间分析服务',
            //         url: '除了必须引入对应地图引擎如leaflet.js / mapbox-gl.js / openlayers.js / cesium.js外,必须引入公司对应turf.js脚本'
            //     },
            //     {
            //         func: '前端GeoJSON服务',
            //         detail: '针对四大地图引擎的前端GeoJSON的绘制、分析、计算服务',
            //         url: '除了必须引入对应地图引擎外,必须引入对应geojson.js脚本用于格式解析、反解析'
            //     }
            // ],
            // igserver: [
            //     {
            //         func: '图层目录服务',
            //         detail: '支持数据源、GDB（地理数据库）、数据集、简单要素类（图层级）、空间参考系等数据资源操作，提供基本的增、删、改、查等操作',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: '文档目录服务',
            //         detail: '针对地图文档/目录地图文档提供列表信息获取、地图服务信息获取、图例获取、地图文档结构编辑（添加图层、删除图层、改变图层顺序等）等服务功能',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: '瓦片目录服务',
            //         detail: '针对瓦片服务/目录瓦片服务提供的服务列表信息获取、瓦片服务信息获取等服务功能',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: '其它目录服务',
            //         detail: '针对系统库、颜色库提供的操作服务',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: '地图服务',
            //         detail: '包括地图文档、矢量图层、栅格瓦片、矢量瓦片、影像服务、三维地图服务、标绘服务等服务功能',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: '三维地图服务',
            //         detail: '提供三维地图文档服务、三维地形服务等',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'√'
            //     },
            //     {
            //         func: '要素服务',
            //         detail: '提供要素级的查询、编辑、属性统计等要素操作服务，包括文档和图层要素服务',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: '三维要素服务',
            //         detail: '提供针对三维立体要素级的查询、编辑、属性统计等要素操作服务，适用于三维文档地图服务、三维模型图层查询等数据',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'√'
            //     },
            //     {
            //         func: '专题图服务',
            //         detail: '提供服务器端专题图创建、修改、删除等服务操作，支持统计、分段、统一、单值、密度、等级、四色、随机等服务端专题图',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: '几何分析服务',
            //         detail: '提供面积/长度计算、坐标转换、拓扑关系判断、光滑线等几何运算及分析服务',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: '工作流服务',
            //         detail: '通过工作流服务提供的叠加分析、缓冲区分析、裁剪分析、网络分析、地址编码、数据转换、三维切割、变化检测、大气校正、影像分析、影像融合、栅格分析等100+高级分析功能',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: 'OGC服务',
            //         detail: '支持WMS、WMTS、WFS等OGC服务',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     }
            // ],
            // igserver2: [
            //     {
            //         func: '地图服务',
            //         detail: '包括矢量地图、瓦片地图、图层等相关信息操作，包括服务元数据信息、图例、系统库等信息获取，以及取图、查询、图层操作等服务级操作功能',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'-'
            //     },
            //     {
            //         func: '瓦片服务',
            //         detail: '提供瓦片元数据信息获取及取图等操作',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'-'
            //     },
            //     {
            //         func: '要素服务',
            //         detail: '提供多种要素级增、删、改、查等操作，支持地图文档级、图层级操作',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'-'
            //     },
            //     {
            //         func: '矢量瓦片服务',
            //         detail: '提供矢量瓦片相关操作服务，包括矢量瓦片信息、字体、样式及瓦片数据获取',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'-'
            //     },
            //     {
            //         func: '场景服务',
            //         detail: '提供三维场景相关操作服务，包括场景服务信息、场景图层列表信息、指定图层信息等基本信息获取，以及单图层、多图层查询等操作，支持矢量、注记、地形、模型等多种图层类型',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'√'
            //     },
            //     {
            //         func: 'M3D服务',
            //         detail: 'M3D模型缓存服务，提供服务基本信息、节点信息、公共资源等信息获取',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'√'
            //     },
            //     {
            //         func: '标绘服务',
            //         detail: '用于存储行业标绘产生的各类标绘图形，包括标绘元素、态势推演脚本、符号库、标号等对象，支持获取、保存、删除、添加等操作',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: '资源服务',
            //         detail: '资源服务用于获取服务器管理的各类资源信息，包括数据资源、文件资源、系统库资源、工作流资源等，以及管理的用户临时资源，根据数据源不同，提供获取、查询、注销、下载、新增、删除等操作',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'-'
            //     },
            //     {
            //         func: '工作流服务',
            //         detail: '工作流管理服务，基于该服务可实现叠加分析、缓冲区分析、裁剪分析、网络分析、地址编码、数据转换、三维切割、变化检测、大气校正、影像分析、影像融合、栅格分析等100+高级分析功能',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'-'
            //     },
            //     {
            //         func: '地理几何服务',
            //         detail: '提供面积/长度计算、坐标转换、拓扑关系判断、光滑线等地理几何运算及分析功能',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'-'
            //     },
            //     {
            //         func: '地名地址服务',
            //         detail: '提供地名地址相关服务，支持正向、逆向地理编码',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'-'
            //     },
            //     {
            //         func: '3DTiles服务',
            //         detail: '管理3DTiles服务，可获取服务元数据信息、TileJson信息、服务文件信息等',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'√'
            //     },
            //     {
            //         func: '地形缓存服务',
            //         detail: '地形缓存数据管理服务，支持获取服务基本信息、图层信息、terrain数据信息等',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'√'
            //     },
            //     {
            //         func: 'OGC服务',
            //         detail: '支持WMS、WMTS、WFS等OGC服务',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: 'ArcGIS地图服务',
            //         detail: 'ArcGIS地图服务管理服务，包括矢量地图服务、瓦片地图服务等，支持获取服务基本信息、取图、图层、图例等资源',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: 'ArcGIS要素服务',
            //         detail: 'ArcGIS要素服务，支持文档级（多图层）、图层级的要素增、删、改、查等操作',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     },
            //     {
            //         func: 'ArcGIS几何分析服务',
            //         detail: 'ArcGIS几何分析服务支持，支持ArcGIS常用 的缓冲、拓扑、化简、求交、求并、求差、裁剪等几何运算与分析功能',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'-'
            //     },
            //     {
            //         func: 'ArcGIS矢量瓦片服务',
            //         detail: 'ArcGIS矢量瓦片服务支持，支持获取服务资源、字体、样式、瓦片数据等信息',
            //         leaflet: '-',
            //         openlayers:'-',
            //         mapboxgl:'-',
            //         cesium:'-'
            //     },
            //     {
            //         func: '专题服务',
            //         detail: '提供服务器端专题图创建、修改、删除等服务操作，支持统计、分段、统一、单值、密度、等级、四色、随机等服务端专题图',
            //         leaflet: '√',
            //         openlayers:'√',
            //         mapboxgl:'√',
            //         cesium:'√'
            //     }

            // ],
            server: [
                {
                    func: 'MapGIS IGServer高性能GIS服务',
                    detail: '支持高性能GIS服务,提供强大的数据管理、分析、可视化和共享服务能力，包括地图服务、瓦片服务、矢量瓦片服务、场景服务、模型缓存服务、地形缓存服务、要素服务、专题图服务、几何分析服务、地理处理服务等GIS服务功能',
                    leaflet: '√',
                    openlayers:'√',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: 'MapGIS DataStore分布式大数据服务',
                    detail: '支持分布式大数据存储和管理服务，可管理关系型数据、切片型数据、实时型数据、非结构数据、区块链数据及图数据的混合数据库，提供存储、管理、查询、统计、地名地址、地理实体关联、知识图谱等大数据服务',
                    leaflet: '-',
                    openlayers:'-',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: 'MapGIS IGServer-X大数据分析服务',
                    detail: '支持大数据GIS分析服务，集成分布式流程处理引擎，提供矢量大数据、实时大数据、影像大数据、文本大数据分布式算子和服务，实现多维时空大数据的分析与挖掘',
                    leaflet: '-',
                    openlayers:'-',
                    mapboxgl:'√',
                    cesium:'-'
                },
                {
                    func: 'MapGIS IGServer-S智能GIS服务',
                    detail: '支持智能GIS分析服务，基于深度学习框架，提供数据关联与融合、空间分析与预测、聚类分类与统计等智能化服务，应用于遥感影像变化检测、建筑物提取、语义分割、岩性识别等领域',
                    leaflet: '-',
                    openlayers:'-',
                    mapboxgl:'-',
                    cesium:'-'
                },
                {
                    func: 'MapGIS Cloud Manager集群服务',
                    detail: '支持集群运维管理平台提供的集群式高性能GIS服务及运维管理服务，实现多种资源的统一管理与运维，采用租户机制实现云 GIS 资源的“分级管理、分别维护”，提供专业、简洁的一站式运维管理服务',
                    leaflet: '√',
                    openlayers:'√',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: 'OGC服务服务',
                    detail: '支持标准化OGC服务，包括WMS、WMTS、WFS等服务标准',
                    leaflet: '√',
                    openlayers:'√',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: '第三方地图服务',
                    detail: '支持第三方地图服务，如天地图、百度、高德、OSM、ArcGIS OnLine等服务标准',
                    leaflet: '√',
                    openlayers:'√',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: '异构GIS地图服务',
                    detail: '支持异构GIS地图服务，如ArcGIS地图服务、ArcGIS瓦片服务、ArcGIS矢量瓦片服务，SuperMap地图服务等',
                    leaflet: '√',
                    openlayers:'√',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: '矢量瓦片服务',
                    detail: '支持矢量瓦片服务，如MapGIS、ArcGIS、Mapbox官网等提供的MVT瓦片服务',
                    leaflet: '√',
                    openlayers:'√',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: '客户端可视化',
                    detail: '支持客户端可视化功能，融合ECharts、MapV、D3等可视化库，提供热力图、聚类图、密度图、轨迹图等可视化特效，实现亿万级数据的快速渲染与可视化表达；以及各种粒子特效、后处理特效、光源效果等三维特效',
                    leaflet: '√',
                    openlayers:'√',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: '客户端专题图',
                    detail: '支持各种常用客户端二三维专题图，包括统计、分段、等级、密度、统一配置等专题图',
                    leaflet: '√',
                    openlayers:'-',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: '客户端分析',
                    detail: '包括二维空间分析和三维分析，其中二维分析支持基于Truf提供插值分析、缓冲区分析、Tin分析、泰森多边形、中心点提取等分析功能。客户端三维分析包括三维量算、地形分析、模型压平、动态剖切、阴影率分析、模型爆炸分析、可视域分析、洪水淹没分析、填挖方计算、剖面分析、控高分析、BIM构件树、单体建筑物生长、城市生长、分层分户、知识图谱等分析功能',
                    leaflet: '√',
                    openlayers:'√',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: '客户端动态标绘',
                    detail: '支持基础标绘和行业动态标绘，基础标绘支持二维图形（点、线、区）、三维图形（正方体、长方体、球体、圆柱、圆锥）、三维模型（树木、交通工具、道路、草坪、建筑物、灯）等标绘；行业标绘支持军事、应急、公安等业符号资源管理、动态标绘、态势推演等二三维场景一体化管理和联合操作',
                    leaflet: '√',
                    openlayers:'√',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: '客户端常用控件',
                    detail: '提供二维地图、三维场景常用的基础控件及工具，包括三维场景设置、测量、标注、标绘、缩放操作、鼠标操作等常用功能',
                    leaflet: '√',
                    openlayers:'√',
                    mapboxgl:'√',
                    cesium:'√'
                },
                {
                    func: 'Vue组件',
                    detail: '提供丰富的组件资源，涉及视图、图层、常用工具、可视化、分析、UI等6大类组件，覆盖二维、三维、UI等多个方面',
                    leaflet: '-',
                    openlayers:'-',
                    mapboxgl:'√',
                    cesium:'√'
                }
            ],
            headerCellStyle: {
              backgroundColor: '#F5F7FA',
              fontSize: '14px',
              fontFamily: 'Microsoft YaHei',
              fontWeight: 'bold',
              color: '#606266'
            }
        };
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.banner {
    padding-top: 20px;
    text-align: center;

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

    // ::v-deep.el-table .el-table__header-wrapper {
    //   tr {
    //     background-color: #F5F7FA;
    //   }
    // }
}

.webclient-core-wrapper {
    margin-bottom: 30px;
    .framework-style-image {
        width: 100%;
        height: fit-content;
    }
}
</style>
