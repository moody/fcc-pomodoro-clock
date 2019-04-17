import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import {
  incrementSessionLength,
  decrementSessionLength
} from '../../State/actions';
import { State } from '../../State/types';
import './SessionLength.scss';

interface StateToProps {
  value: number;
}

interface DispatchToProps {
  increment(): void;
  decrement(): void;
}

type Props = StateToProps & DispatchToProps;

export const SessionLength: React.FunctionComponent<Props> = props => {
  return (
    <div className="SessionLength">
      <header id="session-label">
        <h1>Session Length</h1>
      </header>
      <div className="SessionLength-content">
        <button id="session-increment" onClick={props.increment}>
          Up
        </button>
        <p id="session-length">{props.value}</p>
        <button id="session-decrement" onClick={props.decrement}>
          Down
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State): StateToProps => ({
  value: state.sessionLength
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators(
    { increment: incrementSessionLength, decrement: decrementSessionLength },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionLength);
