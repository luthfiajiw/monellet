import fetcher from "@/lib/fetcher"
import useSWR from "swr"

const useAccountTypes = (id?: string) => {
  const path = id ? `/api/account-types/${id}` : '/api/account-types'
  const { data, isLoading} = useSWR(path, fetcher)

  return {
    data,
    isLoading
  }
}

export default useAccountTypes