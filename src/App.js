import React from 'react';
import './App.css';
import ContentPage from './Components/ContentFd/Content.jsx';
import NavigationPage from './Components/NavbarFd/Navigation.jsx';
import HeaderPage from './Components/HeaderFd/Header.jsx';
import Dialogs from './Components/DialogsFd/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './Components/MusicFd/Music';
import News from './Components/NewsFd/News';
import Settings from './Components/SettingsFd/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapp-app'>
        <HeaderPage />
        <NavigationPage />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profil' component={ContentPage} />
          <Route path = '/music' component = {Music}/>
          <Route path = '/news' component = {News}/>
          <Route path = '/settings' component = {Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
