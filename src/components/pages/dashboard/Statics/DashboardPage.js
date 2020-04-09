import React, { useState, useEffect } from 'react';
import TopAria from './TopAria';
import RecentAppointmentTable from '../Table/RecentAppointmentTable';
import axios from 'axios';
import Loading from '../../../uttiles/Loading';

const DashboardPage = () => {

  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=> {
    const getTableData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get('https://edoctor-portal.herokuapp.com/api/v1/appointments/?limit=10')
        setTableData(response.data.data.appointments)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    getTableData()

  },[])

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h1 className="h2">Dashboard</h1>
      </div>
      <TopAria />
      {isLoading ?  <Loading/> :  <RecentAppointmentTable data={tableData} />}
     
     
    </>
  );
};

export default DashboardPage;