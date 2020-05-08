# Movie App as a Single Page Application

[The Movie Database](https://developers.themoviedb.org/3) Api is used in the app. The app mainly is used for seeing recent popular movies and actors, and searching for tv movies.

The SPA with three pages (routes):

- Home page, by default rendering popular tv movies.
- A movie detail page, with information about specific movie and its actors.
- Notfound page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Getting Started

To get started you can simply clone the repo and install the dependencies and run

| Steps   | with [Yarn](https://yarnpkg.com/) | with [NPM](https://www.npmjs.com/) |
| ------- | --------------------------------- | ---------------------------------- |
| Install | `yarn install`                    | `npm install`                      |
| Run     | `yarn start`                      | `npm start`                        |

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Directory Layout

```

├── public
├── src                                   # The source code of the application
│   ├── actions                           # Actions are dispatched by components
│   │   ├── movie.js
│   │   ├── movies.js
│   │   ├── search.js
│   │   └── types.js
│   ├── components
│   │   ├── movie
│   │   │   ├── Movie.js
│   │   │   ├── MovieActors.js
│   │   │   ├── MovieBreadcrump.js
│   │   │   └── MovieInfo.js
│   │   ├── layout
│   │   │   ├── Home.js
│   │   │   ├── Navbar.js
│   │   │   ├── Spinner.js
│   │   │   └── NotFound.js
│   │   └── movies
│   │       ├── LoadMoreButton.js
│   │       ├── MoviesGrid.js
│   │       ├── PopularMovie.js
│   │       └── SearchBar.js
│   │
│   ├── reducers                          # Reducers produce the state of an application
│   │   ├── movie.js
│   │   ├── movies.js
│   │   ├── search.js
│   │   └── index.js
│   ├── App.css
│   ├── App.js
│   └── store.js                          # Redux store

```

### Application

#### ES6 + Features

- Arrow Functions
- Template Literals
- Destructuring Assignment
- Block-Scoped Variables Let and Const
- async await with try/catch
- Spread operator
- Modules export/import
- Default Parameters

#### Libraries/Frameworks

- react: UI library
- react-router-dom: The router components
- redux react-redux: Global State Management
- redux-thunk: Middleware for async calls
- reactstrap: React integration for Bootstrap UI Framework
- axios: to make HTTP requests

#### Flow

##### Component Hierarchy

```
  App
│ │
│ │
│ ├── Home
│ │   ├── PopularMovie
│ │   │     ├── Navbar
│ │   │     └── SearchBar
│ │   ├── MoviesGrid
│ │   ├── Spinner
│ │   └── LoadMoreButton
│ │
│ ├── Movie
│ │   ├── Spinner
│ │   ├── MovieBreadcrump
│ │   ├── MovieInfo
│ │   └── MovieActors
│ │
│ │
│ └── NotFound

```

##### Global State Flow

In this App, Redux is responsible for all state management, If the state is changed, firstly it is stored in Reduc store, then it is passed to components.

- movies: stores popular movies or searched movies.
- movie: stores movie information.
- search: stores the search term that is typed in the searchbar.

```
{
  movie: {
    data: {},
    actors: [],
    fetchMoviePending: false,
    fetchMovieError: false
  },
  movies: {
    data: [],
    popularMovie: {},
    currentPage: 1,
    fetchMoviesPending: false,
    fetchMoviesError: false
  },
  search: {
    searchTerm: ''
  }
}

```

#### Api Calls

1. On the Home Page the request is made to below address, and the response also consists of popular
   movies. It is stored as an array.

// Get popular movies

```

`api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&page=1`

```

// Get movies by search term

```

`https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&page=1`

```

// Load More Movies by button. 

There is a state called as currentPage. If there is search, load more button fetchs more movies by search term by using current page. If there is not search, it just fetchs popular movies, and add into home page by using current page.

##### NOTE:

The better way is to store movies by their id into session storage so that it prevents unneccessary request.

2. On the Movie Page there are 2 requests, and the responses consist of movies and credits of the movie. 

// Get movie by ID => Used to get Movie Details

```
`https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>`

```
// Get movie Credits. => Used to get actors from the response

```
`https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>`

```

##### Additional Works
1. The styles and component hiearchy needs some works.
2. Can be added more movie information on the detail page or more search functionality.
3. This redux implementation is an old way, better to use redux hooks.

### Author

- [salih18](https://github.com/salih18)
