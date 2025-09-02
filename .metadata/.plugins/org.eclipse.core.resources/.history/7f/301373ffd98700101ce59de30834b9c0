package com.sutherland.lms.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sutherland.lms.entity.LeaveRequest;
import com.sutherland.lms.service.LeaveRequestService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/leaverequest")
@CrossOrigin(origins = "http://localhost:3000")
public class LeaveRequestController {

    @Autowired
    private LeaveRequestService leaveRequestService;

    @PostMapping("/apply")
    public LeaveRequest applyLeaveRequest(@RequestBody LeaveRequest leaveRequest) {
        return leaveRequestService.applyLeaveRequest(leaveRequest);
    }

    @PutMapping("/verify/{leaveRequestId}")
    public LeaveRequest verifyLeaveRequest(@PathVariable int leaveRequestId,@RequestParam boolean isApproved,@RequestParam String remarks) {
        return leaveRequestService.verifyLeaveRequest(leaveRequestId, isApproved, remarks);
    }

    @PutMapping("/cancel/{leaveRequestId}")
    public LeaveRequest cancelLeaveRequest(@PathVariable int leaveRequestId) {
        return leaveRequestService.cancelLeaveRequest(leaveRequestId);
    }

    @PutMapping("/withdraw/{leaveRequestId}")
    public LeaveRequest withdrawLeaveRequest(@PathVariable int leaveRequestId) {
        return leaveRequestService.withdrawLeaveRequest(leaveRequestId);
    }

    @GetMapping("/getbyid/{leaveRequestId}")
    public Optional<LeaveRequest> getLeaveRequestById(@PathVariable int leaveRequestId) {
        return leaveRequestService.getLeaveRequestById(leaveRequestId);
    }

    @GetMapping("/viewbyempid/{empid}")
    public List<LeaveRequest> getLeaveHistoryByEmpId(@PathVariable String empid) {
        return leaveRequestService.getLeaveHistoryByEmpid(empid);
    }
    @GetMapping("/getbymanagerid/{managerid}")
    public List<LeaveRequest> getLeaveRequestByManagerId(@PathVariable String managerid){
    	return leaveRequestService.getLeaveHistoryByManagerid(managerid);
    }

    @GetMapping("/getall")
    public List<LeaveRequest> getAllLeaveRequests() {
        return leaveRequestService.getAllLeaveRequests();
    }
}
