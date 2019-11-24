import vue from 'vue'
import router from 'vue-router'

vue.use(router)

export default new router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home',
    name: 'main',
    component: () => import('@/views/main'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/dictionary',
        name: 'dictionary',
        component: () => import('@/views/dictionary')
      },
      {
        path: '/write',
        name: 'write',
        component: () => import('@/views/write')
      },
      {
        path: '/dictionary/:id',
        name: 'readDict',
        component: () => import('@/views/readDict')
      },
      {
        path: '/selfMsg',
        name: 'selfMsg',
        redirect: '/selfMsg/basicMsg',
        component: () => import('@/views/selfMsg'),
        children: [
          {
            path: '/selfMsg/basicMsg',
            name: 'basicMsg',
            component: () => import('@/views/selfMsg/childView/basicMsg')
          },
          {
            path: '/selfMsg/essay',
            name: 'selfMsgEssay',
            component: () => import('@/views/selfMsg/childView/essay')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register')
  }
  ]
})