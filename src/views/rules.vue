<template>
    <common id="Rules">
        <div class="app-inner containner">
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="规章制度"
                       :activeIndex="currentIndex"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <div v-show="this.currentIndex === 0">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">{{shouzeDetails.title}}</div>
                    <div class="news-time"
                         v-show="shouzeDetails.updateTime">发布时间: {{new Date(shouzeDetails.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="shouzeDetails.content"></div>
                </div>
                <div v-show="this.currentIndex === 1">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">{{details2.title}}</div>
                    <div class="news-time"
                         v-show="details2.updateTime">发布时间: {{new Date(details2.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="details2.content"></div>
                </div>
                <div v-show="this.currentIndex === 2">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">{{details3.title}}</div>
                    <div class="news-time"
                         v-show="details3.updateTime">发布时间: {{new Date(details3.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="details3.content"></div>
                </div>
                <div v-show="this.currentIndex === 3">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">{{details4.title}}</div>
                    <div class="news-time"
                         v-show="details4.updateTime">发布时间: {{new Date(details4.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="details4.content"></div>
                </div>
                <div v-show="this.currentIndex === 4">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">{{details5.title}}</div>
                    <div class="news-time"
                         v-show="details5.updateTime">发布时间: {{new Date(details5.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="details5.content"></div>
                </div>
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
                    name: '学生实验守则'
                },
                {
                    name: '实验室工作条例'
                },
                {
                    name: '实验室人员工作条例'
                },
                {
                    name: '实验教学管理规程'
                },
                {
                    name: '实验室开放管理办法'
                }
            ],
            currentIndex: 0,
            collegeId: Number(localStorage.getItem('collegeId')),
            shouzeDetails: {},
            details2: {},
            details3: {},
            details4: {},
            details5: {}
        }
    },
    methods: {
        changeMenu(index) {
            this.currentIndex = index
        },
        getDetails(id, details) {
            const data = {
                page: 1,
                rows: 10000,
                collegeId: this.collegeId,
                columnId: id
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    this.details =
                        (res.data &&
                            res.data.items.length > 0 &&
                            res.data.items[0]) ||
                        {}

                    switch(id) {
                        case 75:
                            this.shouzeDetails = this.details
                            break;
                        case 76:
                            this.details2 = this.details
                            break;
                        case 77:
                            this.details3 = this.details
                            break;
                        case 78:
                            this.details4 = this.details
                            break;
                        case 79:
                            this.details5 = this.details
                            break;
                    }
                })
        }
    },
    mounted() {
        this.currentIndex = this.$route.query && Number(this.$route.query.index) || 0
        this.getDetails(75, this.shouzeDetails)
        this.getDetails(76, this.details2)
        this.getDetails(77, this.details3)
        this.getDetails(78, this.details4)
        this.getDetails(79, this.details5)
    }
}
</script>

<style lang="less">
@import url('../../static/css/base');
#Rules {
    .news-time {
        width: 100%;
        text-align: center;
    }
    .news-title{
        line-height: 1.5;
    }
}
</style>
