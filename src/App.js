import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';
import NavBar from './Components/NavBar';
import World from './Components/CountryLists';
import CountryLists from './Components/CountryLists';

function App() {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchdata = async()=>{
      setLoading(true)
      const response = await axios.get(`
      https://restcountries.com/v2/all`)
      
        console.log(response)
        setCountries(response.data)
        setLoading(false)
      }
 
      
  



  useEffect(()=>{

      fetchdata()

  },[])

  return (
    <>
      <NavBar />
      <CountryLists 
        countries={countries} 
        setCountries={setCountries}
        filter={filter}
        setFilter={setFilter}
        loading={loading}
        setLoading={setLoading}
        search={search}
        setSearch={setSearch}
        />

    

    </>
  );
}

export default App;
