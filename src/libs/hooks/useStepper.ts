import { useState } from "react"

type UseStepperOptions = {
  initialStep?: number
}

export function useStepper(options: UseStepperOptions = {}) {
  const { initialStep = 0 } = options
  const [activeStep, setActiveStep] = useState(initialStep)

  const nextStep = () => {
    setActiveStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setActiveStep((prev) => prev - 1)
  }

  const reset = () => {
    setActiveStep(initialStep)
  }

  const setStep = (step: number) => {
    setActiveStep(step)
  }

  return { nextStep, prevStep, reset, setStep, activeStep }
}
