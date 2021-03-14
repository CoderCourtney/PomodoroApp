import React from "react";
import { minutesToDuration } from "../utils/duration/index";

function AllDuration(props) {
  const { timeModeMaster, setTimeModeMaster, isTimerRunning } = props;
  const {
    focusCurrent,
    breakCurrent,
    focusChange,
    focusMin,
    focusMax,
    breakMin,
    breakMax,
    breakChange,
  } = timeModeMaster;

  const btnHandler = (type) => {
    if (type === "focusMinus") {
      if (focusCurrent > focusMin && focusCurrent <= focusMax) {
        let updatedFocusCurrent = focusCurrent - focusChange;
        setTimeModeMaster({
          ...timeModeMaster,
          focusCurrent: updatedFocusCurrent,
          focusCount: updatedFocusCurrent * 60,
        });
      }
    }
    if (type === "focusPlus") {
      if (focusCurrent >= focusMin && focusCurrent < focusMax) {
        // focusMin = 5 FocusMax = 60
        let updatedFocusCurrent = focusCurrent + focusChange; // focusChange = 5
        setTimeModeMaster({
          ...timeModeMaster,
          focusCurrent: updatedFocusCurrent,
          focusCount: updatedFocusCurrent * 60,
        });
      }
    }
    if (type === "breakMinus") {
      if (breakCurrent > breakMin && breakCurrent <= breakMax) {
        let updatedBreakCurrent = breakCurrent - breakChange; // focusChange = 5
        setTimeModeMaster({
          ...timeModeMaster,
          breakCurrent: updatedBreakCurrent,
          breakCount: updatedBreakCurrent * 60,
        });
      }
    }
    if (type === "breakPlus") {
      if (breakCurrent >= breakMin && breakCurrent < breakMax) {
        let updatedBreakCurrent = breakCurrent + breakChange; // focusChange = 5
        setTimeModeMaster({
          ...timeModeMaster,
          breakCurrent: updatedBreakCurrent,
          breakCount: updatedBreakCurrent * 60,
        });
      }
    }
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration DONE */}
            {/* Focus Duration: 25:00 */}
            Focus Duration: {minutesToDuration(focusCurrent)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session DONE */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={() => btnHandler("focusMinus")}
              disabled={isTimerRunning}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing focus duration  and disable during a focus or break session DONE */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={() => btnHandler("focusPlus")}
              disabled={isTimerRunning}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* TODO: Update this text to display the current break session duration DONE */}
              Break Duration: {minutesToDuration(breakCurrent)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing break duration and disable during a focus or break session DONE */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={() => btnHandler("breakMinus")}
                disabled={isTimerRunning}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing break duration and disable during a focus or break session DONE */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={() => btnHandler("breakPlus")}
                disabled={isTimerRunning}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllDuration;
