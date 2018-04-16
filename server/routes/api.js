const todolist = require('../controllers/todoList')
const router = require('koa-router')()

router.get('/todolist/:id', todolist.getTodolist)
router.post('/todolist', todolist.createTodolist)

module.exports = router
