export const USER = 'user'

export const menus = [ // 首页的导航栏列表.
  {
    url: "/",
    content: "HOME",
    borderTopColor: true
  },
  {
    url: "/dictionary",
    content: "DICT",
    borderTopColor: false
  },
  {
    url: "/topic",
    content: "TOPIC",
    borderTopColor: false
  },
  {
    url: '/write',
    content: 'WRITING',
    borderTopColor: false
  }
]

export const selfMsgMenuList = [
  {
    name: '基本信息',
    to: '/selfMsg/basicMsg'
  },
  {
    name: '保存的文章',
    to: '/selfMsg/essay'
  }
]

export const essayType = [
  {
    type: 'dictionary',
    label:'日记'
  },
  {
    type: 'learn',
    label:'学习'
  },
  {
    type: 'life',
    label:'生活'
  },
  {
    type: 'game',
    label:'游戏'
  },
  {
    type: 'web',
    label:'前端动态'
  }
]
