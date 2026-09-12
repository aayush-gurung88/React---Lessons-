import pp from './assets/ronab.jpg'

function Card()
{
    return(
        <div className="card">
            <img className= "card-image" src={pp} alt="Profile picture" />
            <h2 className='card-title'>Aayush Gurung</h2>
            <p className='card-text'>I am studying bro code </p>
        </div>
    );
}

export default Card