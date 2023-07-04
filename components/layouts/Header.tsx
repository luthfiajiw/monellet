import React from 'react'

type Props = {
  label: string
}

export default function Header({ label }: Props) {
  return (
    <div className="
      py-3 px-3
      sticky top-0
      backdrop-blur-sm bg-neutral-100 bg-opacity-80"
    >
      <h1 className="text-xl font-semibold">
        {label}
      </h1>
    </div>
  )
}