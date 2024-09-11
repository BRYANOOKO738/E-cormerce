import React from 'react'
import './Sidebar.css'
import Products2 from './Products2'

const Sidebar = () => {
  return (
<div className='d-none d-md-block'>
<div class="sidenav">
    <div style={{fontWeight:"bolder"}}>Published</div>     
    <label>
        <input type="radio" name="publish-status" value="published" />
        Newest-Oldest
    </label>
    <label>
        <input type="radio" name="publish-status" value="unpublished" />
        Oldest-Newest
    </label>
    <hr />
    <div>
     <div style={{fontWeight:"bolder"}}>Popular</div>
       <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start",margin:"20px", padding:"20px" }}>
    <label>
        <input type="radio" name="publish-status" value="men" />
        Men
    </label>
    <label>
        <input type="radio" name="publish-status" value="women" />
        Women
    </label>
    <label>
        <input type="radio" name="publish-status" value="fashion" />
        Fashion
    </label>
    <label>
        <input type="radio" name="publish-status" value="dress" />
        Dress
    </label>
    <label>
        <input type="radio" name="publish-status" value="summer" />
        Summer
    </label>                  
</div>
            
    </div>
    <hr />
    <button className='btn btn-warning'>Clear Filter</button>         
 </div>


   
</div>
  )
}

export default Sidebar