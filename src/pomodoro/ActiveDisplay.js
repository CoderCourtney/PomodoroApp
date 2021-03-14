import React from "react";
// import { useState } from "react; ";
import { secondsToDuration, minutesToDuration } from "../utils/duration/index";

function ActiveDisplay(props) {
  const { timeModeMaster } = props;
  const {
    focusCurrent,
    breakCurrent,
    mode,
    focusCount,
    breakCount,
  } = timeModeMaster;

  let updateBar = 0;
  if (mode === "Focus") {
    let newFoCurr = focusCurrent * 60;
    let bar = (focusCount / newFoCurr) * 100;
    updateBar = 100 - bar;
  } else {
    let newBrCurr = breakCurrent * 60;
    let bar = (breakCount / newBrCurr) * 100;
    updateBar = 100 - bar;
  }
  //   console.log(updateBar, "updateBar info");
  // return new aria-valuenow and style number, which are the same
  // focusCount or breakCount will be counting down as the bar increases
  // focusCurrent or breakCurrent set that to 100% value
  // focusCurrent or breakCurrent set to denominator
  // numerator focusCount or breakCount

  if (mode === "Initial") {
    return null;
  } else {
    return (
      <div>
        {/* TODO: This area should show only display when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">
              {mode === "Focus"
                ? `Focusing for ${minutesToDuration(focusCurrent)} minutes`
                : `On Break for ${minutesToDuration(breakCurrent)} minutes`}
            </h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {mode === "Focus"
                ? `${secondsToDuration(focusCount)} remaining`
                : `${secondsToDuration(breakCount)} remaining`}
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={updateBar} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${updateBar}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveDisplay;
