import { create } from 'zustand';

interface AuthStore {
  loading: boolean
  setLoading: (value: boolean) => void
}

const useAuthState = create<AuthStore>((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value })
}))

export default useAuthState