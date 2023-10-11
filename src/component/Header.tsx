import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {


  return (
    <>
      <nav className='container'>
        <ul className="p-5">
          <li className='list-inline-item '>
            <Link to="/registro" className="text-decoration-none custom-link">Registro</Link>
          </li>
          <li className='list-inline-item'>
            <Link to="/registro2" className="text-decoration-none custom-link">and sai</Link>
          </li>
        
        </ul>
      </nav>

    </>

  );
};
