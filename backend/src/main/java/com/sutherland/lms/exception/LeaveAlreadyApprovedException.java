package com.sutherland.lms.exception;


public class LeaveAlreadyApprovedException extends RuntimeException {
    public LeaveAlreadyApprovedException(String message) {
        super(message);
    }
}
