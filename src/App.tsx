import React from 'react';
import './styles.css';
import CardCollectionTopComponent from './CardCollectionTopComponent';
import CardCollectionBottomComponent from './CardCollectionBottomComponent';
import TimelineComponent from './TimelineComponent';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <div className='event-planner'>
        <CardCollectionTopComponent />
        <TimelineComponent />
        <CardCollectionBottomComponent />
      </div>
    </div>
  );
};

export default App;
