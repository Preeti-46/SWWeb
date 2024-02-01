import React, { useRef } from 'react';
import "./Others.css";
import yuva from './images/yuvaSangam2.jpg';
import yuva1 from './images/yuvasangam1.jpg';
import yuva2 from './images/yuvaSangam3.jpg';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
export default function Others() {

  const sectionRef=useRef(null);

  const intersection=useIntersection(sectionRef,{
    root:null,
    rootMargin:"0px",
    threshold:0.9
  });

  const fadeIn=element=>{
    gsap.to(element,1,{
      opacity:1,
      y:-60,
      ease:"power4.out",
      stagger:{
        amount:.3
      }
    })
  }

  const fadeOut=element=>{
    gsap.to(element,1,{
      opacity:1,
      y:-20,
      ease:"power4.out",
      
    })
  }

  intersection && intersection.intersectionRatio<0.9 ? fadeOut(".fadeIn"): fadeIn(".fadeOut");
  return (
    <>
      <motion.div className='student-campus-life' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>


        <div className='hostel-paragraph' style={{ marginTop: "30px" }}>
       <div className='sub-header'>   <p style={{ marginBottom: "15px", color: "#312e81", paddingLeft: "20px", color: "#1e40af", borderLeft: "5px solid #312e81" }} >Yuva Sangam</p>
       </div>
          <p ref={sectionRef}>Ek Bharat Shreshta Bharat( EBSB) programme aims to enhance interaction and promote mutual understanding between people of different states. As part this programme, a culture exchange programme named Yuva Sangam, recently a contingent of 50 students from Panjab and IIT Ropar visited IIT Dharwad in the month of December 2023. Likewise IIT Dharwad accompanied a contingent of 50 students from Karnataka state and IIT Dharwad to IIT Ropar, Panjab.
          </p>

        </div>
        <div className='hostel-imagee' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div className='hosetl-imagee-1' style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "19px", fontSize: "1.3rem" }}>
            <img src={yuva} alt='adminblock' ></img>
            
          <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"3px"}} className='o-y'> <p style={{color:"#4c5157"}}>Visit Of Karnataka team to IIT</p><p>Ropar.</p></div> 
           

          </div>
          <div className='hosetl-imagee-1' style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", fontSize: "1.3rem" }}>
            <img src={yuva1} alt='adminblock' ></img>
           <div style={{display:"flex",flexWrap:"wrap",gap:"3px", justifyContent:"center"}} className='o-y'> <p style={{color:"#4c5157"}}>Visit of Panjab students and</p>
            <p style={{color:"#4c5157"}}>IIT Ropar to Dharwad, Karnataka.</p></div>
          </div>
        </div>
 </motion.div>

    </>
  )
}
