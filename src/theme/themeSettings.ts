import { purple } from '@mui/material/colors'
import { createTheme } from '@mui/material'

const CONSTANTS = {
  drawer: {
    width: 240,
  },
}

export default createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  layout: {
    appbar: {
      width: `calc(100% - ${CONSTANTS.drawer.width}px)`,
    },
    drawer: {
      activeButtonColor: '#f4f4f4',
      heading: { padding: '15px', textAlign: 'left' },
      width: CONSTANTS.drawer.width,
    },
    wrapperHeight: '100vh',
  },

  pages: {
    background: '#f9f9f9',
    notes: { title: { margin: '15px 0 15px 0' } },
    create: {
      title: { margin: '15px 0 0 0' },
      form: { textArea: { rows: 4 } },
    },
  },
})
