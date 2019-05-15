<template>
    <common id="news">
        <div class="app-inner containner">
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="通知公告"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <img class="news-img"
                     src="../../static/images/news_img.png">
                <ul v-show="currentIndex === 0"
                    class="news-notice-list">
                    <li v-for="(item, index) in 10"
                        :key="index"
                        class="news-item">
                        <i class="news-style"></i>
                        <span class="news-desc clamp-line">学校召开国家虚拟仿真实验教学项目申报经验报告会</span>
                        <span class="news-time">2019-01-01</span>
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
                    name: '学术信息'
                },
                {
                    name: '通知公告'
                }
            ],
            currentIndex: 0,
            newsList: [],
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
#news {
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
            width: 100px;
            text-align: right;
        }
    }
}
</style>
