import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home/home.js';
import Login from './pages/login/login.js';
import UserRegistration from './pages/user-registration/user.js';
import Company from './pages/companies/company.js';
import User from './pages/user-registration/user.js';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/login' element={ <Login/> }/>
                <Route path='/user-registration' element={ <UserRegistration/> }/>
                <Route path='/company' element={ <Company/> }/>
                <Route path='/user' element={ <User/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;