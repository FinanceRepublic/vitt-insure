import React,{useEffect, useRef, useState} from 'react'
// import './header.css'
import logo from '../assets/logo.png'
import homeBackground from '../assets/homeBackground.png'
import Robo from '../assets/Robo.png'
import gallery from '../assets/gallery.webp';
import homeBg from '../assets/home-bg--res.png'

export default function Header() {
   const [active,setActive] = useState(false)
  let headerRef= useRef()
  let headerWrapperRef = useRef()
  
  function scrollFunction(){
    // if(window.scroll > Header.wrapper.elem.getBoundingClientRect())
    //console.log(headerWrapperRef.current.getBoundingClientRect())
    let height = headerWrapperRef.current.getBoundingClientRect().height - headerRef.current.getBoundingClientRect().height
    if(window.scrollY > height){
      headerRef.current.style.backgroundColor = '#4B24C0'
    }else{
      headerRef.current.style.backgroundColor = 'transparent'
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollFunction );

    return ()=>window.removeEventListener('scroll',scrollFunction)
  },[])

  
  return (<>
  <div className='header-wrapper' ref={headerWrapperRef} id='home'>
        <img src={homeBg} className='bg'/>
        <img src={Robo} className='robo'/>
        <div className='header' ref={headerRef} >
          
          {/* <div className='childA'>
              <img src={logo} />
          </div> */}
          <div className='childB' >
              <div><a href='#home'>home</a></div>
              <div><a href='#features'>Our Approach</a></div>
              <div><a href='#choose-us'>Why Choose Us</a></div>
              <div><a href='#team'>Our Team</a></div>
              {/* <div><a href='#blog-section'>Testimonials</a></div> */}
              <div><a href='#form'>Get in touch</a></div>
          </div>
          <div className='childC'>
              <div className='hamburger'>
                <i className="fa-sharp fa-solid fa-bars" onClick={()=>setActive(true)}></i>
              </div>
              <div className='menus' style={{right:`${active ?'-90vw': '-200vw'}`}}>
                <div className='icon-wrapper'>
                  <div className='float-box'>
                    <i className="fa-solid fa-xmark" onClick={()=>setActive(false)}></i>
                  </div>
                  
                </div>
                <a href='#home' onClick={()=>setActive(false)}>home</a>
                <a href='#features' onClick={()=>setActive(false)} >Our Approach</a>
                <a href='#choose-us' onClick={()=>setActive(false)}>Why Choose Us</a>
                <a href='#team' onClick={()=>setActive(false)}>Our Team</a>
                {/* <a href='#blog-section' onClick={()=>setActive(false)}>blog</a> */}
                <a href='#form' onClick={()=>setActive(false)}>Get in touch</a>
                {/* <div className='options'><a href='#home'>home</a></div>
                <div className='options'><a href='#offerings'>our offerings</a></div>
                <div className='options'><a href='#team'>our team</a></div>
                <div className='options'><a href='#awards'>Journey</a></div>
                <div className='options'><a href='#blog-section'>our blog</a></div>
                <div className='options'><a href='#form'>Get in touch</a></div> */}
              </div>
            </div>
        </div>
        <div className='content'>
            <div className='content-wrapper'>
              {/* <div className='content-logo'>
                <img src={logo} />
              </div> */}
              <h3>
                Aapne Insurance Liya Kya ?
                <br/>
                Ye Sabse Zaroori Hai..
              </h3>
              <p className='sub-heading'>
                Do you want to get insured ? <br/>
                Are you confused about right plan <br/>
                or You have any query ? 
              </p>
              <p className='desc'>
                  Get in touch for free consultancy<br/>
                  with our expert.
              </p>
              <p className='info'> Call or Message on +91 9650889666</p>
            </div>
            
            <div className='image-wrapper'>
              <img src={gallery} className='myrobo'/>
            </div>
            
        </div>
  </div>
    </>
  )
}
