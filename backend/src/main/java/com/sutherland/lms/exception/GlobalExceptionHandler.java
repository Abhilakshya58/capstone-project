package com.sutherland.lms.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(value = EmployeeNotFoundException.class)
	public ResponseEntity<String> employeeNotFoundException(EmployeeNotFoundException ex){
		return new ResponseEntity<String>(ex.getMessage(), HttpStatus.OK);
	
	}
	
	@ExceptionHandler(value = LeaveRequestNotFoundException.class)
	public ResponseEntity<String> leaveNotFoundException(LeaveRequestNotFoundException ex) {
		return new ResponseEntity<String>(ex.getMessage(), HttpStatus.OK);
	}
	


	

}