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
        hover:bg-orange-50
      '
    >
      {isActive ? (
        <ActiveIcon size={24} className='color-secondary'/>
      ) : (
        <Icon size={24} className='color-primary'/>
      )}
      <p className={`text-xl ml-4 ${isActive ? "font-semibold color-secondary" : "font-normal color-primary"}`}>
        {label}
      </p>
    </div>
  )
}