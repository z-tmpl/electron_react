import { ipcRenderer } from 'electron'

class Store {
  name = 'abc'

  setName(name: string) {
    this.name = name
  }

  async fetch(api: string) {
    return ipcRenderer.sendSync('get-branchs', api)
  }
}

export default new Store()