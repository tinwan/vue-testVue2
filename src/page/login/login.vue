<template>
    <div class="login-pg">
        <Form :model="ruleForm" :rules="rules" ref="ruleForm" style="width: 400px; margin: 0 auto;">
            <Form-item prop="username">
                <Input type="text" v-model="ruleForm.username" size="large">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item prop="password">
                <Input type="password" v-model="ruleForm.password" size="large">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <Form-item style="text-align: center">
                <Button type="primary" @click="submitForm('ruleForm')" style="width: 100%;font-size: 20px;">登 录</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    username: "admin",
                    password: "Nqsky1130"
                },
                rules: {
                    username: [
                        {required: true, message: "请输入用户名", trigger: "blur"},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: "请输入密码", trigger: "blur"},
                        {min: 6, message: "长度不少于6个字符", trigger: "blur"}
                    ]
                }
            };
        },
        methods: {
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch("login/login", this.ruleForm);
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            resetForm (formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style lang="scss" style="stylesheet/scss">
    /*@import "../../style/scss/login.scss";*/
    .login-pg {
        width: 100%;
        height: 100%;
        background: url("../../assets/login-bg.jpg") no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        padding-top: 300px;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        .ivu-input-wrapper {
            border-radius: 100px;
            border: 1px solid #d9d9d9;
            height: 56px;
            background-color: rgba(255,255,255,0.2);
        }
        .ivu-input-group-append, .ivu-input-group-prepend {
            background-color: transparent;
            border: none;
            border-radius: 6px;
            color: #d9d9d9;
            font-size: 30px;
            padding-left: 16px;
        }
        .ivu-input {
            border-radius: 4px;
            color: #ffffff;
            height: 55px;
            line-height: 55px;
            border: none;
            transition: none;
            outline: none;
            background-color: transparent;
        }
        .ivu-input:focus {
            transition: none;
            outline: none;
        }
        .ivu-btn {
            border-radius: 100px;
        }
}
</style>