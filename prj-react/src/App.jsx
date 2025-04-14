import { BrowserRouter } from 'react-router-dom';

import { Router  } from './Router';

import './App.css';
import { AppContextProvider } from './Context';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AppContextProvider>
  )
};
export { App };
