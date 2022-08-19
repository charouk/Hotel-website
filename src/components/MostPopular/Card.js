import React from 'react';



export default function Card(props){

    return(
        <>
            < div className='card'>
                <div className='location'>
                    <img src={require(`./mostPopular/${props.url}`)} className='image' alt='popular' />

                    <div className='country'>
                        <img src={require(`./mostPopular/${props.loc.map_img}`)} className='loc-logo' alt='logo' style={{width:'2rem',heigth:'1rem'}}/>
                        <p className='city' style={{color:'red'}} >{props.loc.city}</p>

                    </div>
                </div>
                <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='far fa-star'></i>
                        <i className='far fa-star'></i>
                </div>

                <div className='info'>
                    <p className='card--title'>{props.title}</p>
                    <p className='card--price'><span className='bold'> from 400 DN /</span> per night</p>

                </div>






            </div>

        
        
        </>
        
       
    )
}