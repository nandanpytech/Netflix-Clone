import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';


function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
            <Routes>
              <Route path='/' element={ <Home></Home>}></Route>
              <Route path='/signIn' element={ <SignIn></SignIn>}></Route>
              <Route path='/signUp' element={<SignUp></SignUp>}></Route>
            </Routes>
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
