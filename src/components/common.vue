<template>
    <div class="app-wrapper">
        <div class="head-top">
            <div class="head-left"
                 @click="jumpToHome()">
                <img src="../../static/images/logo.png"
                     class="head-logo">
                <span class="head-name">{{collegeName}}学院虚拟仿真实验教学中心</span>
            </div>
            <!-- <div class="head-right">
                <div class="head-search">
                    <input class="search-left"
                           type="text"
                           placeholder="请输入关键字进行搜索">
                    <span class="search-confirm"><img src="../../static/images/search.png"
                             alt=""></span>
                </div>
                <div class="head-login"
                     @click="jumpToLogin">登录系统</div>
            </div> -->
        </div>
        <div class="head-menu">
            <ul class="menu-wrapper">
                <li class="menu-list-item"
                    @click="jumpToPage(item.path)"
                    v-for="(item , index) in menuList"
                    :key="index">{{item.name}}</li>
            </ul>
        </div>
        <div class="app-content">
            <slot></slot>
        </div>
        <div class="footer">
            <p>
                <span>
                    版权所有 兰州交通大学 通讯地址：兰州市安宁区安宁西路88号 邮编：730070
                </span>
            </p>
            <p>
                <span>
                    域名备案信息：[www.lzjtu.edu.cn/陇ICP备14001560号-2] [www.lzjtu.cn]
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'common',
    data() {
        return {
            menuList: [
                {
                    name: '首页',
                    id: 0,
                    path: '/home'
                },
                {
                    name: '中心概况',
                    id: 1,
                    path: '/center'
                },
                {
                    name: '新闻公告',
                    id: 2,
                    path: '/news'
                },
                {
                    name: '师资队伍',
                    id: 3,
                    path: '/teachers'
                },
                {
                    name: '实验教学',
                    id: 4,
                    path: '/experiment'
                },
                {
                    name: '资源共享',
                    id: 5,
                    path: '/source'
                },
                {
                    name: '规章制度',
                    id: 6,
                    path: '/rules'
                },
                {
                    name: '设备环境',
                    id: 7,
                    path: '/equipment'
                },
                {
                    name: '教学成果',
                    id: 8,
                    path: '/result'
                },
                {
                    name: '关于我们',
                    id: 9,
                    path: '/about'
                }
            ]
        }
    },
    computed: {
        collegeName() {
            return localStorage.getItem('collegeName') || ''
        }
    },
    methods: {
        jumpToPage(path) {
            this.$router.push(path)
        },
        jumpToHome() {
            this.$router.push('/home')
        },
        jumpToLogin() {
            window.location.href = 'http://39.104.97.6/index.html'
        }
    }
}
</script>

<style lang="less">
.app-wrapper {
    width: 100%;
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
            cursor: pointer;
            .head-logo {
                width: 90px;
                height: 80px;
                margin-right: 10px;
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
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
        .head-login {
            color: #fff;
            padding: 8px 12px;
            background: #006666;
            margin-left: 10px;
            &:hover {
                background: green;
                cursor: pointer;
            }
        }
    }
    .head-menu {
        width: 100%;
        background: #18417c;
        .menu-wrapper {
            margin: 0 auto;
            width: 1220px;
            display: flex;
            flex-direction: row;
            justify-items: space-around;
            align-items: center;
            .menu-list-item {
                flex: 1;
                height: 50px;
                line-height: 50px;
                text-align: center;
                background: #18417c;
                color: #fff;
                font-size: 16px;
                &:hover {
                    background: rgba(25, 158, 216, 1);
                    cursor: pointer;
                }
            }
        }
    }
    .app-content {
        padding: 20px 0 0;
    }
    .footer {
        background-color: rgba(54, 54, 54, 1);
        text-align: center;
        color: #fff;
        padding: 30px 0;
        line-height: 1.4;
    }
}
</style>
