import request from '@/utils/request'

export const test = data => request.get('http://10.85.94.57:8004/api/bpTask/getMyTaskCount', { params: data })

