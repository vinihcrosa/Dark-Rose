import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  font-size: 20px;
  background: ${props => props.theme.colors.primary};
  color:#fff;
  display: flex;
  align-items: center;
  padding: 0 30px;
  padding-left: 0;

  justify-items: center;
`;

const Logo = styled.img`
  height: 60px;
  margin-right: 30px;
  padding-left: 0;
  margin-left: 0;
`;

const Login = styled(Link)`
  height: 100%;
  vertical-align: middle;
  justify-self: center;
  color: ${props => props.theme.colors.text};
  margin-left: auto;
  border-left: 1px ridge black;
  text-decoration: none;
  padding: 15px 0 15px 10px;
`;

export { Container, Logo, Login }