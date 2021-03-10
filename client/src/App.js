import './App.css';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
} from '@apollo/client';

import Search from './components/Search';

// replace URI with eventual URL of server 
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

// sample query to grab all launches
// client.query({
//     query: gql`
//       query GetLaunches {
//         launches {
//           flight_number
//           launch_date_local
//           mission_name
//           rocket {
//             rocket_name
//           }
//           links {
//             video_link
//           }
//         }
//       }
//     `
// }).then(res => console.log(res));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1> Space X Search </h1>
        <Search/>
      </div>
    </ApolloProvider>
  );
}

export default App;
