<template>
  <div>
    <NavBar></NavBar>
    <div class="content">
        <body id="poster">
    <el-form class="login-container" label-position="left"
             label-width="0px" :model="ruleForm" :rules="rules" ref="ruleForm">
      <h3 class="login_title">Blog Login</h3>
      <el-form-item>
        <el-input type="text" v-model="ruleForm.username"
                  auto-complete="off" placeholder="Username Here！"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="ruleForm.password"
                  auto-complete="off" placeholder="Password Here！"></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="submitForm('ruleForm')">Login</el-button>
      </el-form-item>
    </el-form>
  </body>
    </div>
  </div>

</template>

<script>
    import NavBar from "../components/NavBar";

  export default {
    name: 'Login',
    components: {NavBar},
    data () {
      return {
         ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入用户密码', trigger: 'change'}
                    ]
                }                
      }
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
    }
</script>

<style>
  #poster {
    background:url("../assets/10197.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    /*
    margin: 70px auto;
    */
    margin: auto;
    width: 350px;
    padding:35px 35px 15px 35px;
    background: #fff;
    border: 1px solid 	#eaeaea;
    box-shadow: 0 0 25px 	#cac6c6;
    transform: translate(52.5%,60%);
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>

