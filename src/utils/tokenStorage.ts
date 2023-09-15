const storagePrefix = 'artworkpage_react_'

const tokenStorage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string)
  },

  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token))
  },

  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`)
  }
}

export default tokenStorage
