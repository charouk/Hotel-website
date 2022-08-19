import React from 'react'
import CardDestination from './CardDestination';
import DestinationData from './DestinationData';
    

export default function Destination(){
    const cards=DestinationData.map(item => {
        return(
            <CardDestination 
                key={item.id}
                {... item}
            
          
          
          />

        )
    
    
    })






        return(
            <>
                <section className='popular'>
                    <div className='full_container'>
                        <div className='heading'>
                            <h1>Most Popular Destination</h1>
                            <div className='line'>
                                <hr style={{color:'blue'}}></hr>
                              
                                <hr style={{color:'blue',margin:'1rem'}}></hr>
                            </div>
                        </div>
                        <div className='content flex'>
                           {cards}
                        </div>
                    </div>
                </section>
            </>
        )

    }



