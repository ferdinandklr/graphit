import { ref } from 'vue'

// define the global state of the app
var theme = ref(ipcRenderer.sendSync('get-os-theme')) // eslint-disable-line

// watch for a change of the os theme
ipcRenderer.on('os-theme-updated', (e, data) => { // eslint-disable-line
  theme.value = data
})

export {
  theme
}
