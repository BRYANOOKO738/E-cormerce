import React from 'react'
import './Caourosel.css'

const Carousel = () => {
  return (
    <div >
      <div id="carouselExampleSlidesOnly" className="carousel slide rounded" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div class="carousel-item active">
            <img src={"https://images.pexels.com/photos/5650050/pexels-photo-5650050.jpeg?auto=compress&cs=tinysrgb&w=600"}className="d-block w-100" alt="Black Friday"/>
    </div>
    <div className="carousel-item">
            <img src={"https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600"} className="d-block w-100" alt=" Off"/>
    </div>
    <div className="carousel-item">
      <img src={"https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=600"} className="d-block w-100" alt="Black friday"/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Carousel