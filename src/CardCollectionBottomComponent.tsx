import './styles.css';
import CardComponentTwo from './CardComponentTwo';
import CardComponentThree from './CardComponentThree';
import data from './data.json';

//Images
import debt from './debt.svg';
import home from './home.svg';
import emergency from './em-fund.svg';
import vision from './vision.svg';

const CardCollectionBottomComponent = () => {
  return (
    <div className='card-collection'>
      <div className='card-collection--block card-collection--new-home'>
        <div className='card-collection--block__stroke'></div>
        <CardComponentTwo imgSrc={home} imgAlt={data.cardData.newHome.imgAlt} title={data.cardData.newHome.title} />
      </div>
      <div className='card-collection--block card-collection--emergency-fund'>
        <div className='card-collection--block__stroke'></div>
        <CardComponentTwo imgSrc={emergency} imgAlt={data.cardData.emergencyFund.imgAlt} title={data.cardData.emergencyFund.title} />
      </div>
      <div className='card-collection--block card-collection--debt-free'>
        <div className='card-collection--block__stroke'></div>
        <CardComponentTwo imgSrc={debt} imgAlt={data.cardData.debtFree.imgAlt} title={data.cardData.debtFree.title} />
      </div>
      <div className='card-collection--block card-collection--contribution'>
        <div className='card-collection--block__stroke'></div>
        <CardComponentThree imgSrc={vision} imgAlt={data.cardData.contribution.imgAlt} title={data.cardData.contribution.title} />
      </div>
    </div>
  );
};

export default CardCollectionBottomComponent;