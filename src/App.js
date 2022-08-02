import { Routes, Route } from 'react-router-dom';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import Header from './components/Header';
import Login from './components/Login';
function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
