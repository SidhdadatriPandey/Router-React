import React, { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    fullName: "", password: ""
  })

  function handleChange(ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
    const {name,value}=ev.target;
    setFormData((pre)=>{
      return {
        ...pre,
        [name]:value
      }
    })
  }

function handleSubmit(ev: React.FormEvent<HTMLFormElement>){
  ev.preventDefault();
  console.log(formData)
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Enter your Name
        <input type='text' name='fullName' value={formData.fullName} onChange={handleChange} className="inp-taker" />
        Password
        <input type='password' name='password' value={formData.password} onChange={handleChange} className="inp-taker"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
