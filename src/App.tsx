import React from 'react';
import './styles.css';
import CardComponent from './CardComponent';
import CardComponentTwo from './CardComponentTwo';
import CardComponentThree from './CardComponentThree';
import data from './data.json'

//Images
import family from './family.svg';

const App: React.FC = () => {
  return (
    <div>
      <CardComponentTwo imgSrc={family} imgAlt={data.cardData.birth.imgAlt} title={data.cardData.birth.title} />
      {/* <CardComponentThree imgSrc={family} imgAlt={data.cardData.contribution.imgAlt} title={data.cardData.contribution.title} /> */}
    </div>
  );
};

export default App;
