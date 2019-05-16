<template>
    <common id="equipment">
        <div class="app-inner containner">
            <menu-list :menuList="menuList"
                       menuTitle="设备环境"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <div v-show="this.currentIndex === 0">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">信息化环境</div>
                    <div class="news-common-time">发布时间:2019-04-08 17:49:20</div>
                    <div class="news-content">
                        <p>
                            虚拟仿真实验教学中心加大信息化建设，中心网络环境依托校园网络运行，目前校园网共有三个出口，带宽分别为：教育网（cernet）出口1000M， 电信（chinanet）出口600M ，中国联通（unicom）出口600M，入网用户总数约30600人，入网计算机数约24000台，中心配备了用于虚拟仿真实验平台及各种教学辅助资源运行所需的专用服务器，用于网络安全的硬件防火墙及网络监控服务器，用于学生进行虚拟仿真实验用的计算机240台，建设虚拟仿真实验室3个，多媒体网络互动实验室1个，软件平台建设方面，建成生物学虚拟仿真实验中心门户网站，自主开发制作了虚拟仿真实验教学管理平台，并制作多个虚拟仿真实验教学资源，完成了虚拟实验教学管理共享平台的建设工作，依托学院现有的实验体系、实验设备和科研成果等，完成了部分典型实验项目、实验设备、辅助教学资源的虚拟化工作。
                        </p>
                        <p>
                            中心与合作公司共同开发制作用于虚拟仿真实验的统一管理平台，将不同类型的虚拟仿真实验集中部署在中心平台上，使用学校信息化办的使用统一认证平台，实现了学生选课、学习、练习、测试、评价、分析等一体化服务，帐号信息由学校信息化管理，虚拟仿真实验信息由虚拟仿真实验中心统一管理。
                        </p>
                        <p>
                            虚拟仿真实验教学项目建设充分体现虚实结合的原则，针对本科生常规实验教学存在的问题确定虚拟实验项目，将不同学科专业的科研成果有机融入实验教学，以有效地弥补实验教学中的不足，减少了实验教学中有害实验材料的使用和实验耗材及设备投入;另外, 中心结合轨道交通信息与控制类专业人才培养需求，以自主研发、科研成果转化和校企合作共建为主、并引进先进的专业软件，建成了涵盖轨道交通运营管理、通信信号、牵引供电、机车控制的4个虚拟仿真实验教学资源版块，共计10余个虚拟仿真实验教学系统。
                        </p>
                    </div>
                </div>
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
                {
                    name: '信息化环境'
                },
                {
                    name: '软件平台'
                },
                {
                    name: '硬件设施'
                }
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
#equipment {
}
</style>
