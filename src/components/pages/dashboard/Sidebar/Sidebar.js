import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <SidebarItem icon="apps" text="Dashboard" path="/dashboard/doctors" />
        <SidebarItem icon="today" text="Appointment" path="/dashboard/appointment" />
        <SidebarItem icon="people" text="Patients" path="/dashboard/patients" />
        <SidebarItem icon="description" text="Prescriptions" path="/dashboard/prescriptions" />
        <SidebarItem icon="settings" text="Settings" path="/dashboard/settings" />
      </ul>
     <div className="logout-aria">
      <p className="logout-btn d-flex"> <span className="material-icons">
        trending_flat
        </span> Log Out</p>
     </div>
    </div>
   
  </nav>
  );
};

export default Sidebar;