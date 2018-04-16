<template>
 <el-row class="content">
   <el-col :xs="24" :sm="{span: 6,offset: 9}">
    <span>
      登录
    </span>
    <el-row>
      <el-input
        v-model="account"
        placeholder="账号"
        type="text">
      </el-input>
      <el-input
        v-model="password"
        placeholder="密码"
        type="password">
      </el-input>
      <el-button type="primary" @click="loginToDo">登录</el-button>
    </el-row>
   </el-col>
 </el-row>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      loginToDo () {
        let obj = {
          name: this.account,
          password: this.password
        }
        this.$http.post('/auth/user', obj).then(res => {
          if (res.data.success) {
            sessionStorage.setItem('demo-token', res.data.token)
            this.$message({type: 'success', message: '登录成功'})
            this.$router.push('/todo')
          } else {
            this.$message({type: 'error', message: res.data.info})
            sessionStorage.setItem('demo-token', null)
          }
        }).then((err) => {
          this.$message({type: 'error', message: err.data.info})
          sessionStorage.setItem('demo-token', null)
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .el-row.content
    padding 16px
  .title
    font-size 28px
  .el-input
    margin 12px 0
  .el-button
    width 100%
    margin-top 12px
</style>
