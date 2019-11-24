export const USER = 'user'

export const menus = [ // 首页的导航栏列表.
  {
    url: "/",
    content: "首页"
  },
  {
    url: "/learn",
    content: "学习"
  },
  {
    url: "/dictionary",
    content: "日志"
  },
  {
    url: "/game",
    content: "游戏"
  },
  {
    url: "/web",
    content: "前端动态"
  },
  {
    url: "/life",
    content: "生活"
  },
  {
    url: '/write',
    content: '写文章'
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
