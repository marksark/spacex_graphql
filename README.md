# A SpaceX API Search using GraphQL, Apollo, and React
This app allows a user to search SpaceX launches. It supports filtering by Mission Name, Rocket Name, or Launch Year

## Development
Clone the repo and follow the instructions below to begin local development

### Backend (Server)
From the root directory of the app
```bash
cd server
npm install
# To begin running the backend on port 5000, use
npm run server
```

### Frontend (Client)
From the root directory of the app

```bash
cd client
npm install
# To begin the frontend of this app on port 3000, use
npm run start
```

#### Other Notes
- This app currently has separate commands to run the backend and frontend, so you will need at least 2 terminal tabs open (alternatively, you can use run-p or concurrently to run them at the same time)
- I am not ~~a cat~~ a graphql wizard, and this app is my first crack at it
- My next refactor of the app will be to submit a query with graphql that includes the filtered string, making the backend do the heavy lifting and returning only the data requested to the frontend. This will reduce the load on the server and make the frontend faster.
