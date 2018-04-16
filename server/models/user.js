const db = require('../config/db')
const userModel = '../schema/users'

const jenstDb = db.jenst
const User = jenstDb.import(userModel)

const getUserById = async function (id) {
  const userInfo = await User.findOne({
    where: {
      id: id
    }
  })
  return userInfo
}

const getUserByName = async function (name) {
  const userInfo = await User.findOne({
    where: {
      user_name: name
    }
  })
  return userInfo
}
module.exports = {
  getUserById,
  getUserByName
}
