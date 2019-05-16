<template>
    <common id="about">
        <div class="about containner">
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="关于我们"
                       @change="changeMenu"></menu-list>
            <div class="center-right">
                <!-- 中心简介 -->
                <div v-show="this.currentIndex === 0">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">关于我们</div>
                    <div class="news-time">发布时间:2019-04-08 17:49:20</div>
                    <div class="news-content">
                        <p>地 址：兰州市安宁区安宁西路88号兰州交通大学第六教学楼</p>
                        <p>电 话：0931-4957181
                        </p>
                        <p>
                            传 真：0931-4957181
                        </p>
                        <p>
                            手 机：18109463254
                        </p>
                        <p>
                            联 系 人：王老师
                        </p>
                    </div>
                </div>
                <!-- 中心风貌 -->
                <div v-show="this.currentIndex === 1">

                </div>
            </div>
        </div>
    </common>
</template>

<script>
export default {
    data() {
        return {
            menuList: [],
            currentIndex: 0
        }
    },
    methods: {
        changeMenu(index) {
            this.currentIndex = index
        }
    }
}
</script>

<style lang="less">
@import url('../../static/css/base');
#about {
    .about {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        .center-menu {
            margin: 20px 30px 0 0;
        }
        .center-right {
            flex: 1;
            margin-top: 20px;
            .news-img {
                width: 100%;
            }
            .news-title {
                font-size: 28px;
                font-weight: bold;
                text-align: center;
                margin: 20px 0;
            }
            .news-time {
                padding-bottom: 20px;
                border-bottom: 1px solid #999;
                color: #666;
                text-align: center;
            }
            .news-content {
                margin-top: 20px;
            }
            p {
                margin-bottom: 20px;
                text-indent: 28px;
                font-size: 16px;
                line-height: 1.6;
            }
        }
    }
}
</style>
