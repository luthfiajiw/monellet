import { AxiosResponse } from "axios"
import useAccountState from "./states/useAccountState"
import { axios } from "@/lib/request"
import toast from "react-hot-toast"

const useAccount = (id?: string) => {
  const path = id ? `/api/accounts/${id}` : '/api/accounts'
  const {
    loadingSave, setLoadingSave
  } = useAccountState()

  async function onCreate(body: FormAccount) {
    try {
      setLoadingSave(true)

      const res: AxiosResponse = await axios.post(path, body)

      setLoadingSave(false)
      toast.success("New Acount Created")
      window.account_modal.close()
    } catch (error) {
      throw(error)
    }
  }

  return {
    loadingSave,
    onCreate
  }
}

export default useAccount