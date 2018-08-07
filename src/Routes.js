import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Adventures from './components/Adventures/Adventures';
import Adventure from './components/Adventure/Adventure';
import EditProfile from './components/EditProfile/EditProfile';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';

export default(
    <Switch>
        <Route exact path='/' component={ Home } />
         <Route path='/register' component={ Register } /> 
        <Route path='/profile' component={ Profile } />
        <Route path='/about' component={ About } />
        <Route path='/adventures' component={ Adventures } />
        <Route exact path='/adventure/:id' component={ Adventure } />
        <Route path='/edit' component={EditProfile}/>
        <Route component={ErrorComponent}/>   
    </Switch>
)