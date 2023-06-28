'use client'

import { useRouter } from 'next/navigation'
import { FunctionComponent, useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

const Page: FunctionComponent = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.replace("/signin")
    }, 2000);
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
