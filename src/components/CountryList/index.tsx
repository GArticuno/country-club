import { useEffect, useState } from 'react';

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

  function modalOpen(country: CountryProps){
    setCountry(country)
    setIsModalOpen(true)
    
  }

  function modalClose(){
    setIsModalOpen(false)
  }

  useEffect(() => {
    if(filter.length === 0) {
      setData(countries.slice(0,4))
    } else {
      const filtered = countries.filter(country => country.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
      setData(filtered);
    }
  }, [filter]);

  return (
    <>
      <SearchBar>
        <input
          type="text"
          onChange={event => setFilter(event.target.value)}
          placeholder={'Search here!'}
        />
      </SearchBar>
      <Grid>
        {data.map(country => (<CountryCard country={country} onClick={modalOpen} />))}
        {isModalOpen && <Modal country={country} onClose={modalClose} />}
      </Grid>
    </>
  )
}
