import React, { Component } from 'react';
import { loadBeer } from './../services/beer-api';
import homeIcon from './../assets/home.png';
import { Link } from 'react-router-dom';

class SingelBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    this.loadSingleBeer();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadSingleBeer();
    }
  }

  async loadSingleBeer() {
    const id = this.props.match.params.id;
    const single = await loadBeer(id);
    this.setState({
      beer: single,
    });
    console.log(this.state.beer);
  }
  render() {
    return (
      <div>
        <Link to="/">
          <header>
            <img src={homeIcon} alt="home" />
          </header>
        </Link>
        {this.state.beer && (
          <div className="SingleBeerView">
            <img
              src={this.state.beer.image_url}
              alt={this.state.beer.name}
              className="singleBeerImage"
            />
            <div>
              <h4>{this.state.beer.name}</h4>
              <p>{this.state.beer.tagline}</p>
              <small>{this.state.beer.first_brewed}</small>
              <span>{this.state.beer.attenuation_level}</span>
              <p>{this.state.beer.description}</p>
              <small>{this.state.beer.contributed_by}</small>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingelBeer;
