import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from 'store/FavoritesContext';
import {
  MeetupsContextProvider,
} from 'store/AllMeetupsContext';
import './index.css';
import { App } from 'App';

ReactDOM.render(
  <MeetupsContextProvider>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </MeetupsContextProvider>,
  document.getElementById('root'),
);
