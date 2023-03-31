import axios, { AxiosError, RawAxiosResponseHeaders, AxiosResponseHeaders } from 'axios'
import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'

const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 30000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers
  return config
}, (error: AxiosError) => {
  return Promise.reject(error)
})

service.interceptors.response.use((response: AxiosResponse) => {
  if (response.data.code == 0) {
    return response.data.data
  } else {
    // 处理错误
  }
}, (error: AxiosError) => {
  // 根据 status 处理错误
  return Promise.reject(error)
})

export const http = {
  get<T=any>(url: string, config?: AxiosRequestConfig) : Promise<T> {
    return service.get(url, config)
  },
  post<T=any>(url: string, data?: object, config?: AxiosRequestConfig) :Promise<T> {
    return service.post(url, data, config)
  },
  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },
  delete<T=any>(url: string, config?: AxiosRequestConfig) : Promise<T> {
    return service.delete(url, config)
  }
}
