import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from 'react-router-dom';

const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Home = React.lazy(() => import('../pages/Home'));

const Routes = () => (
  <Suspense fallback={<h1>Carregando...</h1>}>
    <BrowserRouter basename='react-lazy'>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Switch>
    </BrowserRouter>
  </Suspense>
)

export default Routes;