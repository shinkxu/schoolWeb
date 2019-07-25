<template>
    <common id="experiment">
        <div class="app-inner containner">
            <!-- <menu-tree class="center-menu"
                       :menuList="menuList"
                       menuTitle="实验教学"
                       :activeIndex="currentIndex"
                       @change="changeMenu"></menu-tree> -->
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="实验教学"
                       :activeIndex="currentIndex"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <!-- <img class="news-img"
                     src="../../static/images/news_img.png">
                <div class="news-title">实验教学</div>
                <div class="news-common-time">发布时间:2019-04-08 17:49:20</div>
                <div class="news-content">
                    <p><span>中心结合轨道交通信息与控制类专业人才培养需求，以自主研发、科研成果转化和校企合作共建为主、并引进先进的专业软件，建成了涵盖轨道交通运营管理、通信信号、牵引供电、机车控制的4个虚拟仿真实验教学资源版块，共计10余个虚拟仿真实验教学系统。</span></p>
                    <p><span>运营管理虚拟仿真版块：主要包括轨道交通调度集中、编组站作业自动化、铁路中间站接发车等实验系统。其中铁路车站接发车实验系统由多个自动闭塞区段组成，包括2套监测系统和15个模拟铁路局管内的车站，通过模拟铁路现场实际，使学生掌握车站信号、联锁、闭塞设备的使用方法，初步达到车站值班员具有的工作能力。</span></p>
                    <p><span>通信信号虚拟仿真版块：主要包括轨道交通列车运行与控制仿真、高铁列车自动控制设备教学仿真实训、CTCS仿真和全电子计算机联锁仿真等实验系统。其中，自主研发的高铁列车自动控制设备教学仿真实训系统采用虚拟现实技术、全网络覆盖、全三维交互仿真轨道交通信号设备的原理、动作过程，模拟现场设备动作，真实再现现场环境；自主研发的全电子计算机联锁仿真实验系统实现了铁路信号控制过程中的进路、信号、道岔和轨道电路间的联锁关系，使学生可深入学习进路办理、信号开放、道岔操作等控制过程。</span></p>
                    <p><span>牵引供电虚拟仿真版块：主要包括牵引变电所虚拟仿真、接触网仿真和牵引供电仿真计算等实验系统。其中，牵引变电所虚拟仿真实验系统通过模拟牵引变电所开关动作及原理展示，建立电路仿真动态数学模型，根据学生的操作实时动态显示电路的变化。</span></p>
                    <p><span>机车控制虚拟仿真版块：主要包括动车组制动系统半实物仿真、高速列车驾驶模拟仿真、SS7E型电力机车虚拟仿真等实验系统。高速列车驾驶模拟仿真系统提供了列车运行的线路、信号、时间、天气等环境的模拟，并采用三维图形化的虚拟仿真的方式展现了对列车设备和零部件进行模拟操作或状态控制。</span></p>
                    <p><span>中心各系统突出了轨道交通系统设计、施工、运营和维护的生产运营实际，高仿真地展现了列车系统和地面基础设备系统的有机结合与相互作用，体现了轨道交通信息与控制类专业间的相互耦合和学科交叉。</span></p>
                </div> -->
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
            currentIndex: 0,
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
                })
        },
        jumpTodetails(id) {
            this.$router.push({
                path: '/experimentdetails',
                query: {
                    id: id,
                    index: 1
                }
            })
        }
    },
    mounted() {
        if (this.$route.query.id) {
            this.currentIndex = Number(this.$route.query.id)
        }
        this.getList(41, this.list1)
        this.getList(47, this.list2)
        this.getList(53, this.list3)
        this.getList(57, this.list4)
        this.getList(62, this.list5)
    }
}
</script>

<style lang="less">
@import '../../static/css/base.less';

#experiment {
}
</style>


