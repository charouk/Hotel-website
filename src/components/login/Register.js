import React from 'react';
import {Link} from 'react-router-dom';



export default function Login(){
    const [formData, setFormData]= React.useState({
        firstName:"",
        secondName:"",                         
        email:"",
        password:"",
        confirmPass:"",
        

    })
    const [currentData, setCurrentData]= React.useState({
        firstName:"",
        secondName:"",                         
        email:"",
        password:"",
        confirmPass:"",
        

    })
   function handleChange(event){
        const {name,value}= event.target
        setFormData(prevFormaData =>{
            return{
                ...prevFormaData,
                [name]:value
            }
        })
        setCurrentData(prevFormaData =>{
            return{
                ...prevFormaData,
                [name]:value
            }
        })
    }
function handleSubmit(event){

    event.preventDefault()
    setCurrentData({ firstName:"",
                    secondName:"",                         
                    email:"",
                    password:"",
                    confirmPass:"",
})
}







    return(
        <>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='First Name'
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                    />
                    <input 
                        type="text" 
                        placeholder='Second Name'
                        onChange={handleChange}
                        name="secondName"
                        value={formData.secondName}
                    />
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
                    <input 
                        type="password"
                        placeholder='confirm your password'
                        onChange={handleChange}
                        name='confirmpass'
                        value={formData.confirmPass}

                    />
                    <button type='submit'>Register</button>
                    <p className='confuse'>You have an account <h5><Link to ="/Login">Login</Link></h5></p> 











                </form>
                <section className='show-data'>
                
                            
               
                <div className='sign-box'>
                    <h1>Send Successfully</h1>
                    <h3>
                    First Name : <p>{currentData.firstName}</p>
                    </h3>
                    <h3>
                    Last Name : <p>{currentData.secondName}</p>
                    </h3>
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