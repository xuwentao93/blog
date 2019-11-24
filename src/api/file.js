import request from '@/utils/request'

export const save = data => request.post('/save', data) // 文章保存.

export const upload = data => request.post('/upload', data) // 文章上传.

export const readEssay = data => request.get('/readEssay', { params: data }) // 读取文章.

export const readNewest = data => request.get('/readNewest', { params: data }) // 单条最新消息读取.

export const readSave = data => request.post('/readSave', data) // 读取用户保存的日记或者文章.
