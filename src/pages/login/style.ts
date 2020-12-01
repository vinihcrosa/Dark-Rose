import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  height: 600px;
  width: 300px;
  background: ${props => props.theme.colors.primary}
`;

const Logo = styled.img`
  height: auto;
  width: 100%;
`;

export { Container, Logo };