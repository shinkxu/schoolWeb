<template>
    <div class="menu-list">
        <div class="menu-title">{{menuTitle}}</div>
        <ul class="menu-content">
            <li class="menu-item"
                :class="{'active': currentIndex === index}"
                v-for="(item, index) in menuList"
                :key="index"
                @click="change(index)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'menu-list',
    props: {
        menuTitle: '',
        menuList: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        change(index) {
            this.currentIndex = index
            this.$emit('change', index)
        }
    }
}
</script>

<style lang="less">
.menu-list {
    width: 230px;
    .menu-title {
        width: 230px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: rgba(47, 88, 137, 1);
        font-size: 18px;
        color: #ffffff;
    }
    .menu-content {
    }
    .menu-item {
        padding: 14px;
        font-size: 16px;
        text-align: left;
        background: #ededed;
        border-bottom: 1px solid rgba(228, 228, 228, 1);
        cursor: pointer;
        &:hover {
            color: #00659c;
        }
        &.active {
            color: #00659c;
        }
    }
}
</style>


