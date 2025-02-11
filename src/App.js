import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';
import Seller from './pages/Seller';
import Profile from './pages/Profile';
import Gig from './pages/Gig';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/search' element={<Search />} />
          <Route path='/seller' element={<Seller />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/gig' element={<Gig />} /> */}
        </Route>
      </Routes>

    </>
  );
}

export default App;
