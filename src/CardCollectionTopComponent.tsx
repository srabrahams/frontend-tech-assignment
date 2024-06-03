import React from 'react';
import './styles.css';
import CardComponent from './CardComponent';
import data from './data.json'
import family from './family.svg';
import holiday from './going-holiday.svg';

const CardCollectionTopComponent = (props: any) => {
  return (
    <div className='card-collection'>
      <div className='card-collection--block card-collection--birth'>
        <CardComponent imgSrc={family} imgAlt={data.cardData.birth.imgAlt} title={data.cardData.birth.title} />
        <div className='card-collection--block__stroke'></div>
      </div>
      <div className='card-collection--block card-collection--holiday'>
        <CardComponent imgSrc={holiday} imgAlt={data.cardData.holiday.imgAlt} title={data.cardData.holiday.title} />
        <div className='card-collection--block__stroke'></div>
      </div>
      <div className='card-collection--block card-collection--retire'>
        <CardComponent imgSrc={holiday} imgAlt={data.cardData.retire.imgAlt} title={data.cardData.retire.title} />
        <div className='card-collection--block__stroke'></div>
      </div>
    </div>
  );
};

export default CardCollectionTopComponent;