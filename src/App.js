//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog';



function App() {
  
  return (
   <>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/blogs' element={<Blogs/> } />
    <Route path='/singleblog/:id' element={<SingleBlog/>} />
    <Route path='/addblog' element = {<AddBlog/>} />
  </Routes>
 
 
  </>
  );
}

export default App;
