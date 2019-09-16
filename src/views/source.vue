<template>
    <common id="source">
        <div class="app-inner containner">
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="资源共享"
                       :activeIndex="currentIndex"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <ul v-show="currentIndex === 0"
                    class="news-notice-list">
                    <li v-for="(item, index) in list1"
                        :key="index"
                        class="news-item"
                        @click="jumpTodetails(item.id)">
                        <i class="news-style"></i>
                        <span class="news-desc clamp-line">{{item.title}}</span>
                        <span class="news-time">{{new Date(item.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</span>
                    </li>
                </ul>
                <ul v-show="currentIndex === 1"
                    class="news-notice-list">
                    <li v-for="(item, index) in list2"
                        :key="index"
                        class="news-item"
                        @click="jumpTodetails(item.id)">
                        <i class="news-style"></i>
                        <span class="news-desc clamp-line">{{item.title}}</span>
                        <span class="news-time">{{new Date(item.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</span>
                    </li>
                </ul>
                <ul v-show="currentIndex === 2"
                    class="news-notice-list">
                    <li v-for="(item, index) in list3"
                        :key="index"
                        class="news-item"
                        @click="jumpTodetails(item.id)">
                        <i class="news-style"></i>
                        <span class="news-desc clamp-line">{{item.title}}</span>
                        <span class="news-time">{{new Date(item.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</span>
                    </li>
                </ul>
                <ul v-show="currentIndex === 3"
                    class="news-notice-list">
                    <li v-for="(item, index) in list4"
                        :key="index"
                        class="news-item"
                        @click="jumpTodetails(item.id)">
                        <i class="news-style"></i>
                        <span class="news-desc clamp-line">{{item.title}}</span>
                        <span class="news-time">{{new Date(item.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</span>
                    </li>
                </ul>
                <ul v-show="currentIndex === 4"
                    class="news-notice-list">
                    <li v-for="(item, index) in list5"
                        :key="index"
                        class="news-item"
                        @click="jumpTodetails(item.id)">
                        <i class="news-style"></i>
                        <span class="news-desc clamp-line">{{item.title}}</span>
                        <span class="news-time">{{new Date(item.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </common>
</template>

<script>
import Vue from 'vue'

export default {
    data() {
        return {
            menuList: [
                {
                    name: '申报专区'
                },
                {
                    name: '中心视频'
                },
                {
                    name: '教学视频'
                },
                {
                    name: '实验指导书'
                },
                {
                    name: '教材建设'
                }
            ],
            currentIndex: 0,
            list1: [],
            list2: [],
            list3: [],
            list4: [],
            list5: [],
            collegeId: Number(localStorage.getItem('collegeId'))
        }
    },
    methods: {
        changeMenu(index) {
            this.currentIndex = index
        },
        jumpTodetails(id) {
            this.$router.push({
                path: '/sourcedetails',
                query: {
                    id: id,
                    index: this.currentIndex
                }
            })
        },
        getList(id, list) {
            const data = {
                page: 1,
                rows: 10000,
                collegeId: this.collegeId,
                columnId: id
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    list =
                        (res.data &&
                            res.data.items.length > 0 &&
                            res.data.items) ||
                        []
                    switch (id) {
                        case 69:
                            this.list1 = list
                            break
                        case 70:
                            this.list2 = list
                            break
                        case 71:
                            this.list3 = list
                            break
                        case 72:
                            this.list4 = list
                            break
                        case 73:
                            this.list5 = list
                            break
                    }
                })
        }
    },
    mounted() {
        if (this.$route.query.index) {
            this.currentIndex = Number(this.$route.query.index)
        }
        this.getList(69, this.list1)
        this.getList(70, this.list2)
        this.getList(71, this.list3)
        this.getList(72, this.list4)
        this.getList(73, this.list5)
    }
}
</script>

<style lang="less">
@import url('../../static/css/base');
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
</style>
