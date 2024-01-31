import React from 'react';
import './HogwartNavbar.css';
import { useParams,Link } from 'react-router-dom';

const HogwartNavbar = () => {
  return (
    <nav className="navbar">
        <div onClick={
            () => {
                window.location.href = '/';
            }
        } className="navbar-link">Home</div>
        <div onClick={
            () => {
                window.location.href = '/about';
            }

        } className="navbar-link">About</div>
    </nav>
  );
}


export default HogwartNavbar;
