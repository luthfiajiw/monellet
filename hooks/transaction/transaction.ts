interface Transaction {
  date: string
  account: string
  note: string
  amount: number
  category: TransactionCategory
}

interface TransactionCategory {
  type: "expense" | "income" | "debt"
  icon: string
  name: string
  color: string
}

interface CategoryGroupTranscation {
  count: number
  amount: number
  category: TransactionCategory
  transactions: Transaction[]
}