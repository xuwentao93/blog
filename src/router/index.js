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
        path: '/container',
        name: 'container',
        redirect: '/home',
        component: () => import('@/views/home'), // 主页面, 包含轮播图和文章筛选.
        children: [
          {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/childView')
          },
          {
            path: '/dictionary',
            name: 'dictionary',
            component: () => import('@/views/dictionary')
          },
          {
            path: '/article/:id/:id2/:id3', // 3个id 分别对应用户名, 类型, 文章名字.
            name: 'readArticle',
            component: () => import('@/views/readArticle')
          },
        ]
      },
      {
        path: '/write',
        name: 'write',
        component: () => import('@/views/write')
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
            path: '/selfMsg/article',
            name: 'selfMsgArticle',
            component: () => import('@/views/selfMsg/childView/article')
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
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404')
  },
  ]
})