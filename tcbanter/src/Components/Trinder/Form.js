import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import db from "../../Firebase";
import html2canvas from "html2canvas";

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

export default function VerticalLinearStepper() {
  const [receiver, setreceiver] = useState("");
  const [message, setmessage] = useState("");
  const [sender, setsender] = useState("");

  const [receiverSet, setreceiverSet] = useState(0);

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    const initials = /\w[.]\w/g;

    if (
      receiver.match(initials) &&
      receiver.length === 3 &&
      receiver !== "" &&
      (receiverSet !== 2 || (sender.match(initials) && sender.length === 3))
    ) {
      setreceiverSet(receiverSet + 1);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

      if (receiverSet === 2) {
        submitData();
      }
    } else alert("You Need to input initials");
  };

  function submitData() {
    let a = receiver.toUpperCase();
    let b = message;
    let c = sender.toUpperCase();
    const timestamp = Date.now(); // This would be the timestamp you want to format
    let actualTime = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(timestamp);
    databaseStuff(a, b, c, actualTime);
  }

  async function databaseStuff(rec, msg, send, time) {
    const countref = db.collection('numPosts').doc('countPosts');
    const doc = await countref.get();
    let count = doc.data().count + 1
    //console.log(count);

    db.collection("posts").add({
      index: count,
      receiver: rec,
      message: msg,
      sender: send,
      time: time,
    });
    db.collection("numPosts").doc('countPosts').update({count: count});

    // const input = document.body;
    // const input1 = document.getElementById("instaPost");
    // const input2 = document.querySelector("#test12");

    // html2canvas(input1, {
    //   useCORS: true,
    //  }).then((canvas) => {
    //   document.body.appendChild(canvas);
    //  });
    
    // html2canvas(input2).then((canvas) => {
    //   document.body.appendChild(canvas);
    // });

  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setreceiverSet(receiverSet - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setreceiverSet(receiverSet - receiverSet);
  };

  const handleInputChange1 = (e) => {
    setreceiver(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setmessage(e.target.value);
  };
  const handleInputChange3 = (e) => {
    setsender(e.target.value);
  };

  function getInputContent(step) {
    switch (step) {
      case 0:
        return (
          <TextField
            id="outlined-basic"
            label="Receiver"
            variant="outlined"
            onChange={handleInputChange1}
          />
        );
      case 1:
        return (
          <textarea
            className="form_inputBox"
            id="outlined-basic"
            label="Message"
            variant="outlined"
            onChange={handleInputChange2}
          />
        );
      case 2:
        return (
          <TextField
            id="outlined-basic"
            label="Sender"
            variant="outlined"
            onChange={handleInputChange3}
          />
        );
      default:
        return "Something is wrong sorry";
    }
  }

  return (
    <div className="formContainer">
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

      {/* <div className="instaPost" id="instaPost">
        <div className="helpMe">
          <p>To: {receiver}</p>
          <p>{message}</p>
          <p>From: {sender}</p>
        </div>
      </div> */}

    </div>
  );
}
