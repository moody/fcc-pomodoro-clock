import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../../State';
import { increment, decrement } from '../../State/BreakLength/actions';
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
        <button onClick={props.increment}>Up</button>
        <p>{props.value}</p>
        <button onClick={props.decrement}>Down</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState): StateToProps => ({
  value: state.breakLength.value
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators({ increment, decrement }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreakLength);
