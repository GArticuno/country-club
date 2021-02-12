/* eslint-disable jsx-a11y/alt-text */
import React, { Component} from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
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

class App extends Component{
    state={
        tipo:"",
        form:""
    }
  render(){
    const compare = (a, b) => {
      let A;
      let B;
      let comparison = 0;
      if(this.state.tipo==='name'){
        A = a.name.toUpperCase();
        B= b.name.toUpperCase();
        A = A.normalize("NFD").replace(/[^A-Zs]/g, "");
        B = B.normalize("NFD").replace(/[^A-Zs]/g, "");
      }
      if(this.state.tipo==='capital'){
        A = a.capital.toUpperCase();
        B= b.capital.toUpperCase();
        A = A.normalize("NFD").replace(/[^A-Zs]/g, "");
        B = B.normalize("NFD").replace(/[^A-Zs]/g, "");
      }
      if(this.state.tipo==='subregion'){
        A = a.subregion.name.toUpperCase();
        B= b.subregion.name.toUpperCase();
        A = A.normalize("NFD").replace(/[^A-Zs]/g, "");
        B = B.normalize("NFD").replace(/[^A-Zs]/g, "");
      }
      if(this.state.tipo==='population'){
        A = a.population;
        B= b.population;
      }
      if(this.state.tipo==='area'){
        A = a.area;
        B= b.area;
      }
      if (A > B) {
        comparison = 1;
      } else if (A < B) {
        comparison = -1;
      }
      if(this.state.form==='desc'){ return comparison *-1}
      else{return comparison}
    }

    const tipoOrder = (tp, f) =>{
        return this.setState({tipo: tp, form: f})
      }

    return (
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
        <Query query={GET_C}>
          {({ loading, error, data }) => {
            if (loading) return <div></div>;
            if (error) return <div>Error :(</div>;
              var paises= Object.values(data.Country);
              for(var i=0;i<paises.length;i++){
                if(paises[i].subregion ===null){
                  paises[i].subregion={name: "ZZNot_ExistZZ"}
                }
                if(paises[i].capital ===''){
                  paises[i].capital="ZZNot_ExistZZ"
                }
                if(paises[i].area ===null){
                  paises[i].area=0
                }
                if(paises[i].population ===null){
                  paises[i].population=0
                }
              }
              paises[8].subregion.name= "ZZNot_ExistZZ"
             return(
              paises.sort(compare).map((pais) =>(  
                <section id="lista" key={pais.name}>
                  <img className="flag" src={pais.flag.svgFile}/>
                  <div id="name" className="data">{pais.name}</div>
                  <div id="capital" className="data">{pais.capital}</div>
                  <div id="population" className="data">{pais.population}</div>
                  <div id="area" className="data">{pais.area}</div>
                  <div id="subregion" className="data">{pais.subregion.name}</div>
                </section>))
             )
             }}
        </Query>
      </>
    );
  }
}

export default App;
