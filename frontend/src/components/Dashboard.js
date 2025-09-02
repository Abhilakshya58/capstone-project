import React, { useEffect, useState } from 'react';
import EmployeeService from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';
import GetLeaveHistoryByEmpid from './GetLeaveHistoryByEmpid';
import GetHolidayList from './GetHolidayList';
import ApplyLeaveForm from './ApplyLeaveForm';

function Dashboard() {
  const [employee, setEmployee] = useState({});
  const [activeSection, setActiveSection] = useState(null);
  const employeeservice = EmployeeService();
  const job = sessionStorage.getItem("job");
  const managerid = sessionStorage.getItem("managerid");
  const empid = sessionStorage.getItem("empid");
  const navigate = useNavigate();

  useEffect(() => {
    if (empid) {
      employeeservice.getEmployeeById(empid)
        .then(response => setEmployee(response.data));
    }
  }, [empid]);

  const renderSection = () => {
    switch (activeSection) {
      case 'getHolidayList':
        return <GetHolidayList />;
      case 'getLeaveHistoryByEmp':
        return <GetLeaveHistoryByEmpid empid={empid} />;
      case 'applyLeaveForm':
        return <ApplyLeaveForm empid={empid} managerid={managerid} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Left side links */}
      <div style={{ marginRight: "20px" }}>
        <h3>Menu</h3>
        <div>
          <button onClick={() => setActiveSection('getHolidayList')}>
            Public Holiday List
          </button>
        </div>
        <div>
          <button onClick={() => setActiveSection('applyLeaveForm')}>
            Apply for Leave
          </button>
        </div>
        <div>
          <button onClick={() => setActiveSection('getLeaveHistoryByEmp')}>
            Leave History
          </button>
        </div>
      </div>

      {/* Right side content */}
      <div style={{ flex: 1 }}>
        <h2>Hii {employee.firstName || "Employee"}  {employee.lastName || ""} </h2>
        <p> Designation : {job === 'manager' ? 'Manager' : 'Employee'}</p>
        {renderSection()}
      </div>
    </div>
  );
}

export default Dashboard;
