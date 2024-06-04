import './styles.css';

const CardComponentTwo = (props: any) => {
  return (
    <div className='card'>
      <div className='card--up-arrow'></div>
      <img src={ props.imgSrc } alt={ props.imgAlt } />
      <div className='card--title'>{ props.title }</div>
    </div>
  );
};

export default CardComponentTwo;