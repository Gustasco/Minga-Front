import React from 'react'

const Footer = () => {
  return (
    
<div className='footer'>

    <div className='suscribite'>
      <h2>Subscribe</h2>
    <form className='form' action="">
      <input className='inputFooter' type="text" placeholder='Enter your Email' />
      <button className='butonSuscribe'>Suscribe now</button>
    </form>
      
    </div>
      
    <div className='ancorEiconos'>
        <div className='ancors'>
          <a href="#">Home</a>
          <a href="#">Comics</a>
        </div>

        <div className='iconos'>
          <a href="#"><img src="./assets/facebook.png" alt="" /></a>
          <a href="#"><img src="./assets/twitter.png" alt="" /></a>
          <a href="#"><img src="./assets/vimeo.png" alt="" /></a>
          <a href="#"><img src="./assets/youtube.png" alt="" /></a>
    </div>

    </div >
    <div className='finalFooter'>
    <p className='P-footer'>© 2022 Minga. All Rights Reserved.</p>
      <div className='divImg'><p className='img-footer'><img src="../assets/Logo.png" alt="" /><span className='inga'>inga</span></p></div>
      <p className='P-footer'>Terms and Conditions</p>
      <p className='P-footer'>Privacy Policy</p>
    </div>
      
</div>
  )
}

export default Footer