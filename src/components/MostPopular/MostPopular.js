import React from 'react'
import Card from './Card'
import popData from './popData'
    

export default function MostPopular(){
    const cards=popData.map(item => {
        return(
            <Card 
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
                            <h1>Most Popular Hotel</h1>
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



