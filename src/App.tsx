import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import Create from './pages/Create/Create'
import Notes from './pages/Notes/Notes'
import Layout from './hoc/Layout/Layout'
import theme from './theme/themeSettings'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
