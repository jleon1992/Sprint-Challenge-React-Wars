import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Characters from './components/Characters'

import {Button} from 'reactstrap'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // const Baseurl = 'https://rickandmortyapi.com/api/character/'

  // const apiPage =  `?page=`
  const[characters, setCharacters]=useState([])
  const[pageNumber, setPageNumber]=useState(1)
  // useEffect(()=>{
    
  // })
  // function nextPage(){
  //   setPageNumber(pageNumber+1)
  //   // console.log(pageNumber)
  // }
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    
    .then(response=>{
      // console.log(response.data.results)
      setCharacters(response.data.results)
      console.log(pageNumber)
    })
    .catch(error=>{
      console.log(error)
    })
  },[pageNumber])

  return (
    <div className="App">

      
      <div>
      <Button color="secondary"  onClick={() => pageNumber >= 1 ? setPageNumber(pageNumber + 1): null}>Previous Page</Button>
    {/* {console.log(pageNumber)} */}
      <Button color="primary" onClick={() => setPageNumber(pageNumber + 1)}>Next Page</Button>
      </div>
      <Characters characters = {characters} />
      
    </div>
  );
}

export default App;
