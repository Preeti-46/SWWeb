import React from 'react'
import './HostelMaintenense.css';
import { FaArrowLeft } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom';
export default function HostelMaintenense() {
    return (
        <>
            <div className='Hostel-Maintain'>
                <div className='intra'>  <p>Access only through INTRANET</p>
                    <p>Under Construction.</p>
                </div>
                <NavLink to="/"  >
                    <div className="link-class" style={{ backgroundColor: "#fecaca", float: "left", borderRadius: "5px", padding: "5px", display: "flex", fontSize: "1rem", margin: "20px", alignItems: "center", color: "", justifyContent: "center", width: "170px" }}><FaArrowLeft /><p style={{ padding: "10px 5px 10px 5px" }}>Go to Home Page</p></div>
                </NavLink>
            </div>
        </>
    )
}
