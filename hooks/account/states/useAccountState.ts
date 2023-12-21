import { create } from "zustand"

interface AccountStore {
  loadingFetch: boolean
  setLoadingFetch: (value: boolean) => void
  loadingSave: boolean
  setLoadingSave: (value: boolean) => void
  account: Account[]
}

const useAccountState = create<AccountStore>((set) => ({
  loadingFetch: false,
  setLoadingFetch: (value) => set({ loadingFetch: value }),
  loadingSave: false,
  setLoadingSave: (value) => set({ loadingSave: value }),
  account: []
}))

export default useAccountState