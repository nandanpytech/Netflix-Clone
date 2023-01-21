import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import LandingPage from './Components/LandingPage';
import Step1 from './Components/SignUpSteps/Step1';
import Step2 from './Components/SignUpSteps/Step2';
import Step3 from './Components/SignUpSteps/Step3';



function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
            <Routes>
              <Route path='/' element={ <Home></Home>}></Route>
              <Route path='/signIn' element={ <SignIn></SignIn>}></Route>
              <Route path='/in' element={<LandingPage></LandingPage>}></Route>
              <Route path='/signUp' element={<Step1></Step1>}></Route>
              <Route path='/signUp_2' element={<Step2></Step2>}></Route>
              <Route path='/signUp_3' element={<Step3></Step3>}></Route>

            </Routes>
      </BrowserRouter>

    
     
    </div>
  );
}

export default App;
