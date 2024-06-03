import React from 'react';
import './styles.css';
import arrow from './right-arrow.svg';

const TimelineComponent = (props: any) => {
  return (
   <div className='timeline'>
      <div className='timeline--start-dot'>
        <div className='timeline--event-text-start'>You are here</div>
      </div>
      <div className='timeline--event-line-1'></div>
      <div className='timeline--event-dot'>
        <div className='timeline--event-text'>In 1 year and 9 months</div>
      </div>
      <div className='timeline--event-line-2'></div>
      <div className='timeline--event-dot'>
        <div className='timeline--event-text'>In 3 years and 2 months</div>
      </div>
      <div className='timeline--event-line-2'></div>
      <div className='timeline--event-dot'>
        <div className='timeline--event-text'>In 4 years and 9 months</div>
      </div>
      <div className='timeline--event-line-3'></div>
      <div className='timeline--event-dot'>
        <div className='timeline--event-text'>In 8 years and 11 months</div>
      </div>
      <div className='timeline--event-line-dotted'></div>
      <div><img className='timeline--arrow' src={arrow} /></div>
   </div>
  );
};

export default TimelineComponent;