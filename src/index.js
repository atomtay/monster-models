const { GraphQLServer } = require("graphql-yoga");

let movies = [
	{
		id: `movie0`,
		title: "The Conjuring",
		year: 2013
	},
	{
		id: `movie1`,
		title: "Nightmare on Elm Street",
		year: 1984
	},
	{
		id: `movie2`,
		title: "The Hills Have Eyes",
		year: 1977
	}
];

let movieID = movies.length;
const resolvers = {
	Query: {
		info: () =>
			`Some data about horror movies, but also just some normal folks.`,
		allMovies: () => movies,
		findMovie: (parent, args) => movies.filter(film => film["id"] == args.id)[0]
	},
	Mutation: {
		addMovie: (parent, args) => {
			const newMovie = {
				id: `movie${movieID++}`,
				title: args.title,
				year: args.year
			};
			movies.push(newMovie);
			return newMovie;
		},
		updateMovie: (parent, args) => {
			const selectedMovie = movies.filter(film => film["id"] == args.id)[0];
			if (args.title) selectedMovie.title = args.title;
			if (args.year) selectedMovie.year = args.year;
			return selectedMovie;
		}
	}
};

const server = new GraphQLServer({
	typeDefs: "./src/schema.graphql",
	resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
