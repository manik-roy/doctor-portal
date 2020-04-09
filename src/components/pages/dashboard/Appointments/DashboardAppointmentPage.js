import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calender from './Calender';

const DashboardAppointmentPage = () => {

  return (
    <div className="container-fluid">
    <div className="row">
      <Sidebar/>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content-wrapper">
        <h1 className="h2 mb-5 p-2">Appointment</h1>
       <Calender />
      </main>
    </div>
  </div>
  );
};

export default DashboardAppointmentPage;