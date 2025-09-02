package com.sutherland.lms.service;

import java.util.List;

import com.sutherland.lms.entity.PublicHolidays;

public interface PublicHolidaysService {

	PublicHolidays addPublicHolidays(PublicHolidays publicholiday);
	List<PublicHolidays> getAllHolidays();
	
}
