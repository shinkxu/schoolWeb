<template>
    <common id="rules">
        <div class="app-inner containner">
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="规章制度"
                       @change="changeMenu"></menu-list>
            <div class="app-inner-right">
                <div v-show="this.currentIndex === 0">
                    <img class="news-img"
                         src="../../static/images/news_img.png">
                    <div class="news-title">学生实验守则</div>
                    <div class="news-common-time">发布时间:2019-04-08 17:49:20</div>
                    <div class="news-content">
                        <p>
                            一、学生实验前应通过轨道交通信息与控制虚拟仿真实验教学中心门户网站认真预习，明确实验目的、步骤、对指导教师或实验技术人员抽查提问回答不合要求者，须重新预习，否则不准其做实验。
                        </p>
                        <p>
                            二、学生在实验中，应听从指导教师及实验人员的安排，在使用精密、贵重仪器时，必须按要求确保设备的安全使用，禁止随意动用与本次实验无关的仪器设备，若对实验内容持有创见性的改革，实验前必须经指导人员同意后才能进行。
                        </p>
                        <p>
                            三、学生应认真地进行实验，严格按操作规程办事，正确记录实验数据，不得做本次实验以外的事情，实验后要认真分析实验结果，处理实验数据，认真做好实验报告。
                        </p>
                        <p>
                            四、严格考勤，对无故不上课的学生以旷课论处，并不得补做，对请假缺做实验的学生，须另行安排时间予以补做。
                        </p>
                        <p>
                            五、实验完毕后，学生必须按规定断电、关水、关气、整理设备、清扫场地，经实验指导人员检查合格后方可离去。如发现有损坏仪器设备、偷盗公物者。
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
                    name: '学生实验守则'
                },
                {
                    name: '实验室工作条例'
                },
                {
                    name: '实验室人员工作条例'
                },
                {
                    name: '实验教学管理规程'
                },
                {
                    name: '实验室开放管理办法'
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
</style>
