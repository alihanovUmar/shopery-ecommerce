import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { instance } from './apiRequest'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const getUser = async () => {
  const token = localStorage.getItem('token')
  const res = await instance.get('users')
  if (res.status == 200) {
    const filteredUser = res.data.filter((user) => user.token === token)

    if (filteredUser.length > 0) {
      return filteredUser[0]
    } else {
      console.log('User not found')
      return null
    }
  } else {
    console.log('Failed to getting user')
  }
  return token
}