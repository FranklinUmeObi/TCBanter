import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Specify Receiver", "Create Message", "Specify Sender"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Please enter the Initials of the person this message is intended for. Please format as 'A.B'`;
    case 1:
      return "Please enter your message for this person. Don't be shy, express your feelings xo.";
    case 2:
      return `Please enter your Initials. Please format as 'A.B'. You have to add your initials`;
    default:
      return "Something is wrong sorry";
  }
}

function getInputContent(step) {
    switch (step) {
      case 0:
        return <TextField id="outlined-basic" label="Receiver" variant="outlined" />;
      case 1:
        return <TextField id="outlined-basic" label="Message" variant="outlined" />;
      case 2:
        return <TextField id="outlined-basic" label="Sender" variant="outlined" />;
      default:
        return "Something is wrong sorry";
    }
  }

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                    <div className="formInputContainer">
                    {getInputContent(index)}
                    </div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished!</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Send Another
          </Button>
        </Paper>
      )}
    </div>
  );
}
