import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import '@fontsource/inter/400.css'; // Regular
// import '@fontsource/inter/500.css'; // Medium
// import '@fontsource/inter/600.css'; // Semi Bold
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> 
          <App />
       <Toaster position="top-right" autoClose={3000} />
      </PersistGate>
      </Provider> 
    </BrowserRouter>
  </StrictMode>
)
