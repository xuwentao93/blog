import request from '@/utils/request'

export const test = data => request.get('http://192.168.1.125:8080/bpTask/getMyTaskCount', { params: data })
