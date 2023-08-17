'use client'

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
  );
};

export default Page;
