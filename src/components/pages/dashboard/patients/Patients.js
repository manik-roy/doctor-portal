import React,{useState, useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import AllPatients from './AllPatients';
import Loading from '../../../uttiles/Loading';

const Patients = () => {

  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=> {
    const getTableData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get('https://edoctor-portal.herokuapp.com/api/v1/users');
        setPatients(response.data.data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    getTableData()

  },[])

  return (
    <div className="container-fluid">
    <div className="row">
      <Sidebar/>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content-wrapper">
        <h1 className="h2 mb-5 p-2">All Patients</h1>
        {isLoading ? <Loading/> : <AllPatients patients={patients} />}
      </main>
    </div>
  </div>
  );
};

export default Patients;