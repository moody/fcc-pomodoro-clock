import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentTime, setIsBreak, toggle, reset } from '../../State/actions';
import { State } from '../../State/types';
import { formatSeconds } from '../../utils';
import './Timer.scss';

interface StateToProps {
  breakLength: number;
  sessionLength: number;
  currentTime: number;
  isRunning: boolean;
  isBreak: boolean;
}

interface DispatchToProps {
  setCurrentTime(value: number): void;
  setIsBreak(value: boolean): void;
  toggle(): void;
  reset(): void;
}

type Props = StateToProps & DispatchToProps;

export const Timer: React.FunctionComponent<Props> = props => {
  const currentTime = formatSeconds(props.currentTime);

  return (
    <div className="Timer">
      <header className="Timer-header">
        <h1 id="timer-label">{props.isBreak ? 'Break' : 'Session'}</h1>
      </header>

      <div className="Timer-content">
        <p id="time-left">{currentTime}</p>

        <div className="Timer-controls">
          <button id="start_stop" onClick={props.toggle}>
            Toggle
          </button>
          <button id="reset" onClick={props.reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State): StateToProps => ({
  breakLength: state.breakLength,
  sessionLength: state.sessionLength,
  currentTime: state.currentTime,
  isRunning: state.isRunning,
  isBreak: state.isBreak
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators({ setCurrentTime, setIsBreak, toggle, reset }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
