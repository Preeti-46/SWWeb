import React from 'react';
import './StudentCampusLife.css';
import sc1 from './images/studentcampus1.jpg';
import sc2 from './images/homeimage5.jpg';
import sc4 from './images/studentcampus4.jpg';
import sc5 from './images/studentcampus5.png';
import sc7 from './images/studentcampus.jpg';
import sc8 from './images/studentcampuslife.jpg';
import sc9 from './images/homeimage11.jpg'
import sc10 from './images/homeimage4.jpg' 
import sc11 from './images/homeimage9.jpg'
import sc12 from './images/homeimage7.jpg';
import { motion } from 'framer-motion';
export default function StudentCampusLife() {
  return (
    <>
      <motion.div className='student-campus-life' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>


        <div className='hostel-paragraph' style={{ marginTop: "30px" }}>
        <div className='sub-header'>  <p style={{ marginBottom: "15px", borderLeft: "5px solid #312e81",color:"rgb(30, 64, 175)", paddingLeft: "20px"}} >Students Campus Life</p></div>

          <p>Life on the campus is pretty cool. Hostels and student facilities are spread over two campuses. Transit campus is located within WALMI near the High Court building. The new 470 acres campus at Chikamaligwad is a green mini forest with its own flora and fauna. It affords jogging, cycling and walking.
            Day time is consumed by fast paced academic activities in classes, laboratories. Evenings are devoted to sports, club activites or simply chit-chat with friends on the grass lawns.
          </p>

        </div>
        <div className='hostel-imagee'>
          <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='hosetl-imagee-1'>
            <img src={sc1} alt='adminblock' ></img>

          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='hosetl-imagee-1'>
            <img src={sc2} alt='adminblock' ></img>

          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='hosetl-imagee-1'>
            <img src={sc8} alt='adminblock' ></img>

          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='hosetl-imagee-1'>
            <img src={sc4} alt='adminblock' ></img>

          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='hosetl-imagee-1'>
          <img src={sc5} alt='adminblock' ></img>

          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='hosetl-imagee-1'>
          <img src={sc7} alt='adminblock' ></img>

          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='hosetl-imagee-1'>
          <img src={sc9} alt='adminblock'></img>

          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='hosetl-imagee-1'>
          <img src={sc10} alt='adminblock'></img>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='hosetl-imagee-1'>
          <img src={sc11} alt='adminblock'></img>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: "1", y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.25 }} className='hosetl-imagee-1'>
          <img src={sc12} alt='adminblock'></img>
          </motion.div>


        </div>

       
      </motion.div>
    </>
  )
}
