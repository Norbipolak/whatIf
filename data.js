let myFavMovies = [
    {
        title: "Lost Bullet",
        year: 2020,
        rating: 6.3,
        description: "A small time delinquent, turned police mechanic for a go fast task force, is forced to defend his innocence when his mentor is killed by dirty cop",
        directors: "Guillaume Pierret",
        writers: ["Guillaume Pierret", "Alban Lenoir", "Kamel Guemra"],
        stars: ["Alban Lenoir", "Nicolas Duvauchelle", "Ramzy Bedia"],
        genres: ["Action", "Crime", "Thriller"]
    },
    {
        title: "Godfather",
        year: 1972,
        rating: 9.2,
        description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger",
        directors: "Francis Ford Coppola",
        writers: ["Mario Puzo", "Francis Ford Coppola"],
        stars: ["Marlon Brando", "Al Pacino", "James Caan"],
        genres: ["Crime", "Drama"]
    },
    {
        title: "Belle and Sebastian",
        year: 2013,
        rating: 6.9,
        description: "A six-year-old boy and his dog look to foil a Nazi effort to capture French Resistance fighters",
        directors: "Nicolas Vanier",
        writers: ["Juliette Sales", "Fabien Suarez", "Nicolas Vanier"],
        stars: ["Felix Bossuet", "Tcheky Karyo", "Margaux Chatelier"],
        genres: ["Adventure", "Drama", "Family"]
    }, 
    {
        title: "Mafioso",
        year: 1962,
        rating: 7.6,
        description: "When a good-natured factory supervisor living in Milan with his Northern wife returns to his native Sicily, a decades'-old oath forces him to fulfill a nightmarish obligation.",
        directors: "Alberto Lattuada",
        writers: ["Rafael Azcona", "Bruno Caruso", "Marco Ferreri"],
        stars: ["Alberto Sordi", "Norma Bengell", "Gabriella Conti"],
        genres: ["Comedy", "Crime", "Drama"]
    }
]

for (const movie of myFavMovies) {
    console.log(movie.title)

}

  for (let i = 0; i < myFavMovies.length; i++) {
    console.log(myFavMovies[i].title);
}

// averate rate

let totalRate = 0 

for (const movie of myFavMovies) {
    totalRate += movie.rating // rate = rate + variable   -   rate +- variable
}

const averageRate = totalRate / myFavMovies.length
console.log(averageRate)

// newest movie

let newestMovie = myFavMovies[0]

for (const movie of myFavMovies) {
    if (movie.year > newestMovie.year) {
        newestMovie = movie 
    }
    }
console.log(newestMovie.title)

//stars by movies 

let starByMovies = ''
for (const movie of myFavMovies){
    starByMovies += movie.title + "\n"
       for (const star of movie.stars)
       starByMovies += star + "\n"
    }
console.log(starByMovies)



