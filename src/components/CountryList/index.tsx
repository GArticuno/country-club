import React, { useState } from 'react';
import {IoMdSearch, IoMdClose} from 'react-icons/io'
import { Countries, Country } from '../../interfaces';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  .card {
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    background-color: rgba(255,255,255,0.8);
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.3s ease, border-color 0.3s ease;
    min-width: 45%;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      color: #f09824;
      border-color: #f09824;
    }

    img {
      height: 70%;
      width: 70%;
    }

    h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }

    p {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1.5;
    }
  }

  @media (max-width: 600px) {

    width: 100%;
    flex-direction: column;
  }
`
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    border: 0;
    outline: 0;
    border-radius: 5px;
    width: 15rem;
    height:1.7rem;
    font-size: 1.3rem;    
  }

  button {
    cursor: pointer;
    
    height:1.7rem;
    width: 2.3rem;
    margin: 0 0.5rem;

    border: 1px solid #eaeaea;
    outline: 0;
  
    background-color: #ffffff;
    border-radius: 5px;
    font-size: 1.5rem;

    transition: color 0.3s ease, border-color 0.3s ease;

    &:hover {
        color: rgb(243, 78, 78);
        border-color: rgb(243, 78, 78);
    }

    .icon {
      text-align: center;
      
    }
  }
`
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: white;
    width: 100%;
    max-width: 400px;
    padding: 1.7rem 3.5rem;
    border: 3px solid #eaeaea;
    border-radius: 10px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    position: relative;
    text-align: center;

    img {
      width: 90%;
      height: 90%;
    }

    h2 {
      font-size: 2rem;
    }

    h3, p {
      text-align: start;
    }

    p {
      margin:0.2rem;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }

    .language_row {
      display: grid;
      grid-template-columns: 1fr;
    }

    button {
      border: 0;
      outline: 0;

      cursor: pointer;
      position: absolute;

      right: 0.5rem;
      top: 0.5rem;

      background: transparent;
      color: black;
      font-size: 1rem;
      transition: color 0.2s;
      &:hover {
        color: rgb(243, 78, 78);
      }
    }
  }
`

export default function CountryList({countries}: Countries) {
  const [data, setData] = useState(countries.slice(0,4));
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [country, setCountry]= useState({} as Country);

  const searchFilter = () =>{
    const newData = countries.filter(country => {      
      const itemData = `${country.name.toUpperCase()}`;
      
      const textData = filter.toUpperCase();
        
      return itemData.indexOf(textData) > -1;    
    });
    
    setData(newData);  
  }

  function handler(event: any){
    if(event.key == 'Enter'){
      searchFilter();
    }
  }

  function ModalOpen(country: Country){
    setCountry(country)
    setIsModalOpen(true)
    
  }

  function ModalClose(){
    setIsModalOpen(false)
  }

  function Modal() {
    return (
      <Overlay>
        <div className='container'>
          <img 
            src={`https://lipis.github.io/flag-icon-css/flags/4x3/${country.code.toLowerCase()}.svg`} 
            alt={country.code} 
          />
          <h2>{country.name}</h2>
          <h3>Native name</h3>
          <p>{country.native}</p>              
          <h3>Capital</h3>
          <p>{country.capital}</p>              
          <h3>Continent</h3>
          <p>{country.continent.name}</p>                      
          <button 
            type='button'
            onClick={ModalClose}
            aria-label='Close'
          >
            <IoMdClose aria-hidden="true"/>
          </button>
        </div>
      </Overlay>
    )
  }

  return (
    <>
      <SearchBar>
        <input
          type="text"
          onChange={event => setFilter(event.target.value)}
          placeholder={'Search here!'}
          onKeyPress={event => handler(event)}
        />
        <button
          type='button'
          onClick={searchFilter}
          aria-label='Search'
        >
        <IoMdSearch aria-hidden='true' className='icon'/>
        </button>
      </SearchBar>
      <Grid>
        {data.map((country) => (
          <div key={country.code} className='card' onClick={()=>ModalOpen(country)}>
            <img 
              src={`https://lipis.github.io/flag-icon-css/flags/4x3/${country.code.toLowerCase()}.svg`} 
              alt={country.code} />
            <h3>{country.name}</h3>
            <h4>Capital: {country.capital}</h4>
          </div>
        ))}
        {isModalOpen && <Modal/>}
      </Grid>
    </>
  )
}
