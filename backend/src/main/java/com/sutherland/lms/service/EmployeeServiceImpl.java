package com.sutherland.lms.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sutherland.lms.entity.Employee;
import com.sutherland.lms.entity.LeaveRequest;
import com.sutherland.lms.exception.EmployeeNotFoundException;
import com.sutherland.lms.repository.EmployeeRepository;
import com.sutherland.lms.repository.LeaveRequestRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    LeaveRequestRepository leaveRequestRepository;

    @Override
    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Optional<Employee> getEmployeeById(String empid) {
        return employeeRepository.findById(empid);
    }
    @Override
    public List<Employee> getEmployeeByManagerid(String managerid){
    	return employeeRepository.findByManagerid(managerid);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public List<LeaveRequest> getEmployeeLeaveHistory(String empid) {
        return leaveRequestRepository.findByempid(empid);
    }

	@Override
	public Employee employeeValidation(String empid, String password) {
	    Optional<Employee> opEmployee = employeeRepository.findByEmpidAndPassword(empid, password);
	    return opEmployee.orElse(null);  
	}


	



}
