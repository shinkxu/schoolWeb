<template>
    <common id="news">
        <div class="app-inner containner">
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="新闻公告"
                       :activeIndex="currentIndex"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <img class="news-img"
                     src="../../static/images/news_img.png">
                <ul v-show="currentIndex === 0"
                    class="news-notice-list">
                    <li v-for="(item, index) in list1"
                        :key="index"
                        @click="jumpToDetails(item)"
                        class="news-item">
                        <i class="news-style"></i>
                        <span class="news-desc clamp-line">{{item.title}}</span>
                        <span class="news-time">{{new Date(item.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</span>
                    </li>
                </ul>
                <ul v-show="currentIndex === 1"
                    class="news-notice-list">
                    <li v-for="(item, index) in list2"
                        :key="index"
                        @click="jumpToDetails(item)"
                        class="news-item">
                        <i class="news-style"></i>
                        <span class="news-desc clamp-line">{{item.title}}</span>
                        <span class="news-time">{{new Date(item.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</span>
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
                    name: '学术信息'
                },
                {
                    name: '通知公告'
                }
            ],
            currentIndex: 0,
            newsList: [],
            list1: [],
            total: 0,
            list2: [],
            pageCount: 1,
            collegeId: Number(localStorage.getItem('collegeId'))
        }
    },
    methods: {
        changeMenu(index) {
            this.pageCount = 1
            this.total = 0
            this.currentIndex = index
            index === 0 ? this.getList1() : this.getList2()
        },
        changeCount(index) {
            this.pageCount = index
        },
        jumpToDetails(item) {
            this.$router.push({
                path: '/newsdetail',
                query: {
                    id: item.id,
                    index: this.currentIndex
                }
            })
        },
        getList1() {
            const data = {
                page: this.pageCount,
                rows: 10,
                collegeId: this.collegeId,
                columnId: 31
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    this.list1 = (res.data && res.data.items) || []
                    this.total = (res.data && res.data.total) || 0
                })
        },
        getList2() {
            const data = {
                page: this.pageCount,
                rows: 10,
                collegeId: this.collegeId,
                columnId: 32
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    this.list2 = (res.data && res.data.items) || []
                    this.total = (res.data && res.data.total) || 0
                })
        }
    },
    mounted() {
        const query = this.$route.query
        if (query && query.index) {
            this.currentIndex = Number(query.index)
        }
        this.getList1()
        this.getList2()
    }
}
</script>

<style lang="less">
@import url('../../static/css/base');
#news {
    .news-notice-list {
        margin: 30px 0;
    }
    .news-item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 5px;
        font-size: 16px;
        padding: 8px 0;
        .news-style {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgb(0, 101, 156);
            margin-right: 10px;
        }
        .news-desc {
            flex: 1;
            &:hover {
                color: rgb(0, 101, 156);
                cursor: pointer;
            }
        }
        .news-time {
            width: 200px;
            text-align: right;
        }
    }
}
</style>
