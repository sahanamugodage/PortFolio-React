import { FaFacebook, FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>

        <div className='right'> 
        <FaFacebook size={50} className='social-icons'></FaFacebook>
        <FaGithub size={50} className='social-icons'></FaGithub>
        <FaDiscord size={50} className='social-icons'></FaDiscord>
        <FaLinkedin size={50} className='social-icons'></FaLinkedin>
      </div>
      <ul class="list">
            <li><Link to='/home'>FAQ</Link></li>
            <li><Link to='/project'>Project</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <p class="copyright">
            &copy; Sahan Amugodage | All Rights Reserved
        </p>
    </div>
  )
}

export default Footer
