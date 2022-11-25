import { useState } from 'react';

import { IoMdSearch } from 'react-icons/io';

import { ApolloDatProps, CountryProps } from '../../interfaces';
import CountryCard from '../CountryCard';
import Modal from '../Modal';
import { Grid, SearchBar } from './styles';


export default function CountryList({ countries }: ApolloDatProps) {
  const [data, setData] = useState(countries.slice(0,4));
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [country, setCountry]= useState({} as CountryProps);

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

  function modalOpen(country: CountryProps){
    setCountry(country)
    setIsModalOpen(true)
    
  }

  function modalClose(){
    setIsModalOpen(false)
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
        {data.map((country) => <CountryCard country={country} onClick={modalOpen} />)}
        {isModalOpen && <Modal country={country} onClose={modalClose} />}
      </Grid>
    </>
  )
}
