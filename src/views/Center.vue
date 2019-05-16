<template>
    <common id="center">
        <div class="app-inner containner">
            <menu-list :menuList="menuList"
                       menuTitle="中心概况"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <!-- 中心简介 -->
                <div v-show="this.currentIndex === 0">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">中心简介</div>
                    <div class="news-common-time">发布时间:2019-04-08 17:49:20</div>
                    <div class="news-content">
                        <p>土木工程实验教学示范中心是由原1958年迁兰建校初期的工程力学实验室、工程测量实验室、建筑材料实验室、结构实验室、地质实验室、土力学实验室、流体力学实验室、于2002年合并组建而成，2004年被学校批准为校级实验教学示范中心，2008年被评为甘肃省实验教学示范中心。土木工程实验教学示范中心目前拥有工程力学、流体力学、岩土力学、工程地质、工程材料、轨道工程、桥梁与建筑结构、工程管理等多个实验室和地下工程实验中心、道桥试验中心。其中工程力学实验室、工程材料实验室、岩土力学实验室分别于1995年、和2003年通过了甘肃省教育厅高校基础课教学实验室合格评估。实验中心承担全校土木工程及相关22个专业的18门实验课程、2800名本科学生实验课程教学以及相关专业的工程地质野外实习、认识实习、生产实习等实践教学任务。实验教学生时数36万/年。此外，土木工程实验教学示范中心还设有大学生创新基地，负责开放性和创新性实验教学。</p>
                        <p> 实验中心总面积12000多平方米，仪器设备1300余台（套），仪器设备资产计3016余万元，中心是集专业基础实验、综合设计实验、开放与创新实验于一体的多功能实验中心。实验中心仪器设备精良、软硬件齐全，为理工科各专业学生实验教学需要提供了先进的实验室平台与良好的育人环境。中心充分利用现代化教学手段，多媒体课件、网上实验录像、网上预约实验等方式，有效地提高了实验教学效果。 实验中心以培养大学生的实践能力与创新精神为根本目标，不断深化实验教学改革，全面提高实验教学质量。探索出一条有利于学生个性发展、启迪学生创新精神的实验教学之路。
                        </p>
                        <p>
                            土木工程实验教学示范中心目前共有专职、兼职实验教师115人，其中教授38名、副教授及高工54名、讲师（工程师）20名、技师3名，具有硕士及以上学位人员107名。实验中心教师分为11个学科小组，负责全校土木工程类各专业基础实验、专业实验、野外实习等实验实践教学活动。
                        </p>
                        <p>
                            土木工程实验教学示范中心以土木工程一级博士点学科、甘肃省一级重点学科、甘肃省道路桥梁与地下工程重点实验室和铁道部结构工程重点实验室、国家级特色专业建设点为依托，积极开展实验教学研究与科学研究工作，取得了丰硕成果，先后获得1项国家级教学成果奖；3项省、部级一、二等教学成果奖；12项厅局级及校级教学成果奖；近5年来，获得32项省、部级科技进步奖；发表科技及教改论文300余篇；编写教材和讲义40余部。实验中心积极开展与大学生能力培养和全面素质提高的实验实践教学活动，成效显著。按年度举行的工程测量大赛、结构设计大赛在学生中产生良好反响，指导大学生参加全国周培源力学竞赛、全国大学生数学建模竞赛、大学生课外设计大赛挑战杯获得优秀成绩。
                        </p>
                        <p>
                            土木工程实验教学示范中心以学生能力培养为主线，树立以人为本、因材施教、求实创新、综合培养的教学理念，建立了全方位、多层次、模块化的实践能力和创新能力培养的实验教学体系，推进以人才能力和创新精神为核心的培养方案。中心目前已经形成了一支师资队伍稳定、实验教学体系完善、管理水平高、教学手段先进、环境优雅，集实验、实习、科技创新为一体的教学实体。该中心环境优美、环保、安全、规范，具有良好的育人环境。
                        </p>
                    </div>
                </div>
                <!-- 中心风貌 -->
                <div v-show="this.currentIndex === 1">
                    <ul class="news-style">
                        <li class="news-style-item"
                            v-for="(item, index) in 9"
                            :key="index">
                            <img src="../../static/images/home_source_1.jpg">
                            <div class="style-item-title">刘振奎副校长到我中心检查指导工作</div>
                        </li>
                    </ul>

                    <div class="my-pagination">
                        <button :class="{'disable': pageCount === 1}"
                                :disabled="pageCount === 1">首页</button>

                        <el-pagination background
                                       :current-page="pageCount"
                                       @current-change="changeCount"
                                       layout="prev, pager, next"
                                       :total="1000">
                        </el-pagination>
                        <button :class="{'disable': pageCount === 100}"
                                :disabled="pageCount === 100">尾页</button>
                    </div>

                </div>
            </div>

        </div>
    </common>
</template>

<script>
import { Pagination } from 'element-ui'

export default {
    components: {
        [Pagination.name]: Pagination
    },
    data() {
        return {
            menuList: [
                {
                    name: '中心简介'
                },
                {
                    name: '中心风貌'
                },
                {
                    name: '实验体系'
                },
                {
                    name: '校企合作'
                }
            ],
            currentIndex: 0,
            newsStyleList: [],
            pageCount: 1
        }
    },
    methods: {
        changeMenu(index) {
            this.currentIndex = index
        },
        changeCount(index) {
            this.pageCount = index
        }
    }
}
</script>

<style lang="less">
@import url('../../static/css/base');
#center {
    .news-style {
        display: flex;
        flex-wrap: wrap;
    }
    .news-style-item {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 3% 20px 0;
        > img {
            width: 100%;
            margin-bottom: 10px;
        }
        .style-item-title {
            width: 100%;
            text-align: center;
        }
    }
}
</style>
