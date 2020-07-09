import React from 'react'
import Card from './Card'
import useFetch from '../hooks/useFetch'
import Loading from './Loading'

const breweryDbUrl = 'https://sandbox-api.brewerydb.com/v2/breweries?key=0ce1f924be4e0f6b4cad49d10a2688f4';
const openDbUrl = `https://cors-anywhere.herokuapp.com/https://api.openbrewerydb.org/breweries`;
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'


export default function Breweries() {
    const url = corsAnywhere + breweryDbUrl
    const { loading, data: breweries, error } = useFetch(url);
    console.log('data: ', breweries)
    
    if (loading) {
        return <Loading />
    }
    if (error !== null) {
        return <p>ERROR: {error}</p>
    }
    return (
        <ul className="grid space-around">
            {breweries.data.map(b => {
                return (
                <Card header={b.name} subheader={b.nameShortDisplay} avatar={b.images ? b.images.squareMedium : ''} name={b.name} href={b.website} >

                </Card>
                )
            })}
        </ul>
    );
}
