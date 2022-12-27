import React, { useState } from 'react';
const genres = ['action', 'comedy', 'drama'];
const movies = [
  {
    genre: 'Action',
    name: 'Best action movie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur consequuntur culpa eius, esse facilis impedit inventore ipsam iure, odio odit quae sed sit soluta tempore temporibus ut voluptatibus.',
  },
  {
    genre: 'Action',
    name: 'Worst action movie',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    genre: 'Comedy',
    name: 'Ace Ventura',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur consequuntur culpa eius, esse facilis impedit inventore ipsam iure, odio odit quae sed sit soluta tempore temporibus ut voluptatibus.',
  },
  {
    genre: 'Comedy',
    name: 'Ace Ventura 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    genre: 'Drama',
    name: 'Titanic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consectetur consequuntur culpa eius, esse facilis impedit inventore ipsam iure, odio odit quae sed sit soluta tempore temporibus ut voluptatibus.',
  },
]

export const GenreToggle = () => {
  const [genre, setGenre] = useState('all');

  const displayMovies = () => {
    let data = [];

    if (genre !== 'all') {
      data = movies.filter(item => item.genre.toLowerCase() === genre);
    } else {
      data = movies;
    }

    return (
      data.map((item, i) => (<li key={item + i}>
        <div>
          <h3>{item.name}</h3>
          <span>Description: {item.description}</span>
        </div>
      </li>))
    )
  }

  return (
    <div className='genre-container'>
      <h1>Chose genre</h1>
      <div>
        <span onClick={() => setGenre('all')} key='all'> All </span>
        {genres.map((item) => (
          <span onClick={() => setGenre(item)} key={item}> {item} </span>
        ))}
      </div>
      <div>
        <ul>
          {displayMovies()}
        </ul>
      </div>
    </div>
  );
};
