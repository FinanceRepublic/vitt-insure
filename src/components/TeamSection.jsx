import {useState} from 'react'
//import "./Carousel.css"
import shiv from '../assets/shiv.png'
import bibhuti from '../assets/bibhuti.png'
import saurabh from '../assets/saurabh.jpeg'
import vidhu from '../assets/vidhu.jpeg'

import teamMember2 from '../assets/team-member2.webp';
import teamMember3 from '../assets/team-member3.webp';

// import shiv from '../assets/bibhuti.png'
// import sanket from '../assets/bibhuti.png'
// import anuj from '../assets/bibhuti.png'
// import varun from '../assets/bibhuti.png'

// export function CardCarousel(){
//     return <div className='card-carousal' >
//                 <div className='="card-carousal-inner' style={{display:'flex',border:"5px solid green",transform:"translateX(-100%)"}}>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/> 
//                 </div>
//                 <div className='progress-bar'>
//                     <div className='progress-item'></div>
//                     <div className='progress-item'></div>
//                 </div>
//         </div>
// }


export default function TeamSection(){
    const teams = [
        {//image:'https://wallpaperaccess.com/full/4601521.jpg',
            image:bibhuti,
            name:'Bibhuti Anand',
            des:'CEO, Vitt.AI & Director',
            linkdin:'https://www.linkedin.com/in/bibhuti-anand-25627855/'
        },
        {
            image:teamMember2,
            name:'Ajay Kumar',
            des:'Principal Officer & Director',
            linkdin:'https://www.linkedin.com/in/vidhushekhar/'
        },
        {
            image:teamMember3,
            name:'Sonam Sablok',
            des:'VP, Partnerships & Growth',
            linkdin:'https://www.linkedin.com/in/vidhushekhar/'
        },

    ]
    return <div className='team-section' id='team'>
    
            <h4 className='heading'>Our TEAM</h4>
            <div className='container'>
                <h3 > 
                   With 30+ years of cumulative experience in insurance,
                   Finance & Marketing, We are working on a mission of help 
                   millions of Indians get the right Insurance
                </h3>
                <div className='wrapper' >
                    {teams.map((e,i)=>{
                    return <Card name={e.name} des={e.des} image={e.image} key={i} linkdin={e.linkdin}/>
                    })}
                </div>
            </div>
            </div>
            
}

export function Card({image,des,name,linkdin}){
    // console.log(des)
    return  <div className="card">
                <div className='image-holder'>
                    <img src={image} />
                </div>
                <div className="text">
                    <div className='content'>
                        
                        <h4 className='name' >{name}</h4>
                        
                        <p className='des'>{des}</p>
                        <div className="icon-holder" >
                            <a href={linkdin}>
                                <i className="fa-brands fa-linkedin" ></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
}

