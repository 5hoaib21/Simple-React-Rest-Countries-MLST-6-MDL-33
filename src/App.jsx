

import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())

// console.log(countriesPromise);


function App() {
  

  return (
    <>
        <Suspense fallback={<h4>Jhank is coming soon..</h4>}>

        <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
     

     
      

      

      
    </>
  )
}

export default App
