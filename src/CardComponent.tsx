import './styles.css';

const CardComponent = (props: any) => {
  return (
    <div className='card'>
      <img src={ props.imgSrc } alt={ props.imgAlt } />
      <div className='card--title'>{ props.title }</div>
      <div className='card--down-arrow'></div>
    </div>
  );
};

export default CardComponent;