const user = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const getUserInfo = async function () {
  const id = this.params.id
  const result = await user.getUserById(id)
  this.body = result
}
const postUserAuth = async function () {
  const data = this.request.body
  const userInfo = await user.getUserByName(data.name)
  console.log(userInfo.password)
  if (userInfo !== null) {
    if (!bcrypt.compareSync(data.password, userInfo.password)) {
      this.body = {
        success: false,
        info: '密码错误！'
      }
    } else {
      const userToken = {
        name: userInfo.user_name,
        id: userInfo.id
      }
      const secret = 'vue-koa-demo'
      const token = jwt.sign(userToken, secret)
      this.body = {
        success: true,
        token: token
      }
    }
  } else {
    this.body = {
      success: false,
      info: '用户不存在！'
    }
  }
}
module.exports = {
  getUserInfo,
  postUserAuth
}
