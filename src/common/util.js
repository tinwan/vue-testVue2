let util = {
    handleInput(e) {
        var text = e.data;
        if (e.target.className.indexOf("js-freeInput") !== -1) {
            return;
        }
        if (text.search(/[&<>"']/) !== -1) {
            if (e.type === "textInput") {
                e.preventDefault();
            } else {
                e.target.value = e.target.value.replace(/[&<>"']/g, "");
            }
        }
    },
    filterDangerousChars(inputCntr) {
        var cntr = inputCntr || document.getElementById("app");
        const inputs = cntr.querySelectorAll("input[type='text'], input[type='password'], textarea");
        const len = inputs.length;
        for (let i = 0; i < len; i += 1) {
            if (navigator.userAgent.indexOf("Trident") === -1) {
                inputs[i].addEventListener("textInput", this.handleInput, false);
            } else {
                inputs[i].addEventListener("textinput", this.handleInput, false);
            }
        }
    },
    createQueryString(params) {
        var str = "?", param;
        for (param in params) {
            if (params.hasOwnProperty(param)) {
                str = str + param + "=" + encodeURIComponent(params[param]) + "&";
            }
        }
        return str.slice(0, -1);
    },
    base64Encode(str) {
        return window.btoa(unescape(encodeURIComponent(str))).replace(/\//g, "_");
    },
    errorCode: {
        login: {
            "129" : "登录失败，请稍后重试",
            "155" : "登录信息错误，请核准后重新填写",
            "160" : "登录失败，请稍后重试",
            "failed" : "登录失败，请稍后重试"
        },
        "129": "操作失败",
        "155": "填写信息有误，请核准后重新填写",
        "117": "应用名称已存在，请重新输入",
        "201": "帐号已存在",
        "202": "该邮箱已经被注册，请重新输入"
    }
};

export default util;