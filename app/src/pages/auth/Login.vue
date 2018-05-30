<template>
  <div class="page-login">
    <div class="form-wrap">
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        class="form"
        label-width="100px">
        <el-form-item label="用户名" v-if="!isLogin" prop="account">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="account">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" v-if="!isLogin" prop="account">
          <el-input type="password" v-model="form.repassword"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="handleSubmit">登录</el-button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        username: '',
        account: '',
        password: '',
        repassword: ''
      },
      rules: {
        account: [{required: true, message: '账号不能为空', trigger: 'change'}],
        password: [{required: true, message: '密码不能为空', trigger: 'change'}]
      }
    }
  },
  computed: {
    isLogin() {
      return this.$route.path === '/login'
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
      register: 'auth/register'
    }),
    handleSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          const {password, account} = this.form;
          this.login({
            account,
            password
          }).then(() => {
            this.$message.success('登录成功!');
            this.$router.replace('/home');
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>
<style lang="less">
.page-login {
  height: 100%;
  .form-wrap {
    width: 300px;
    background: #eee;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 20px 20px;
    padding-top: 34px;
    text-align: center;
  }
}
</style>
