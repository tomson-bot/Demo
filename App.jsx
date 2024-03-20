import { useState } from 'react'  
import './index.css'

function App() {

  return (
       <>
        <div className='main'>
          <h1 className='heading'>
           Kerala floods
          </h1>
         <div className='images'>
          <div className='images-card'>
          <img className='img' src="http://wallpapercave.com/wp/749RIrs.jpg" ></img>
          <h3> <strong>Place:Vishakapatnam</strong></h3>
          <p>Date:20/12/2023</p> 

          </div>
          <div className='images-card'>
          <img className='img' src="http://wallpapercave.com/wp/749RIrs.jpg" ></img>
          <h3> <strong>Place:Vishakapatnam</strong></h3>
          <p>Date:20/12/2023</p> 
          </div>
          <div className='images-card'>
          <img className='img' src="http://wallpapercave.com/wp/749RIrs.jpg" ></img>
          <h3> <strong>Place:Vishakapatnam</strong></h3>
          <p>Date:20/12/2023</p> 
          </div>
          <div className='images-card'>
          <img className='img' src="http://wallpapercave.com/wp/749RIrs.jpg" ></img>
          <h3> <strong>Place:Vishakapatnam</strong></h3>
          <p>Date:20/12/2023</p> 
          </div>



         </div>
          <section className='about'>
            <h1>ABOUT</h1>
            <p className='about-para'>
         The Kerala floods of 2018 were a devastating natural disaster that struck the southern Indian state of Kerala during the monsoon season. The floods were triggered by unusually heavy rainfall, leading to widespread flooding, landslides, and significant damage to infrastructure, homes, and agriculture.
     The rainfall started in late May and continued into August, with the heaviest downpour occurring in August. Rivers and reservoirs overflowed, submerging large areas and forcing thousands of people to evacuate their homes. The floodwaters caused massive destruction to roads, bridges, and buildings, disrupting transportation and communication networks.
     </p>
            </section> 
      <div className='count'>
       <div className='count-st'>
        <h2>15,000+</h2>
        <p>deaths</p>
       </div>
       <div >
        <h2 >1,000+</h2>
        <p>helpers</p>
       </div>
       <div>
        <h2 >20,000+</h2>
        <p>waiting for help</p>
       </div>

      </div>

      <div className='buttons'>
        <button className='button1'>Register</button>
        <button className='button1'>Donate </button>
      </div>
          
           
        </div>
       </>
  )
}

export default App
