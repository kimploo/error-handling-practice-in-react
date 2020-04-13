/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

export function SummaryFallback() {
  return (
    <div id="summary">
      <div className="summaryInfo" id="TotalConfirmed">
        <div className="divLabel">Confirmed 😷</div>
        <div className="divValue">Loading...</div>
      </div>
      <div className="summaryInfo" id="TotalDeaths">
        <div className="divLabel">Deaths 💀</div>
        <div className="divValue">Loading...</div>
      </div>
      <div className="summaryInfo" id="TotalRecovered">
        <div className="divLabel">Recovered 😇</div>
        <div className="divValue">Loading..</div>
      </div>
    </div>
  );
}
