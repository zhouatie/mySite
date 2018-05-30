<template>
  <div class="we-header">
    <el-button @click="handleLogout">退出登录</el-button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),
    handleLogout() {
      this.logout().then(() => {
        this.$message.success('退出登录成功');
      })
    }
  }
}
</script>
<style lang="less">
</style>
