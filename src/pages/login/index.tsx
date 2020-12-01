import React from 'react'

import { Container, Logo } from './style';

import LogoIMG from '../../assets/logo-2.png';

const Login: React.FC = () => {
  return (
    <Container>
      <Logo src={LogoIMG} />
    </Container>
  )
}

export default Login;