package com.sutherland.lms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sutherland.lms.entity.PublicHolidays;
import com.sutherland.lms.repository.PublicHolidaysRepository;

@Service
public class PublicHolidaysServiceImpl implements PublicHolidaysService {

	@Autowired
	PublicHolidaysRepository publicholidayrepository;
	
	@Override
	public PublicHolidays addPublicHolidays(PublicHolidays publicholiday) {
		// TODO Auto-generated method stub
		return publicholidayrepository.save(publicholiday);
	}

	@Override
	public List<PublicHolidays> getAllHolidays() {
		// TODO Auto-generated method stub
		return publicholidayrepository.findAll();
	}

	
}
