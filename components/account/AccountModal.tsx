import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { BsCreditCardFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import Input from '../forms/Input';
import Select from '../forms/Select';

const accountTypes: AccountType[] = [
  {
    id: "1",
    name: "Bank",
    icon: "BsCreditCardFill"
  },
  {
    id: "2",
    name: "Cash",
    icon: "FaCoins"
  },
  {
    id: "3",
    name: "Investment",
    icon: "SlGraph"
  },
]

const AccountModal = () => {
  const [selected, setSelected] = useState<AccountType>()

  function handleIcon(type: string, active?: boolean) {
    switch (type) {
      case "BsCreditCardFill":
        return <BsCreditCardFill className={active ? 'text-white' : 'text-zinc-900'}/>
      case "FaCoins":
        return <FaCoins className={active ? 'text-white' : 'text-zinc-900'} />
      case "SlGraph":
        return <SlGraph className={active ? 'text-white' : 'text-zinc-900'} />
      default:
        break;
    }
  }
  
  return (
    <dialog id="account_type_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-6">Add Account</h3>
        <form action="">
          <Input
            label='Name'
            type='text'
            placeholder='e.g. E-Wallet'
          />
          <Select<AccountType>
            label='Type'
            value={selected}
            options={accountTypes}
            onChange={(value) => setSelected(value)}
            option={(value, isActive, isSelected) => (
              <>
                {handleIcon(value.icon, isActive)}
                <span
                  className={`ml-3 block truncate ${isSelected ? 'font-semibold' : 'font-normal'}`}
                >
                  {value.name}
                </span>
              </>
            )}
            selected={(value) => (
              <span className='flex items-center'>
                {handleIcon(value.icon)}  
                <span className="ml-3 block truncate">{value.name}</span>
              </span>
            )}
          />
          <div className='h-32'/>
        </form>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn"
            onClick={() => window.account_type_modal.close()}
          >
            Close
          </button>
          <button
            className="btn bg-primary text-white"
            type='submit'
          >
            Save
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default AccountModal