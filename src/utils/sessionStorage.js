import { USER } from '@/config'

export const getUser = () => sessionStorage.getItem(USER) // user

export const setUser = user => sessionStorage.setItem(USER, user)

export const removeUser = () => sessionStorage.removeItem(USER)
