import React from 'react'
import "./MessAndCanteen.css";
import canteen1 from './images/canteen1.jpg';
import canteen5 from './images/Mess-Canteen.jpg';
import canteen7 from './images/Mess-Canteen2.jpg';
import canteen8 from './images/Mess-Canteen3.jpg'
export default function MessAndCanteen() {
    return (
        <>
            <div className='MessAndCanteen'>

                <div className='hostel-paragraph' style={{ marginTop: "30px" }}>
                  <div className='sub-header'>  <p style={{ marginBottom: "15px", color: "rgb(30, 64, 175)",borderLeft:"5px solid rgb(49, 46, 129)",paddingLeft:"20px"}} >Mess And Canteen</p>
                  </div>
                 <div className='hostel-paragraph-1'>  <p >The mess block has specious dining halls with modern mechanized kitchen operated by outsourced service providers.
                        Both vegetarian and multi cuisine food are served in 3 dining halls. 
                        The canteen operates till late in the night for the benefit of students.
                    </p></div> 

                </div>
                <div className='hostel-imagee'>
                    <div className='hosetl-imagee-1'>
                        <img src={canteen1} className='imge-1' alt='canteen'></img>

                    </div>
                    <div className='hosetl-imagee-1'>
                        <img src={canteen8} className='imge-1' alt='canteen'></img>

                    </div>
                    <div className='hosetl-imagee-1'>
                        <img src={canteen5} className='imge-1' alt='canteen'></img>

                    </div>
                    <div className='hosetl-imagee-1'>
                        <img src={canteen7} className='imge-1' alt='canteen'></img>

                    </div>
                    

                </div>
                
            </div>

        </>
    )
}
