import React from 'react'
// import './Register.css'
const Newsleter = () => {
    return (
        <>
<div class="mt-4 bg-warning   text-white rounded">
   <div className="container">
              <h2>Subscribe to our Weekly Newsletter</h2>
              <p>Lorem ipsum..</p>
    </div>
    <div >
        <div>
         <label>Enter your Name</label>           
         <input type="text" placeholder='Enter Name' />
         </div>
        <div>
         <label>Enter your Email</label>           
         <input type="email" placeholder='Enter Email' />
                    </div>
        <button type="submit" className='btn btn-primary mx-auto'>Subscribe</button>            
    </div>       
</div>
        </>

  )
}

export default Newsleter