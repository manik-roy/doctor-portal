import React from 'react';
import {Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import AppointmentPage from './pages/AppointmentPage';
import Login from './pages/Login';
import AppointmentForm from './pages/homePagesComponents/AppointmentForm';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardAppointmentPage from './pages/dashboard/Appointments/DashboardAppointmentPage';
import Patients from './pages/dashboard/patients/Patients';

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />;
        <Route  path="/create-appointment" component={AppointmentPage} />;
        <Route  path="/appointment-form" component={AppointmentForm} />;
        <Route  path="/dashboard/doctors" component={Dashboard} />;
        <Route  path="/dashboard/appointment" component={DashboardAppointmentPage} />;
        <Route  path="/dashboard/patients" component={Patients} />;
        <Route path="/login" component={Login} />;
    </Switch>
  );
};

export default Routes;
