import React from 'react';
import './styles.css';
import arrow from './right-arrow.svg';
import data from './data.json';

const TimelineComponent = (props: any) => {
  return (
   <div className='timeline'>
      <div className='timeline--start-dot'>
        <div className='timeline--event-text-start'>{ data.timeline.one.title }</div>
      </div>
      <div className='timeline--event-line-1'></div>
      <div className='timeline--event-dot'>
        <div className='timeline--event-text'>{ data.timeline.two.title }</div>
      </div>
      <div className='timeline--event-line-2'></div>
      <div className='timeline--event-dot'>
        <div className='timeline--event-text'>{ data.timeline.three.title }</div>
      </div>
      <div className='timeline--event-line-2'></div>
      <div className='timeline--event-dot'>
        <div className='timeline--event-text'>{ data.timeline.four.title }</div>
      </div>
      <div className='timeline--event-line-3'></div>
      <div className='timeline--event-dot'>
        <div className='timeline--event-text'>{ data.timeline.five.title }</div>
      </div>
      <div className='timeline--event-line-dotted'></div>
      <div>
        <img className='timeline--arrow' src={arrow} />
        <div className='timeline--event-text timeline--event-text__end'>{ data.timeline.six.title }</div>
      </div>
   </div>
  );
};

export default TimelineComponent;