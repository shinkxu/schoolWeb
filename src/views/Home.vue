<template>
    <common id="home">
        <el-carousel :interval="5000"
                     class="home-banner">
            <el-carousel-item class="banner-item"
                              v-for="(item, index) in bannerList"
                              :key="index">
                <img class="item-bg"
                     :src="item.bgImg">
                <div class="item-inner">
                    <div class="inner-title">{{item.title}}</div>
                    <div class="inner-intro clamp-lines">{{item.text}}</div>
                    <button class="inner-more">查看更多</button>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="home-project">
            <div class="project-title">
                <span>虚拟仿真实验项目</span>
            </div>
            <el-carousel :autoplay="false"
                         indicator-position="none"
                         arrow="never">
                <el-carousel-item v-for="(item, index) in projectsList"
                                  :key="index">
                    <ul class="project-list">
                        <li class="project-item"
                            v-for="(v, k) in item"
                            :key="`list_${k}`">
                            <img :src="v.img"
                                 class="project-bg">
                            <div class="project-desc">
                                <h5>{{v.title}}</h5>
                                <span>{{v.text}}</span>
                            </div>
                        </li>
                    </ul>
                </el-carousel-item>
            </el-carousel>
        </div>
    </common>
</template>

<script>
import Common from '../components/common.vue'
import { Carousel, CarouselItem } from 'element-ui'

export default {
    components: {
        [Common.name]: Common,
        [Carousel.name]: Carousel,
        [CarouselItem.name]: CarouselItem
    },
    data() {
        return {
            bannerList: [
                {
                    bgImg: require('../../static/images/banner_1.jpg'),
                    text:
                        '兰州交通大学土木工程实验教学示范中心是由原1958年迁兰建校初期的工程力学实验室、工程测量实验室、建筑材料实验室、结构实验室、地质实验室、土力学实验室、流体力学实验室、于2002年合并组建而成，2004年被学校批准为校级实验教学示范中心......',
                    title: '中心介绍',
                    path: '/center'
                },
                {
                    bgImg: require('../../static/images/banner_1.jpg'),
                    text:
                        '兰州交通大学土木工程实验教学示范中心是由原1958年迁兰建校初期的工程力学实验室、工程测量实验室、建筑材料实验室、结构实验室、地质实验室、土力学实验室、流体力学实验室、于2002年合并组建而成，2004年被学校批准为校级实验教学示范中心......',
                    title: '中心介绍',
                    path: '/center'
                },
                {
                    bgImg: require('../../static/images/banner_1.jpg'),
                    text:
                        '兰州交通大学土木工程实验教学示范中心是由原1958年迁兰建校初期的工程力学实验室、工程测量实验室、建筑材料实验室、结构实验室、地质实验室、土力学实验室、流体力学实验室、于2002年合并组建而成，2004年被学校批准为校级实验教学示范中心......',
                    title: '中心介绍',
                    path: '/center'
                }
            ],
            projectsList: [
                [
                    {
                        title: '运营管理虚拟仿真',
                        text:
                            '虚拟仿真实验项目充分体现了工程教育理念，以轨道交通运营管理过程中产生的数据为基础，根据仿真分析结果对运营过程进行优化调整，贯彻培养学生工程实践和创新的理念，实现虚实结合的实践教学。',
                        img: require('../../static/images/home_project_1.png')
                    },
                    {
                        title: '通信信号虚拟仿真',
                        text:
                            '虚拟仿真实验项目充分体现了通信信号一体化的技术发展趋势，以地面信号控制系统和通信网络为基础，结合车载信号系统，虚实结合培养学生工程应用和创新能力。',
                        img: require('../../static/images/home_project_2.png')
                    },
                    {
                        title: '牵引供电虚拟仿真',
                        text:
                            '虚拟仿真实验项目主要包括牵引变电所虚拟仿真和牵引供电系统仿真实验，充分反映了高速铁路、城市轨道交通的供电技术发展趋势，用以学生对铁路牵引供电系统的系统性学习，掌握现场供电工程的设计、施工和运营的基本技能。',
                        img: require('../../static/images/home_project_3.png')
                    },
                    {
                        title: '机车控制虚拟仿真',
                        text:
                            '虚拟仿真实验项目面向普速铁路和高速铁路两个方向，全面展现机车控制系统的组成结构和功能，用以学生对机车控制系统的系统性学习，掌握列车操纵驾驶过程中所涉及的专业技能。',
                        img: require('../../static/images/home_project_4.png')
                    }
                ]
            ]
        }
    }
}
</script>

<style lang="less">
@import '../../static/css/base.less';
#home {
    .home-banner {
        margin: 20px 0;
        height: 300px;
        overflow: hidden;

        .banner-item {
            .item-bg {
                width: 100%;
                max-height: 300px;
            }
            .item-inner {
                position: absolute;
                top: 0;
                left: 0;
                right: 50%;
                bottom: 0;
                overflow: hidden;
                padding: 50px 0 0 80px;
                text-align: left;
                color: #fff;
                .inner-title {
                    font-size: 24px;
                    font-weight: bold;
                }
                .inner-intro {
                    font-size: 14px;
                    margin: 30px 0;
                }
                .inner-more {
                    padding: 10px 40px;
                    background: #ff9900;
                    border-radius: 4px;
                    border: none;
                    color: #fff;
                }
            }
        }
        .el-carousel__indicator {
            width: 16px;
            height: 16px;
            margin: 0 5px 0 5px;
            padding: 0;
            background: rgba(25, 158, 216, 1);
            border-radius: 50%;
        }
        .el-carousel__button {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }
        .el-carousel__indicators--horizontal {
            bottom: 10px;
        }
    }
    .home-project {
        margin: 30px 0;
        .project-title {
            color: #666;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        .project-list {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-start;
            .project-item {
                flex: 1;
                margin-right: 20px;
                .project-bg {
                    width: 100%;
                }
                .project-desc {
                    background: @df-color;
                    color: #fff;
                    padding: 20px;
                }
            }
        }
        .el-carousel__container {
            height: auto;
        }
    }
}
</style>

