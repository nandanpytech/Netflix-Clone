import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import LandingPage from './Components/LandingPage';
import Profile from './Components/Profile';




function App() {
 
console.log(document.cookie)

  return (
    <div className="App">
      <BrowserRouter>
    
        <Routes>
              <Route path="/" element={<LandingPage></LandingPage>}></Route>
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
