<template>
    <div>
        <div class="breadcrumb-path clearfix">
            <Breadcrumb separator=">">
                <Breadcrumb-item><i class="material-icons">perm_identity</i>用户管理</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="main-cont">
            <div class="menu-row clearfix">
                <div class="fl">
                    <router-link class="row-btn" :to="{path: '/home/user/addUser'}"><Button icon="plus" type="primary">添加用户</Button></router-link>
                </div>
                <div class="fr">
                    <searchBar v-on:onSearchEvent="onSearch"/>
                </div>
            </div>
            <div class="list-cont">
                <Table :columns="columns" :data="userList" no-data-text="无数据"/>
                <div style="margin: 10px;overflow: hidden">
                    <div style="float: right;">
                        <Page :total="total" :current="1" @on-change="changePage" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    export default {
        data: function () {
            return {
                columns: [
                    {title: "帐号", key: "account", align: "center"},
                    {title: "Sender ID", key: "senderId", align: "center"},
                    {title: "邮箱", key: "mailBox", width: "300", align: "center"},
                    {title: "应用", key: "appCount", align: "center"},
                    {title: "创建时间", key: "createTime", align: "center"},
                    {title: "最近登录日期", key: "updateTime", align: "center"},
                    {title: "操作", render: (h, params) => {
                        /*return h("router-link", {
                            props: {
                                to: "/home/user/userInfo/" + params.row.account
                            },
                            domProps: {
                                innerHTML: '<span>查看</span>'
                            }
                        }, [h("span", "查看")]);*/
                        return (<a href={"/home/user/userInfo/" + params.row.account}><span>查看</span></a>);
                    }}
                ],
                offset: 0,
                limit: 10,
                searchKey: "",
            }
        },
        mounted: function () {
            this.getListData();
        },
        computed: mapState("user", {
            userList: state => state.userList,
            total: state => state.userListTotal
        }),
        methods: {
            onSearch: function (searchKey) {
                this.searchKey = searchKey;
                this.getListData();
            },
            getListData: function () {
                this.$store.dispatch("user/getUserList", {offset: this.offset, limit: this.limit, keyword: this.searchKey});
            },
            changePage: function (pageNo) {
                this.offset = pageNo - 1;
                this.getListData();
            }
        }
    }
</script>