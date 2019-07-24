<template>
    <common id="teachers">
        <div class="app-inner containner">
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="师资队伍"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <div v-show="this.currentIndex === 0">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">中心主任</div>
                    <div class="news-time"
                         v-show="shouzeDetails.updateTime">发布时间: {{new Date(shouzeDetails.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="shouzeDetails.content"></div>
                </div>
                <div v-show="this.currentIndex === 1">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">队伍结构</div>
                    <div class="news-time"
                         v-show="shouzeDetails.updateTime">发布时间: {{new Date(details2.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="shouzeDetails.content"></div>
                </div>
                <div v-show="this.currentIndex === 2">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">专职人员</div>
                    <div class="news-time"
                         v-show="shouzeDetails.updateTime">发布时间: {{new Date(details3.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="shouzeDetails.content"></div>
                </div>
                <div v-show="this.currentIndex === 3">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">兼职人员</div>
                    <div class="news-time"
                         v-show="shouzeDetails.updateTime">发布时间: {{new Date(details4.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="shouzeDetails.content"></div>
                </div>
                <div v-show="this.currentIndex === 4">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">组织保障管理体系</div>
                    <div class="news-time"
                         v-show="shouzeDetails.updateTime">发布时间: {{new Date(details5.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="shouzeDetails.content"></div>
                </div>
                <div v-show="this.currentIndex === 5">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">实验教学指导委员会</div>
                    <div class="news-time"
                         v-show="shouzeDetails.updateTime">发布时间: {{new Date(details5.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="shouzeDetails.content"></div>
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
                    name: '中心主任'
                },
                {
                    name: '队伍结构'
                },
                {
                    name: '专职人员'
                },
                {
                    name: '兼职人员'
                },
                {
                    name: '组织保障管理体系'
                },
                {
                    name: '实验教学指导委员会'
                }
            ],
            currentIndex: 0,
            collegeId: Number(localStorage.getItem('collegeId')),
            shouzeDetails: {},
            details2: {},
            details3: {},
            details4: {},
            details5: {},
            details6: {}
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
                })
        }
    },
    mounted() {
        this.getDetails(34, this.shouzeDetails)
        this.getDetails(35, this.details2)
        this.getDetails(36, this.details3)
        this.getDetails(37, this.details4)
        this.getDetails(38, this.details5)
        this.getDetails(39, this.details6)
    }
}
</script>

<style lang="less">
@import url('../../static/css/base');
</style>
