import React from 'react';
import { Tab } from './styled';

function Tabs() {
  const changeTab = (event: any) => {
    console.log(event.target);
    const home = document.getElementById('home-section');
    const search = document.getElementById('search-section');
    const clickedHome = event.target.id === 'home-tab';

    if (clickedHome) {
      home.classList.remove('hidden');
      search.classList.add('hidden');
    } else {
      home.classList.add('hidden');
      search.classList.remove('hidden');
    }
  };

  return (
    <ul>
      <li id="home-tab" onClick={changeTab}>
        Home
      </li>
      <li id="search-tab" onClick={changeTab}>
        Search
      </li>
    </ul>
  );
}

export { Tabs };
