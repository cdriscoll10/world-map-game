import React, { useState, useEffect } from 'react';
import WorldMap from './components/WorldMap';
import fetchCountries from './services/countryService';

const App = () => {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [userGuesses, setUserGuesses] = useState([]);
  const [score, setScore] = useState(0);

  // Function to select a random country
  const selectRandomCountry = (countries) => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];
    setCurrentCountry(randomCountry);
  };

  // Function to handle user guess
  const handleGuess = (countryName) => {
    if (countryName === currentCountry.name) {
      // Increase score and update user guesses for a correct guess
      setScore(prevScore => prevScore + 1);
    }
    setUserGuesses(prevGuesses => [...prevGuesses, countryName]);
  };

  useEffect(() => {
    // Fetch countries data and then select the first random country
    // You need to implement the logic to fetch countries data here
    // Assuming you have a function to fetch countries
    fetchCountries().then(countries => {
      selectRandomCountry(countries);
    });
  }, []);

  return (
    <div>
      <WorldMap onCountryClick={handleGuess} />
      <div>
        <p>Current Country: {currentCountry?.name}</p>
        <p>Score: {score}</p>
        <p>Guesses: {userGuesses.join(', ')}</p>
      </div>
    </div>
  );
};

export default App;

