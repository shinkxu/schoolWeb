<template>
    <common id="about">
        <div class="app-inner containner">
            <menu-list :menuList="menuList"
                       menuTitle="关于我们"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <div v-show="this.currentIndex === 0">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">{{details && details.title}}</div>
                    <div class="news-common-time">发布时间:{{new Date(details.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</div>
                    <div class="news-content"
                         v-html="details.content">
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
        },
        getDetails() {
            const data = {
                page: 1,
                rows: 10000,
                collegeId: this.collegeId,
                columnId: 96
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
        this.getDetails()
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
    }
}
</style>
