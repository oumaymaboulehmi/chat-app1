import React from 'react';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
  color: white;
`;

const LoginBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  color: black;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #5151e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #3d3db7;
  }
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginBox>
        <h2>Login</h2>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
      </LoginBox>
    </LoginPageContainer>
  );
}

export default LoginPage;
