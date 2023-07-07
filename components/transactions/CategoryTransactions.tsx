import React, { Fragment } from 'react'
import { IconType } from 'react-icons'

type Props = {
  icon: IconType
  categoryGroup: CategoryGroupTranscation
}

export default function CategoryTransactions({ categoryGroup, icon }: Props) {
  const Icon = icon

  return (
    <Fragment>
      <div className='flex flex-row items-center justify-between py-4 w-full'>
        <div className='flex flex-row gap-2 items-center'>
          <div className='rounded-full p-2 bg-red-600 h-min'>
            <Icon color='white' size={20}/>
          </div>

          <div className='flex flex-col'>
            <p className='text-sm'>{categoryGroup.category.name}</p>
            <p className='text-xs text-slate-400'>
              {categoryGroup.count} Transactions
            </p>
          </div>
        </div>

        <p>
          -Rp {categoryGroup.amount.toLocaleString("id-ID")}
        </p>
      </div>

      <div className='w-full pb-4 border-y border-neutral-200'>
        {categoryGroup.transactions.map(transaction => {
          return (
            <div className='flex flex-row items-center justify-between pt-4 w-full'>
              <div className='flex flex-row gap-1 items-center'>
                <div className='rounded-full h-min w-10 p-2'>
                  <p className='text-lg'>11</p>
                </div>

                <div className='flex flex-col'>
                  <p className='text-sm'>Monday, July 2023</p>
                  <p className='text-xs text-slate-400'>
                    {transaction.account}, {transaction.note}
                  </p>
                </div>
              </div>

              <p className='text-sm'>
                -Rp {transaction.amount.toLocaleString("id-ID")}
              </p>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}