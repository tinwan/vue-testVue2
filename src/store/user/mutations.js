/**
 * Created by tianyun on 2017/6/6.
 */
export default {
    ["GET_USERS_SUCCESS"](state, payload) {
        if (payload.response.data.rows) {
            state.userList = payload.response.data.rows.map(function (item) {
                return Object.assign({},item, item.accountInfo);
            });
            state.userListTotal = payload.response.data.total;
        }
    }
}
