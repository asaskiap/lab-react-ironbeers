import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import beersImage from './../assets/beers.png';
import randomBeerImage from './../assets/random-beer.png';
import newBeerImage from './../assets/new-beer.png';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="HomeViewSection">
          <img src={beersImage} alt="beers" />
          <h1>
            <Link to="/beers" className="HomeViewLink">
              All Beers
            </Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quo
            nostrum atque alias maxime hic est eligendi earum quas explicabo
            maiores tempora deleniti voluptatum non nobis et molestias eveniet
            harum.
          </p>
        </section>

        <section className="HomeViewSection">
          <img src={randomBeerImage} alt="random_beers" />
          <h1>
            <Link to="/random-beer" className="HomeViewLink">
              Random Beer
            </Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quo
            nostrum atque alias maxime hic est eligendi earum quas explicabo
            maiores tempora deleniti voluptatum non nobis et molestias eveniet
            harum.
          </p>
        </section>

        <section className="HomeViewSection">
          <img src={newBeerImage} alt="new_beers" />
          <h1>
            <Link to="/new-beer" className="HomeViewLink">
              New Beer
            </Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quo
            nostrum atque alias maxime hic est eligendi earum quas explicabo
            maiores tempora deleniti voluptatum non nobis et molestias eveniet
            harum.
          </p>
        </section>
      </div>
    );
  }
}

export default Home;
