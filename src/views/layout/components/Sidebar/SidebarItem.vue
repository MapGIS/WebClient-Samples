<template>
  <div v-if="item.childs">
    <template v-if="item.hideleaf !== true || isDemoSidebar">
      <el-submenu :index="item.folder">
        <template>
          <div v-if="item.name" slot="title" :class="{ 'submenu-item-span': true, 'submenu-last-open': active === item.folder }">
<!--            <div class="menu-item-left">-->
<!--              <IconFont v-if="item.iconfont" class="icon" :type="item.iconfont"></IconFont>-->
<!--            </div>-->
            <div class="menu-item-right">
              <span>{{ item.name }}</span>
            </div>
          </div>
        </template>
        <div v-for="(child, index) in item.childs" :key="index">
          <div v-if="item.leaffolder === true">
            <template>
              <sidebar-menu-item
                v-if="isNest"
                :route="route"
                :child="child"
                :type="type"
                :file="child.file"
                :firstkind="last"
                :secondkind="item.folder"
              ></sidebar-menu-item>
              <sidebar-menu-item
                v-else
                :route="route"
                :child="child"
                :type="type"
                :file="child.file"
                :firstkind="item.folder"
              ></sidebar-menu-item>
            </template>
          </div>
          <div v-else>
            <sidebar-item
              :is-nest="true"
              class="nest-menu"
              :active="active"
              :route="route"
              :type="type"
              :item="child"
              :key="child.file"
              :last="item.folder"
              :isDemoSidebar="isDemoSidebar"
            ></sidebar-item>
          </div>
        </div>
      </el-submenu>
    </template>
    <template v-else>
      <div @click.stop="hideleafClick(item.folder)" class="hide-leaf-submenu" :id="'hide-leaf-submenu-'+item.folder">
        <el-menu-item
          class="submenu-item-span"
          :index="item.folder"
        >
          <div class="menu-item-right">
            <span
              v-if="item.name"
              slot="title"
            >{{item.name}}</span>
          </div>
        </el-menu-item>
      </div>
    </template>
  </div>
</template>

<script>
    import IconFont from '@/config/components/IconFont/iconfront';
    import SidebarMenuItem from './SidebarMenuItem';

    export default {
        name: 'SidebarItem',
        props: {
            // route配置json
            route: {
                type: Boolean,
                default: false
            },
            item: {
                type: Object,
                required: true
            },
            active: {
                type: String
            },
            isNest: {
                type: Boolean,
                default: false
            },
            basePath: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                required: true
            },
            last: {
                type: String
            },
            isDemoSidebar:{
                type: Boolean,
                default: false
            }
        },
        components: {
            IconFont,
            SidebarMenuItem
        },
        data() {
            return {
                onlyOneChild: null
            };
        },
        methods: {
            hideleafClick(thisPath) {
                let domId = 'hide-leaf-submenu-'+thisPath;
                let classDoms = document.getElementsByClassName('hide-leaf-submenu');
                for(let dom of classDoms){
                    dom.classList.remove('active');
                }
                document.getElementById(domId).classList.add("active");
                let keys = [thisPath];
                let href = window.location.href.split('#');
                let localte = '';
                keys.forEach((k) => {
                    localte = localte + '#' + k;
                });
                if (href.length >= 2) {
                    let newHref = href[0] + '#' + href[1] + localte;
                    window.location.href = newHref;
                }
            },
            hasOneShowingChild(children) {
                const showingChildren = children.filter((item) => {
                    if (item.hidden) {
                        return false;
                    } else {
                        // temp set(will be used if only has one showing child )
                        this.onlyOneChild = item;
                        return true;
                    }
                });
                if (showingChildren.length === 1) {
                    return true;
                }
                return false;
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .submenu-last-open {
    //color: #3A85C6;
  }
  .nest-menu:active {
    color: #3a85c6;
  }
  .submenu__title:hover {
    color: #3a85c6;
  }
  .submenu-item-span {
    width: 100%;
    display: flex;
    height: 56px;
    .menu-item-left {
      float: left;
      margin-left: 0px;
    }
    
    .menu-item-right {
      float: right;
      margin-right: 0px;
    }
  }
  .submenu-item-span.is-active{
    background: transparent;
  }
  
  .icon {
    // float: left;
    width: 1.5em;
    height: 1.5em;
    margin-top: 0px;
    margin-right: 8px;
  }

</style>
