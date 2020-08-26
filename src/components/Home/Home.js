import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import './Home.scss';
import '../../App.scss';

const Home = () => {
  return (
    <>
      <header className="App-header">
        <CardMedia
          component="img"
          alt="Pikachu"
          image="/pikachu-logo.gif"
          title="Pikachu"
          className="pikachu__image"
        />
        <p>
          A Pokemon Searcher App using Material UI
        </p>
        <Link className="App-link" to="/pokedex">Go to Pokedex</Link>
      </header>
    </>
  )
};

export default Home;
