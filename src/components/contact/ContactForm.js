import React from 'react';
import './contact.css'




export default function ContactForm(){
    const [formData, setFormData]= React.useState({
        firstName:"",
        secondName:"",                         
        email:"",
        phone:"",
        subject:"",
        message:"",
        

    })
    const [currentData, setCurrentData]= React.useState({
        firstName:"",
        secondName:"",                         
        email:"",
        phone:"",
        subject:"",
        message:"",
        

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
    secondName:"",                         
    email:"",
    phone:"",
    subject:"",
    message:"",
    

})
}








    return(
        <div className='contact-form'>
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
                    type="number"
                    placeholder='your number'
                    onChange={handleChange}
                    name='phone'
                    value={formData.phone}

                />
                <input 
                    type="text"
                    placeholder='subject'
                    onChange={handleChange}
                    name='subject'
                    value={formData.subject}

                />
                <input  className='textarea'
                    type="textarea"
                    placeholder='your message'
                    onChange={handleChange}
                    name='message'
                    value={formData.message}

                />
                <button type='submit'>Send message</button>
              










            </form>
            <section className='show-data'>
        
                    
                        <>
                            <div className='sign-box'>
                                <h1>Send Successfully</h1>
                                <h3>
                                First Name : <span  style={{color:'blue'}}>{currentData.firstName}</span>
                                </h3>
                                <h3>
                                Last Name : <span style={{color:'blue'}}>{currentData.secondName}</span>
                                </h3>
                                <h3>
                                Contact Number : <span style={{color:'blue'}}>{currentData.phone}</span>
                                </h3>
                                <h3>
                                Email : <span style={{color:'blue'}}>{currentData.email}</span>
                                </h3>
                                <h3>
                                Subject : <span style={{color:'blue'}}>{currentData.subject}</span>
                                </h3>
                                <h3>
                                Your Message : <span style={{color:'blue'}}>{currentData.message}</span>
                                </h3>
                            </div>
                        </>
                   
                </section>
        </div>

    )
}