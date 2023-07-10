import React, { ReactNode } from 'react'

type Props = {
  title?: string
  className?: string
  children: ReactNode
}

export default function Card({ title, className, children }: Props) {
  return (
    <div className='flex flex-col gap-2'>
      <p className="text-lg w-full mx-4 font-bold">
        {title}
      </p>
      <div className={`
        py-2
        px-4
        w-inherit
        mr-4 ml-4
        bg-white
        rounded-lg
        shadow-md shadow-neutral-200
        flex flex-col items-start
        ${className}
      `}>
        {children}
      </div>
    </div>
  )
}