<template>
    <common id="result">
        <div class="app-inner containner">
            <!-- <menu-tree class="center-menu"
                       :menuList="menuList"
                       menuTitle="教学成果"
                       @change="changeMenu"></menu-tree> -->
            <menu-list :menuList="menuList"
                       menuTitle="设备环境"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
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

                <!-- <div v-show="this.currentIndex === 0">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">虚拟仿真实验教学队伍实验教学水平和成果</div>
                    <div class="news-common-time">发布时间:2019-04-08 17:49:20</div>
                    <div class="news-content">
                        <p>
                            兰州交通大学轨道交通信息与控制虚拟仿真实验教学中心以国家级教学团队为基础，以国家级有突出贡献的中青年专家、运用国家级人才培养模式创新实验区培养模式，由教学、科研、专业技术人员和系统维护支持人员组成，形成了一支结构合理、实践经验丰富、专兼结合、互通互融的高水平实验教学和管理队伍。拥有国家级教学团队1个，甘肃省高等学校教学名师4人，国家级精品课程3门，省级精品课程8门，国家级特色专业4个，省级特色专业3个。近年来，出版教材20余部，发表教改论文30余篇，获得省级教学成果13项，获得省、市、厅科技进步奖32项、发明专利26项，近3年指导的学生获得各类学科竞赛188项
                        </p>
                    </div>
                </div>
                <div v-show="this.currentIndex === 1">

                </div> -->
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
            collegeId: Number(localStorage.getItem('collegeId')),
            currentIndex: 0,
            list1: [],
            list2: [],
            list3: []
        }
    },
    methods: {
        changeMenu(index) {
            this.currentIndex = index
        },
        jumpTodetails(id) {},
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
        }
    },
    mounted() {
        this.getList(85, this.list1)
        this.getList(92, this.list2)
        this.getList(93, this.list3)
    }
}
</script>

<style lang="less">
@import url('../../static/css/base');
#result {
    .news-notice-list {
        margin: 30px 0;
    }
    .news-item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 5px;
        font-size: 16px;
        padding: 8px 0;
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
</style>
