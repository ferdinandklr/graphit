/*
  This file contains the store describing the app state
    -> theme
    -> views
    -> sidebar subs
    ...
*/

import { ref, reactive } from 'vue'
import { THEMES, SIDEBAR_SUBS, MENUSUB_VIEWS } from '@/constants'

// ---- THEMES ---- //
// define the active theme of the app
var theme = ref(ipcRenderer.sendSync('get-os-theme') === 'dark' ? THEMES.DARK : THEMES.LIGHT) // eslint-disable-line

// watch for a change of the os theme
ipcRenderer.on('os-theme-updated', (e, data) => { // eslint-disable-line
  theme.value = data === 'dark' ? THEMES.DARK : THEMES.LIGHT
})

// ---- SIDEBAR ---- //
// define the active sidebar subs of the app
var sidebar_subs = ref(SIDEBAR_SUBS.MENU)

var menu_sub = reactive({
  views: [
    { id: MENUSUB_VIEWS.TABLES, name: 'tables', enable: true },
    { id: MENUSUB_VIEWS.PLOT2D, name: '2d plot', enable: true },
    { id: MENUSUB_VIEWS.PLOT3D, name: '3d plot', enable: false },
    { id: MENUSUB_VIEWS.FOURRIER, name: 'fourrier', enable: false },
    { id: MENUSUB_VIEWS.CHARTS, name: 'charts', enable: false }
  ],
  active: MENUSUB_VIEWS.TABLES
})

// ---- EXPORT ---- //
export {
  theme,
  sidebar_subs,
  menu_sub
}
