interface AccountType {
  id: string
  name: string
  icon: string
  createdAt?: string
  updatedAt?: string
}

interface AccountTypesResponse {
  message: string
  data: AccountTypesData
}

interface AccountTypesData {
  count: number
  page_context: PageContext,
  result: AccountType[]
}