import React from 'react'
import Error404 from '../../img/error404.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <Link to={`/`} className='mb-3 btn btn-success'>
        <h4>Voltar à home</h4>
      </Link>
      <img src={Error404} alt="error 404 page not found" className='img-fluid' style={{ maxWidth: '500px' }} />
    </div>
  )
}

export default ErrorPage;
