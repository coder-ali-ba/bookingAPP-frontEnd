import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { SearchContextProvider } from './Context/SearchContext.jsx'
import { AuthContextProvider } from './Context/AuthContex.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthContextProvider>
     <SearchContextProvider>
       <BrowserRouter> 
         <App />  
      </BrowserRouter>
     </SearchContextProvider>
   </AuthContextProvider>
)
