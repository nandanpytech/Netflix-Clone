import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import LandingPage from './Components/LandingPage';
import selectUser from './Features/UserSlice'
import Profile from './Components/Profile';


function App() {
  const user=selectUser;
  console.log(user)
  return (
    <div className="App">
      <BrowserRouter>
      {!user?
      <>
      <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path='/signIn' element={<SignIn></SignIn>}></Route>
       </Routes>
      </>
      :
        <Routes>
              <Route path='/' element={ <Home></Home>}></Route>
              <Route path='/profile' element={ <Profile></Profile>}></Route>

              {/* <Route path='/signIn' element={ <SignIn></SignIn>}></Route> */}
          </Routes>
      }
            
      </BrowserRouter>

    
     
    </div>
  );
}

export default App;
