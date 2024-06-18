import React from "react"
export default function Update(){
    return(
        <div className="d-flex justify-content-center align-items-center vh-60">

        <form>

        <h1>Modification</h1>

        <div className="col-12">
            <label  className="form-label">ID:</label>
            <input type="text" className="form-control"/>
        </div>

        <div className="col-12">
            <label  className="form-label">NOM:</label>
            <input type="email" className="form-control" />
        </div>

        <div className="col-12">
            <label  className="form-label">PRENOM:</label>
            <input type="email" className="form-control" />
        </div>

        <div className="col-12">
            <label  className="form-label">PRENOM:</label>
            <input type="email" className="form-control" />
        </div>

        <div className="col-12">
            <label  className="form-label">AGE:</label>
            <input type="email" className="form-control" />
        </div>

        <div className="col-12">
            <label  className="form-label">VILLE:</label>
            <input type="email" className="form-control" />
        </div>


             <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Update</button>
            </div>  
              
        </form>
    </div>
    )
}