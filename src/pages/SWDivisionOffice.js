import React from 'react';
import "./SWDivisionOffice.css";
import pradeepy from './images/PY Adj Prof - Pradeep_Yammiyavar_0.jpg';
import prabhur from './images/Prabhu1 - Prabhu R.jpg';
import ridhima from './images/Ridhima_Photo - Ridhima Tewari.jpg';
import GopalSP from './images/Gopal Parashari Pic - Gopal Sharan Parashari.jpg';
import prahladJoshi from './images/Dr. Prahlad Joshi.jpg';
import vcprakash from './images/vs prakash.jpg';
import { NavLink } from 'react-router-dom';
import sudheer from './images/sudheer_bio - Prof. Sudheer.jpg';
import ramjee from './images/r1.jpeg';
import { motion } from 'framer-motion';
export default function SWDivisionOffice() {
    return (
        <>
            <motion.div className='sw-division-office' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <div className='sw-division-office-1' style={{ display: "flex", flexDirection: "column", gap: "20px", flexWrap: "wrap" }}>
                    <div className='wrapper' style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: 'center', flexWrap: "wrap" }}>
                        <div className='dean'>
                            <div className='first-info' style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "15px" }}>
                                <img src={pradeepy} alt='loading'></img>
                                <a href='https://iitdh-my.sharepoint.com/:w:/g/personal/pradeepyammi_iitdh_ac_in/ETk5ATyitbNGsH3bi7wF4UIB_esJbA4yfOgWmWxwP1dr7Q?rtime=H4caIQHb20g'> <p className='name' style={{ color: "#4338ca" }}>Prof. Pradeep Yammiyavar</p></a>
                                <p className='designation' style={{ color: "rgb(51, 72, 120)", fontWeight: "600" }}>Dean, Students Welfare</p>
                                <p className='about-des' style={{ textAlign: "center" }}>The Dean of<span style={{ fontWeight: "600" }}> Students Welfare</span>  is responsible to the Director on all maters related to Students Welfare. The Dean is assisted by a team of Associate Deans & Officers.</p>
                            </div>
                        </div>
                        <div className='dean'>
                            <div className='first-info' style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "15px" }}>
                                <img src={ramjee} alt='loading'></img>
                                <a href='#'> <p className='name' style={{ color: "#4338ca" }}>Prof. Ramjee Repaka</p></a>
                                <p className='designation' style={{ color: "rgb(51, 72, 120)", fontWeight: "600",marginBottom:"70px" }}>Joint Dean, Students Welfare</p>
                                <p></p>
                            </div>
                        </div>
                        {/* width: "280px",height:"150px", */}
                        <div className='dean'>
                            <div className='first-info' style={{ display: "flex", flex: "1",  alignItems: "center", flexDirection: "column", padding: "15px" }}>
                                <div className='sw-organo-division' style={{ display: "flex", flexDirection: "column", padding: "30px", gap: "5px", alignItems: "center", justifyContent: "center" }}>
                                    <NavLink to="/sw_division_organogram" className="link-class" style={{ backgroundColor: "#f5f5f5", padding: "30px", width: "50px", height: "50px", borderRadius: "50%", textAlign: "center", border: "1px solid #a21caf" }} >
                                        <p style={{ color: "#a21caf", marginTop: "10px",fontSize:"1.1rem",fontWeight:"600" }} className='click-here'>Click</p>
                                        <p style={{ color: "#a21caf", marginTop: "10px",fontSize:"1.1rem",fontWeight:"600" }} className='click-here'>Here</p>
                                    </NavLink>
                                    <p className='designation' style={{ fontSize: "20px",display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"3px" }}>Students Welfare <p>Team</p></p>
                                    <p style={{ fontSize: "1.5rem", fontWeight: "600",marginBottom:"20px" }} className='designation'> Organogram</p>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='wrapper' style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: 'center', flexWrap: "wrap" }}>
                        <div className='dean'>
                            <div className='first-info' style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "15px" }}>
                                <img src={prabhur} alt='loading'></img>
                                <p style={{ color: "#4338ca" }} className='name'>Dr. R Prabhu</p>
                                <p style={{ color: "rgb(51, 72, 120)", fontWeight: "600" }} className='designation'>Associate Dean - Hostels</p>
                                <p style={{ textAlign: "center" }} className='about-des'>Hostel management & Maintenance; Allocation, Rules &amp; Regulation, Chair Of HWC;</p>
                            </div>
                        </div>
                        <div className='dean'>
                            <div className='first-info' style={{ display: "flex",  alignItems: "center", flexDirection: "column", padding: "15px" }}>
                                <img src={GopalSP} alt='loading'></img>
                                <p style={{ color: "#4338ca" }} className='name'>Dr. Gopal Sharan Parashari</p>
                                <p style={{ color: "rgb(51, 72, 120)", fontWeight: "600" }} className='designation'>Associate Dean - Gymkhana</p>
                                <p style={{ textAlign: "center" }} className='about-des'>Students Technical &amp; Culture Boards; Gymkhana Facilities; Sports, NSS,NSO,NCC</p>
                            </div>
                        </div>
                    </div>
                    <div className='wrapper' style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: 'center', flexWrap: "wrap" }}>
                        <div className='dean'>
                            <div className='first-info' style={{ display: "flex",  alignItems: "center", flexDirection: "column", padding: "15px" }}>
                                <img src={ridhima} alt='loading'></img>
                                <p style={{ color: "#4338ca" }} className='name'>Dr. Ridhima Tewari</p>
                                <p style={{ color: "rgb(51, 72, 120)", fontWeight: "600" }} className='designation'>Associate Dean - Wellness</p>
                                <p style={{ textAlign: "center" }} className='about-des'>Wellness Centre, Health and Counselling facilities, Female Students Welfare.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='wrapper' style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: 'center', flexWrap: "wrap" }}>
                        <div className='dean'>
                            <div className='first-info' style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: "column", padding: "15px" }}>
                                <img src={prahladJoshi} alt='loading'></img>
                                <p style={{ color: "#4338ca",display:"flex",justifyContent:"center",flexWrap:"wrap" }} className='name'>Group Captain Dr. Prahlad S <p>Joshi</p></p>
                                <p style={{ color: "rgb(51, 72, 120)", fontWeight: "600" }} className='designation'>Students Welfare, Advisor</p>
                            </div>
                        </div>
                        <div className='dean'>
                            <div className='first-info' style={{ display: "flex", gap: "10px", alignItems: "center", flexDirection: "column", padding: "15px" }}>
                                <img src={vcprakash} alt='loading'></img>
                                <p style={{ color: "#4338ca" }} className='name'>Col. V. C. Prakash</p>
                                <p style={{ color: "rgb(51, 72, 120)", fontWeight: "600" }} className='about-des'>Students Welfare, Advisor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
