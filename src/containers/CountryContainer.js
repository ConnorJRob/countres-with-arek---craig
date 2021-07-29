import React, {useState, useEffect} from 'react';
import CountryList from '../components/CountryList.js'
import CountryDetail from '../components/CountryDetail.js'
import TotalPopulation from '../components/TotalPopulation.js'


const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const totalPopulation = countries.reduce((total, country) => {
        return total + country.population
    }, 0)

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => {
            setCountries(countries)
        })
    }

    const onCountryClick = function(country){
        setSelectedCountry(country);
    }

    return(
        <div className="country-container">
        <TotalPopulation totalPopulation={totalPopulation}/>
        <CountryDetail country={selectedCountry}/>
        <CountryList countries={countries} onCountryClick={onCountryClick}/>
        </div>
    )
};

export default CountryContainer;