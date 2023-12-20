import React, { useEffect, useState } from 'react'
import { BsCreditCardFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import Input from '../forms/Input';
import Select from '../forms/Select';
import useAccountTypes from '@/hooks/account_type/useAccountTypes';
import { Controller, useForm } from 'react-hook-form';
import ColorBox from '../forms/ColorBox';

const AccountModal = () => {
  const [selected, setSelected] = useState<AccountType>()
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      balance: '0',
      color: undefined,
      type: undefined
    }
  })
  const { accountTypes, loadingFetch, onGet } = useAccountTypes()

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
        <form onSubmit={handleSubmit(data => {
          console.log(data);
        })}>
          <Input
            label='Name'
            type='text'
            placeholder='e.g. E-Wallet'
            register={register("name", { required: "Name is required" })}
            error={errors.name}
          />
          <Input
            label='Initial Balance'
            type='number'
            register={register('balance', { required: "Balance is required" })}
            error={errors.balance}
          />
          <Controller
            name='type'
            control={control}
            rules={{
              required: "Select an account type",
            }}
            render={({ field: { onChange, value } }) => (
              <Select<AccountType>
                label='Type'
                isLoading={loadingFetch}
                value={value}
                options={accountTypes}
                error={errors.type}
                onChange={onChange}
                onClick={onGet}
                option={(type, isActive, isSelected) => (
                  <>
                    {handleIcon(type.icon, isActive)}
                    <span
                      className={`ml-3 block truncate ${isSelected ? 'font-semibold' : 'font-normal'}`}
                    >
                      {type.name}
                    </span>
                  </>
                )}
                selected={(selected) => (
                  <span className='flex items-center'>
                    {handleIcon(selected.icon)}  
                    <span className="ml-3 block truncate">{selected.name}</span>
                  </span>
                )}
              />
            )}
          />
          <Controller
            name='color'
            control={control}
            rules={{
              required: "Select a color",
            }}
            render={({ field: { onChange, value } }) => (
              <div className='mt-4'>
                <ColorBox
                  value={value}
                  onChange={onChange}
                  error={errors.color}
                />
              </div>
            )}
          />
          
          <div className="modal-action">
            <button
              className="btn"
              type='reset'
              onClick={() => {
                reset()
                window.account_type_modal.close()
              }}
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
        </form>
      </div>
    </dialog>
  )
}

export default AccountModal