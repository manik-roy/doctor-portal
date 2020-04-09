import React, { useState, useEffect, useContext } from 'react';
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates';
import axios from 'axios';
import FilterItem from '../Table/FilterItem';
import Loading from '../../../uttiles/Loading';

const Calender = () => {

  const [date, setDate] = useState()
  const [formatDate, setFormateDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  // first time set date
  useEffect(() => {
    setDate(new Date())
  }, [])

  useEffect(() => {
    let formatDate = `${date ? format(date, 'MMM dd, yyyy', { locale: enGB }) : ''}`
    setFormateDate(formatDate)
  }, [date])

  // fetch data
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const getTableData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(`https://edoctor-portal.herokuapp.com/api/v1/appointments/?filter=${formatDate}`)
        setFilterData(response.data.data.appointments)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    getTableData()

  }, [formatDate])

  return (
    <>
      <div className="row d-flex justify-content-around">
        <div className="col-5 bg-white sidebar-content shadow p-2 text-center">
          <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
        </div>
        <div className="col-5 bg-white sidebar-content shadow p-2 text-center">
          <div className="section-title d-flex align-items-center px-2 justify-content-between">
            <h2>Appointments</h2>
            <h6>{formatDate}</h6>
          </div>

          <div className="filter-appoitment-container">
            {isLoading ? <Loading /> : (
              <div className="table-responsive">
                {filterData.length === 0 ? <h6 className="text-info pt-5">No Appointment Item</h6> : (
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterData.map((item, i) => <FilterItem item={item} indx={i + 1} key={item._id} />)}
                    </tbody>
                  </table>
                )}

              </div>
            )}

          </div>
        </div>
      </div>
    </>
  )
}
export default Calender;