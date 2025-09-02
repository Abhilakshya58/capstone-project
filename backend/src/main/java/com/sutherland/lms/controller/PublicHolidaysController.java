package com.sutherland.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sutherland.lms.entity.PublicHolidays;
import com.sutherland.lms.service.PublicHolidaysService;

@RestController
@RequestMapping("/publicholidays")
@CrossOrigin(origins = "http://localhost:3000")
public class PublicHolidaysController {
	
	@Autowired
	private PublicHolidaysService publicholidayservice;
	
	@PostMapping("/addholidaydetails")
	public PublicHolidays addPublicHolidays(@RequestBody PublicHolidays publicholiday) {
		return publicholidayservice.addPublicHolidays(publicholiday);
	}
	
	@GetMapping("/viewholidaylist")
	public List<PublicHolidays> getAllPublicHolidays(){
		return publicholidayservice.getAllHolidays();
	}

}
