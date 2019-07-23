<template>
    <common id="home">
        <div class="home-banner">
            <el-carousel :interval="5000"
                         class="containner">
                <el-carousel-item class="banner-item "
                                  v-for="(item, index) in bannerList"
                                  :key="index">
                    <img class="item-bg"
                         :src="item.bgImg">
                    <div class="item-inner">
                        <div class="inner-title">{{item.title}}</div>
                        <div class="inner-intro clamp-lines">{{item.text}}</div>
                        <button class="inner-more"
                                @click="jumpToCenter()">查看更多</button>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="home-project">
            <div class="containner">
                <div class="project-title">
                    <span>虚拟仿真实验项目</span>
                    <div class="project-change">
                        <img :src="proCurrentIndex === 1 ? leftUndoIcon : leftDoIcon"
                             class="change-button"
                             @click="changeLast()">
                        <img :src="proCurrentIndex === projectsList.length  ? rightUndoIcon : rightDoIcon"
                             class="change-button"
                             @click="changeNext()">
                    </div>
                </div>
                <el-carousel :autoplay="false"
                             indicator-position="none"
                             :loop="false"
                             arrow="never"
                             ref="projectCarousel">
                    <el-carousel-item v-for="(item, index) in projectsList"
                                      :key="index"
                                      class="project-list">
                        <div class="project-item"
                             v-for="(v, k) in item"
                             :key="`list_${k}`">
                            <img :src="v.img"
                                 class="project-bg">
                            <div class="project-desc">
                                <h5 class="desc-title">{{v.title}}</h5>
                                <span class="desc-inner"
                                      @click="jumpToExperiment(k)">{{v.text}}</span>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="home-news">
            <div class="home-news-inner containner">
                <div class="news-notice">
                    <div class="news-title">
                        <h3>通知公告</h3>
                        <span @click="jumpToNews()">+ 更多</span>
                    </div>
                    <ul class="
                              news-list">
                        <li class="news-item">
                            <i class="news-style"></i>
                            <span class="news-desc clamp-line">学校召开国家虚拟仿真实验教学项目申报经验报告会</span>
                            <span class="news-time">2019-01-01</span>
                        </li>
                    </ul>
                </div>
                <div class="news-result">
                    <div class="news-title">
                        <h3>教学成果</h3>
                        <span @click="jumpToResult()">+ 更多</span>
                    </div>
                    <ul class="news-list">
                        <li class="news-item">
                            <i class="news-style"></i>
                            <span class="news-desc clamp-line">学校召开国家虚拟仿真实验教学项目申报经验报告会</span>
                            <span class="news-time">2019-01-01</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="home-project home-source ">
            <div class="containner">
                <div class="project-title">
                    <span>中心资源</span>
                    <div class="project-change">
                        <img :src="sourceIndex === 1 ? leftUndoIcon : leftDoIcon"
                             class="change-button"
                             @click="changeSourceLast()">
                        <img :src="sourceIndex === sourceList.length  ? rightUndoIcon : rightDoIcon"
                             class="change-button"
                             @click="changeSourceNext()">
                    </div>
                </div>
                <el-carousel :autoplay="false"
                             indicator-position="none"
                             :loop="false"
                             arrow="never"
                             height="200px"
                             ref="sourceCarousel">
                    <el-carousel-item v-for="(item, index) in sourceList"
                                      :key="index"
                                      class="project-list">
                        <div class="project-item"
                             v-for="(v, k) in item"
                             :key="`source_${k}`">
                            <img :src="v"
                                 class="project-bg">
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="home-footer">
            <div class="home-footer-inner containner">
                <img src="../../static/images/u148.jpg" />
                <img src="../../static/images/u150.jpg" />
                <img src="../../static/images/u152.jpg" />
                <img src="../../static/images/u154.jpg" />
                <img src="../../static/images/u156.jpg" />
                <img src="../../static/images/u158.jpg" />
                <img src="../../static/images/u160.jpg" />
                <img src="../../static/images/u162.jpg" />
                <img src="../../static/images/u164.jpg" />
            </div>
        </div>

    </common>
</template>

<script>
import Vue from 'vue'
import { Carousel, CarouselItem } from 'element-ui'

