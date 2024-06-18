import React from "react";
import {Link} from "react-router-dom" ; 
import { useState } from "react";

export default function Ajouter({call , data}) {
const id= data.length+1;

const [nom,setnom]=useState();
const[prenom,setprenom]=useState();
const[age,setage]=useState();
const[ville,setville]=useState();

  function Add(){
    
    call([...data,{ id:id,nom:nom,prenom:prenom,age:age,ville:ville}])
    setnom("");
    setprenom("");
    setage("");
    setville("");
  }


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="col-4">
        <div className="form-group">
          <label htmlFor="nom" >Nom:</label>
          <input type="text" className="form-control" id="nom" name="nom" value={nom} onChange={(event)=>{setnom(event.target.value)}} />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom:</label>
          <input
            type="text"
            className="form-control"
            id="prenom"
            name="prenom"  value={prenom} onChange={(event)=>{setprenom(event.target.value)}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Âge:</label>
          <input type="number" className="form-control" id="age" name="age"  value={age} onChange={(event)=>{setage(event.target.value)}} />
        </div>
        <div className="form-group">
          <label htmlFor="ville">Ville:</label>
          <input type="text" className="form-control" id="ville" name="ville"  value={ville} onChange={(event)=>{setville(event.target.value)}} />
        </div>
        <button onClick={Add} type="button" className="btn btn-success">
          Ajouter
        </button>
        <Link to='/'> <button type="button" className="btn btn-primary my-5">Go to App</button></Link>

      </form>
    </div>
  );
}
