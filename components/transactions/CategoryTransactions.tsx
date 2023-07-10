import moment from 'moment'
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
          <div
            className='rounded-full p-2 h-min'
            style={{
              backgroundColor: categoryGroup.category.color
            }}
          >
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
          {categoryGroup.category.type === "income" ? "+Rp" : "-Rp"} {categoryGroup.amount.toLocaleString("id-ID")}
        </p>
      </div>

      <div className='w-full pb-4 border-y border-neutral-200'>
        {categoryGroup.transactions.map(transaction => {
          return (
            <div className='flex flex-row items-center justify-between pt-4 w-full'>
              <div className='flex flex-row gap-1 items-center'>
                <div className='rounded-full h-min w-10 p-2'>
                  <p className='text-lg'>
                    {moment(transaction.date).format("DD")}
                  </p>
                </div>

                <div className='flex flex-col'>
                  <p className='text-sm'>
                    {moment(transaction.date).format('dddd')}, {moment(transaction.date).format("MMMM yyyy")}
                  </p>
                  <p className='text-xs text-slate-400'>
                    {transaction.account}, {transaction.note}
                  </p>
                </div>
              </div>

              <p className={`text-sm ${transaction.category.type === "income" ? "text-green-600" : "text-red-600"}`}>
                {categoryGroup.category.type === "income" ? "+Rp" : "-Rp"} {transaction.amount.toLocaleString("id-ID")}
              </p>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}