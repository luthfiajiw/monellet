import { AxiosResponse } from "axios"
import useAccountState from "./states/useAccountState"
import { axios, fetcher } from "@/lib/request"
import toast from "react-hot-toast"
import useSWR from "swr"

const useAccounts = (id?: string) => {
  const path = id ? `/api/accounts/${id}` : '/api/accounts'
  const { loadingSave, setLoadingSave, loadingFetch, setLoadingFetch } = useAccountState()
  const { data, error, isLoading, mutate } = useSWR(path, fetcher)

  async function onCreate(body: FormAccount) {
    try {
      setLoadingSave(true)

      const res: AxiosResponse = await axios.post(path, body)

      setLoadingSave(false)
      toast.success("New Acount Created")
    } catch (error) {
      throw(error)
    }
  }

  return {
    loadingSave,
    onCreate,
  }
}

export default useAccounts