/**
 * Created by tianyun on 2017/5/16.
 */
import index from "../page/index.vue";
import login from "../page/login/login.vue";
import home from "../page/home.vue";
import menubar from "../page/menubar.vue";
import userIndex from "../page/user/userIndex.vue";
import userList from "../page/user/userList.vue";
import userInfo from "../page/user/userInfo.vue";
import editUser from "../page/user/editUser.vue";
import appIndex from "../page/app/appIndex.vue";
import appList from "../page/app/appList.vue";
import appInfo from "../page/app/appInfo.vue";
import editApp from "../page/app/editApp.vue";
import emailIndex from "../page/email/emailIndex.vue";
import emailConfig from "../page/email/emailConfig.vue";

export default [
    {
        path: "/",
        component: index,
        children: [
            {path: "login", component: login},
            {
                path: "home",
                component: home,
                children: [
                    {
                        path: "user",
                        components: {default: userIndex, menubar: menubar},
                        children: [
                            {path: "", component: userList},
                            {path: "userList", component: userList},
                            {path: "userInfo/:id", component: userInfo},
                            {path: "addUser", component: editUser},
                            {path: "updateUser/:id", component: editUser}
                        ]
                    }, {
                        path: "app",
                        components: {default: appIndex, menubar: menubar},
                        children: [
                            {path: "", component: appList},
                            {path: "appList", component: appList},
                            {path: "appInfo/:id", component: appInfo},
                            {path: "addApp", component: editApp},
                            {path: "updateApp/:id", component: editApp}
                        ]
                    }, {
                        path: "email",
                        components: {default: emailIndex, menubar: menubar},
                        children: [
                            {path: "", component: emailConfig}
                        ]
                    }
                ]
            }
        ]
    }
];
