package com.sutherland.lms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sutherland.lms.entity.Employee;
import com.sutherland.lms.entity.LeaveRequest;
import com.sutherland.lms.service.EmployeeService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/addemployee")
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @GetMapping("/getemployeebyid/{empid}")
    public Optional<Employee> getEmployeeById(@PathVariable String empid) {
        return employeeService.getEmployeeById(empid);
    }
    @GetMapping("/geremployeebymanagerid/{managerid}")
    public List<Employee> getEmployeeByManagerid(@PathVariable String managerid){
    	return employeeService.getEmployeeByManagerid(managerid);
    }
    @GetMapping("/getallemployees")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/getleavehistorybyempid/{empid}")
    public List<LeaveRequest> getEmployeeLeaveHistory(@PathVariable String empid) {
        return employeeService.getEmployeeLeaveHistory(empid);
    }
    @PostMapping("/loginvalidate")
    public ResponseEntity<Employee> loginValidate(@RequestBody Employee employee){
    	Employee e = employeeService.employeeValidation(employee.getEmpid(),employee.getPassword());
    	return new ResponseEntity<Employee>(e,HttpStatus.OK);
    }
    @GetMapping("/logout")
	public String logout() {
	
		return "Session invalidated";
	}
 
}
