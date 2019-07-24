<template>
    <common id="center">
        <div class="app-inner containner">
            <menu-list :menuList="menuList"
                       menuTitle="中心概况"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <!-- 中心简介 -->
                <div v-show="this.currentIndex === 0">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">{{details.title}}</div>
                    <div class="news-common-time">发布时间:{{new Date(details.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="details.content">
                    </div>
                </div>
                <!-- 中心风貌 -->
                <div v-show="this.currentIndex === 1">
                    <ul class="news-style">
                        <li class="news-style-item"
                            v-for="(item, index) in styleList"
                            :key="index">
                            <img :src="item.showImg">
                            <div class="style-item-title">{{item.title}}</div>
                        </li>
                    </ul>

                    <div class="my-pagination">
                        <button :class="{'disable': pageCount === 1}"
                                :disabled="pageCount === 1">首页</button>

                        <el-pagination background
                                       :current-page="pageCount"
                                       @current-change="changeCount"
                                       layout="prev, pager, next"
                                       :total="total">
                        </el-pagination>
                        <button :class="{'disable': pageCount === total}"
                                :disabled="pageCount === total">尾页</button>
                    </div>

                </div>
                <!--  实验体系 -->
                <div v-show="this.currentIndex === 2">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">{{systemDetails.title}}</div>
                    <div class="news-common-time">发布时间:{{new Date(systemDetails.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="systemDetails.content">
                    </div>
                </div>
                <!--  校企合作 -->
                <div v-show="this.currentIndex === 3">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">{{allDetails.title}}</div>
                    <div class="news-common-time">发布时间:{{new Date(allDetails.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="allDetails.content">
                    </div>
                </div>
            </div>

        </div>
    </common>
</template>

<script>
import Vue from 'vue'
import { Pagination } from 'element-ui'

export default {
    components: {
        [Pagination.name]: Pagination
    },
    data() {
        return {
            menuList: [
                {
                    name: '中心简介'
                },
                {
                    name: '中心风貌'
                },
                {
                    name: '实验体系'
                },
                {
                    name: '校企合作'
                }
            ],
            currentIndex: 0,
            pageCount: 1,
            details: {},
            systemDetails: {},
            styleList: [],
            total: 0,
            allDetails: {},
            collegeId: Number(localStorage.getItem('collegeId'))
        }
    },
    methods: {
        changeMenu(index) {
            this.currentIndex = index
        },
        changeCount(index) {
            this.pageCount = index
            getStyleList()
        },
        getDetails() {
            const data = {
                page: 1,
                rows: 10000,
                collegeId: this.collegeId,
                columnId: 26
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    this.details =
                        (res.data &&
                            res.data.items.length > 0 &&
                            res.data.items[0]) ||
                        {}
                })
        },
        getStyleList() {
            const data = {
                page: this.pageCount,
                rows: 12,
                collegeId: this.collegeId,
                columnId: 27
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    this.styleList = (res.data && res.data.items) || []
                    this.total = (res.data && res.data.total) || 0
                })
        },
        getSystem() {
            const data = {
                page: 1,
                rows: 10000,
                collegeId: this.collegeId,
                columnId: 28
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    this.systemDetails =
                        (res.data &&
                            res.data.items.length > 0 &&
                            res.data.items[0]) ||
                        {}
                })
        },
        getAll() {
            const data = {
                page: 1,
                rows: 10000,
                collegeId: this.collegeId,
                columnId: 29
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    this.allDetails =
                        (res.data &&
                            res.data.items.length > 0 &&
                            res.data.items[0]) ||
                        {}
                })
        }
    },
    mounted() {
        this.getDetails()
        this.getStyleList()
        this.getAll()
        this.getSystem()
    }
}
</script>

<style lang="less">
@import url('../../static/css/base');
#center {
    .news-style {
        display: flex;
        flex-wrap: wrap;
    }
    .news-style-item {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 3% 20px 0;
        > img {
            width: 100%;
            margin-bottom: 10px;
        }
        .style-item-title {
            width: 100%;
            text-align: center;
        }
    }
}
</style>
