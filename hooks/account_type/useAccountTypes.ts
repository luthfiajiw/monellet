import fetcher from "@/lib/fetcher"
import useSWR from "swr"
import useAccountTypeState from "./states/useAccountTypeState"
import axios, { AxiosResponse } from "axios"

const useAccountTypes = (id?: string) => {
  const {
    loadingFetch,
    accountTypes,
    setLoadingFetch,
    setAccountTypes
  } = useAccountTypeState()
  const path = id ? `/api/account-types/${id}` : '/api/account-types'
  
  async function onGet() {
    try {
      setLoadingFetch(true)
      const res: AxiosResponse = await fetcher(path)

      setLoadingFetch(false)
      setAccountTypes(res.data.result)
    } catch (error) {
      setLoadingFetch(false)
    }
  }

  return {
    loadingFetch,
    accountTypes,
    onGet
  }
}

export default useAccountTypes