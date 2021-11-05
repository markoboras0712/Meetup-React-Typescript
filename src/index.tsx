import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from 'store/FavoritesContext';
import { MeetupsContextProvider } from 'store/AllMeetupsContext';
import './index.css';
import { App } from 'App';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <MeetupsContextProvider>
      <FavoritesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoritesContextProvider>
    </MeetupsContextProvider>
  </Provider>,
  document.getElementById('root'),
);
