const db = require('../config/db')
const todoModel = '../schema/list'

const jenstDb = db.jenst
const list = jenstDb.import(todoModel)

const getTodolistById = async function (id) {
  const todoList = await list.findAll({
    where: {
      user_id: id
    },
    attributes: ['id', 'content', 'status']
  })
  return todoList
}
const createTodolist = async function (data) {
  await list.create({
    user_id: data.id,
    content: data.content,
    status: data.status
  })
  return true
}
const removeTodolist = async function (id, userId) {
  await list.destroy({
    where: {
      id,
      userId
    }
  })
  return true
}
const updateTodolist = async function (id, userId, status) {
  await list.update(
    {
      status
    },
    {
      where: {
        id,
        userId
      }
    }
  )
  return true
}
module.exports = {
  getTodolistById,
  createTodolist,
  removeTodolist,
  updateTodolist
}
