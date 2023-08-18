'use client'

import React from 'react'
import { TfiMoreAlt, TfiMore } from "react-icons/tfi";
import { 
  MdDashboard, MdOutlineDashboard,
  MdOutlineReceiptLong, MdReceiptLong,
  MdMonetizationOn, MdOutlineMonetizationOn, 
  MdAssessment, MdOutlineAssessment, MdOutlineLogout } from "react-icons/md";
import SidebarItem from './SidebarItem';
import { usePathname, useRouter } from 'next/navigation';
import useSignOut from '@/hooks/auth/useSignOut';

export default function Sidebar() {
  const signOut = useSignOut()
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
    <aside className="hidden lg:flex flex-col justify-between bg-white h-screen">
      <div>
        <div className='py-3 ml-3'>
          <img
            width={35}
            className='mb-2'
            src="/images/lawallet.png"
            alt="lawallet logo"
          />
        </div>
        <ul>
          {items.map(item => {
            return <SidebarItem 
              label={item.label}
              icon={item.icon}
              activeIcon={item.activeIcon}
              isActive={item.href === pathName}
              onClick={() => router.push(item.href)}
            />
          })}
        </ul>
      </div>

      <div
        onClick={signOut.onSubmit}
        className='flex flex-row tex items-center justify-between ml-2 mr-2 my-4 rounded-full hover:cursor-pointer hover:bg-neutral-100 py-2 px-3'
      >
          <p className='text-error'>
            Logout
          </p>
        <MdOutlineLogout className='text-error' />
      </div>
    </aside>
  )
}