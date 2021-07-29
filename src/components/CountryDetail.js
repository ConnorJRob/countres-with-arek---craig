import React from 'react';

const CountryDetail = ({country}) => {

    if(country === null){
        return null
    }
    
    return(
       <div>
           <h3>{country.name}</h3>
           <img src={country.flag} alt={country.name} width="150"></img>
           <p>Population: {country.population}</p>
           <p>Region: {country.region}</p>
       </div>
    
    )
}

export default CountryDetail;