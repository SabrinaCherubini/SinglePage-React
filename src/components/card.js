import React, { Component } from "react";


class Card extends Component{
  render(){
    return(
      <div className='col'> 
        <div className="card my-4" style={{width: '18rem', textAlign: 'center'}}>
        <button onClick={()=>this.props.onIncrement(this.props.card)} className="btn btn-primary ">Aggiungi <span className="badge badge-light">{this.props.card.quantità}</span></button>
          <img src={this.props.card.img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{this.props.card.nome} Roll</h5>
               <p className="card-text">&euro;{this.props.card.prezzo}</p>
               <button onClick={()=>this.props.onDelete(this.props.card.id)} className="btn btn-danger">ELIMINA</button>
              
            </div>
        </div>
      </div>
      );
    }
  }
  
  export default Card;