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
                    name: '运营管理虚拟仿真'
                    // list: [
                    //     {
                    //         name: '运营管理虚拟仿真板块介绍'
                    //     },
                    //     {
                    //         name: '轨道交通调度集中实验系统'
                    //     },
                    //     {
                    //         name: '编组站综合自动化系统'
                    //     },
                    //     {
                    //         name: '铁路中间站接发车实验系统'
                    //     },
                    //     {
                    //         name: '基于BIM的施工与运营实验系统'
                    //     }
                    // ]
                },
                {
                    name: '通信信号虚拟仿真'
                    // list: [
                    //     {
                    //         name: '轨道交通调度集中实验系统'
                    //     },
                    //     {
                    //         name: '轨道交通列车运行与控制仿真'
                    //     },
                    //     {
                    //         name: '高铁列车自动控制设备教学仿真'
                    //     },
                    //     {
                    //         name: 'CTCS仿真实验系统'
                    //     },
                    //     {
                    //         name: '全电子计算机联锁仿真实验系统'
                    //     }
                    // ]
                },
                {
                    name: '牵引供电虚拟仿真'
                    // list: [
                    //     {
                    //         name: '牵引供电虚拟仿真'
                    //     },
                    //     {
                    //         name: '牵引变电所虚拟仿真实验系统'
                    //     },
                    //     {
                    //         name: '列车牵引供电仿真实验系统'
                    //     }
                    // ]
                },
                {
                    name: '机车控制虚拟仿真'
                    // list: [
                    //     {
                    //         name: '机车控制虚拟仿真介绍'
                    //     },
                    //     {
                    //         name: '动车组制动系统半实物仿真实验'
                    //     },
                    //     {
                    //         name: '高速列车驾驶模拟仿真实验系统'
                    //     },
                    //     {
                    //         name: 'SS7E型电力机车虚拟仿真实验'
                    //     }
                    // ]
                },
                {
                    name: '典型实验项目'
                    // list: [
                    //     {
                    //         name: '列车运行图编制实验'
                    //     },
                    //     {
                    //         name: '列车运行驾驶模拟实验'
                    //     },
                    //     {
                    //         name: '基于BIM的施工与运营仿真实验'
                    //     },
                    //     {
                    //         name: '牵引供电系统仿真实验'
                    //     },
                    //     {
                    //         name: '全电子计算机联锁系统仿真实验'
                    //     }
                    // ]
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
            this.$router.push('/result?index=' + Number(index))
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
