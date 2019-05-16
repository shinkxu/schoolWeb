<template>
    <common id="experiment">
        <div class="app-inner containner">
            <menu-tree class="center-menu"
                       :menuList="menuList"
                       menuTitle="实验教学"
                       :activeIndex="currentIndex"
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
                    name: '通信信号虚拟仿真',
                    list: [
                        {
                            name: '轨道交通调度集中实验系统'
                        },
                        {
                            name: '轨道交通列车运行与控制仿真'
                        },
                        {
                            name: '高铁列车自动控制设备教学仿真'
                        },
                        {
                            name: 'CTCS仿真实验系统'
                        },
                        {
                            name: '全电子计算机联锁仿真实验系统'
                        }
                    ]
                },
                {
                    name: '牵引供电虚拟仿真',
                    list: [
                        {
                            name: '牵引供电虚拟仿真'
                        },
                        {
                            name: '牵引变电所虚拟仿真实验系统'
                        },
                        {
                            name: '列车牵引供电仿真实验系统'
                        }
                    ]
                },
                {
                    name: '机车控制虚拟仿真',
                    list: [
                        {
                            name: '机车控制虚拟仿真介绍'
                        },
                        {
                            name: '动车组制动系统半实物仿真实验'
                        },
                        {
                            name: '高速列车驾驶模拟仿真实验系统'
                        },
                        {
                            name: 'SS7E型电力机车虚拟仿真实验'
                        }
                    ]
                },
                {
                    name: '典型实验项目',
                    list: [
                        {
                            name: '列车运行图编制实验'
                        },
                        {
                            name: '列车运行驾驶模拟实验'
                        },
                        {
                            name: '基于BIM的施工与运营仿真实验'
                        },
                        {
                            name: '牵引供电系统仿真实验'
                        },
                        {
                            name: '全电子计算机联锁系统仿真实验'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        changeMenu() {}
    },
    mounted() {
        if (this.$route.query.id) {
            this.currentIndex = Number(this.$route.query.id)
        }
    }
}
</script>

<style lang="less">
@import '../../static/css/base.less';

#experiment {
}
</style>


