import { useState, useEffect } from 'react'

/**
 * The useStore hook is a custom hook that prevents hydration 
 * mismatch errors when using Zustand with Next.js.
 * @external @see https://docs.pmnd.rs/zustand/integrations/persisting-store-data#usage-in-next.js
 */
const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F
  const [data, setData] = useState<F>()

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}

export default useStore