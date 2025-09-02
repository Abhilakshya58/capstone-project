import React, { useEffect, useState } from 'react';
import HolidayListService from '../service/HolidayListService';

function GetHolidayList() {
  const service = HolidayListService();
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    getHolidayList();
  }, []);

  const getHolidayList = () => {
    service.getHolidays().then((response) => {
      setHolidays(response.data);
    });
  };

  return (
    <div>
      <h3>Holiday List</h3>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Occasion</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((h) => (
            <tr key={h.id}>
              <td>{h.date}</td>
              <td>{h.holidayDetails}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetHolidayList;
