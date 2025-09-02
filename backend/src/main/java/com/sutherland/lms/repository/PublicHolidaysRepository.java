package com.sutherland.lms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sutherland.lms.entity.PublicHolidays;

@Repository
public interface PublicHolidaysRepository extends JpaRepository<PublicHolidays, Integer>  {

}
