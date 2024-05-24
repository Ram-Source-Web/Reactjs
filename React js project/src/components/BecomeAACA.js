// src/components/BecomeACCA.js
import React from 'react';

const BecomeACCA = () => (
  <section className="p-4 bg-light text-center">
    <h2>Become ACCA in 18 months</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet...</p>
    <div className="d-flex justify-content-around my-3">
      <button className="btn btn-secondary">Download Brochure</button>
      <button className="btn btn-secondary">Study Plan</button>
      <button className="btn btn-secondary">Demo Videos</button>
    </div>
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

export default BecomeACCA;
