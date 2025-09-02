package com.sutherland.lms.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PublicHolidays {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	@Column(length = 12)
	private String holidayDate;
	@Column(length = 20)
	private String holidayDetails;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDate() {
		return holidayDate;
	}
	public void setDate(String holidayDate) {
		this.holidayDate = holidayDate;
	}
	public String getHolidayDetails() {
		return holidayDetails;
	}
	public void setHolidayDetails(String holidayDetails) {
		this.holidayDetails = holidayDetails;
	}
	
	
	
	

}
