import React from 'react';

import './static/scss/app.scss';
import 'react-router-dom';
import { Route,Switch } from 'react-router-dom';
import Header from './components/presentation/header';
import Footer from './components/presentation/footer';
import LandingPage from './components/presentation/landingPage';
import GettingStarted from './components/presentation/gettingStarted';
import Login from './components/presentation/login';
import Register from './components/presentation/register';
import AboutUs from './components/presentation/aboutUs';
import Contacts from './components/presentation/contact';
import Education from './components/presentation/education';
import Finalize from  './components/presentation/finalizePage';
import privateRoute from './components/privateRoute';

function App() {
  return (
    <div>
     <Header></Header>

     <Switch>
          <privateRoute path="/education" component={Education}></privateRoute>
          <privateRoute path="/contact" component={Contacts}></privateRoute>
          <privateRoute path="/getting-started" component={GettingStarted}></privateRoute>
          <Route path="/resume-templates" component={GettingStarted}></Route>
          <Route path="/about-us"     component={AboutUs}></Route>
          <privateRoute path="/finalize" component={Finalize}></privateRoute>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>             
          <Route path="/" component={LandingPage}></Route>
      </Switch>
      <Footer></Footer>   
    </div>
   
  );
}

export default App;
