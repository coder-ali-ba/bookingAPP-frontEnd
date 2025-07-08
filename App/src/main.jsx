import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { SearchContextProvider } from './Context/SearchContext.jsx'
// import { SearchContextProvider } from './Context/searchContext'
// import { SearchContextProvider } from './Context/SearchContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchContextProvider>
     <BrowserRouter>
   
     <App />
   
    </BrowserRouter>
   </SearchContextProvider>
)
