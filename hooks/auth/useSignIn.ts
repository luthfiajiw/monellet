import axios, { AxiosResponse } from "axios";
import useAuthState from "./states/useAuthState"
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const useSignIn = () => {
  const router = useRouter()
  const authState = useAuthState()

  async function onSubmit(password: string) {
    try {
      authState.setLoading(true)
      toast.loading("Signing In", { id: "loading" })

      const res: AxiosResponse = await axios.post("/api/auth/signin", {
        email: "ajojing@mail.com",
        password: password
      })

      Cookies.set("access_token", `Bearer ${res.data.access_token}`)
      toast.dismiss("loading")
      toast.success("Signed In")
      authState.setLoading(false)
      router.replace("/dashboard")
    } catch (error: any) {
      const message = error.response.data.error.message

      toast.dismiss("loading")
      toast.error(message)
      authState.setLoading(false)
    }
  }

  return {
    onSubmit,
    loading: authState.loading
  }
}

export default useSignIn