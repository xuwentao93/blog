import request from '@/utils/request'

export const login = data => request.post('/login', data)

export const register = data => request.post('/register', data)

export const test = data => request.post('/signin', data)

export const checkTel = data => request.get('/checkTel', { params: data })

export const checkUser = data => request.get('/checkUser', { params: data })

export const identifying = data => request.post('/identifying', data)

export const registMsg = data => request.post('/registMsg', data)