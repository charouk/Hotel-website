import React from 'react'


export default function Sign(){


    const [Sign,setSign]= React.useState({
        email:"", password:""
    
       })

       function handleChange(event){
        setSign(prevState => {
            return{
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
       }
       function handleSubmit(event){
        event.preventDefault()
           
       }



       return(
        <form  className="Register-form"onSubmit={handleSubmit}>
           <p>Sign up Now </p> 
            <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={Sign.email} 
            />
             <input 
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={Sign.password} 
            />
            <button >Sign Up</button>
            <small>You are new ?<a href='#reg-link'> Register now</a></small>










        </form>
       )

} 