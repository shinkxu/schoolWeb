<template>
    <common id="equipment">
        <div class="app-inner containner">
            <menu-list :menuList="menuList"
                       menuTitle="设备环境"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <div v-show="this.currentIndex === 0">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">信息化环境</div>
                    <div class="news-common-time"
                         v-show="details1.updateTime">
                        发布时间:{{new Date(details1.updateTime).format('yyyy-MM-dd hh:mm:ss')}}
                    </div>
                    <div class="news-content"
                         v-html="details1.content"></div>
                </div>
                <div v-show="this.currentIndex === 1">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">软件平台</div>
                    <div class="news-common-time"
                         v-show="details2.updateTime">
                        发布时间:{{new Date(details2.updateTime).format('yyyy-MM-dd hh:mm:ss')}}
                    </div>
                    <div class="news-content"
                         v-html="details2.content"></div>
                </div>
                <div v-show="this.currentIndex === 2">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">信息化环境</div>
                    <div class="news-common-time"
                         v-show="details3.updateTime">
                        发布时间:{{new Date(details3.updateTime).format('yyyy-MM-dd hh:mm:ss')}}
                    </div>
                    <div class="news-content"
                         v-html="details3.content"></div>
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
                    name: '信息化环境'
                },
                {
                    name: '软件平台'
                },
                {
                    name: '硬件设施'
                }
            ],
            currentIndex: 0,
            collegeId: Number(localStorage.getItem('collegeId')),
            details1: {},
            details2: {},
            details3: {}
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
        this.getDetails(80, this.details1)
        this.getDetails(81, this.details2)
        this.getDetails(82, this.details3)
    }
}
</script>

<style lang="less">
@import url('../../static/css/base');
#equipment {
}
</style>
