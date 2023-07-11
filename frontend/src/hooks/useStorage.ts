import LocalStorage from '@/core/storage/local'
import SessionStorage from '@/core/storage/session'

export enum StorageType {
  LOCAL,
  SESSION,
}

type StorageMap = {
  [StorageType.LOCAL]: LocalStorage
  [StorageType.SESSION]: SessionStorage
}

const storages = new Map<StorageType, StorageMap[StorageType]>([
  [StorageType.LOCAL, new LocalStorage()],
  [StorageType.SESSION, new SessionStorage()],
])

const useStorage = <T extends StorageType>(type: T): StorageMap[T] => {
  const storage = storages.get(type)

  if (!storage) {
    throw new Error(`Storage can't be found.`)
  }

  return storage
}

export default useStorage
