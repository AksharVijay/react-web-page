import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './containers/Navbar/Navbar';
import Home from './components/Main/Home';
import Services from './components/Main/Services';
import Products from './components/Main/Products';
function App() {
  return (
   <BrowserRouter>
       <div className="App">
         <Navbar/>
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/Services" exact component={Services}/>
           <Route path="/Products" exact component={Products}/>
         </Switch>
      </div>
   </BrowserRouter> 

  );
}

export default App;
