import './styles.css';

const CardLastComponent = (props: any) => {
  return (
    <div className='card card--light-green'>
      <div className='card--up-arrow-light-green'></div>
      <img src={ props.imgSrc } alt={ props.imgAlt } />
      <div className='card--title'>{ props.title }</div>
    </div>
  );
};

export default CardLastComponent;