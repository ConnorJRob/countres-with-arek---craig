import React from 'react';
import CountryListItem from './CountryListItem.js';

const CountryList = ({countries, onCountryClick}) => {

    const countryListItems = countries.map ((country, index) => {
        return <CountryListItem country ={country} key={index} onCountryClick={onCountryClick}/>
    })



    return(
        <>
        <ul>
        {countryListItems}
        </ul>
        </>
    )
}

export default CountryList;