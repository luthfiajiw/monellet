import React, { ReactNode } from 'react'

type Props = {
  title: string
  className?: string
  children: ReactNode
}

export default function Card({ title, className, children }: Props) {
  return (
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
      <p className="text-lg pb-2 mb-3 border-b border-neutral-200 w-full">
        {title}
      </p>
      {children}
    </div>
  )
}