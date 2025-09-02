import React, { useState } from 'react'
import LeaveRequestService from '../service/LeaveRequestService'
import { useNavigate } from 'react-router-dom';

function ApplyLeaveForm(props) {
    const leaveRequestService = LeaveRequestService();
    const navigate = useNavigate();

    const initialState = {
        empid: props.empid || '',
        managerid: props.managerid || '',
        fromDate: '',
        toDate: '',
        leaveType: '',
        remarks: '',
        numberOfDays: 0,
        dateApplied: '',
        leaveStatus: 'APPLIED',
    };
    const [leaveReq, setLeaveReq] = useState(initialState);

    const changeData = (obj) => {
        const { name, value } = obj.target;
        setLeaveReq(prev => {
            const updated = { ...prev, [name]: value };
            if (name === 'fromDate' || name === 'toDate') {
                const { fromDate, toDate } = updated;
                if (fromDate && toDate) {
                    const days = calculateDays(fromDate, toDate);
                    updated.numberOfDays = days;
                }
            }
            return updated;
        });
    };

    const submitData = (event) => {
        event.preventDefault();
        if (!leaveReq.fromDate || !leaveReq.toDate) {
            alert("Please select both 'From' and 'To' dates.");
            return;
        }
        if (!leaveReq.leaveType) {
            alert("Please select leave type.");
            return;
        }
        leaveRequestService.applyForLeave(leaveReq);
        alert("Leave applied successfully");
        navigate('/dashboard');
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            <form onSubmit={submitData} style={{ width: "300px", textAlign: "left" }}>
                <h3 style={{ textAlign: "center" }}>Apply Leave</h3>
                <div style={{ marginBottom: "10px" }}>
                    <label>From</label>
                    <input
                        type='date'
                        name='fromDate'
                        value={leaveReq.fromDate}
                        onChange={changeData}
                        style={{ width: "100%", padding: "6px" }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>To</label>
                    <input
                        type='date'
                        name='toDate'
                        value={leaveReq.toDate}
                        onChange={changeData}
                        style={{ width: "100%", padding: "6px" }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Type</label>
                    <select
                        name="leaveType"
                        value={leaveReq.leaveType}
                        onChange={changeData}
                        style={{ width: "100%", padding: "6px" }}
                    >
                        <option value="" disabled>Select Leave Type</option>
                        <option value="CASUAL">Casual</option>
                        <option value="MEDICAL">Medical</option>
                    </select>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Remarks</label>
                    <textarea
                        name="remarks"
                        value={leaveReq.remarks}
                        onChange={changeData}
                        style={{ width: "100%", padding: "6px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Number of Days</label>
                    <input
                        type="number"
                        name="numberOfDays"
                        value={leaveReq.numberOfDays}
                        readOnly
                        style={{ width: "100%", padding: "6px" }}
                    />
                </div>
                <div style={{ textAlign: "center" }}>
                    <button type="submit" style={{ padding: "8px 20px", cursor: "pointer" }}>
                        Apply
                    </button>
                </div>
            </form>
        </div>
    )
}

// function to calculate no of days
function calculateDays(start, end) {
    const sd = new Date(start);
    const ed = new Date(end);
    const diff = ed - sd;
    return diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) + 1 : 0;
}

export default ApplyLeaveForm
