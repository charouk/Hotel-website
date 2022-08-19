import React from 'react'
import ToggleGallery from './ToggleGallery';
import galleryData from './galleryData';


export default function Gallery ()  {
    return (
      <>
      
  
        <section className='gallery top'>
          
                <h1>Our Gallery</h1>
                
          
          <div className='container grid'>
            {galleryData.map((item) => {
              return <ToggleGallery 
                  key={item.id}
                  {...item}


               />
            })}
          </div>
        </section>
      </>
    )
  }
  
 