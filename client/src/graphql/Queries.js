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
export const FETCH_LAUNCHES_FILTERED = (txt = '') => (gql`
    query(filter: OR[{
    launches: {
      mission_name: ${txt}
    },
    launches: {
      rocket: {
        rocket_name: ${txt}
      }
    },
    launches: {
        launch_date_local: ${txt}
    }
  }]) {
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
`);