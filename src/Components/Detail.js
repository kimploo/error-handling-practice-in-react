import React from 'react';

export function Detail({ Countries }) {
  return (
    <div id="detail">
      <div>
        <span className="countryName">country</span>
        <span>confirmed</span>
        <span>deaths</span>
        <span>recover</span>
      </div>
      {Countries.map(function (value) {
        return (
          <div key={value.CountryCode}>
            <span className="countryName">{value.Country}</span>
            <span>{value.TotalConfirmed}</span>
            <span>{value.TotalDeaths}</span>
            <span>{value.TotalRecovered}</span>
          </div>
        );
      })}
    </div>
  );
}

Detail.propTypes = {
  // TODO : Do Type Checking
};
