import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Affichage({ tab }) {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="table-responsive" style={{ maxWidth: "80%" }}>
        <table className="table table-bordered table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Âge</th>
              <th>Ville</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tab.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.age}</td>
                <td>{item.ville}</td>
                <td>
                  <button className="btn btn-danger mx-1">Supprimer</button>
                  <Link to="/update">
                    <button className="btn btn-primary mx-1">Modifier</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-3">
          <Link to="/ajouter">
            <button className="btn btn-success">Ajouter</button>
          </Link>

          <Link to="/rechercher">
            <button className="btn btn-success">Rechercher</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
