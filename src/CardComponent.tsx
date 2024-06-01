import React from 'react';
import family from './family.svg';
import './styles.css';

const CardComponent: React.FC = () => {
  return (
    <div className='card'>
    <img src={family} alt="Family" />
    <div className='card--title'>Baby's birth</div>
    <div className='card--down-arrow'></div>
</div>
  );
};

export default CardComponent;