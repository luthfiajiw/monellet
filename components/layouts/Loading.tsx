import React from 'react'
import { CgSpinner } from 'react-icons/cg'

export default function Loading() {
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
