<template>
    <common id="news-detail">
        <div class="app-inner containner">
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="新闻公告"
                       :activeIndex="currentIndex"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <img class="news-img"
                     src="../../static/images/news_img.png">
                <div class="news-title">{{details.title}}</div>
                <div class="news-common-time">发布时间:{{details.updateTime}}</div>
                <div class="news-content"
                     v-html="details.content"></div>
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
                    name: '学术信息'
                },
                {
                    name: '通知公告'
                }
            ],
            details: {},
            currentIndex: 0
        }
    },
    computed: {
        id() {
            return this.$route.query && Number(this.$route.query.id)
        }
    },
    mounted() {
        this.currentIndex = this.$route.query && Number(this.$route.query.index)
        this.getDetails()
    },
    methods: {
        changeMenu(index) {
            this.$router.push('/news?index=' + Number(index))
        },
        getDetails() {
            const data = {
                id: this.id
            }
            Vue.axios
                .get(this.API_ROOT + 'columnContent/queryContentById', {
                    params: data
                })
                .then(res => {
                    this.details = res.data || {}
                    this.details.updateTime = new Date(
                        this.details.updateTime
                    ).format('yyyy-MM-dd HH:mm:ss')
                })
        }
    }
}
</script>

<style lang="less">
@import url('../../static/css/base');

#news-detail {
}
</style>
