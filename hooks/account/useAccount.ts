import useAccountState from "./states/useAccountState"

const useAccount = () => {
  const {
    loadingSave, setLoadingSave
  } = useAccountState()

  async function onCreate(body: FormAccount) {
    
  }

  return {
    loadingSave
  }
}

export default useAccount