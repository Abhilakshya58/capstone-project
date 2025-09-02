package com.sutherland.lms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sutherland.lms.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, String> {
	Optional<Employee> findByEmpidAndPassword(String empid,String password);
	List<Employee> findByManagerid(String managerid);

}




