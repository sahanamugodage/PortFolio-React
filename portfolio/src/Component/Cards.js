import React from 'react';
import './Card.css';
import Project1 from '../Asserts/Screenshot 2024-07-07 121618.png';
import Project2 from '../Asserts/Screenshot 2024-07-07 122122.png';

const Cards = () => {
  return (
    <>
      <div className='card-section'>
        <h1>
          My&ensp;<span>Projects</span>
        </h1>
        <div className='card-body-content'>
          <div className='all-cards'>
            <div className='new-card'>
              <div className='card-img'>
                <img className='into-img' src={Project1} alt='FoodCity Screenshot' />
              </div>
              <div className='card-head'>
                <h2>FoodCity</h2>
              </div>
              <div className='card-body'>
                <p>
                  A system designed for FoodCity, focusing on efficient
                  management of inventory, sales, and customer interactions.
                </p>
              </div>
              <a href='https://salesfood.cotdevops.com/home.php' className='card-btn'>
                View
              </a>
            </div>
            <div className='new-card'>
              <div className='card-img'>
                <img className='into-img' src={Project2} alt='Vehicle Management Project Screenshot' />
              </div>
              <div className='card-head'>
                <h2>Vehicle Management Project</h2>
              </div>
              <div className='card-body'>
                <p>
                  This is an ongoing Vehicle Management Project that handles
                  vehicle details.
                </p>
              </div>
              <button type='button' className='card-btn' disabled>
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
