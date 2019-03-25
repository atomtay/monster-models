const { GraphQLServer } = require("graphql-yoga");

let movies = [
	{
		id: `movie1`,
		title: "The Conjuring",
		year: 2013
	},
	{
		id: `movie2`,
		title: "Nightmare on Elm Street",
		year: 1984
	},
	{
		id: `movie3`,
		title: "The Hills Have Eyes",
		year: 1977
	}
];

const resolvers = {
	Query: {
		info: () =>
			`Some data about horror movies, but also just some normal folks.`,
		allMovies: () => movies,
		findMovie: (parent, args) => {
			const film = movies.filter(film => film["id"] == args.id);
			return film[0];
		}
	}
};

const server = new GraphQLServer({
	typeDefs: "./src/schema.graphql",
	resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
