import request from '@/utils/request'

export const login = data => request.post('/login', data) // 登录

export const register = data => request.post('/register', data)  // 注册

export const checkTel = data => request.get('/checkTel', { params: data }) // 验证手机号码是否被注册过

export const checkUser = data => request.get('/checkUser', { params: data }) // 验证用户名是否已存在

export const identifying = data => request.post('/identifying', data) // 手机验证码

export const registMsg = data => request.post('/registMsg', data)