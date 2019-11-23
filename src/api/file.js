import request from '@/utils/request'

export const save = data => request.post('/save', data) // 文章保存

export const upload = data => request.post('/upload', data) // 文章上传

export const readDict = data => request.get('/readDict', { params : data }) // 读取日记

export const readNewDict = () => request.get('./readNewDict') // 首页日记读取