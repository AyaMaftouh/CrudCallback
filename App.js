import React, { useState } from 'react';
import Affichage from './Affichage';
import Ajouter from './OpperationCrud/Ajouter';
import Recherche from './OpperationCrud/Recherche';
import Update from './OpperationCrud/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

export default function App() {
  // const dataa = [
  //   {
  //   id: 1,
  //    nom: 'Dupont',
  //    prenom: 'Jean',
  //     age: 29,
  //     ville: 'Paris',},
    
  //   {
  //     id: 2,
  //     nom: 'Martin',
  //     prenom: 'Sophie',
  //     age: 34,
  //    ville: 'Lyon',
  //    },
    
  //     {id: 3,
  //     nom: 'Bernard',
  //     prenom: 'Luc',
  //     age: 45,
  //     ville: 'Marseille',
  //    },
    
  //     {
  //       id: 4,
  //       nom: 'Robert',
  //       prenom: 'Marie',
  //       age: 28,
  //       ville: 'Toulouse',
  //                       },
  //    {
    
  //     id: 5,
  //     nom: 'Petit',
  //     prenom: 'Hugo',
  //     age: 23,
  //     ville: 'Nice', },];
  const [data,setdata]=useState([]); 


 return (
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<Affichage tab={data} />} />
    <Route path="/ajouter" element={<Ajouter call={setdata} data={data} />} />
    <Route path="/rechercher" element={<Recherche/>}/>
 <  Route path = "/update" element= {<Update/>}/>
</Routes>
</BrowserRouter>
 );
}
