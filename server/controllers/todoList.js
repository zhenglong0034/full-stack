const todolist = require('../models/todoList')

const getTodolist = async function () {
  const id = this.params.id
  const result = await todolist.getTodolistById(id)
  console.log('==========', result)
  this.body = result
}

const createTodolist = async function () {
  const data = this.request.body
  const result = await todolist.createTodolist(data)
  this.body = {
    success: result
  }
}

const removeTodolist = async function () {
  const id = this.params.id
  const userId = this.params.userId
  const result = await todolist.removeTodolist(id, userId)
  this.body = {
    success: result
  }
}
module.exports = {
  getTodolist,
  createTodolist,
  removeTodolist
}
