import { CssBaseline, ThemeProvider } from '@mui/material'
import { canchaAzul } from './themes/canchaAzul'
import Layout from './components/Layout'

function App() {
  return (
    <ThemeProvider theme={canchaAzul}>
      <CssBaseline />
      <Layout>
        <h1>Hola Mundo!!</h1>
      </Layout>
    </ThemeProvider>
  )
}

export default App
