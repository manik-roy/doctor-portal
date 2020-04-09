import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../../useAuth';

const AppointmentsItem = ({item}) => {
  const {handleCleaningName} = useContext(UserContext)
  
  return (
    <div className="col-4 mb-4 mt-4">
    <div className="appointments-item">
      <div className="card py-4 text-center shadow">
        <div className="card-body">
          <h6 className="card-title fwb cp">{item.name} </h6>
          <h6 className="card-time fwb">{item.time}</h6>
          <p className="card-subtitle mb-2 mt-2 text-muted">{item.available}</p>
          <Link to='/appointment-form' onClick={()=> handleCleaningName(item)} className="btn appointments-item-btn">Book appointment</Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AppointmentsItem;