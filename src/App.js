import React from 'react'

import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom'



import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css" 

import Home from './pages/Home'
import About from './pages/About'
import ShoppingLists from './pages/ShoppingLists';
import Contact from './pages/Contact'
import Profile from './pages/Profile';

//layouts
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="profile" element={<Profile />}/>
      <Route path="shoppingLists" element={<ShoppingLists />}/>    
      </Route>
  )
)

function App() {
  return (
  
  <RouterProvider router={router} />
  
  );
}

export default App


