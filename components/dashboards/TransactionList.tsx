import React from 'react'
import Card from '../cards/Card'
import { MdFastfood, MdDirectionsBus } from 'react-icons/md'
import CategoryTransactions from '../transactions/CategoryTransactions'

type Props = {}

export default function TransactionList({}: Props) {
  function handleIcon(icon: string) {
    switch (icon) {
      case "MdFastfood":
        return MdFastfood
      case "MdDirectionsBus":
        return MdDirectionsBus
      default:
        break;
    }
  }
  return (
    <Card title='Last Transactions'>
      {categoryTransactions.map(group => {
        return (
          <CategoryTransactions
            icon={handleIcon(group.category.icon)!}
            categoryGroup={group}
          />
        )
      })}
    </Card>
  )
}

const categoryTransactions : CategoryGroupTranscation[] = [
  {
    count: 2,
    amount: 400000,
    category: {
      icon: "MdFastfood",
      name: "Food & Beverages",
      type: "expense",
      color: "rgb(220 38 38)"
    },
    transactions: [
      {
        date: "2023-07-04",
        account: "BCA",
        note: "Gofood",
        amount: 200000,
        category: {
          icon: "MdFastfood",
          name: "Food & Beverages",
          type: "expense",
          color: "rgb(220 38 38)"
        }
      },
      {
        date: "2023-07-03",
        account: "Dompet",
        note: "Geprek",
        amount: 200000,
        category: {
          icon: "MdFastfood",
          name: "Food & Beverages",
          type: "expense",
          color: "rgb(220 38 38)"
        }
      },
    ]
  },
  {
    count: 1,
    amount: 200000,
    category: {
      icon: "MdDirectionsBus",
      name: "Transportation",
      type: "expense",
      color: "rgb(234 88 12)"
    },
    transactions: [
      {
        date: "2023-07-02",
        account: "BCA",
        note: "Flazz",
        amount: 100000,
        category: {
          icon: "MdDirectionsBus",
          name: "Transportation",
          type: "expense",
          color: "rgb(234 88 12)"
        }
      },
    ]
  },
]