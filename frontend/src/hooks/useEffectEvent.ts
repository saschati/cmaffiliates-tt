import { useRef } from 'react'

const useEffectEvent = <T extends (...args: any[]) => void>(callback: T): T => {
  const ref = useRef(callback)

  ref.current = callback

  return ((...args: Parameters<T>) => {
    ref.current(...args)
  }) as T
}

export default useEffectEvent
