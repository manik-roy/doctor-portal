import React from 'react';
import Header from './homePagesComponents/Header';
import AvailableAppointments from './homePagesComponents/AvailableAppointments';

const AppointmentPage = () => {


  return (
    <div id="main-home-page">
      <Header  />
      <AvailableAppointments  />
    </div>
  );
};

export default AppointmentPage;