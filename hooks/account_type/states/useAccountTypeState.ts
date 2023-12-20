import { create } from "zustand"

interface AccountTypeStore {
  loadingFetch: boolean
  accountTypes: AccountType[]
  setLoadingFetch: (value: boolean) => void
  setAccountTypes: (value: AccountType[]) => void
}

const useAccountTypeState = create<AccountTypeStore>((set) => ({
  loadingFetch: false,
  accountTypes: [],
  setLoadingFetch(value) {
    set({loadingFetch: value})
  },
  setAccountTypes(value) {
    set({accountTypes: value})
  },
}))

export default useAccountTypeState