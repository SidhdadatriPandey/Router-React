import React, { useState } from 'react'

const Suggestion = () => {
  const [sug,setSug]=useState("");

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>){
    ev.preventDefault();
    console.log(sug);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={(ev)=>setSug(ev.target.value)} className='textarea'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Suggestion
