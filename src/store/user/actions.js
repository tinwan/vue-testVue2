/**
 * Created by tianyun on 2017/6/6.
 */
import axios from "axios";
import util from "../../common/util";

export default {
    getUserList({ commit, state, rootState }, params) {
        axios.get("/admin/accounts" + util.createQueryString(params)).then(
            (response) => {
                commit("GET_USERS_SUCCESS", {
                    response
                });
            }
        );
    }
};