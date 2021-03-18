import axios from 'axios';

export const listBeers = async() => {
    const beers = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    return beers.data;
};

export const loadBeer = async(id) => {
    const beers = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
    );
    return beers.data;
};

export const randomBeer = async() => {
    const beers = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
    );
    return beers.data;
};