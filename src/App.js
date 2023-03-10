import './App.css';
import React from 'react'
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import LandingPage from './Components/LandingPage';
import Profile from './Components/Profile';
import Step3 from './Components/SignUpSteps/Step3';
import UserContext from './context/UserContext';




function App() {

  return (
    <div className="App">
           <UserContext>
        <BrowserRouter>
          <Routes>
      
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path='/signIn' element={<SignIn></SignIn>}></Route>
                <Route path="/in" element={<LandingPage></LandingPage>}></Route>
                <Route path="/in/3/:email" element={<Step3></Step3>}></Route>
                {/* <Route path="/home" element={<Home></Home>}></Route> */}
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path='/signIn' element={<SignIn></SignIn>}></Route>
                <Route path='/profile' element={ <Profile></Profile>}></Route>
            </Routes> 
        </BrowserRouter>
        </UserContext>
      
    
     
    </div>
  );
}

export default App;
