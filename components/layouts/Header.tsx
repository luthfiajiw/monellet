import React from 'react'

type Props = {
  label: string
  color?: string
  bgColor?: string
}

export default function Header({ label, color, bgColor }: Props) {
  return (
    <div className={`py-3 px-3 sticky top-0 ${bgColor ?? "backdrop-blur-sm"}`}>
      <h1 className={`
        text-xl
        font-semibold
        ${color ?? "color-secondary"}
      `}>
        {label}
      </h1>
    </div>
  )
}