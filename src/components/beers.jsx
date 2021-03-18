import React, { Component } from 'react';
import homeIcon from './../assets/home.png';
import { Link } from 'react-router-dom';
import { listBeers } from './../services/beer-api';

class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    this.loadBeers();
  }

  async loadBeers() {
    const list = await listBeers();

    this.setState({
      beers: list,
    });
    console.log(this.state.beers);
  }
  render() {
    return (
      <div>
        <Link to="/">
          <header>
            <img src={homeIcon} alt="home" />
          </header>
        </Link>

        {this.state.beers && (
          <ul className="beerList">
            {this.state.beers.map((beer) => {
              return (
                <li key={beer._id} className="singleBeerInList">
                  <Link to={`/beers/${beer._id}`}>
                    <img src={beer.image_url} alt={beer.name} />
                  </Link>
                  <div>
                    <h5>{beer.name}</h5>
                    <p>{beer.tagline}</p>
                    <small>Contributed By: {beer.contributed_by}</small>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default Beers;
