import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../../State';
import { increment, decrement } from '../../State/SessionLength/actions';
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
        <h1>Break Length</h1>
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

const mapStateToProps = (state: ApplicationState): StateToProps => ({
  value: state.sessionLength.value
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators({ increment, decrement }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionLength);
