<template>
    <div class="sidebar-gallery-wrapper">
        <el-menu
            mode="vertical"
            :show-timeout="200"
            :default-openeds="defaultOpeneds"
            :default-active="defaultActive"
            @select="handleSelect"
            @open="handleOpen"
            @close="handleOpen"
        >
            <sidebar-item
                v-for="child in configList.childs"
                :key="child.name"
                :active="defaultActive"
                :item="child"
                :base-path="child.path"
                :type="configList.mapmode"
            ></sidebar-item>
        </el-menu>
    </div>
</template>

<script>
import SidebarItem from './SidebarItem';

export default {
    components: {
        SidebarItem
    },
    props: {
        configList: {
            type: Object,
            required: true
        },
        scrollActive: Array
    },
    data() {
        return {
            defaultOpeneds: [],
            defaultActive: ''
        };
    },
    computed: {},
    watch: {
        scrollActive(/* next */) {
            // this.defaultOpeneds = next
            // this.defaultActive = next.length > 0 ? next[next.length - 1] : ''
        }
    },
    mounted() {
        const keys = window.location.href.split('#');
        const anchors = keys.slice(2, keys.length);
        this.defaultOpeneds = anchors;
        this.defaultActive = anchors[anchors.length - 1];
    },
    methods: {
        handleSelect(key) {
            /* var href = window.location.href.split("#");
      var localte = "/" + key.replace('#', '/');
      if (href.length >= 2) {
        let newHref = href[0] + "#" + href[1].replace('gallery', 'demo') + localte;
        window.location.href = newHref;
      } */
            return key;
        },
        handleOpen(key, keys) {
            let href = window.location.href.split('#');
            let localte = '';
            keys.forEach((k) => {
                localte = localte + '#' + k;
            });
            if (href.length >= 2) {
                let newHref = href[0] + '#' + href[1] + localte;
                window.location.href = newHref;
            }
        }
    }
};
</script>

<style lang="scss">
.sidebar-gallery-wrapper {
    .el-menu {
        background: #F8F8F8;
    }
    .el-submenu .el-menu {
        margin-left: 30px;
    }
    .el-menu-item {
        font-size: 14px;
        height: 40px !important;
        line-height: 40px !important;
    }
    .el-submenu__title {
        padding-left: 20px !important;
    }
    .el-menu-item.submenu-item-span {
        border-left: 1px solid #c8cdd4;
        padding-left: 20px !important;
        margin-left: -8px;
    }
    .el-menu-item.submenu-item-span:hover{
        border-left: 1px solid #3A85C6;
        background-color: transparent;
    }
    .el-menu-item.submenu-item-span:hover .menu-item-right span{
        color: #3A85C6;
    }
    .menu-item-right span{
        color: #333;
    }
    .el-submenu .el-menu-item {
        min-width: 156px;
    }
    .hide-leaf-submenu .el-menu-item{
        border-left: 1px solid #c8cdd4;
        font-size: 14px;
        height: 40px !important;
        line-height: 40px !important;
    }
    .hide-leaf-submenu .el-menu-item.is-active{
      border-left: 1px solid #3A85C6;
    }
    .hide-leaf-submenu .el-menu-item.is-active .menu-item-right span{
      color: #3A85C6;
    }
    .hide-leaf-submenu:hover .menu-item-right span, .hide-leaf-submenu.active .menu-item-right span{
        color: #3A85C6;
    }
    .hide-leaf-submenu:hover .el-menu-item, .hide-leaf-submenu.active .el-menu-item{
        border-left: 1px solid #3A85C6;
    }
    .hide-leaf-submenu .el-submenu__title:hover{
        background: transparent;
    }
}
  .nest-menu{
    .el-submenu{
      margin-left: -10px;
    }
  }
</style>
