import Axios, { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie"

const axios = Axios.create()

axios.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  const accessToken = Cookies.get('access_token')
  req.headers.Authorization = accessToken

  return req
})

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export {
  axios,
  fetcher
}