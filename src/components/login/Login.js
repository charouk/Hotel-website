import React from 'react';
import {Link} from 'react-router-dom';



export default function Login(){
    const [formData, setFormData]= React.useState({
                                  
        email:"",
        password:""

    })
    const [currentData, setCurrentData]= React.useState({
        email:"",
        password:"",
        

    })
   function handleChange(event){
        const {name,value}= event.target
        setFormData(prevFormaData =>{
            return{
                ...prevFormaData,
                [name]:value
            }
        })
        setCurrentData(prevCurrData =>{
            return{
                ...prevCurrData,
                [name]:value
            
        }}
        )
       
    }
function handleSubmit(event){

    event.preventDefault()
    setFormData({firstName:"",
    email:"",
    password:""
    

})

}







    return(
        <>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder='Your Email'
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                        />
                        <input 
                            type="password"
                            placeholder='your password'
                            onChange={handleChange}
                            name='password'
                            value={formData.password}

                        />
                        <button type='submit'>Login </button>
                        <p className='confuse'>Don't have account? <h5><Link to ="/register">Register Now</Link></h5></p> 
                    </form>
                    <section className='show-data'>
                    
                                
                    
                    <div className='sign-box'>
                        <h1>Send Successfully</h1>
                        <h3>
                        Email : <p>{currentData.email}</p>
                        </h3>
                        <h3>
                        Password : <p>{currentData.password}</p>
                        </h3>
                        
                    </div>
                   
                
            </section>
 </>

    )
}