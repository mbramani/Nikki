import { createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = import.meta.env.VITE_BASE_URL

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await fetch(`${baseUrl}/auth/register`, options)
      const data = await response.json()

      if (response.status === 201) {
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)

        return fulfillWithValue(data)
      }

      return rejectWithValue(data)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await fetch(`${baseUrl}/auth/login`, options)
      const data = await response.json()

      if (response.status === 200) {
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)

        return fulfillWithValue(data)
      }

      return rejectWithValue(data)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const setAccessToken = createAsyncThunk(
  'auth/setAccessToken',
  async ({ refreshToken }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({ refreshToken }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await fetch(`${baseUrl}/auth/token`, options)
      const data = await response.json()

      if (response.status === 200) {
        localStorage.accessToken = data.accessToken

        return fulfillWithValue(data)
      }

      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      return rejectWithValue(data)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
