<template>
    <common id="experiment">
        <div class="app-inner containner">
            <menu-tree class="center-menu"
                       :menuList="menuList"
                       menuTitle="实验教学"
                       @change="changeMenu"></menu-tree>

            <div class="app-inner-right">
                <img class="news-img"
                     src="../../static/images/news_img.png">
            </div>
        </div>
    </common>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            menuList: [
                {
                    name: '运营管理虚拟仿真',
                    list: [
                        {
                            name: '运营管理虚拟仿真板块介绍'
                        },
                        {
                            name: '轨道交通调度集中实验系统'
                        },
                        {
                            name: '编组站综合自动化系统'
                        },
                        {
                            name: '铁路中间站接发车实验系统'
                        },
                        {
                            name: '基于BIM的施工与运营实验系统'
                        }
                    ]
                },
                {
                    name: '运营管理虚拟仿真',
                    list: [
                        {
                            name: '运营管理虚拟仿真板块介绍'
                        },
                        {
                            name: '轨道交通调度集中实验系统'
                        },
                        {
                            name: '编组站综合自动化系统'
                        },
                        {
                            name: '铁路中间站接发车实验系统'
                        },
                        {
                            name: '基于BIM的施工与运营实验系统'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        changeMenu() {}
    }
}
</script>

<style lang="less">
@import '../../static/css/base.less';

#experiment {
}
</style>


