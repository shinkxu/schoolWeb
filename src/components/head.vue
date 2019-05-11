<template>
    <div class="head">
        <div class="head-top">
            <div class="head-left">
                <img src=""
                     class="head-logo">
                <span class="head-name">土木工程学院虚拟仿真实验教学中心</span>
            </div>
            <div class="head-right">
                <div class="head-search">
                    <input class="search-left"
                           type="text"
                           placeholder="请输入关键字进行搜索">
                    <span class="search-confirm"><i>搜索</i></span>
                </div>
                <div class="head-login">登录系统</div>
            </div>
        </div>
        <div class="head-menu">

        </div>
    </div>
</template>

<script>
export default {
    name: 'common'
}
</script>

<style lang="less">
.head {
    .head-top {
        padding: 15px 0;
        margin: 0 auto;
        width: 1220px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .head-left {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            .head-logo {
                width: 90px;
                height: 80px;
                margin-right: 10px;
                background: blue;
            }
            .head-name {
                font-size: 28px;
                color: #18417c;
            }
        }
        .head-right {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            .head-search {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
            }
            .search-left {
                padding: 0;
                width: 300px;
                height: 33px;
                ::-webkit-input-placeholder {
                    font-size: 12px;
                    color: #666;
                }
                padding: 0 4px;
            }
            .search-confirm {
                width: 70px;
                height: 35px;
                background: #ff6600;
            }
        }
        .head-login {
            color: #fff;
            padding: 8px 12px;
            background: #006666;
            margin-left: 10px;
        }
    }
    .head-menu {
        width: 100%;
    }
}
</style>
