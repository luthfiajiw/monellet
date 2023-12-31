import React from 'react'
import { BsCreditCardFill, BsPlusLg } from "react-icons/bs";
import { FaCoins } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import AccountModal from '../account/AccountModal';

type Props = {}

export default function AccountCards({}: Props) {
  const accounts = [
    {
      "category": "cash",
      "name": "Dompet",
      "balance": 350000,
      "color": "bg-amber-400",
      "hover_color": "hover:bg-amber-400",
    },
    {
      "category": "bank",
      "name": "BCA",
      "balance": 3000000,
      "color": "bg-sky-700",
      "hover_color": "hover:bg-sky-700",
    },
    {
      "category": "investment",
      "name": "Dana Syariah",
      "balance": 12000000,
      "color": "bg-lime-600",
      "hover_color": "hover:bg-lime-600",
    },
  ]

  function handleIcon(category: string) {
    switch (category) {
      case "bank":
        return <BsCreditCardFill color="white"/>
      case "cash":
        return <FaCoins color="white" />
      case "investment":
        return <SlGraph color="white" />
      default:
        break;
    }
  }

  return (
    <div className="
      w-full
      px-4
      rounded-b-lg
      flex flex-col gap-2
    ">
      <p className="text-lg w-full font-bold">
        Accounts
      </p>
      <div className="grid grid-cols-2 gap-3">
        {accounts.map(account => {

          return (
            <div
              className={`
                p-3 bg-white rounded-lg flex flex-col
                gap-2 items-start justify-center
                shadow-md shadow-neutral-200
                cursor-pointer hover:bg-slate-50
            `}>
              <div className="flex flex-row gap-2 items-center">
                <div className={`p-1 rounded-md ${account.color}`}>
                  {handleIcon(account.category)}
                </div>
                <p className="text-sm lg:text-base">{account.name}</p>
              </div>
              <p className="text-zinc-900 lg:text-xl">
                <span className="font-bold">{account.balance.toLocaleString("id-ID")}</span> IDR
              </p>
            </div>
          )
        })}
        <div
          onClick={() => window.account_modal.showModal()}
          className="
            p-3 bg-white rounded-lg flex flex-col
            items-center justify-center gap-1 cursor-pointer
            bg-opacity-40 shadow-md shadow-neutral-200
            hover:bg-slate-50
          "
        >
          <div className="p-2 rounded-full bg-sky-500">
            <BsPlusLg className="text-white" />
          </div>
          <p className="text-zinc-900" >
            Add Account
          </p>
        </div>
      </div>
      <AccountModal />
    </div>
  )
}