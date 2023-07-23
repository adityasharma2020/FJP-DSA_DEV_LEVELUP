export interface localStorage {
  cities?: string[]
}

export type localStoragekeys = keyof localStorage

export function setStorageCities(cities: string[]): Promise<void> {
  const vals: localStorage = {
    cities,
  }
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve()
    })
  })
}

export function getStorageCities(): Promise<string[]> {
  const keys: localStoragekeys[] = ['cities']

  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (res: localStorage) => {
      resolve(res.cities ?? [])
    })
  })
}
