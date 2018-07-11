import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
// import Setting from './components/Setting/Setting';
import Profile from './components/Profile/Profile';
// import Contact from './components/Contact/Contact';
import Adventures from './components/Adventures/Adventures';
import Adventure from './components/Adventure/Adventure';

export default(
    <Switch>
        {/* <Route exact path='/' component={ Home } /> */}
        <Route exact path='/login' component={ Login } /> 
         <Route path='/register' component={ Register } /> 
        <Route path='/profile' component={ Profile } />
        {/* <Route path='/contact' component={ Contact } /> */}
        <Route path='/adventures' component={ Adventures } />
        <Route path='/adventure/:name' component={ Adventure } />
    </Switch>
)