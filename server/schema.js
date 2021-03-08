const axios = require('axios');
const { 
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');


// Launch Type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        launch_date_local: { type: GraphQLString },
        mission_name: { type: GraphQLString },
        rocket: { type: RocketType},
        links: { type: VideoLink}
    })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString }
    })
});

// Video link
const VideoLink = new GraphQLObjectType({
    name: 'Link',
    fields: () => ({
        video_link: { type: GraphQLString }
    })
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios.get('https://api.spacexdata.com/v3/launches')
                .then(res => res.data)
                .catch(err => console.log(`Oh No! Something went wrong: ${err}`))
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt}
            },
            resolve(parent, args) {
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                .then(res => res.data)
                .catch(err => console.log(`Oh No! Something went wrong: ${err}`))
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});