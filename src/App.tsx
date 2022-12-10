import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import Progress from "./components/Progress"
import FormContainer from "./components/Signup"
import theme from "./shared/theme"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }} height='100vh'>
        <Box sx={{ display: { xs: 'none', md: 'block' }, flex: 568 }} >
          <Progress />
        </Box>
        <Box sx={{ flex: 872 }}>
          <FormContainer />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
