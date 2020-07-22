import { readonly } from 'vue'

/* ---- THEMES ---- */
const THEMES = readonly({
  DARK: 'DARK',
  LIGHT: 'LIGHT'
})

/* ---- SIDEBAR ---- */
// subs
const SIDEBAR_SUBS = readonly({
  MENU: 'MENU',
  CREATETABLE: 'CREATETABLE'
})

// menu
const VIEWS = readonly({
  TABLES: 'TABLES',
  PLOT2D: 'PLOT2D',
  PLOT3D: 'PLOT3D',
  FOURRIER: 'FOURRIER',
  CHARTS: 'CHARTS'
})

/* ---- EXPORT ---- */
export { THEMES, SIDEBAR_SUBS, VIEWS }
