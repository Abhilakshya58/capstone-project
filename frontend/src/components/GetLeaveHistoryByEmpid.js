import React, { useEffect, useState } from 'react'
import LeaveRequestService from '../service/LeaveRequestService'
import { useNavigate } from 'react-router-dom';

function GetLeaveHistoryByEmpid({ empid }) {
    const leaveRequestService = LeaveRequestService();
    const [leaveReqList, setLeaveReqList] = useState([]);
    const navigate = useNavigate();
    const job = sessionStorage.getItem("job");

    useEffect(() => {
        getLeaveHistory(empid);
    }, [empid]);

    const getLeaveHistory = (empid) => {
        leaveRequestService.getLeaveHistoryByEmpid(empid).then((response) => {
            setLeaveReqList(response.data);
        })
    }

    const cancelLeaveReq = (event, id) => {
        event.preventDefault();
        leaveRequestService.cancelLeaveReq(id);
        alert("Leave cancelled successfully");
        navigate('/dashboard');
    }

    const withdrawLeaveReq = (event, id) => {
        event.preventDefault();
        leaveRequestService.withdrawLeave(id);
        alert("Leave withdrawn successfully");
        navigate('/dashboard');
    }

    return (
        <div>
            <h3>Leave History</h3>
            <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr align="left">
                        <th>empid</th>
                        <th>managerid</th>
                        <th>from</th>
                        <th>to</th>
                        <th>no of days</th>
                        <th>leavetype</th>
                        <th>dateApplied</th>
                        <th>status</th>
                        <th>remarks</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leaveReqList.map(l => (
                            <tr key={l.id} align="left">
                                <td>{l.empid}</td>
                                <td>{l.managerid}</td>
                                <td>{l.fromDate}</td>
                                <td>{l.toDate}</td>
                                <td>{l.numberOfDays}</td>
                                <td>{l.leaveType}</td>
                                <td>{l.dateApplied}</td>
                                <td>{l.leaveStatus}</td>
                                <td>{l.remarks}</td>
                                {(l.leaveStatus === 'APPROVED' && job !== 'manager') && (
                                    <td>
                                        <button onClick={(event) => cancelLeaveReq(event, l.id)}>Cancel</button>
                                    </td>
                                )}
                                {(l.leaveStatus === 'APPLIED' && job !== 'manager') && (
                                    <td>
                                        <button onClick={(event) => withdrawLeaveReq(event, l.id)}>Withdraw</button>
                                    </td>
                                )}
                                {(l.leaveStatus === 'CANCELLED' || l.leaveStatus === 'WITHDRAWN' || l.leaveStatus === 'REJECTED') && job !== 'manager' && (
                                    <td>
                                        <button disabled>
                                            {l.leaveStatus === 'CANCELLED' && 'Cancelled'}
                                            {l.leaveStatus === 'WITHDRAWN' && 'Withdrawn'}
                                            {l.leaveStatus === 'REJECTED' && 'Rejected'}
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetLeaveHistoryByEmpid
