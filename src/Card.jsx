import cardImage from './assets/logo.svg';

function Card({id, name, desc}) {
    return (
        <div className='card' key={id}>
            <img className='card-image' src={cardImage} alt="Image alternate" />
            <h2 className='card-title'>{name}</h2>
            <p className='card-text'>{desc}</p>
        </div>
    );
}

export default Card;
