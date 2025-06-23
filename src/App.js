import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';
import Seller from './pages/Seller';
import Profile from './pages/Profile';
import Gig from './pages/Gig';
import Pricing from './pages/Pricing';
import EditProfile from './pages/EditProfile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/search' element={<Search />} />
          <Route path='/seller' element={<Seller />} />
          <Route path='/why-us' element={<Seller />} />
          <Route path='/enterprise' element={<Profile />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/gig' element={<Gig />} />
          
          <Route path='/pricing' element={<Pricing />} />

          <Route path='/edit' element={<EditProfile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        
        </Route>
      </Routes>

    </>
  );
}

export default App;
