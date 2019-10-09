import React, { useState } from 'react';
import axios from 'axios';

import Form from './components/Form';
import Recipes from './components/Recipes';
import './App.css';

const API_KEY = process.env.REACT_APP_APIKEY;

const App = () => {
  const [input, setInput] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const getRecipe = async e => {
    e.preventDefault();

    const res = await axios.get(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${input}&count=10`,
    );
    setRecipes(res.data.recipes);
    setInput('');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Recipe Search</h1>
      </header>
      <Form getRecipe={getRecipe} value={input} handleChange={handleChange} />
      <Recipes recipes={recipes} />
    </div>
  );
};

export default App;
