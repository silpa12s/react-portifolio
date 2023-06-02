import React from 'react'
import { Twitter,Facebook,LinkedIn,Instagram } from '@mui/icons-material'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
       <div className='socialMedia'>
        <a href='https://twitter.com/i/flow/login'><Twitter /></a>
        <a href='https://www.facebook.com/'><Facebook/></a>
       <a href='https://www.linkedin.com/in/silpa-s-00263025b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bhz5TCj5vTcynZKEWrOgioA%3D%3D'> <LinkedIn/></a>
      <a href='https://www.instagram.com/?__coig_restricted=1'> <Instagram/></a>
       </div>
       <p>&copy;2022 abc.app</p>
    </div>
  )
}

export default Footer