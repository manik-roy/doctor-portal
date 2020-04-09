import React, { useContext, useState, useEffect } from 'react';
import AppointmentsItem from './AppointmentsItem';
import { UserContext } from '../../useAuth';
import axios from 'axios';

const AvailableAppointments = ({date}) => {
  const {selectTedDate} = useContext(UserContext)
  const [availableClinic, setAvailableClinic] = useState([])

  useEffect(()=> {
      const getData = async () => {
        const response =  await axios.get('https://edoctor-portal.herokuapp.com/api/v1/clinics')
        setAvailableClinic(response.data.data)
      }
      getData();
  },[])

  return (
   
    <div className="container availableAppoitments-container">
      <div className="row ">
        <div className="col section-title text-center">
          <h2 className="text-center fwb cp">Available Appointments on {selectTedDate}</h2>
        </div>
      </div>
      <div className="available-items-container pt-4">
      <div className="row">
        {availableClinic && availableClinic.map(item =>  <AppointmentsItem item={item} key={item._id} />)}
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointments;