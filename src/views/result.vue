<template>
    <common id="about">
        <div class="about">
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="教学成果"
                       @change="changeMenu"></menu-list>
            <div class="center-right">
                <!-- 中心简介 -->
                <div v-show="this.currentIndex === 0">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">虚拟仿真实验教学队伍实验教学水平和成果</div>
                    <div class="news-time">发布时间:2019-04-08 17:49:20</div>
                    <div class="news-content">
                        <p>
                            兰州交通大学轨道交通信息与控制虚拟仿真实验教学中心以国家级教学团队为基础，以国家级有突出贡献的中青年专家、运用国家级人才培养模式创新实验区培养模式，由教学、科研、专业技术人员和系统维护支持人员组成，形成了一支结构合理、实践经验丰富、专兼结合、互通互融的高水平实验教学和管理队伍。拥有国家级教学团队1个，甘肃省高等学校教学名师4人，国家级精品课程3门，省级精品课程8门，国家级特色专业4个，省级特色专业3个。近年来，出版教材20余部，发表教改论文30余篇，获得省级教学成果13项，获得省、市、厅科技进步奖32项、发明专利26项，近3年指导的学生获得各类学科竞赛188项
                        </p>
                    </div>
                </div>
                <!-- 中心风貌 -->
                <div v-show="this.currentIndex === 1">

                </div>
            </div>
        </div>
    </common>
</template>

<script>
    export default {
        data() {
            return {
                menuList: [
                ],
                currentIndex: 0
            }
        },
        methods: {
            changeMenu(index) {
                this.currentIndex = index
            }
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
            .center-menu {
                margin: 20px 30px 0 0;
            }
            .center-right {
                flex: 1;
                margin-top: 20px;
                .news-img {
                    width: 100%;
                }
                .news-title {
                    font-size: 28px;
                    font-weight: bold;
                    text-align: center;
                    margin: 20px 0;
                }
                .news-time {
                    padding-bottom: 20px;
                    border-bottom: 1px solid #999;
                    color: #666;
                    text-align: center;
                }
                .news-content {
                    margin-top: 20px;
                }
                p {
                    margin-bottom: 20px;
                    text-indent: 28px;
                    font-size: 16px;
                    line-height: 1.6;
                }
            }
        }
    }
</style>
