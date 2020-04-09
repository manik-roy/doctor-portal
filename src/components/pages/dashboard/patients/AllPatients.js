import React from 'react';
import PatientItem from './PatientItem';

const AllPatients = ({patients}) => {
  return (
    <div className="recent-appointments-container mt-4 p-4 bg-white">
    <div className="d-flex justify-content-between">
      <div className="p-2">
        <h2>All Patients</h2>
      </div>
      <div className="p-2">
        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
          <span data-feather="calendar"></span>
          This week
        </button></div>
    </div>
    <div className="table-responsive">
      <table className="table text-center">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Prescription</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((item,i) => <PatientItem item={item} indx={i+1} key={item._id} />)}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default AllPatients;




