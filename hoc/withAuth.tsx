import fetcher from "@/lib/fetcher";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { FC, useEffect } from "react";
import { CgSpinner } from "react-icons/cg";
import useSWR from "swr";

export default function withAuth(Component: FC<any>) {
  return function ProtectedRoute(props: any) {
    const accessToken = Cookies.get("access_token")
    const router = useRouter();
    const { data, isLoading, error, mutate } = useSWR('/api/auth/current', fetcher)

    useEffect(() => {
      if (data) {
        if (data.expired) {
          router.replace("/signin")
        } else {
          router.replace("/dashboard")
        }
      } else if (error) {
        router.replace("/signin")
      }
      
    }, [data, isLoading, error, mutate])
    
    if (isLoading || !accessToken) {
      return (
        <div className='relative mx-auto max-w-6xl h-screen'>
          <div className="center-screen flex flex-col items-center">
            <img src="/images/lawallet.png" width={100}/>
            <CgSpinner
              className="animate-spin color-primary mt-2"
              size={22}
            />
          </div>
        </div>
      )
    }

    return <Component {...props}/>
  }
}