import {gql} from '@apollo/client';

// fetch all the launches
export const FETCH_LAUNCHES = gql`
    query {
        launches {
            flight_number
            launch_date_local
            mission_name
            rocket {
            rocket_name
            }
            links {
            video_link
            }
        }
    }
`;


// first attempt at filtered query
export const FETCH_LAUNCHES_FILTERED = gql`
    query {
        launches(
            filter: {
                OR: [ {mission_name: "Rocket"}] 
        }) {
            flight_number
            launch_date_local
            mission_name
            rocket {
            rocket_name
            }
            links {
            video_link
            }
        }
    }
`;