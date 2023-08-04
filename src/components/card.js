import Vestito from '../img/carousel3.jpg';

function Card(){
    return(
        <div className='col'> 
<div className="card" style={{width: '18rem', textAlign: 'center'}}>
  <img src={Vestito} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Vestito Lilla</h5>
    <p className="card-text">&euro;10</p>
    <button className="btn btn-outline-danger">ELIMINA</button>
  </div>
</div>
</div>
    );
}

export default Card;