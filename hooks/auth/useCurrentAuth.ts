import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const useCurrentAuth = () => {
  const { data, isLoading, error, mutate } = useSWR('/api/auth/current', fetcher)

  return {
    data,
    isLoading,
    error,
    mutate
  }
}

export default useCurrentAuth