import React from 'react';
import { HiHome, HiSearch } from 'react-icons/hi';
import { Menu, Navigation } from './styled';

function Tabs() {
  const changeTab = (event: any) => {
    const homeSec = document.getElementById('home-section');
    const homeTab = document.getElementById('home-tab');
    const searchSec = document.getElementById('search-section');
    const searchTab = document.getElementById('search-tab');
    const clickedHome = event.target.id === 'home-tab';

    if (clickedHome) {
      homeSec.classList.remove('hidden');
      homeTab.classList.remove('inactive');
      searchSec.classList.add('hidden');
      searchTab.classList.add('inactive');
    } else {
      homeSec.classList.add('hidden');
      homeTab.classList.add('inactive');
      searchSec.classList.remove('hidden');
      searchTab.classList.remove('inactive');
    }
  };

  return (
    <Navigation>
      <Menu id="home-tab" onClick={changeTab}>
        <HiHome />
      </Menu>
      <Menu className="inactive" id="search-tab" onClick={changeTab}>
        <HiSearch />
      </Menu>
    </Navigation>
  );
}

export { Tabs };