export default {
    components: {
        [Carousel.name]: Carousel,
        [CarouselItem.name]: CarouselItem
    },
    data() {
        return {
            collegeId: Number(localStorage.getItem('collegeId')),
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
                        img: require('../../static/images/home_project_1.png'),
                        id: '1'
                    },
                    {
                        title: '通信信号虚拟仿真',
                        text:
                            '虚拟仿真实验项目充分体现了通信信号一体化的技术发展趋势，以地面信号控制系统和通信网络为基础，结合车载信号系统，虚实结合培养学生工程应用和创新能力。',
                        img: require('../../static/images/home_project_2.png'),
                        id: '2'
                    },
                    {
                        title: '牵引供电虚拟仿真',
                        text:
                            '虚拟仿真实验项目主要包括牵引变电所虚拟仿真和牵引供电系统仿真实验，充分反映了高速铁路、城市轨道交通的供电技术发展趋势，用以学生对铁路牵引供电系统的系统性学习，掌握现场供电工程的设计、施工和运营的基本技能。',
                        img: require('../../static/images/home_project_3.png'),
                        id: '3'
                    },
                    {
                        title: '机车控制虚拟仿真',
                        text:
                            '虚拟仿真实验项目面向普速铁路和高速铁路两个方向，全面展现机车控制系统的组成结构和功能，用以学生对机车控制系统的系统性学习，掌握列车操纵驾驶过程中所涉及的专业技能。',
                        img: require('../../static/images/home_project_4.png'),
                        id: '4'
                    }
                ],
                [
                    {
                        title: 'qqqqq',
                        text:
                            '虚拟仿真实验项目充分体现了工程教育理念，以轨道交通运营管理过程中产生的数据为基础，根据仿真分析结果对运营过程进行优化调整，贯彻培养学生工程实践和创新的理念，实现虚实结合的实践教学。',
                        img: require('../../static/images/home_project_1.png'),
                        id: '1'
                    },
                    {
                        title: '22222',
                        text:
                            '虚拟仿真实验项目充分体现了通信信号一体化的技术发展趋势，以地面信号控制系统和通信网络为基础，结合车载信号系统，虚实结合培养学生工程应用和创新能力。',
                        img: require('../../static/images/home_project_2.png'),
                        id: '2'
                    },
                    {
                        title: '322222',
                        text:
                            '虚拟仿真实验项目主要包括牵引变电所虚拟仿真和牵引供电系统仿真实验，充分反映了高速铁路、城市轨道交通的供电技术发展趋势，用以学生对铁路牵引供电系统的系统性学习，掌握现场供电工程的设计、施工和运营的基本技能。',
                        img: require('../../static/images/home_project_3.png'),
                        id: '3'
                    },
                    {
                        title: '22222',
                        text:
                            '虚拟仿真实验项目面向普速铁路和高速铁路两个方向，全面展现机车控制系统的组成结构和功能，用以学生对机车控制系统的系统性学习，掌握列车操纵驾驶过程中所涉及的专业技能。',
                        img: require('../../static/images/home_project_4.png'),
                        id: '4'
                    }
                ],
                [
                    {
                        title: 'aaaaaa',
                        text:
                            '虚拟仿真实验项目充分体现了工程教育理念，以轨道交通运营管理过程中产生的数据为基础，根据仿真分析结果对运营过程进行优化调整，贯彻培养学生工程实践和创新的理念，实现虚实结合的实践教学。',
                        img: require('../../static/images/home_project_1.png'),
                        id: '1'
                    },
                    {
                        title: 'aaaaa',
                        text:
                            '虚拟仿真实验项目充分体现了通信信号一体化的技术发展趋势，以地面信号控制系统和通信网络为基础，结合车载信号系统，虚实结合培养学生工程应用和创新能力。',
                        img: require('../../static/images/home_project_2.png'),
                        id: '2'
                    },
                    {
                        title: 'aaaa',
                        text:
                            '虚拟仿真实验项目主要包括牵引变电所虚拟仿真和牵引供电系统仿真实验，充分反映了高速铁路、城市轨道交通的供电技术发展趋势，用以学生对铁路牵引供电系统的系统性学习，掌握现场供电工程的设计、施工和运营的基本技能。',
                        img: require('../../static/images/home_project_3.png'),
                        id: '3'
                    },
                    {
                        title: 'aaaaaaa',
                        text:
                            '虚拟仿真实验项目面向普速铁路和高速铁路两个方向，全面展现机车控制系统的组成结构和功能，用以学生对机车控制系统的系统性学习，掌握列车操纵驾驶过程中所涉及的专业技能。',
                        img: require('../../static/images/home_project_4.png'),
                        id: '4'
                    }
                ]
            ],
            proCurrentIndex: 1,
            sourceList: [
                [
                    require('../../static/images/home_source_1.jpg'),
                    require('../../static/images/home_source_1.jpg'),
                    require('../../static/images/home_source_1.jpg'),
                    require('../../static/images/home_source_1.jpg')
                ],
                [
                    '../../static/images/home_source_2.jpg',
                    '../../static/images/home_source_1.jpg',
                    '../../static/images/home_source_1.jpg',
                    '../../static/images/home_source_1.jpg'
                ],
                [
                    '../../static/images/home_source_3.jpg',
                    '../../static/images/home_source_1.jpg',
                    '../../static/images/home_source_1.jpg',
                    '../../static/images/home_source_1.jpg'
                ],
                [
                    '../../static/images/home_source_4.jpg',
                    '../../static/images/home_source_1.jpg',
                    '../../static/images/home_source_1.jpg',
                    '../../static/images/home_source_1.jpg'
                ]
            ],
            sourceIndex: 1,
            leftUndoIcon: require('../../static/images/home_arrow_left_undo.png'),
            rightUndoIcon: require('../../static/images/home_arrow_right_undo.png'),
            leftDoIcon: require('../../static/images/home_arrow_left_do.png'),
            rightDoIcon: require('../../static/images/home_arrow_right_do.png')
        }
    },
    methods: {
        getBannerList() {
            const data = {
                page: 1,
                rows: 10000,
                collegeId: this.collegeId,
                columnId: 20
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    this.bannerList = (res.data && res.data.items) || []
                })
        },
        jumpToExperiment(index) {
            this.$router.push(`/experiment?id=${index}`)
        },
        changeLast() {
            if (this.proCurrentIndex === 1) return
            this.proCurrentIndex--
            this.$refs.projectCarousel.activeIndex = this.proCurrentIndex - 1
        },
        changeNext() {
            if (
                this.proCurrentIndex === this.projectsList.length &&
                this.proCurrentIndex
            )
                return
            this.proCurrentIndex++
            this.$refs.projectCarousel.activeIndex = this.proCurrentIndex - 1
        },
        changeSourceLast() {
            if (this.sourceIndex === 1) return
            this.sourceIndex--
            this.$refs.sourceCarousel.activeIndex = this.sourceIndex - 1
        },
        changeSourceNext() {
            if (this.sourceIndex === this.sourceList.length && this.sourceIndex)
                return
            this.sourceIndex++
            this.$refs.sourceCarousel.activeIndex = this.sourceIndex - 1
        },
        jumpToCenter() {
            this.$router.push('/center')
        },
        jumpToNews() {
            this.$router.push('/news?id=1')
        },
        jumpToResult() {
            this.$router.push('/result?id=1')
        }
    },
    mounted() {
        if (this.$route.query.id) {
            localStorage.setItem('collegeId', this.$route.query.id)
        }
        this.getBannerList()
    }
}
</script>

