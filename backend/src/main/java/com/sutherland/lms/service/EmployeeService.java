package com.sutherland.lms.service;

import java.util.List;
import java.util.Optional;

import com.sutherland.lms.entity.Employee;
import com.sutherland.lms.entity.LeaveRequest;

public interface EmployeeService {

	Employee addEmployee(Employee employee);
	Optional<Employee> getEmployeeById(String empid);
	List<Employee> getAllEmployees();
    List<LeaveRequest> getEmployeeLeaveHistory(String empid);
    List<Employee> getEmployeeByManagerid(String managerid);
    Employee employeeValidation(String empid,String password);

}

