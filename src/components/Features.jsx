import React from 'react'
import boxA from '../assets/boxA.png'
import boxB from '../assets/boxB.png'
import boxC from '../assets/boxC.png'

import icon1 from '../assets/icon1a.png';
import icon2 from '../assets/icon2a.png';
import icon3 from '../assets/icon3a.png';

import icon4 from '../assets/icon4a.png';
import icon5 from '../assets/icon5a.png';
import icon6 from '../assets/icon6a.png';


export default function Features() {
  return (
      <>
    <div className='features'  id="features" style={{backgroundImage: "linear-gradient(to bottom right, rgba(82, 74, 235,1), rgba(10, 26, 68,0.9))"}}>
        <div className='wrap'>
            <h2 className='title'>You are at the centre of everything We do</h2>

            <div className='desc' >
                <p style={{color:`rgb(170, 241, 255)`}}>Our Expert would sit with you, understand your unique needs & use proprietary
                    <br/>
                    Artificial Intelligence Tech to find the best Insurance plan for you.
                </p>
                <p></p>
            </div>
            <div className='box-wrapper'>
                        <div className='boxes boxA'>
                            <img src={icon3}/>
                            <p className='box-title'>Advisory Focussed</p>
                            <p className='box-desc'>
                                Our experts with years of experience in insurance 
                                advise our clients in making the right choices. 
                            </p>
                        </div>
                        <div className='boxes boxA'>
                            <img src={icon4}/>
                            <p className='box-title'>AI Tech Driven</p>
                            <p className='box-desc'>
                                Our AI Tech analysis the client's
                                requirement & finds the best plan out 
                                of 350+ insurance products
                            </p>
                        </div>
                        <div className='boxes boxA'>
                            <img src={icon1}/>
                            <p className='box-title'>Customer Centric</p>
                            <p className='box-desc'>
                                Every customer is unique.
                                We focus on your needs & help you 
                                select the plan that is best suited for you.
                            </p>
                        </div>
            </div>

        </div>
        
    </div>

    <div className='features' id="choose-us" style={{backgroundImage: "linear-gradient(to bottom right, rgba(75,75,75,1), rgba(10, 26, 68,0.9))"}}>
        <div className='wrap'>
            <h2 className='title' style={{display:'none'}}>Our Offerings</h2>

            <div className='desc'>
                <p style={{color:"#aaf1ff"}}>
                    We are One Stop Solution for all your Insurance needs.
                </p>
                {/* <p>How do the real time cues help sales executives ?</p> */}
            </div>
            <div className='box-wrapper'>
                        <div className='boxes boxA'>
                            <img src={icon5}/>
                            <p className='box-title'>Variety of Options</p>
                            <p className='box-desc'>
                                We have partnered with 18+ insurance 
                                companies to provide 350+ product options to our clients.
                            </p>
                        </div>
                        <div className='boxes boxA'>
                            <img src={icon2}/>
                            <p className='box-title'>
                                Door Step Service
                            </p>
                            <p className='box-desc'>
                                From product selection to documentation 
                                & hassle free claim settlement, 
                                we take care of all the steps 
                            </p>
                        </div>
                        <div className='boxes boxA'>
                            <img src={icon6}/>
                            <p className='box-title'>AI Tech Support</p>
                            <p className='box-desc'>
                                We use advanced digital technologies 
                                to simply the process for our clients 
                                & provide 24*7 support. 
                            </p>
                        </div>
            </div>

        </div>

    </div>
</>
  )
}
