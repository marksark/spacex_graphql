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