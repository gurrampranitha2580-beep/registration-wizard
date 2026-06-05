import { useState } from "react";

import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Success from "./components/Success";

function App(){

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    dob:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  }

  const prevStep = () => {
    setStep((currentStep) => currentStep - 1);
  }

  const submitForm = () => {
    console.log("Final Registration Data:", formData);
    setStep(4);
  }

  return(
    <div className="app-container">

      {step <= 3 && (
        <div className="progress-wrapper">
          <div className="progress-text">
            Step {step} of 3
          </div>

          <div className="left-content">
            <h1>Create Your Account</h1>
            <p>
              Complete your onboarding process in three simple steps.
              Your data stays saved while moving back and forward.
            </p>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width:`${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {step === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <StepThree
          formData={formData}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      )}

      {step === 4 && <Success />}

    </div>
  )
}

export default App;