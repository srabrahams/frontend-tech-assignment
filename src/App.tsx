import React from 'react';
import './styles.css';
import CardComponent from './CardComponent';
import CardComponentTwo from './CardComponentTwo';
import CardComponentThree from './CardComponentThree';
import CardCollectionTopComponent from './CardCollectionTopComponent';
import TimelineComponent from './TimelineComponent';
import data from './data.json'

//Images
import family from './family.svg';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <div className='event-planner'>
        <CardCollectionTopComponent />
        {/* <CardComponent imgSrc={family} imgAlt={data.cardData.birth.imgAlt} title={data.cardData.birth.title} /> */}
        {/* <CardComponentThree imgSrc={family} imgAlt={data.cardData.contribution.imgAlt} title={data.cardData.contribution.title} /> */}
        <TimelineComponent />
      </div>
    </div>
  );
};

export default App;
