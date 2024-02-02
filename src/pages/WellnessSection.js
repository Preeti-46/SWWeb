import React, { useEffect } from 'react';
import './WellnessSection.css';
import { LiaHospital } from 'react-icons/lia';
import { IoIosArrowDown } from 'react-icons/io';
import { SiGotomeeting } from 'react-icons/si';
import { useRef } from 'react';
import wellnesscentre from './images/wellnesscentre.jpg';
import yourDost from './PdfFiles/YourDOST_steps_2023_07_19.pdf';
import telemanasa from './PdfFiles/teleMANASA.pdf';
import { motion } from 'framer-motion';
export default function WellnessSection() {

   

    const wellness = useRef();
    const counselling = useRef();
    const scrollHandler = (elmRef) => {
        console.log(elmRef.current)
        window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
    }

  
    return (
        <>
            <motion.div className='wellness-section' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <motion.div variants={{hidden:{opacity:0,y:75},visible:{opacity:"1",y:0}}} initial="hidden" animate="visible" transition={{duration:0.5,delay:0.25}} className='wellness-header'><p style={{borderLeft: "5px solid #312e81", paddingLeft: "10px"}} >Wellness</p></motion.div>
                <div className='hostel-imagee'>
                    <div className='hosetl-imagee-1' style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "19px", fontSize: "1.3rem" }}>
                     <motion.div variants={{hidden:{opacity:0,y:75},visible:{opacity:"1",y:0}}} initial="hidden" animate="visible" transition={{duration:0.5,delay:0.25}}>  <img src={wellnesscentre} alt='adminblock' className='hostel-imagee-2'></img></motion.div> 
                        <p className='ambulance-no' style={{ margin: "auto", border: "5px solid red", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center" }}><p style={{ fontWeight: "800" }} >Ambulance No:</p><p style={{ fontSize: "1.3rem", fontWeight: "600" }}>8105405107</p></p>
                    </div>
                </div>
                <div className='wellness-section-s1'>
                    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                            <div className='wellness-text' ><p >The Wellness Centre hosts Medical and Mental Wellness services for all the campus residents. A panel of eminent visiting Doctors provide consultations at the Centre which is 24x7 facility with Nurses and Ambulance service.
                            The Psychological Counselling services are operated online by service providers.
                            A Volunteering Counselling Psychologist is available on campus by appointment.</p></div>

                    </div>

                    <div className='wellness' style={{ borderBottom: "5px solid #86198f" }}>
                        <div className='alumni-fs'>     <h3 style={{ marginBottom: "20px" }} >WELLNESS</h3>
                            <h3 style={{ marginBottom: "20px" }}>HEALTH CENTRE</h3></div>
                        <div>
                            <div className='alumni-fs-fs'>    <h3 style={{ marginTop: "20px" }} >FACULTY-IN-CHARGE, Health</h3></div>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                        </div>

                        <div style={{ display: "flex", gap: "330px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Satish Naik B</p>
                                    <h4>Faculty-In-Charge, Students Welfare (Health and Ambulance)</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Shreedevi K Masuti</p>
                                    <h4>Faculty-In-Charge, Students Welfare (Health and Ambulance)</h4>
                                </div>
                            </div>

                        </div>
                        <hr></hr>
                        <div className='alumni-fs'>     <h3 style={{ marginBottom: "20px", marginTop: "20px" }} >COUNSELLING CENTRE</h3></div>
                        <div>
                            <div className='alumni-fs-fs'>    <h3 style={{ marginTop: "20px" }} >FACULTY-IN-CHARGE, Counselling</h3></div>
                            <div style={{ width: "50px", height: "3.4px", backgroundColor: "#86198f", marginTop: "7px", marginBottom: "18px" }}></div>
                        </div>

                        <div style={{ display: "flex", gap: "50px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Prof. Pradeep Yammiyavar</p>
                                    <h4>Faculty-In-Charge, Students Welfare (Wellness Counselling)</h4>
                                </div>
                                <div className='g-s'>
                                    <p style={{ fontWeight: "600", color: "#4338ca" }}>Dr. Rajshekar. K</p>
                                    <h4>Faculty-In-Charge, Students Welfare (Wellness Counselling)</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", gap: "10px", marginTop: "30px" }} className='wellness-counselling-ce'>
                        <div className='counselling' style={{ backgroundColor: "#fff1f2", padding: "20px 40px" }}>
                            <div className='wellness-sub-header' style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "15px", fontWeight: "600", color: "#f43f5e" }}><LiaHospital /><p>Health Centre </p></div>

                            <div className='fs-font' style={{ borderBottom: "1px solid #d4d4d8", paddingBottom: "10px" }}><p>
                                The Health centre is served by a panel of visiting
                                Doctors with specialization in General medicine, Gynecologist,
                                Psychiatrist and Pediatrics.</p>
                                <p>The Health centre is staffed by Nurses
                                    round the clock with availibility and Ambulance 24x7</p></div>

                            <div className='wellness-link' style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", cursor: "pointer" }}><p onClick={() => scrollHandler(wellness)}>Health Centre </p><IoIosArrowDown /></div>
                        </div>
                        <div className='wellness-center' style={{ backgroundColor: "#fff1f2", padding: "20px 30px" }}>
                            <div className='wellness-sub-header' style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "15px", fontWeight: "600", color: "#f43f5e" }}><SiGotomeeting /><p>Counselling Centre</p></div>
                            <div className='fs'><p style={{ borderBottom: "1px solid #d4d4d8", paddingBottom: "63px" }}>The Counselling centre at IIT Dharwad provides assistance and counselling Services to all residents of the campus.</p></div>

                            <div className='wellness-link' style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", cursor: "pointer" }}><p onClick={() => scrollHandler(counselling)}>Counselling Centre </p><IoIosArrowDown style={{ color: "#be185d" }} /></div>
                        </div>
                    </div>

                </div>
                <div style={{ display: "flex" }} className='well-coun'>
                    <div className='wellness-centre' ref={wellness} style={{ marginTop: "30px" }}>

                        <p className='sub-header' style={{ marginBottom: "30px", marginTop: "30px", marginLeft: "20px", paddingLeft: "10px", borderLeft: "4px solid red" }}>IIT Dharwad visiting Doctors</p>
                        <div className='fs-font' style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "30px" }}>
                            <li>Dr. Shivayogi Yeledhalli, General Physician</li>
                            <li>Dr. S S Mudakavi, General Physician</li>
                            <li>Dr. K.V Achyutha, Pediatrician</li>
                            <li>Dr. Reshma Rathod, Consultant Obstetrician & Gynecologist</li>
                            <li>Dr. Aditya Pandurangi, Consultant Psychiatrist</li>

                        </div>
                    </div>

                    <div className='counselling-centre' ref={counselling} style={{ marginTop: "30px" }}>

                        <p className='sub-header' style={{ marginBottom: "30px", marginTop: "30px", paddingLeft: "10px", borderLeft: "4px solid red" }}>Counselling Psychologists</p>
                        <div className='main-' style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <p style={{ fontSize: "1.4rem", fontWeight: "600" }}>Online Providers</p>
                            <li><a href={yourDost} style={{ color: "green" }} target='_blank' rel='noopener'>yourDOST, Online</a></li>

                            <li><a href={telemanasa} target='_blank' style={{ cursor: "pointer" }}>teleMANASA, Online</a></li>
                            <li>In-house Psychologist</li>

                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
