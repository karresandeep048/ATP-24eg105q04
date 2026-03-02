//Movie Streaming Platform
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//1. filter() only "Sci-Fi" movies
let ScifiMovies=movies.filter(movie=>movie.genre=="Sci-Fi")
console.log(ScifiMovies)
// 2. map() to return:
            //"Inception (8.8)"
const result = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log(result);
 //3. reduce() to find average movie rating
const avg = movies.reduce((accumulator, m) => accumulator+ m.rating, 0) / movies.length;
console.log(avg);
//4. find() movie "Joker"
let r=movies.find(movie=>movie.title=="Joker")
console.log(r)
 //5. findIndex() of "Avengers"
let index=movies.findIndex(movie=>movie.title=="Avengers")
console.log(index)
