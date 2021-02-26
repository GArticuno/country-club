/*
Why i use js in this project instead of tsx?
---------------------------------------------
If I used tsx, my code should look like this:

*/

/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useState } from 'react';

interface InterfaceCountry {
  name: string;
  area: number;
  capital: string;
  population: number;
  subregion:{name: string};
  flag:{svgFile: string};
}

interface CountryData {
  Country: InterfaceCountry[];
}

const GET_C= gql`{
  Country{
    name,
    area,
    capital,
    population,
    subregion{name},
    flag{svgFile}
  }}`

export function App(){
  const [tipo, setTipo]=useState('name');
  const [form, setForm]= useState('asc')

  const compare = (a: any, b: any) => {
    let A;
    let B;
    let comparison = 0;
    if(tipo==='name'){
      A = a.name.toUpperCase();
      B= b.name.toUpperCase();
      A = A.normalize("NFD").replace(/[^A-Zs]/g, "");
      B = B.normalize("NFD").replace(/[^A-Zs]/g, "");
    }
    if(tipo==='capital'){
      A = a.capital.toUpperCase();
      B= b.capital.toUpperCase();
      A = A.normalize("NFD").replace(/[^A-Zs]/g, "");
      B = B.normalize("NFD").replace(/[^A-Zs]/g, "");
    }
    if(tipo==='subregion'){
      A = a.subregion.name.toUpperCase();
      B= b.subregion.name.toUpperCase();
      A = A.normalize("NFD").replace(/[^A-Zs]/g, "");
      B = B.normalize("NFD").replace(/[^A-Zs]/g, "");
    }
    if(tipo==='population'){
      A = a.population;
      B= b.population;
    }
    if(tipo==='area'){
      A = a.area;
      B= b.area;
    }
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    if(form==='desc'){ return comparison *-1}
    else{return comparison}
  }

  const tipoOrder = (tp: string, f: string) =>{
    setTipo(tp);
    setForm(f);
  }

  function CountryIndex(): JSX.Element{
    const { loading, error, data } = useQuery<CountryData>(GET_C);

      if (loading){ return (<div>Carregando...</div>);}
      
      if (error){ return (<div>Error :(</div>);}

      /* When you import this file for the App.tsx 
      the data can be two things: CountryData or undefined;
      The possibility to be undefined force me to use data.Country without a sort or even some 
      fixes on the api.
      The only way to use data.Country is this way:
      ------------------------------------------------
          {data && data.Country.map((pais) => (
          <section id="lista" key={pais.name}>
            <img className="flag" src={pais.flag.svgFile} />
            <div id="name" className="data">{pais.name}</div>
            <div id="capital" className="data">{pais.capital}</div>
            <div id="population" className="data">{pais.population}</div>
            <div id="area" className="data">{pais.area}</div>
            <div id="subregion" className="data">{pais.subregion.name}</div>
          </section>))}
      ------------------------------------------------
      */

      let paises = data.Country;

      for (var i = 0; i < paises.length; i++) {
        if (paises[i].subregion === null) {
          paises[i].subregion = { name: "ZZNot_ExistZZ" };
        }
        if (paises[i].capital === '') {
          paises[i].capital = "ZZNot_ExistZZ";
        }
        if (paises[i].area === null) {
          paises[i].area = 0;
        }
        if (paises[i].population === null) {
          paises[i].population = 0;
        }
      }
      //Only Antartica have "subregion:{name:''}" so it is a special case
      paises[8].subregion.name = "ZZNot_ExistZZ";
      return (

        {paises.sort(compare).map((pais) => (
          <section id="lista" key={pais.name}>
            <img className="flag" src={pais.flag.svgFile} />
            <div id="name" className="data">{pais.name}</div>
            <div id="capital" className="data">{pais.capital}</div>
            <div id="population" className="data">{pais.population}</div>
            <div id="area" className="data">{pais.area}</div>
            <div id="subregion" className="data">{pais.subregion.name}</div>
          </section>))}
      );
  }
  return(
    <>
    <section id="lista">
      <div id="titulo">Bandeira</div>
      <div id="titulo">País
        <div>
          <BsFillCaretUpFill id="ordenar" onClick={()=> tipoOrder('name', 'asc')}/>
          <BsFillCaretDownFill id="ordenar" onClick={()=> tipoOrder('name','desc')}/>
        </div>
      </div>
      <div id="titulo">Capital
        <div>
          <BsFillCaretUpFill id="ordenar" onClick={()=>tipoOrder('capital', 'asc')}/>
          <BsFillCaretDownFill id="ordenar" onClick={()=> tipoOrder('capital','desc')}/>
        </div>
        </div>
      <div id="titulo">População
        <div>
          <BsFillCaretUpFill id="ordenar" onClick={()=>tipoOrder('population', 'asc')}/>
          <BsFillCaretDownFill id="ordenar" onClick={()=> tipoOrder('population','desc')}/>
        </div>
      </div>
      <div id="titulo">Área
        <div>
          <BsFillCaretUpFill id="ordenar" onClick={()=>tipoOrder('area', 'asc')}/>
          <BsFillCaretDownFill id="ordenar" onClick={()=> tipoOrder('area','desc')}/>
        </div>
      </div>
      <div id="titulo">SubRegião
        <div>
          <BsFillCaretUpFill id="ordenar" onClick={()=>tipoOrder('subregion', 'asc')}/>
          <BsFillCaretDownFill id="ordenar" onClick={()=> tipoOrder('subregion','desc')}/>
        </div>
        </div>
  </section>
  <CountryIndex/>
  </>
  );
}
