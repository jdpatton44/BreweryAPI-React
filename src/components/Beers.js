import React from 'react'
import Loading from './Loading'
import Card from './Card'
import useFetch from '../hooks/useFetch'


const breweryDbUrl = 'https://sandbox-api.brewerydb.com/v2/beers?key=0ce1f924be4e0f6b4cad49d10a2688f4';
const openDbUrl = `https://cors-anywhere.herokuapp.com/https://api.openbrewerydb.org/breweries`;
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'


export default function Beers(props) {
    const url = corsAnywhere + breweryDbUrl
    const { loading, data: beers, error } = useFetch(url);
    console.log('data: ', beers)

    if (loading) {
        return <Loading />
    }
    if (error !== null) {
        return <p>ERROR: {error}</p>
    }

    return (
        <ul className="grid space-around">
            {beers.data.map(b => {
                return (
                <Card key={b.id} header={b.name} subheader={b.nameShortDisplay} avatar={b.labels ? b.labels.medium : ''} name={b.name} href={b.website} >
                    <div className='center-text'>
                        <strong>{b.style ? b.style.category.name : ''}</strong>
                    </div>
                    <p>{b.description}</p>

                </Card>
                )
            })}
        </ul>
    );
}