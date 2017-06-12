<template>
    <div>
        <div class="breadcrumb-path clearfix">
            <Breadcrumb separator=">">
                <Breadcrumb-item><i class="material-icons">perm_identity</i>用户管理</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="main-cont">
            <Form ref="formValidate" label-position="right" :label-width="80" :model="formInline" :rules="ruleInline">
                <Card>
                    <p slot="title">帐号信息</p>
                    <Form-item label="帐号" prop="user">
                        <Input v-model="formInline.user" placeholder="请输入"/>
                    </Form-item>
                </Card>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                </Form-item>
            </Form>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' },
                        { type: 'string', min: 6, message: '用户名长度不能小于6位', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>