<template>
  <div>
    <div v-if="login"></div>
    <router-view></router-view>
  </div>
</template>
<script>
    import { mapState } from "vuex";
    import axios from "axios";
    import config from "../config/config";
    export default {
        data() {
            return {
                lists: []
            };
        },
        created() {
            let accessToken = sessionStorage.getItem("accessToken");
            axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
            axios.defaults.headers.put["Content-Type"] = "application/json;charset=UTF-8";
            //解决IE 读取表格数据时, get请求缓存不更新问题
            if (navigator.userAgent.indexOf("Trident") > 0) {
                axios.defaults.headers.common["Pragma"] = "no-cache";
            }
            if (accessToken) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
            }
            axios.defaults.baseURL = config.serverUrl;
        },
        mounted() {
            if (this.$route.fullPath === "/") {
                this.$router.replace("/login");
            } else if (this.$route.fullPath === "/login") {
                if (this.login) {
                    this.$router.replace("/home/user/userList");
                }
            }
        },
        updated() {
            if (this.$route.fullPath === "/login" && this.login) {
                this.$router.replace("/home/user/userList");
            } else if (this.$route.fullPath.indexOf("/home") > -1 && !this.login) {
                this.$router.replace("/login");
            }
        },
        computed: mapState("login", {
            login: state => state.login
        }),
        methods: {
        }
    };
</script>
