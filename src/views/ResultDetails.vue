<template>
    <common id="result-detail">
        <div class="app-inner containner">
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="设备环境"
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
                    name: '教学科研成果',
                    list: [
                        {
                            name: '教学名师'
                        },
                        {
                            name: '教学成果奖'
                        },
                        {
                            name: '精品课程'
                        },
                        {
                            name: '特色专业'
                        },
                        {
                            name: '教学团队'
                        },
                        {
                            name: '专著教材'
                        }
                    ]
                },
                {
                    name: '学生学习效果',
                    list: []
                },
                {
                    name: '科研促进教学',
                    list: [
                        {
                            name: '科研获奖'
                        },
                        {
                            name: '发明专利'
                        }
                    ]
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
            this.$router.push('/result?index=' + index)
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
                    ).format('yyyy-MM-dd hh:mm:ss')
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
