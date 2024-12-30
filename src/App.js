import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import ViewAll from './components/ViewAll';
import ViewMyPost from './components/ViewMyPost';
import SearchUser from './components/SearchUser';

import Navbar from './components/Navbar';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/create' element={<CreatePost/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
      <Route path='/viewmypost' element={<ViewMyPost/>}/>
      <Route path='/search' element={<SearchUser/>}/>
     
      <Route path='/navbar' element={<Navbar/>}/>
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
