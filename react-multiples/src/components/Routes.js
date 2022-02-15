import React from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const Routes = () => (
  <BrowserRouter basename='react-multiples'>
    <Switch>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Switch>
  </BrowserRouter>
)

export default Routes;