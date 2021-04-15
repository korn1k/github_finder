import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { title, icon } = pageStyles;

  return (
    <nav className='navbar bg-success'>
      <div style={title}>
        <i
          style={icon}
          className='fab fa-github-alt'
          alt='Github Title Image'
          aria-hidden='true'
        ></i>
        <h1>Github Search App</h1>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

const pageStyles = {
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '240px',
    maxWidth: '260px',
  },
  icon: {
    fontSize: '30px',
  },
};

export default Navbar;
