import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import LandingPage from './Components/LandingPage';



function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
            <Routes>
              <Route path='/' element={ <Home></Home>}></Route>
              <Route path='/signIn' element={ <SignIn></SignIn>}></Route>
              <Route path='/in' element={<LandingPage></LandingPage>}></Route>
             

            </Routes>
      </BrowserRouter>

    
     
    </div>
  );
}

export default App;
