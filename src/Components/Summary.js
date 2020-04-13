/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import PropTypes from 'prop-types';

export class Summary extends React.Component {
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
  // TODO : prop-Types 커스텀 함수를 작성하세요.
  // https://github.com/facebook/prop-types#usage
};

Summary.propTypes = {
  TotalConfirmed: isNumber,
  TotalDeaths: isNumber,
  TotalRecovered: isNumber,
};
