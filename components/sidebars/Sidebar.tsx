'use client'

import React from 'react'
import { TfiMoreAlt, TfiMore } from "react-icons/tfi";
import { 
  MdDashboard, MdOutlineDashboard,
  MdOutlineReceiptLong, MdReceiptLong,
  MdMonetizationOn, MdOutlineMonetizationOn, 
  MdAssessment, MdOutlineAssessment } from "react-icons/md";
import SidebarItem from './SidebarItem';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar() {
  const pathName = usePathname()
  const router = useRouter()

  const items = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: MdOutlineDashboard,
      activeIcon: MdDashboard,
    },
    {
      label: "Transactions",
      href: "/transactions",
      icon: MdOutlineReceiptLong,
      activeIcon: MdReceiptLong,
    },
    {
      label: "Budgets",
      href: "/budgets",
      icon: MdOutlineMonetizationOn,
      activeIcon: MdMonetizationOn,
    },
    {
      label: "Statistics",
      href: "/statistics",
      icon: MdOutlineAssessment,
      activeIcon: MdAssessment,
    },
    {
      label: "More",
      href: "/more",
      icon: TfiMore,
      activeIcon: TfiMoreAlt,
    },
  ]

  return (
    <aside className="hidden lg:flex flex-col bg-white h-screen">
      <div className='py-3 flex flex-row items-center ml-[1.1rem]'>
        <img
          width={35}
          className='mb-2'
          src="/images/lawallet.png"
          alt="lawallet logo"
        />
      </div>
      {items.map(item => {
        return <SidebarItem 
          label={item.label}
          href={item.href}
          icon={item.icon}
          activeIcon={item.activeIcon}
          isActive={item.href === pathName}
          onClick={() => router.push(item.href)}
        />
      })}
    </aside>
  )
}