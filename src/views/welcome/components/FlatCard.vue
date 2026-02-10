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
      <template v-if="routeGalleryList && routeGalleryList.length > 0">
        <el-dropdown placement="bottom" @visible-change="dropActiveEven">
          <span class="el-dropdown-link">
            示例<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="route-api-list-drop">
            <el-dropdown-item v-for="(apiVal, apiKey) in routeGalleryList" :key="apiKey">
              <div :key="`card-example-group-${apiKey}`" v-if="apiVal.group" style="padding: 4px 0 4px 10px;font-weight: 600;height:24px;color: #000000;">
                {{apiVal.group}}
                <!-- <div style="display: inline-block;height: 24px;width: 36px;">
                  <svg v-if="apiVal.groupIcon === 'beta'" style="position: absolute;margin-top: 2px;" t="1753410063841" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4288" width="32" height="32"><path d="M816.7 620.4h-29.1l-3.1-19.5h-0.9c-14.4 14.2-33.4 22.6-53.4 23.7-25.6 1.7-47.7-17.9-49.4-44-0.1-1.8-0.1-3.7 0-5.5 0-36.7 30.5-55.7 100.5-63.4 0-19.8-7.3-37.3-32.1-37.3-17.5 1-34.3 7.1-48.6 17.5l-13.1-24.3c20.1-13.8 43.6-21.5 67.8-22.4 41.9 0 61.1 27.1 61.1 72.4l0.3 102.8z m-183 4c-37.8 0-51.1-24-51.1-60v-86.2h-24.4v-26.8l26-1.9 3.9-47.2h29.1v46.3h43.6v29.6h-43.6V565c0 20.6 7 31.1 24.4 31.1 6.2-0.2 12.3-1.5 18-4l6.4 26.4c-10.5 3.6-21.4 5.6-32.4 5.8v0.1z m-94.1-80.3H430.5c-0.3 28.5 22.1 51.9 50.2 52.3h1.8c14.3-0.1 28.2-4.5 40-12.7l12.2 22.7c-16.8 11.7-36.6 17.9-56.9 18.1-45.5 0-81.9-33-81.9-88.8s37.2-90.2 76.7-90.2c44.7 0 68.4 32.6 68.4 81.1 0.1 5.8-0.4 11.7-1.4 17.5z m-257.1 76.1h-75.2V391.5H277c46.1 0 79.4 14.8 79.4 56.3 0.8 21.7-12 41.6-32 49.4v1.5c26 4.1 44.8 27.5 43.6 54.3 0.6 45.5-35.8 67.2-85.5 67.2zM759.3 271H264.7C136.2 271 32 377 32 507.9v236.9h727.3c128.5 0 232.7-106 232.7-236.9S887.8 271 759.3 271z m-44.2 301.4c0 16.7 11.3 23.7 26.3 23.7 15.5-1 29.9-8.1 40.3-19.8v-41.9c-49.9 5.9-66.6 18.6-66.6 38zM321.6 452.3c0-24-15.9-33-47.7-33h-31v67.5h30.3c34 0 48.4-13 48.4-34.5z m-43.1 61.9h-35.6V592h35.8c35.1 0 55.3-12.7 55.3-40.7s-19.8-37.1-55.5-37.1z m194.8-41.3c-21.1 0-39.7 16.4-43.6 46.6h80.6c0.7-29.5-12.6-46.6-37-46.6z" fill="#FF6A00" p-id="4289"></path></svg>
                </div> -->
              </div>
              <a :href="apiVal.url" target="_blank" style="margin-left:10px;">
                <span>{{ apiVal.title }}</span>
              </a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
      <template v-else>
        <router-link :to="routeGallery" v-if="isRoute">
          <span>示例</span>
        </router-link>
        <a v-else :href="routeGallery">
          <span>示例</span>
        </a>
      </template>
      <el-divider direction="vertical"></el-divider>
      <template v-if="routeAPIList && routeAPIList.length > 0">
        <el-dropdown placement="bottom" @visible-change="dropActiveEven">
          <span class="el-dropdown-link">
            API<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="route-api-list-drop">
            <el-dropdown-item v-for="(apiVal, apiKey) in routeAPIList" :key="apiKey">
              <div :key="`card-api-group-${apiKey}`" v-if="apiVal.group" style="padding: 4px 0 4px 10px;font-weight: 600;height:24px;color: #000000;">
                {{apiVal.group}}
                <!-- <div style="display: inline-block;height: 24px;width: 36px;">
                  <svg v-if="apiVal.groupIcon === 'beta'" style="position: absolute;margin-top: 2px;" t="1753410063841" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4288" width="32" height="32"><path d="M816.7 620.4h-29.1l-3.1-19.5h-0.9c-14.4 14.2-33.4 22.6-53.4 23.7-25.6 1.7-47.7-17.9-49.4-44-0.1-1.8-0.1-3.7 0-5.5 0-36.7 30.5-55.7 100.5-63.4 0-19.8-7.3-37.3-32.1-37.3-17.5 1-34.3 7.1-48.6 17.5l-13.1-24.3c20.1-13.8 43.6-21.5 67.8-22.4 41.9 0 61.1 27.1 61.1 72.4l0.3 102.8z m-183 4c-37.8 0-51.1-24-51.1-60v-86.2h-24.4v-26.8l26-1.9 3.9-47.2h29.1v46.3h43.6v29.6h-43.6V565c0 20.6 7 31.1 24.4 31.1 6.2-0.2 12.3-1.5 18-4l6.4 26.4c-10.5 3.6-21.4 5.6-32.4 5.8v0.1z m-94.1-80.3H430.5c-0.3 28.5 22.1 51.9 50.2 52.3h1.8c14.3-0.1 28.2-4.5 40-12.7l12.2 22.7c-16.8 11.7-36.6 17.9-56.9 18.1-45.5 0-81.9-33-81.9-88.8s37.2-90.2 76.7-90.2c44.7 0 68.4 32.6 68.4 81.1 0.1 5.8-0.4 11.7-1.4 17.5z m-257.1 76.1h-75.2V391.5H277c46.1 0 79.4 14.8 79.4 56.3 0.8 21.7-12 41.6-32 49.4v1.5c26 4.1 44.8 27.5 43.6 54.3 0.6 45.5-35.8 67.2-85.5 67.2zM759.3 271H264.7C136.2 271 32 377 32 507.9v236.9h727.3c128.5 0 232.7-106 232.7-236.9S887.8 271 759.3 271z m-44.2 301.4c0 16.7 11.3 23.7 26.3 23.7 15.5-1 29.9-8.1 40.3-19.8v-41.9c-49.9 5.9-66.6 18.6-66.6 38zM321.6 452.3c0-24-15.9-33-47.7-33h-31v67.5h30.3c34 0 48.4-13 48.4-34.5z m-43.1 61.9h-35.6V592h35.8c35.1 0 55.3-12.7 55.3-40.7s-19.8-37.1-55.5-37.1z m194.8-41.3c-21.1 0-39.7 16.4-43.6 46.6h80.6c0.7-29.5-12.6-46.6-37-46.6z" fill="#FF6A00" p-id="4289"></path></svg>
                </div> -->
              </div>
              <a :href="apiVal.url" target="_blank" style="margin-left:10px;">
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
    routeAPIList: Array,
    routeGalleryList: Array
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
