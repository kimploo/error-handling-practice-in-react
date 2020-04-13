import React from 'react';
import PropTypes from 'prop-types';

export class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { TotalConfirmed, TotalDeaths, TotalRecovered } = this.props;

    return (
      <div id="summary">
        <div className="summaryInfo" id="TotalConfirmed">
          <div className="divLabel">Confirmed 😷</div>
          <div className="divValue">{TotalConfirmed.toLocaleString()}</div>
        </div>
        <div className="summaryInfo" id="TotalDeaths">
          <div className="divLabel">Deaths 💀</div>
          <div className="divValue">{TotalDeaths.toLocaleString()}</div>
        </div>
        <div className="summaryInfo" id="TotalRecovered">
          <div className="divLabel">Recovered 😇</div>
          <div className="divValue">{TotalRecovered.toLocaleString()}</div>
        </div>
      </div>
    );
  }
}

const isNumber = function (props, propName, componentName) {
  if (typeof props[propName] === 'number') {
    return new Error(
      `Invalid prop ${propName} passed to ${componentName}. Expected a valid number`
    );
  }
};

Summary.propTypes = {
  TotalConfirmed: PropTypes.number,
  TotalDeaths: PropTypes.number,
  TotalRecovered: PropTypes.number,
};
