<template>
    <div>
        <header class="top-bar">
            <span class="title">NPNS平台</span>
            <span class="user-id">
                <Dropdown class="el-menu-demo">
                    <span>admin <Icon type="arrow-down-b" class="ml-10"></Icon></span>
                    <Dropdown-menu slot="list">
                        <Dropdown-item><div @click="logout">退出</div></Dropdown-item>
                    </Dropdown-menu>
            </Dropdown>
            </span>
            <div class="clear"></div>
        </header>
        <div class="left-bar">
            <router-view name="menubar"></router-view>
        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    export default {
        data() {
            return {
            };
        },
        created() {
        },
        mounted() {
        },
        updated() {
        },
        methods: {
            logout() {
                this.$store.dispatch("login/logout");
                this.$router.replace("/login");
            }
        }
    };
</script>
<style lang="scss">
    .top-bar {
        height: 60px;
        width: 100%;
        background: #21456A;
        color: #ffffff;
        padding: 0 28px;
        font-size: 15px;
        position: fixed;
        top: 0;
        z-index: 100;
        .title {
            float: left;
            font-size: 20px;
            line-height: 60px;
        }
        .user-id {
            float: right;
            line-height: 60px;
        }
    }
    .left-bar {
        width: 240px;
        height: 100%;
        display: block;
        background: #F3F6F9;
        float: left;
        position: fixed;
        bottom: 0;
        top: 60px;
    }
    .main-content {
        margin: 60px 0 0 240px;
    }
</style>
