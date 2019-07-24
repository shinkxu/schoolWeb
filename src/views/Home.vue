<template>
    <common id="home">
        <div class="home-banner">
            <el-carousel :interval="5000"
                         class="containner">
                <el-carousel-item class="banner-item "
                                  v-for="(item, index) in bannerList"
                                  :key="index">
                    <img class="item-bg"
                         :src="item.showImg">
                    <div class="item-inner">
                        <div class="inner-title">{{item.title}}</div>
                        <div class="inner-intro clamp-lines">{{item.content}}</div>
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
                            <img :src="v.showImg"
                                 class="project-bg">
                            <div class="project-desc">
                                <h5 class="desc-title">{{v.title}}</h5>
                                <span class="desc-inner"
                                      @click="jumpToExperiment(k)">{{v.content}}</span>
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
                    <ul class="news-list">
                        <li class="news-item"
                            v-for="(item, index) in noticeList"
                            :key="index">
                            <i class="news-style"></i>
                            <span class="news-desc clamp-line">{{item.title}}</span>
                            <span class="news-time">{{new Date(item.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</span>
                        </li>
                    </ul>
                </div>
                <div class="news-result">
                    <div class="news-title">
                        <h3>教学成果</h3>
                        <span @click="jumpToResult()">+ 更多</span>
                    </div>
                    <ul class="news-list">
                        <li class="news-item"
                            v-for="(item, index) in resultList"
                            :key="index">
                            <i class="news-style"></i>
                            <span class="news-desc clamp-line">{{item.title}}</span>
                            <span class="news-time">{{new Date(item.updateTime).format('yyyy-MM-dd hh:mm:ss')}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="home-project home-source "
             id="home-source">
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
                            <img :src="v.showImg"
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
            bannerList: [],
            projectsList: [],
            proCurrentIndex: 1,
            proPage: 1,
            sourceList: [],
            sourceIndex: 1,
            sourcePage: 1,
            noticeList: [],
            resultList: [],
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
        getResultList() {
            const data = {
                page: 1,
                rows: 5,
                collegeId: this.collegeId,
                columnId: 84
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    this.resultList = (res.data && res.data.items) || []
                })
        },
        getSourceList() {
            const data = {
                page: 1,
                rows: 4,
                collegeId: this.collegeId,
                columnId: 24
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    if (res.data && res.data.items) {
                        if (res.data.items.length === 4) {
                            this.sourcePage++
                            this.getSourceList()
                        }
                        this.sourceList = [
                            ...this.sourceList,
                            ...[res.data.items]
                        ]
                    }
                })
        },
        getNoticeList() {
            const data = {
                page: 1,
                rows: 5,
                collegeId: this.collegeId,
                columnId: 32
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    this.noticeList = (res.data && res.data.items) || []
                })
        },
        getProjectsList() {
            const data = {
                page: 1,
                rows: 4,
                collegeId: this.collegeId,
                columnId: 21
            }
            Vue.axios
                .post(this.API_ROOT + 'columnContent/listFront', data)
                .then(res => {
                    if (res.data && res.data.items) {
                        if (res.data.items.length === 4) {
                            this.proPage++
                            this.getProjectsList()
                        }
                        this.projectsList = [
                            ...this.projectsList,
                            ...[res.data.items]
                        ]
                    }
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
        this.getProjectsList()
        this.getSourceList()
        this.getNoticeList()
        this.getResultList()
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
            justify-content: flex-start;
            align-items: stretch;
            .project-item {
                // flex: 1;
                width: 25%;
                margin-right: 20px;
                &:last-child {
                    margin-right: 0;
                }
                .project-bg {
                    // width: 100%;
                    width: 280px;
                    height: 280px;
                }
                .project-desc {
                    background: @df-color;
                    color: #fff;
                    padding: 20px;
                    min-height: 270px;
                    width: 280px;
                    box-sizing: border-box;
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
    #home-source {
        .project-bg {
            width: 285px;
            height: 190px;
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
                    width: 200px;
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

