<template>
    <common id="news">
        <div class="containner">
            <menu-list class="center-menu"
                       :menuList="menuList"
                       menuTitle="通知公告"
                       @change="changeMenu"></menu-list>
        </div>
    </common>
</template>

<script>
export default {
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
