import request from '@/utils/request'

export const save = data => request.post('/save', data) // 文章保存

export const handIn = data => request.post('/handIn', data) // 文章上传