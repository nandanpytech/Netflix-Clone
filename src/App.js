import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import LandingPage from './Components/LandingPage';
import Profile from './Components/Profile';
import Step3 from './Components/SignUpSteps/Step3';




function App() {
 


  return (
    <div className="App">
      <BrowserRouter>
    
        <Routes>
              <Route path="/" element={<LandingPage></LandingPage>}></Route>
              <Route path="/in" element={<LandingPage></LandingPage>}></Route>
              <Route path="/in/3" element={<Step3></Step3>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path='/signIn' element={<SignIn></SignIn>}></Route>
              <Route path='/profile' element={ <Profile></Profile>}></Route>
              {/* <Route path='/signIn' element={ <SignIn></SignIn>}></Route> */}
          </Routes> 
      </BrowserRouter>
      
    
     
    </div>
  );
}

export default App;
