import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import {
  incrementBreakLength,
  decrementBreakLength
} from '../../State/actions';
import { State } from '../../State/types';
import './BreakLength.scss';

interface StateToProps {
  value: number;
}

interface DispatchToProps {
  increment(): void;
  decrement(): void;
}

type Props = StateToProps & DispatchToProps;

export const BreakLength: React.FunctionComponent<Props> = props => {
  return (
    <div className="BreakLength">
      <header id="break-label">
        <h1>Break Length</h1>
      </header>
      <div className="BreakLength-content">
        <button id="break-increment" onClick={props.increment}>
          Up
        </button>
        <p id="break-length">{props.value}</p>
        <button id="break-decrement" onClick={props.decrement}>
          Down
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State): StateToProps => ({
  value: state.breakLength
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators(
    { increment: incrementBreakLength, decrement: decrementBreakLength },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreakLength);
