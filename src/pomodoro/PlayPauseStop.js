import React from "react";
import classNames from "../utils/class-names";

function PlayPauseStop(props) {
  const {
    playPause,
    isTimerRunning,
    timeModeMaster,
    setTimeModeMaster,
    setIsTimerRunning,
  } = props;
  const { mode } = timeModeMaster;
  function stopHandler() {
    setIsTimerRunning(false);
    setTimeModeMaster({
      ...timeModeMaster,
      mode: "Initial",
      focusCurrent: 25,
      breakCurrent: 5,
      focusCount: 25 * 60,
      breakCount: 5 * 60,
    });
  }

  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
          <button
            type="button"
            className="btn btn-secondary"
            title="Stop the session"
            onClick={() => stopHandler()}
            disabled={mode === "Initial" || mode !== "Focus"}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default PlayPauseStop;
