'use client'

import Loading from '@/components/layouts/Loading';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { FunctionComponent, useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

const Page: FunctionComponent = () => {
  const accessToken = Cookies.get("access_token")
  const router = useRouter()

  useEffect(() => {
    if (accessToken) {
      router.replace("/dashboard")
    } else {
      router.replace("/signin")
    }
  }, [])

  return <Loading />;
};

export default Page;
