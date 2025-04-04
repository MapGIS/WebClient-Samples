import Vue from 'vue';
import VueRouter from 'vue-router';

import LayoutThree from '@/views/layout/LayoutThree';
import LayoutTwo from '@/views/layout/LayoutTwo';

import Helper from '../views/helper/Helper';
import HelperNew from '../views/helper/HelperNew';
import Gallery from '../views/gallery/Gallery';
import ShowCase from '../views/demo/ShowCase';
import Product from '../views/component/product';
import ProductNew from '../views/component/ProductNew';
import Guide from '../views/guide/DevelopGuide';
import GuideNew from '../views/guide/DevelopGuideNew';
import GuideNewMulti from '../views/guide/DevelopGuideNewMulti';

Vue.use(VueRouter);

// 解决重复触发了同一个路由报错： NavigationDuplicated: Avoided redundant navigation to current location
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export const routes = [
    {
        path: '/',
        component: LayoutTwo,
        hidden: true,
        name: 'welcome',
        redirect: 'index',
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('@/views/welcome/home')
            }
        ]
    },
    {
        path: '/total',
        component: LayoutThree,
        redirect: '/total/core',
        hidden: true,
        name: 'total',
        children: [
            {
                path: 'core',
                name: 'core',
                component: () => import('@/views/total/Core')
            },
            {
                path: 'detail',
                name: 'detail',
                component: () => import('@/views/total/Detail')
            },
            {
                path: 'plugins',
                name: 'plugins',
                component: () => import('@/views/total/Plugin')
            },
            {
                path: 'use',
                name: 'use',
                component: () => import('@/views/total/Use')
            },
            {
                path: 'select',
                name: 'select',
                component: () => import('@/views/total/Select')
            },
            {
                path: 'download',
                name: 'download',
                component: () => import('@/views/total/Download')
            },
            {
                path: 'detailChart',
                name: 'detailChart',
                component: () => import('@/views/total/DetailChart')
            },
            {
                path: 'pluginTags',
                name: 'pluginTags',
                component: () => import('@/views/total/PluginTags')
            },
            {
                path: 'bugCommit',
                name: 'bugCommit',
                component: () => import('@/views/total/BugCommit')
            }
        ]
    },
    {
        path: '/standard',
        component: LayoutThree,
        redirect: '/standard/epsg',
        hidden: true,
        name: 'standard',
        children: [
            {
                path: 'epsg',
                name: 'epsg',
                component: () => import('@/views/standard/Epsg')
            },
            {
                path: 'ogc',
                name: 'ogc',
                component: () => import('@/views/total/Detail')
            },
            {
                path: 'socket',
                name: 'socket',
                component: () => import('@/views/total/Plugin')
            },
            {
                path: 'geojson',
                name: 'geojson',
                component: () => import('@/views/standard/Geojson')
            }
        ]
    },
    {
        path: '/fqa/:mapmode/:first/:file',
        component: HelperNew,
        name: 'helper-views'
    },
    {
        path: '/fqa/:mapmode/:first/:second/:file',
        component: HelperNew,
        name: 'helper-views'
    },
    {
        path: '/example-gallery/:mapmode',
        component: Gallery,
        name: 'gallery-views'
    },
    {
        path: '/modules/:mapmode',
        component: ShowCase,
        hidden: true,
        name: 'demo',
        children: [
            {
                path: ':first/:file',
                name: 'codemirror',
                component: () => import('@/views/demo/index')
            },
            {
                path: ':first/:second/:file',
                name: 'codemirror',
                component: () => import('@/views/demo/index')
            }
        ]
    },
    {
        path: '/total/*',
        component: () => import('@/views/empty/index'),
        name: '*'
    },
    {
        path: '/standard/*',
        component: () => import('@/views/empty/index'),
        name: '*'
    },
    // {
    //     path: '/produce/:mapmode/:file',
    //     component: Product,
    //     name: 'product'
    // },
    {
        path: '/produce/:mapmode/:file',
        component: ProductNew,
        name: 'product'
    },
    // {
    //     path: '/guide/:mapmode/:file',
    //     component: Guide,
    //     name: 'guide'
    // },
    {
        path: '/guideMulti/:mapmode/:file',
        component: GuideNewMulti,
        name: 'guideMulti'
    },
    {
        path: '/guide/:mapmode/:file',
        component: GuideNew,
        name: 'guide'
    }
];

const router = new VueRouter({
    mode: 'hash',
    routes: routes
});

export default router;
