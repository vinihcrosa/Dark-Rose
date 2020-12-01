import React from 'react'

import { Container, Login, Logo } from './style';

import LogoIMG from '../../assets/logo-2.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={LogoIMG} />
      </Link>
      <Login to="/login">Login</Login>
    </Container>
  )
}

export default Header;