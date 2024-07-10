import React, { useState } from 'react';
import './App.css';
import Image from './components/Image';
import Stats from './components/Stats';
import Message from './components/Message';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const TOKEN = 'ba2ff29154557fffa9bc3e07095e41c4';
  const BASE_URL = 'https://cors-proxy-superhero-api.onrender.com';

  const getHeroDataByName = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/${TOKEN}/getByName/${name}`);
      setLoading(false);
      setHeroData(response.data.results[0]);
    } catch (error) {
      console.error('Error fetching superhero by name:', error);
      setError(true);
      setLoading(false);
    }
  };

  const getRandomHero = async () => {
    setError(false);
    setLoading(true);
    const ID = Math.ceil(Math.random() * 731);
    try {
      const response = await axios.get(`${BASE_URL}/${TOKEN}/getById/${ID}`);
      setLoading(false);
      setHeroData(response.data);
    } catch (error) {
      console.error('Error fetching random superhero:', error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className='app-container'>
      <form onSubmit={getHeroDataByName}>
        <input
          className='form-input'
          placeholder='Enter your favorite hero'
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className='form-btns-container'>
          <button className='form-btn-find' type='submit'>
            Enter
          </button>
          <button className='form-btn-random' onClick={getRandomHero} type='button'>
            Surprise
          </button>
        </div>
      </form>

      <Message loading={loading} error={error} />

      {!loading && !error && heroData && <Image imageUrl={heroData.image.url} name={heroData.name} />}
      {!loading && !error && heroData && <Stats stats={heroData.powerstats} />}
    </div>
  );
}

export default App;
