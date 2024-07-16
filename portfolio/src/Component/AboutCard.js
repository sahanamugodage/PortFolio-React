import React from 'react'
import './AboutCard.css'
import IntoImg from '../Asserts/photo_2023-08-16_06-43-03.jpg'

const AboutCard = () => {
  return (
    <>
    <div id="about" class="about">
        <div class="about-us">
            <div class="about-us-content about-dark">
                <div class="about-us-banner">
                    <div class="content-of-us">
                        <h1>About Me</h1>
                        <div class="about-us-details">
                            <p>My name is Sahan, and I live in Galle. I am a student with a passion for technology and
                                innovation. I am always eager to learn new things and expand my knowledge in various
                                fields. Currently, I am working on several projects that allow me to apply my skills and
                                creativity.</p>
                        </div>
                    </div>
                    <div class="about-image">
                    <img className='into-img' src={IntoImg} alt='IntoImg' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutCard