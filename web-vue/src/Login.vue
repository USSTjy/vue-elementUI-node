<template>
  <div class="ht100 wt100 overflow-y-hidden login-bg">
    <div class="login-class">
      <el-form
        :model="loginForm"
        ref="loginForm"
        :rules="loginFormRules"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="gotoHome">
          登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import API from './APIServices'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted() {},
  methods: {
    gotoHome() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          API.login(this.loginForm).then(res => {
            if (res.data.code === 401) {
              this.$message({
                showClose: true,
                message: res.data.msg,
                type: 'error'
              })
              return
            }
            if (res.data.code === 200) {
              this.$message({
                showClose: true,
                message: '登录成功',
                type: 'success',
                duration: 1000
              })
              this.$router.push({
                name: 'One'
              })
              // TODO:
              sessionStorage.setItem('menuDefault', 'one')
            }
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.login-class {
  display: flex;
  align-items: center;
  height: 100%;
  text-align: center;
  width: 380px;
  margin: 0 auto;
}
.login-bg {
  /* background: url('./assets/images/login-bg.jpg') no-repeat;
  background-size: 100% 100%; */
  background: rgb(15, 18, 53);
}
</style>
