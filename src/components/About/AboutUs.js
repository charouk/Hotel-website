import React from 'react';


export default function AboutUs(){
 return(
    <>
        <div className='about-us flex_space' >
            <div className="row row1">
                <h4 style={{color:'blue'}}>About Us</h4>
                <h1>
                    We <span >provide Solution</span> to grow your business
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                <button className='sec-btn'>Explore More
                    <i className='fas fa-long-arrow-alt-right'></i>
                </button>
            </div>
            <div className='row image'>
                <img src='images/about-1.jpg' alt='about'/>


            </div>


        </div>
    
    
    
    
    
    
    </>


 )
}