import React from 'react';

export default function ToggleGallery(props){
    const [wdw, setWdw]= React.useState(false);
    const toggleModal =() => { 
        setWdw(!wdw);
    }
    return(
        <>
            <div className='items'>
                <div className='no-toggle'>
                    <div className='img'>
                        <img src={require(`./galleryImg/${props.url}`)} alt='gallery'  onClick={toggleModal} />
                        
                    </div>
                    <div className='title'>
                        <h3>{props.num}</h3>
                    </div> 
                </div>
            </div>
            { wdw &&(
                 <div className='wdw'>
                    <div className='wdw-content'>
                         <i class="fa fa-times" aria-hidden="true"  onClick={toggleModal} ></i>

                    </div>
                    <div className='hide'>
                        <img className='toggle-img'src={require(`./galleryImg/${props.url}`)} alt='gallery'/>
                    </div>
                       




                </div>


                )


                }




          
        
        
        
        
        
        
        
        
        
        
        
        </>





    )
}