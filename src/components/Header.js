//import { useNavigate } from 'react-router-dom';

const Header = () => {
  //   const navigate = useNavigate();
  //   const handleClick = () => {
  //     navigate('/login');
  // };
  return (
    <div>
      <div className='shadow p-3 mb-5 bg-body rounded fw-bold'>
        Front-end Blog
        <button
          className='btn btn-outline-dark'
          //   onClick={handleClick}
        >
          LogIn
        </button>
        <button
          className='btn btn-outline-dark'
          //   onClick={handleClick}
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Header;
