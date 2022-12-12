import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import Progress from "./components/Progress"
import FormContainer from "./components/FormContainer"
import theme from "./shared/theme"
import { useState } from "react"
import Main from "./pages/Main"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Completed from "./pages/Completed"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/completed',
    element: <Completed />
  }
])

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
