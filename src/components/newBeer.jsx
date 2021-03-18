import React, { Component } from 'react';
import homeIcon from './../assets/home.png';
import { Link } from 'react-router-dom';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    attenuationLevel: '',
    firstBrewed: '',
    brewersTips: '',
    contributedBy: '',
  };
  handleInput = (event) => {
    this.setState({
      [event.target.name]: [event.target.value],
    });
  };
  handleFormSubmission = () => {};
  render() {
    return (
      <div>
        <Link to="/">
          {' '}
          <header>
            <img src={homeIcon} alt="home" />
          </header>
        </Link>
        <form action="" onSubmit={this.handleFormSubmission}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />

          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleInput}
          />

          <label htmlFor="description">Description</label>
          <textarea
            rows="10"
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleInput}
          />

          <label htmlFor="firstBrewed">First Brewed</label>
          <input
            type="text"
            id="firstBrewed"
            name="firstBrewed"
            value={this.state.firstBrewed}
            onChange={this.handleInput}
          />

          <label htmlFor="brewersTips">Brewers' Tips</label>
          <input
            type="text"
            id="brewersTips"
            name="brewersTips"
            value={this.state.brewersTips}
            onChange={this.handleInput}
          />

          <label htmlFor="attenuationLevel">Attenuation Level</label>
          <input
            type="text"
            id="attenuationLevel"
            name="attenuationLevel"
            value={this.state.attenuationLevel}
            onChange={this.handleInput}
          />

          <label htmlFor="contributedBy">Contributed By</label>
          <input
            type="text"
            id="contributedBy"
            name="contributedBy"
            value={this.state.contributedBy}
            onChange={this.handleInput}
          />
          <button>Add New</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
