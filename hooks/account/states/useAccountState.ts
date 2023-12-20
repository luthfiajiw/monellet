import { create } from "zustand"

interface AccountStore {
  loading: boolean
  setLoading: (value: boolean) => void
}

const useAccountState = create<AccountStore>((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value })
}))

export default useAccountState