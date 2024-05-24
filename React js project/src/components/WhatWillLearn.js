// src/components/WhatWillYouLearn.js
import React from 'react';

const WhatWillYouLearn = () => (
  <section className="p-4 text-center">
    <h2>What will you Learn in ACCA?</h2>
    <div className="row">
      <div className="col-md-4">
        <h3>Knowledge Level</h3>
        <ul>
          <li>Business and Technology (BT)</li>
          <li>Management Accounting (MA)</li>
          <li>Financial Accounting (FA)</li>
        </ul>
      </div>
      <div className="col-md-4">
        <h3>Skill Level</h3>
        <ul>
          <li>Corporate and Business Law (LW)</li>
          <li>Performance Management (PM)</li>
          <li>Taxation (TX)</li>
          <li>Financial Reporting (FR)</li>
          <li>Audit and Assurance (AA)</li>
          <li>Financial Management (FM)</li>
        </ul>
      </div>
      <div className="col-md-4">
        <h3>Professional Level</h3>
        <ul>
          <li>Strategic Business Leader (SBL)</li>
          <li>Strategic Business Reporting (SBR)</li>
          <li>Advanced Financial Management (AFM)</li>
          <li>Advanced Performance Management (APM)</li>
          <li>Advanced Taxation (ATX)</li>
          <li>Advanced Audit and Assurance (AAA)</li>
        </ul>
      </div>
    </div>
  </section>
);

export default WhatWillYouLearn;
