import { setStorageCities } from '../utils/storage'
chrome.runtime.onInstalled.addListener(() => {
  setStorageCities(['New delhi'])
})
