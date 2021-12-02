<
el - main >
    <
    el - form: model = "ruleForm": rules = "rules"
ref = "ruleForm"
class = "demo-ruleForm" >
    <
    el - form - item label = "用户名"
prop = "username" >
    <
    el - input v - model = "ruleForm.username" > < /el-input> <
    /el-form-item> <
    el - form - item label = "用户密码"
prop = "password" >
    <
    el - input tpye = "password"
v - model = "ruleForm.password" > < /el-input> <
    /el-form-item> <
    el - form - item >
    <
    el - button type = "primary"
@click = "submitForm('ruleForm')" > 登录 < /el-button> <
    el - button @click = "resetForm('ruleForm')" > 重置 < /el-button> <
    /template>

<
script >
    export default {
        data() {
            return {
                ruleForm: {
                    username: 'hewenqi',
                    password: '111111'
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入用户密码', trigger: 'change' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this
                        this.$axios.post("/login", this.ruleForm).then(res => {
                            const jwt = res.headers['authorization']
                            const userInfo = res.data.data
                            console.log(userInfo);
                            _this.$store.commit("SET_TOKEN", jwt)
                            _this.$store.commit("SET_USERINFO", userInfo)
                            console.log(_this.$store.getters.getUser);
                            _this.$router.push("/blogs")
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    } <
    /script> <
    style >
    .el - header, .el - footer {
        background - color: #B3C0D1;
        color: #333;

        text-align: center;

        line-height: 60px;

    }



    .el-aside {

        background-color: yellow;

        color: yellow;

        text-align: center;

        line-height: 200px;

    }



    .el-main {

        /*background-color: # E9EEF3; * /
        color: yellow;
        text - align: center;
        line - height: 160 px;
    }

body > .el - container {
    margin - bottom: 40 px;
}

.el - container: nth - child(5).el - aside,
    .el - container: nth - child(6).el - aside {
        line - height: 260 px;
    }

.el - container: nth - child(7).el - aside {
    line - height: 320 px;
}

.logo {
    height: 70 % ;
    margin - top: 10 px;
}

.demo - ruleForm {
        max - width: 500 px;
        margin: 0 auto;
    } <
    /style>