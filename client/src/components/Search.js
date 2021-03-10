import { useQuery } from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {FETCH_LAUNCHES} from '../graphql/Queries';
import ResultCard from './ResultCard';


export default function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const [launches, setLaunches] = useState([]);
    const [noDataNote, setNoDataNote] = useState('Loading...');

    const {data} = useQuery(FETCH_LAUNCHES);

    // TODO: Learn how to search with filter implemented in GraphQL
    
    // initialize the data with all launches
    useEffect(()=>{
        if(data){
            setLaunches(data.launches);
        }
    }, [data]);

    const filterLaunches = (e) => {

        // prevent page reload
        e.preventDefault();

        // filter launches again search term
        const filteredList = data.launches.filter(launch => (
            // allow filtering by name, rocket, and launch date
            launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            launch.rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            launch.launch_date_local.slice(0,4).includes(searchTerm)
        ));

        // return unique message if no results returned
        if(filteredList.length === 0 ){
            setNoDataNote('Your Search Results Returned 0 Matches! Please try again...');
        }
        
        // set filtered list to be displayed list
        setLaunches(filteredList);
    }

    return (
        <div>
            <form onSubmit={filterLaunches}>
                <input type='text' name='search' defaultValue={searchTerm} placeholder='Search (Mission, Rocket, or Year)' onChange={e => setSearchTerm(e.target.value)} />
                <button type='submit'>Filter!</button>
            </form>
            <h1>Launch Results</h1>
            {launches.length !== 0 ? launches.map(launch => (
                <ResultCard 
                    // added name to key to resolve console warnings of two keys being the same 
                    key={`${launch.flight_number}-${launch.mission_name}`} 
                    mission_name={launch.mission_name} 
                    launch_date_local={launch.launch_date_local} 
                    rocket_name={launch.rocket.rocket_name} 
                    video={launch.links.video_link}
                /> 
            )) : noDataNote
            }

        </div>
    )
};