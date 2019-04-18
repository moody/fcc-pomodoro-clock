import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentTime, setIsBreak, toggle, reset } from '../../State/actions';
import { State } from '../../State/types';
import { formatSeconds, minutesToSeconds } from '../../utils';
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

export class Timer extends React.Component<Props> {
  private updateInterval: NodeJS.Timeout | null = null;
  private audioRef: HTMLAudioElement | null = null;

  constructor(props: Props) {
    super(props);
    this.updateTimer = this.updateTimer.bind(this);
    this.toggle = this.toggle.bind(this);
    this.reset = this.reset.bind(this);
  }

  updateTimer() {
    const {
      breakLength,
      sessionLength,
      currentTime,
      isBreak,
      setCurrentTime,
      setIsBreak
    } = this.props;

    let newTime = currentTime - 1;

    if (newTime < 0) {
      newTime = isBreak
        ? minutesToSeconds(sessionLength)
        : minutesToSeconds(breakLength);
      setIsBreak(!isBreak);
    }

    if (newTime === 0 && this.audioRef) this.audioRef.play();

    setCurrentTime(newTime);
  }

  toggle() {
    if (this.updateInterval && this.props.isRunning) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    } else {
      this.updateInterval = setInterval(this.updateTimer, 1000);
    }

    this.props.toggle();
  }

  reset() {
    if (this.updateInterval && this.props.isRunning) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }

    if (this.audioRef) {
      this.audioRef.pause();
      this.audioRef.currentTime = 0;
    }

    this.props.reset();
  }

  render() {
    const { isBreak, currentTime } = this.props;
    const timeLeft = formatSeconds(currentTime);

    return (
      <div className="Timer">
        <header className="Timer-header">
          <h1 id="timer-label">{isBreak ? 'Break' : 'Session'}</h1>
        </header>

        <div className="Timer-content">
          <p id="time-left">{timeLeft}</p>

          <audio
            id="beep"
            ref={input => (this.audioRef = input)}
            src={'https://goo.gl/65cBl1'}
          />

          <div className="Timer-controls">
            <button id="start_stop" onClick={this.toggle}>
              Toggle
            </button>
            <button id="reset" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

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
