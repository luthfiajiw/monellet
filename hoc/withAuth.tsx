import Loading from "@/components/layouts/Loading";
import { fetcher } from "@/lib/request";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { FC, useEffect } from "react";
import useSWR from "swr";

export default function withAuth(Component: FC<any>) {
  return function ProtectedRoute(props: any) {
    const accessToken = Cookies.get("access_token")
    const router = useRouter();
    const { data, isLoading, error, mutate } = useSWR('/api/auth/session', fetcher)

    useEffect(() => {
      if (error) {
        router.replace("/signin")
      } else if (data && data?.expired) {
        router.replace("/signin")
      }
      
    }, [data, isLoading, error, mutate])
    
    if (isLoading || !accessToken) {
      return <Loading />
    }

    return <Component {...props}/>
  }
}