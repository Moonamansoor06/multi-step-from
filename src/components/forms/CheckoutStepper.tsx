import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import CheckoutFrom from "./CheckoutForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
function getSteps() {
  return ["Contact Deatils", "Payment Options", "Review & Checkout"];
}
function getStepContent(step:any) {
  switch (step) {
    case 0:
      return <CheckoutFrom/>;
    case 1:
      return <PaymentForm/>;
    case 2:
      return <Review/>;
    default:
      return "unknown step";
  }
}
export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            All steps completed
            <Button variant="contained" color="primary" onClick={handleReset} style={{margin:'.2rem'}}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
<div >
              <Button disabled={activeStep === 0} variant="contained" color="primary" onClick={handleBack} style={{margin:'.2rem'}}>
                Back
              </Button>

              <Button variant="contained" color="primary" onClick={handleNext} style={{margin:'.2rem'}}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}