import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { instance } from './apiRequest'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const getUser = async () => {
  try {
    const response = await fetch('/api/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch user data')
    }

    const user = await response.json()
    return user
  } catch (error) {
    console.error(error)
    return null
  }
}
