<template>
    <div class="search-bar">
        <Input v-model="searchKey" size="large" placeholder="请输入搜索关键字"
               @on-enter="onSearchStart">
            <Button slot="append" @click="onSearchStart" icon="ios-search"></Button>
        </Input>
        <i class="ivu-icon ivu-icon-close-circled" v-if="searchKey !== ''" @click="onClear"></i>
    </div>
</template>
<script>
    import Vue from "vue";
    export default Vue.component("searchBar", {
        name: "searchBar",
        data: function () {
            return {
                searchKey: ""
            };
        },
        methods: {
            onSearchStart: function () {
                this.$emit("onSearchEvent", this.searchKey);
            },
            onClear: function () {
                this.searchKey = "";
                this.$emit("onSearchEvent", this.searchKey);
            }
        }
    });
</script>
<style lang="scss">
    .search-bar {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 350px;
        .ivu-icon-close-circled {
            position: absolute;
            top: 9px;
            right: 47px;
            color: #999999;
            cursor: pointer;
            z-index: 3;
            font-size: 20px;
        }
    }
</style>