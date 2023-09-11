import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  label: string
  isActive?: boolean
  icon: IconType
  activeIcon: IconType
  onClick: () => void
}

export default function SidebarItem({
  label,
  isActive,
  icon,
  activeIcon,
  onClick
}: Props) {
  const Icon = icon
  const ActiveIcon = activeIcon

  return (
    <li
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
        ml-3
        my-2
        rounded-full
        cursor-pointer
        hover:bg-neutral-100
      '
    >
      {isActive ? (
        <ActiveIcon size={22}/>
      ) : (
        <Icon size={22} className='text-neutral-400'/>
      )}
      <p className={`text-lg ml-4 ${isActive ? "font-semibold" : "font-light text-neutral-400"}`}>
        {label}
      </p>
    </li>
  )
}