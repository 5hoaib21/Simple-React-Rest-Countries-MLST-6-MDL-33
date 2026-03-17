import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  // console.log(country.area.area);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // first system  (Basic system)
    // if(visited){
    //   setVisited(false)
    // } else{
    //   setVisited(true)
    // }

    // second system
    // setVisited(visited ? false : true)

    // third system
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Official Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited} className="counter">
        {visited ? "visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlag(country?.flags?.flags?.png);
        }}
        className="counter"
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
