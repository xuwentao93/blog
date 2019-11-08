import vue from 'vue'
import router from 'vue-router'

vue.use(router)

export default new router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'main',
    component: () => import('@/views/main')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/components/test/learnComponents/father')
  },
  ]
})