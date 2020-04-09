import React from 'react';
import TopBarItem from './TopBarItem';
import './TopBar.css';

const TopAria = () => {
  return (
    <div className="row d-flex  text-white">
      <TopBarItem total="09" title="Pending" subtitle="Appointment" extraClass="pending-appointment" />
      <TopBarItem total="09" title="Today's" subtitle="Appointment" extraClass="today-appointment" />
      <TopBarItem total="09" title="Total" subtitle="Appointment" extraClass="total-appointment" />
      <TopBarItem total="09" title="Total" subtitle="Patients" extraClass="total-patients" />
    </div>
  );
};

export default TopAria;