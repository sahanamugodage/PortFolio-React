import './Heroimgstyles.css'
import React from 'react'
import IntoImg from '../Asserts/photo_2023-08-16_06-43-03.jpg'
import { FaFacebook, FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <div class='home-content'>
          <h1>
            Hi, I'm <span>Sahan</span>
          </h1>
          <h3>
            I'm A <span>Frontend Developer</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae repellat molestias ipsum. Ut asperiores a maiores
            accusamus accusantium pariatur in explicabo, doloremque amet dolor
            aut laboriosam praesentium tempora nisi consequuntur.
          </p>
          <div>
            <FaFacebook size={50} className='social-icons'></FaFacebook>
            <FaGithub size={50} className='social-icons'></FaGithub>
            <FaDiscord size={50} className='social-icons'></FaDiscord>
            <FaLinkedin size={50} className='social-icons'></FaLinkedin>
          </div>
          <div className='btn-group'>
            <Link to='/project' className='btn'>
              Projects
            </Link>
            <Link to='/contact' className='btn'>
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div class='home-image'>
        <img className='into-img' src={IntoImg} alt='IntoImg' />
      </div>
    </div>
  )
}

export default Heroimg
