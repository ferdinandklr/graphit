/*
  This file contains the store describing the app state
    -> theme
    -> views
    -> sidebar subs
    ...
*/

import { ref, reactive } from 'vue'
import { THEMES, SIDEBAR_SUBS, VIEWS } from '@/constants'

// ---- THEMES ---- //
// define the active theme of the app
var theme = ref(ipcRenderer.sendSync('get-os-theme') === 'dark' ? THEMES.DARK : THEMES.LIGHT) // eslint-disable-line

// watch for a change of the os theme
ipcRenderer.on('os-theme-updated', (e, data) => { // eslint-disable-line
  theme.value = data === 'dark' ? THEMES.DARK : THEMES.LIGHT
})

// switch the theme of the app
function switchTheme() {
  if (theme.value === THEMES.LIGHT) {
    theme.value = THEMES.DARK
  } else if (theme.value === THEMES.DARK) {
    theme.value = THEMES.LIGHT
  }
}

// ---- VIEWS ---- //
// define all the views of the app
var views = reactive({
  views: [
    { id: VIEWS.TABLES, name: 'tables', enable: true },
    { id: VIEWS.PLOT2D, name: '2d plot', enable: true },
    { id: VIEWS.PLOT3D, name: '3d plot', enable: false },
    { id: VIEWS.FOURRIER, name: 'fourrier', enable: false },
    { id: VIEWS.CHARTS, name: 'charts', enable: false }
  ],
  active: VIEWS.TABLES
})

// ---- SIDEBAR ---- //
// define the active sidebar subs of the app
var sidebar_subs = ref(SIDEBAR_SUBS.MENU)

// ---- EXPORT ---- //
export {
  theme,
  switchTheme,
  views,
  sidebar_subs
}
