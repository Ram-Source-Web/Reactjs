// src/components/KickoffJourney.js
import React from 'react';

const KickoffJourney = () => (
  <section className="p-4 text-center">
    <h2>Kick off your ACCA Prep journey with IndigoLearn</h2>
    <p>Sign up and get instant access to our FREE Courses</p>
    <form className="row g-3 justify-content-center">
      <div className="col-md-3">
        <input type="text" className="form-control" placeholder="Phone Number" />
      </div>
      <div className="col-md-3">
        <input type="email" className="form-control" placeholder="Email" />
      </div>
      <div className="col-md-3">
        <input type="text" className="form-control" placeholder="Current Qualification" />
      </div>
      <div className="col-md-3">
        <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#callbackModal">Request Call Back</button>
      </div>
    </form>
  </section>
);

export default KickoffJourney;
