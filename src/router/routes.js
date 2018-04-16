import index from './index.vue'
import login from '../views/login.vue'
import todo from '../views/todo.vue'

export default {
  path: '',
  component: index,
  children: [
    {
      path: 'login',
      component: login
    },
    {
      path: 'todo',
      component: todo
    }
  ]
}
