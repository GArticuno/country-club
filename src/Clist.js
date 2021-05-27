/* eslint-disable jsx-a11y/alt-text */
import React, { useState} from 'react';
import { gql, useQuery } from '@apollo/client';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const GET_C= gql`{
  Country{
    name,
    area,
    capital,
    population,
    subregion{name},
    flag{svgFile}
  }}`

export function CList(){
  const [tipo, setTipo]= useState();
  const [form, setForm]= useState();

  const { loading, error, data } = useQuery(GET_C);

  if (loading){
    return (
      <div className='loadingAndError'>
        <p className='lae'>
          Carregando...
        </p>
      </div>)}

  if (error){
    return( 
    <div className='loadingAndError'>
      <p className='lae'>
        Ocorreu um erro, provavelmente de onde vem os dados
        {console.log(error)}
      </p>
    </div>)}
  var paises = Object.values(data.Country);

  for (var i = 0; i < paises.length; i++) {
    if(i === 8){
      paises[i].subregion.name = "ZZNot_ExistZZ";
    }
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
  
  const compare = (a, b) => {
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

  const tipoOrder = (tp, f) =>{
      setTipo(tp)
      setForm(f)
    }
  return (
    <>
      <section id="lista">
          <div className="titulo">Bandeira</div>
          <div className="titulo">País
            <div>
              <BsFillCaretUpFill className="ordenar" onClick={()=> tipoOrder('name', 'asc')}/>
              <BsFillCaretDownFill className="ordenar" onClick={()=> tipoOrder('name','desc')}/>
            </div>
          </div>
          <div className="titulo">Capital
            <div>
              <BsFillCaretUpFill className="ordenar" onClick={()=>tipoOrder('capital', 'asc')}/>
              <BsFillCaretDownFill className="ordenar" onClick={()=> tipoOrder('capital','desc')}/>
            </div>
            </div>
          <div className="titulo">População
            <div>
              <BsFillCaretUpFill className="ordenar" onClick={()=>tipoOrder('population', 'asc')}/>
              <BsFillCaretDownFill className="ordenar" onClick={()=> tipoOrder('population','desc')}/>
            </div>
          </div>
          <div className="titulo">Área
            <div>
              <BsFillCaretUpFill className="ordenar" onClick={()=>tipoOrder('area', 'asc')}/>
              <BsFillCaretDownFill className="ordenar" onClick={()=> tipoOrder('area','desc')}/>
            </div>
          </div>
          <div className="titulo">SubRegião
            <div>
              <BsFillCaretUpFill className="ordenar" onClick={()=>tipoOrder('subregion', 'asc')}/>
              <BsFillCaretDownFill className="ordenar" onClick={()=> tipoOrder('subregion','desc')}/>
            </div>
            </div>
      </section>
        {paises.sort(compare).map((pais) => (
          <section id="lista" key={pais.name}>
            <img className="flag" src={pais.flag.svgFile} />
            <div id="name" className="data">{pais.name}</div>
            <div id="capital" className="data">{pais.capital}</div>
            <div id="population" className="data">{pais.population}</div>
            <div id="area" className="data">{pais.area}</div>
            <div id="subregion" className="data">{pais.subregion.name}</div>
          </section>))}
    </>
  );
}
