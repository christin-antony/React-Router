import React from 'react'
import image2 from './image/1.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className='Hdiv0' >
     <h1 className='Hh1'>WELCOME TO OUR DESIGN STUDIO!</h1>
     <div className='Hdiv1'>
        <p className='Hp1'>We are a team of creative professionals with a passion for creating spaces that make you feel at home. Our studio offers a full range of interior design services, from conceptualization to final realization of the project.</p>
        <img src={image2} alt="drtgyjy" className='Himage1' />
     </div>

    </div>
  )
}

export default Home
