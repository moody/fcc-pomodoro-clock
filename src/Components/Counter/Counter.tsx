import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  incrementBreakLength,
  decrementBreakLength,
  incrementSessionLength,
  decrementSessionLength
} from '../../State/actions';
import { State } from '../../State/types';
import './Counter.scss';

interface OwnProps {
  id: 'break' | 'session';
}

interface StateToProps extends OwnProps {
  isRunning: boolean;
  value: number;
}

interface DispatchToProps {
  increment(): void;
  decrement(): void;
}

type Props = StateToProps & DispatchToProps;

export const Counter: React.FunctionComponent<Props> = props => (
  <div className="Counter">
    <header id={`${props.id}-label`} className="Counter-header">
      <h2>{`${props.id} Length`}</h2>
    </header>
    <div className="Counter-content">
      <button
        id={`${props.id}-increment`}
        onClick={() => {
          if (!props.isRunning) props.increment();
        }}
      >
        <i className="fas fa-chevron-circle-up fa-3x" />
      </button>

      <p id={`${props.id}-length`}>{props.value}</p>

      <button
        id={`${props.id}-decrement`}
        onClick={() => {
          if (!props.isRunning) props.decrement();
        }}
      >
        <i className="fas fa-chevron-circle-down fa-3x" />
      </button>
    </div>
  </div>
);

const mapStateToProps = (state: State, ownProps: OwnProps): StateToProps => {
  return {
    id: ownProps.id,
    value: ownProps.id === 'break' ? state.breakLength : state.sessionLength,
    isRunning: state.isRunning
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: OwnProps
): DispatchToProps =>
  bindActionCreators(
    {
      increment:
        ownProps.id === 'break' ? incrementBreakLength : incrementSessionLength,
      decrement:
        ownProps.id === 'break' ? decrementBreakLength : decrementSessionLength
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
