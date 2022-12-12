import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import Progress from "./components/Progress"
import FormContainer from "./components/FormContainer"
import theme from "./shared/theme"
import { useState } from "react"


function App() {
  const [step, setStep] = useState<number>(0)
  const [stepsAmount, setStepsAmount] = useState(3)

  const [stepsStatus, setStepsStatus] = useState(new Array(stepsAmount).fill(false))

  const isLastStep = () => step === stepsAmount - 1
  const isFirstStep = () => step === 0

  const isStepCompleted = () => stepsStatus[step]

  const handleNext = () => {
    setStep((prevStep: number) => {
      setStepsStatus(prev => {
        const array = [...prev]
        array[prevStep] = true
        return array
      })
      return prevStep + 1
    })
  }

  const handleBack = () => {
    setStep((prevStep) => prevStep !== 0 ? prevStep - 1 : 0)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }} height='100vh'>
        <Box sx={{ display: { xs: 'none', md: 'block' }, flex: 568 }} >
          <Progress
            step={step}
            isStepCompleted={isStepCompleted}
            isLastStep={isLastStep}
            handleNext={handleNext}
            handleBack={handleBack}
            isFirstStep={isFirstStep}
          />
        </Box>
        <Box sx={{ flex: 872 }}>
          <FormContainer step={step} handleNext={handleNext} handleBack={handleBack} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
