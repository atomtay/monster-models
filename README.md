The Achillies heel:

```
findMovie: (parent, args) => {
			const film = movies.filter(film => film["id"] == args.id);
			return film[0];
		}
```

Server is running on http://localhost:4000
console.log(movies) =
[ { id: 'movie1', title: 'The Conjuring', year: 2013 },
{ id: 'movie2', title: 'Nightmare on Elm Street', year: 1984 },
{ id: 'movie3', title: 'The Hills Have Eyes', year: 1977 } ]

console.log(film) (the filtered one)==
[ { id: 'movie2', title: 'Nightmare on Elm Street', year: 1984 } ]

console.log(film[0]) = { id: 'movie2', title: 'Nightmare on Elm Street', year: 1984 }

Arrays and objects, oh my!
