import { useNavigate } from "react-router-dom";

function Header() {
    const loginstatus = sessionStorage.getItem("loginstatus");
    const navigate = useNavigate();

    const logout = (lg) => {
        lg.preventDefault();
        sessionStorage.removeItem("loginstatus");
        sessionStorage.removeItem("job");
        sessionStorage.removeItem("empid");
        sessionStorage.removeItem("managerid");
        navigate("/login");
    }

    return (
        <div style={{ padding: "10px", borderBottom: "1px solid #ccc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>Leave Management System</span>
            {loginstatus ? (
                <button onClick={logout} style={{ padding: "5px 15px", cursor: "pointer" }}>
                    Logout
                </button>
            ) : null}
        </div>
    );
};

export default Header;
