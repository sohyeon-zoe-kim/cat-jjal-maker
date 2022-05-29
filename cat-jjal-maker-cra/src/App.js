import React from 'react'
import './App.css';
import Title from './components/Title';
import jsonLocalStorage from './components/jsonLocalStorage';
import fetchCat from './components/fetchCat';
import Form from './components/Form';
import MainCard from './components/MainCard';
import Favorites from './components/Favorites';

const App = () => {
  const CAT1 = "https://cdn2.thecatapi.com/images/UYLI_E-SZ.jpg";
  const [counter, setCounter] = React.useState(() => {
    return jsonLocalStorage.getItem('counter');
  })
  const [garasadae, setGarasadae] = React.useState('MEOW');
  const [mainCat, setMainCat] = React.useState(`${CAT1}?MEOW`);
  const [favorites, setFavorites] = React.useState(() => {
    return jsonLocalStorage.getItem('favorites') || [];
  });

  const aleadyFavorite = favorites.includes(mainCat);

  async function setInitialCat() {
    const newCat = await fetchCat('First cat');
    setMainCat(newCat);
    setGarasadae('First cat');
  }

  React.useEffect(() => {
    setInitialCat();
  }, []);

  React.useEffect(() => {
    console.log("헬로");
  }, [counter]);

  async function updateMainCat(value) {
    const newCat = await fetchCat(value);
    setMainCat(newCat);
    setGarasadae(value);

    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem('counter', nextCounter);
      return nextCounter;
    })
  }

  function handleHeartClick() {
    const nextFavorites = [...favorites, mainCat];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem('favorites', nextFavorites);
  }

  const counterTitle = counter === null ? '' : counter + "번째 ";

  return (
    <div>
      <Title>{counterTitle}고양이 가라사대</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCard garasadae={garasadae} img={mainCat} onHeartClick={handleHeartClick} aleadyFavorite={aleadyFavorite} />
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
