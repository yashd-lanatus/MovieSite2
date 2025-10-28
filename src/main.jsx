import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MoviesContextProvider from './context/MoviesContextProvider.jsx'

createRoot(document.getElementById("root")).render(
  <MoviesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoviesContextProvider>
);
