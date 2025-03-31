<template>
    <div class="webclient-card-group">
        <el-col :span="24" class="card-backgroud">
            <el-col :span="24" class="col-divider-style gallery-divider">
                <el-divider :id="folder" :key="title" content-position="left">
<!--                    <a aria-hidden="true" class="header-anchor">-->
<!--                      <img :src="imgUrl" class="img-css"/>-->
<!--                    </a>-->
                    <div class="divider-tip big"></div>
                    <div class="divider-tip small"></div>
<!--                    <span class="divider-span" v-if="secondname">{{ secondname }}（{{cards.length}}）</span>-->
                    <span class="divider-span">{{ title }} ({{cards.length}})</span>
                </el-divider>
            </el-col>
            <div class="group-content">
                <card-view v-for="item in cards" :key="item.name"
                           :id="item.file"
                           :name="item.name"
                           :file="item.file"
                           :detail="item.detail"
                           :update="item.update"
                           :image="item.icon"
                           :type="type"
                           :firstkind="firstkind"
                           :secondkind="secondkind"
                ></card-view>
            </div>
        </el-col>
    </div>
</template>

<script>
import CardView from '@/config/components/CardView/index';

export default {
    name: 'card-group',
    components: {
        CardView
    },
    data() {
        return {
            nullImg: './static/assets/components/CardGroup/null-img.png',
            cards: this.cardList,
            imgUrl: './static/assets/components/CardGroup/decorate.png',
            hasSecondName: false
        };
    },
    watch: {
        cardList(val) {
            this.cards = val;
        }
    },
    props: {
        type: {
            type: String,
            required: true
        },
        folder: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        firstkind: {
            type: String
        },
        secondkind: {
            type: String
        },
        firstname: {
            type: String
        },
        secondname: {
            type: String
        },
        cardList: {
            type: Array,
            required: true
        }
    },
    computed: {},
    mounted() {
      if (!this.secondname){
        this.hasSecondName = true
      }
    }
};
</script>

<style lang="scss">
.webclient-card-group {
    .card-backgroud {
        background: #ffffff;
    }
    .divider-tip{
        background-color: #3a85c6;
        display: inline-block;
        vertical-align: middle;
        height: 14px;
    }
    .divider-tip.small{
        width: 1px;
    }
    .divider-tip.big{
        width: 3px;
        margin-right: 2px;
    }
    .el-tag.el-tag--info {
        background-color: #f4f4f500;
        border-color: #e9e9eb;
        color: #909399;
    }
    .gallery-divider {
        background: transparent;

        .el-divider__text {
            height: 19px;
            line-height: 19px;
            font-size: 18px;
            font-family: Microsoft YaHei;
            /*font-weight: bold;*/
            color: #3c4858;
        }
        .el-divider__text.is-left {
            left: 0;
            padding:0 20px;
        }
        .divider-span{
          margin-left: 5px;
          height: 16px;
          font-size: 16px;
          color: #333;
        }
        .el-divider {
            background-color: transparent;
        }
    }
    .col-divider-style:first-of-type {
        /*margin-top: 10px;*/
        /*margin-bottom: 10px;*/
    }

    .card-breadcrumb-content {
        width: calc(100vw - 200px);
    }
    .title {
        /* background: #f0f0f0; */
        margin-top: 30px;
        margin-bottom: 5px;
        border-radius: 3px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: '';
    }

    .clearfix:after {
        clear: both;
    }

    .card-group {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .card-breadcrumb {
        height: 36px;
        width: 100%;
        background: #f00;
        margin-left: 10px;
        margin-top: 15px;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
        font-size: 13px;
    }

    .float-card {
        float: left;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .card-image {
        height: 100%;
        width: 300px;
    }

    .img-css{
    }
    .group-content{
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction:row;
        flex-wrap: wrap;
        /*justify-content: space-between;*/
        padding: 4px 10px;
        box-sizing: border-box;
    }
}
</style>
