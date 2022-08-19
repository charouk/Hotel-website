import React from 'react';



export default function CardDestination(props){

    return(
        <>
            < div className='card-dest'>
                    <img src={require(`./destinationImg/${props.url}`)} className='imageDestination' alt='gallery' />

                    <div className='country'>
                       <p className='text'>{props.dest}</p>
                    </div>
            </div>







            

        
        
        </>
        
       
    )
}