import axios from 'axios'
import { config } from './Config'

export async function login(email, password) {
  try {
    const url = `${config.server}/user/login`

    // create body
    const body = { email, password }

    const response = await axios.post(url, body)

    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
    return { status: 'error', error: ex.response?.data?.error || ex.message }
  }
}

export async function register(firstName, lastName, email, phone,DateOfBirth, password) {
  try {
    const url = `${config.server}/user/register`

    // create body
    const body = { firstName, lastName, email, phone,DateOfBirth, password }

    const response = await axios.post(url, body)

    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
    return { status: 'error', error: ex.response?.data?.error || ex.message }
  }
}
