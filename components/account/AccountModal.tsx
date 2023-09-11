import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { BsCreditCardFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";

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

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const AccountModal = () => {
  const [selected, setSelected] = useState(accountTypes[0])

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
          <div className='mb-4'>
            <label
              htmlFor="account-name"
              className='block text-sm mb-2'
            >
              Name
            </label>
            <input
              id='account-name'
              type="text"
              placeholder='e.g. Bank'
              className='
                appearance-none
                border rounded w-full p-3 leading-tight
                focus:outline-none focus:shadow-outline
                text-zinc-900 text-sm
              '
            />
          </div>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => {
              return (
                <>
                  <Listbox.Label className="block text-sm mb-2">
                    Type
                  </Listbox.Label>
                  <div className='relative'>
                    <Listbox.Button className="relative border w-full cursor-default rounded bg-white px-3 py-[0.675rem] leading-tight text-left text-gray-900 sm:text-sm focus:outline-none focus:shadow-outline">
                      <span className='flex items-center'>
                        {handleIcon(selected.icon)}
                        <span className="ml-3 block truncate">{selected.name}</span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave='transition ease-in duration-100'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <Listbox.Options
                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded bg-white py-1 text-base focus:outline-none sm:text-sm"
                      >
                        {accountTypes.map(type => {
                          return (
                            <Listbox.Option
                              key={type.id}
                              className={({ active }) => 
                                classNames(
                                  active ? 'bg-sky-500 text-white' : 'text-gray-900',
                                  'relative cursor-default select-none py-2 pl-3 pr-9'
                                )
                              }
                              value={type}
                            >
                              {({ selected, active }) => {
                                return (
                                  <>
                                    <div className="flex items-center">
                                      {handleIcon(type.icon, active)}
                                      <span
                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                      >
                                        {type.name}
                                      </span>
                                    </div>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active ? 'text-white' : 'text-sky-500',
                                          'absolute inset-y-0 right-0 flex items-center pr-4'
                                        )}
                                      >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )
                              }}
                            </Listbox.Option>
                          )
                        })}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )
            }}
          </Listbox>
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