<style lang="less">
@import '../../static/css/base.less';
#home {
    background: #fff;
    .app-content {
        padding: 10px 0 0;
    }
    .home-banner {
        margin: 20px 0;
        height: 300px;
        overflow: hidden;
        background: #ededed;
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
            text-align: center;
            position: relative;
            .project-change {
                position: absolute;
                right: 0;
                top: 50%;
                > img {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                }
            }
        }
        .project-list {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: stretch;
            .project-item {
                flex: 1;
                margin-right: 20px;
                &:last-child {
                    margin-right: 0;
                }
                .project-bg {
                    width: 100%;
                }
                .project-desc {
                    background: @df-color;
                    color: #fff;
                    padding: 20px;
                    min-height: 270px;
                    .desc-title {
                        font-size: 16px;
                        margin: 0px 0 20px;
                        text-align: center;
                    }
                    .desc-inner {
                        line-height: 28px;
                        text-align: left;
                        cursor: pointer;
                        &:hover {
                            color: @active-color;
                        }
                    }
                }
            }
        }
        .el-carousel__container {
            height: 550px;
        }
    }
    .home-news {
        background: #ededed;
        .home-news-inner {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        .news-notice,
        .news-result {
            flex: 1;
        }
        .news-notice {
            margin-right: 30px;
        }
        .news-title {
            padding: 20px 0;
            border-bottom: 1px solid #999;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            > h3 {
                font-size: 24px;
                color: #6b6b6b;
                font-weight: bold;
            }
            > span {
                &:hover {
                    color: rgb(0, 101, 156);
                    cursor: pointer;
                }
            }
        }
        .news-list {
            padding: 20px 0;
            .news-item {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 5px;
                .news-style {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: rgb(0, 101, 156);
                    margin-right: 10px;
                }
                .news-desc {
                    flex: 1;
                    &:hover {
                        color: rgb(0, 101, 156);
                        cursor: pointer;
                    }
                }
                .news-time {
                    width: 100px;
                    text-align: right;
                }
            }
        }
    }
    .home-footer {
        background-color: rgba(54, 54, 54, 1);
        margin: 0 auto;

        .home-footer-inner {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 30px 0;
            border-bottom: 1px solid #999;
            > img {
                height: 40px;
                margin-right: 5px;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>

