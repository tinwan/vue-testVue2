<template>
    <Menu theme="light">
        <Menu-item name="1"><router-link to="/home/user"><i class="material-icons">perm_identity</i>用户管理</router-link></Menu-item>
        <Menu-item name="2"><router-link to="/home/app"><i class="material-icons">apps</i>所有应用</router-link></Menu-item>
        <Menu-item name="3"><router-link to="/home/email"><i class="material-icons">mail_outline</i>邮件通知</router-link></Menu-item>
        <Submenu name="4">
            <template slot="title"><i class="material-icons">settings</i>系统设置</template>
            <Menu-item name="4-1"><router-link to="/home/user">系统设置</router-link></Menu-item>
            <Menu-item name="4-2"><router-link to="/home/user">配置检测</router-link></Menu-item>
        </Submenu>
    </Menu>
</template>
<style lang="scss">
    .left-bar {
        background: #F3F6F9;
        .ivu-menu-light {
            background: #F3F6F9;
        }
        .ivu-menu-item {
            font-size: 16px;
        }
        .ivu-menu-submenu-title {
            color: #495060;
            padding: 14px 24px;
        }
        .ivu-menu-item a {
            display: block;
            padding: 14px 24px;
            color: #495060;
        }
        .ivu-menu-item a.router-link-active {
            color: #2d8cf0;
            border-right: 2px solid #2d8cf0;
            background-color: #108ee9;
            color: #ffffff;
            font-size: 16px;
            z-index: 2;
        }
        .ivu-menu-vertical.ivu-menu-light:after {
            background: #F3F6F9;
        }
        .ivu-menu-vertical .ivu-menu-item {padding: 0;}
        .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) a.router-link-active {
            color: #2d8cf0;
            border-right: 2px solid #2d8cf0;
            background-color: #108ee9;
            color: #ffffff;
            font-size: 16px;
            z-index: 2;
        }
        .material-icons {
            position: relative;
            top: 5px;
            font-size: 24px;
        }
    }
</style>