import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  label: string
  href: string
  isActive?: boolean
  icon: IconType
  activeIcon: IconType
  onClick: () => void
}

export default function SidebarItem({
  label,
  href,
  isActive,
  icon,
  activeIcon,
  onClick
}: Props) {
  const Icon = icon
  const ActiveIcon = activeIcon

  return (
    <div
      onClick={onClick}
      className='
        flex
        flex-row
        items-center
        w-min
        py-3
        pl-4
        pr-6
        mr-4
        rounded-full
        cursor-pointer
        hover:bg-slate-100
      '
    >
      {isActive ? (
        <ActiveIcon size={24}/>
      ) : (
        <Icon size={24} className='text-neutral-400'/>
      )}
      <p className={`text-xl ml-4 ${isActive ? "font-semibold" : "font-light text-neutral-400"}`}>
        {label}
      </p>
    </div>
  )
}