<template>
  <div
      class="flat-card-component"
      :class="{'drop-active': dropActive}"
      @mouseenter="handleInStyle"
      @mouseleave="handleOutStyle"
  >
    <template>
      <img :src="icon" class="image"/>
    </template>
    <template>
      <img :src="bubbleGif" v-if="isHover || dropActive" class="image bubble-gif"/>
    </template>
    <div class="title">
      {{ title }}
    </div>
    <div class="subtitle">
      <div v-for="(val, key) in subtitle" :key="key">
        {{ val }}
      </div>
    </div>
    <div class="actions">
      <router-link :to="routeGallery" v-if="isRoute">
        <span>示例</span>
      </router-link>
      <a v-else :href="routeGallery">
        <span>示例</span>
      </a>
      <el-divider direction="vertical"></el-divider>
      <template v-if="routeAPIList && routeAPIList.length > 0">
        <el-dropdown placement="bottom" @visible-change="dropActiveEven">
                <span class="el-dropdown-link">
                  API<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
          <el-dropdown-menu slot="dropdown" class="route-api-list-drop">
            <el-dropdown-item v-for="(apiVal, apiKey) in routeAPIList" :key="apiKey">
              <a :href="apiVal.url" target="_blank">
                <span>{{ apiVal.title }}</span>
              </a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
      <template v-else>
        <a :href="routeAPI" target="_blank">
          <span>API</span>
        </a>
      </template>

    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    icon: String,
    title: String,
    subtitle: Array,
    index: String,
    routeGallery: String,
    routeAPI: String,
    routeAPIList: Array
  },
  mounted() {
    // 可能是外链地址
    this.isRoute = !(this.routeGallery && this.routeGallery.substr(0, 4) === 'http');
  },
  data() {
    return {
      isHover: false,
      isRoute: true,
      gif: './static/assets/home/bubble-new.gif',
      bubbleGif: '',
      dropActive: false
    };
  },
  methods: {
    handleInStyle() {
      this.isHover = true;
      this.bubbleGif = this.gif + '?+' + Math.random();
    },
    handleOutStyle() {
      this.isHover = false;
    },
    dropActiveEven(isDrop) {
      this.dropActive = isDrop;
      if (isDrop) {
        this.handleInStyle();
      }
    }
  }
};
</script>


<style lang="scss">
.flat-card-component {
  text-align: center;
  width: 240px;

  .image {
    width: 160px;
    height: 160px;
    background: transparent;
    position: relative;
    z-index: 2;
  }

  .bubble-gif {
    position: absolute;
    left: 50%;
    margin-left: -80px;
    z-index: 1;
  }

  .title {
    width: 100%;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
    line-height: 23px;
  }

  .subtitle {
    margin-top: 24px;
    width: 100%;
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: #999;
    line-height: 24px;
  }

  .actions {
    margin-top: 16px;
    font-size: 14px;
  }

  .actions .el-dropdown {
    cursor: pointer;
    color: #3a85c6;
  }
}

.flat-card-component.drop-active {
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(8, 145, 217, 0.2);
}

/*组件api下拉菜单*/
.el-dropdown-menu.route-api-list-drop {
  .popper__arrow {
    border-bottom-color: #fff !important;
  }

  .popper__arrow::after {
    border-bottom-color: #fff !important;
  }

  .el-dropdown-menu__item {
    padding: 0px;
    line-height: 30px;
  }

  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #fff;
  }

  .el-dropdown-menu__item a {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    color: #666;
  }

  .el-dropdown-menu__item a:hover {
    color: #3a85c6;
  }
}
</style>
