<template>
    <router-link :to="linkUrl" class="gallery-card-div">
      <div class="gallery-card-wrapper">
        <div class="box-card-header">
          <img
            lazy
            v-lazy="imgUrl"
            class="card-image"
          />
        </div>
        <div class="box-card-body" style="position:relative;">
          <span class="title" :title="name" :class="{'fault':name.indexOf('暂缺')>-1}">{{ name }}</span>
        </div>
      </div>
    </router-link>
</template>

<script>
export default {
  name: "card-view",
  components: {},
  data () {
    return {
      webclientScrollContainer: "el-scrollbar__wrap",
      lazyImg: true,
      nullImg: "./static/assets/components/CardGroup/null-img.png",
      nullUser: "./static/assets/user/admin-big.png",
      imgUrl: this.getImageUrl(
        this.type,
        this.image,
        this.firstkind,
        this.secondkind
      ),
      linkUrl: this.getLinkUrl(
        this.type,
        this.file,
        this.firstkind,
        this.secondkind
      )
    };
  },
  watch: {
    type (val) {
      let { file, image, firstkind, secondkind } = this;
      this.imgUrl = this.getImageUrl(val, image, firstkind, secondkind);
      this.linkUrl = this.getLinkUrl(val, file, firstkind, secondkind);
    },
  },
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    firstkind: {
      type: String
    },
    secondkind: {
      type: String
    },
    file: {
      type: String,
      required: true
    },
    update: {
      type: String,
      required: false
    },
    detail: {
      type: String
    },
    image: {
      type: String,
      required: true
    }
  },
  methods: {
    getImageUrl (type, image, first, second) {
      var baseUrl = "./static/modules/";
      var imageUrl = baseUrl + type + "/example-gallery/" + first + "/";
      if (second !== undefined) {
        imageUrl = imageUrl + second + "/" + image;
      } else {
        imageUrl = imageUrl + image;
      }
      return imageUrl;
    },
    getLinkUrl (type, file, firstkind, secondkind) {
      var baseUrl = "/modules/" + type + "/" + firstkind + "/";
      if (secondkind !== undefined) {
        baseUrl = baseUrl + secondkind + "/" + file;
      } else {
        baseUrl += file;
      }
      return baseUrl;
    }
  }
};
</script>

<style lang="scss">
.gallery-card-div {
    margin: 12px;
    width: 260px;
    .gallery-card-wrapper {
      box-sizing: border-box;
      width: 100%;
      outline:1px solid #E0E4EA;
      transition: all .2s;
        .box-card-header {
            position: relative;
            margin-top: 0px;
            margin-left: 0px;
            margin-right: 0px;
            height: 150px;
            /* width: calc( 20vw - 60px); */
            img {
                height: 100%;
                width: 100%;
              object-fit: cover;
            }
        }
      .box-card-body{
        height: 50px;
        line-height: 50px;
        padding-left: 15px;
        border-top: 1px solid #e0e4ea;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
        .title {
          font-size: 15px;
          font-family: '微软雅黑';
          color: #333;
        }
        .title.fault{
          color: red;
        }
      }
    }
}
.gallery-card-div:hover {
  .gallery-card-wrapper{
    box-shadow: 0px 4px 8px 0px rgba(58, 133, 198, 0.2);
    /*outline: 2px solid #3a85c6;*/
  }
  .box-card-body{
    .title {
      color: #3a85c6;
    }
  }
}
</style>
