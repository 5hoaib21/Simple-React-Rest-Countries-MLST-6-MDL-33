import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([])


  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (flag)=>{
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }




  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h1>Countries are coming soon... {countries.length}</h1>
      <h3>Total Visited Country: {visitedCountries.length}</h3>
      <h3>Total Flags: {visitedFlags.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li
          key={country.cca3.cca3}
          >{country.name.common}</li>)
        }
      </ol>
      <div>
        {
          visitedFlags.map((flag, i) => <img key={i} src={flag}></img>)
        }
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
