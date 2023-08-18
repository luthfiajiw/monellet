import { useRouter } from "next/navigation"
import Cookies from "js-cookie";

const useSignOut = () => {
  const router = useRouter()

  function onSubmit() {
    Cookies.remove("access_token")
    router.push("/signin")
  }

  return {
    onSubmit
  }
}

export default useSignOut