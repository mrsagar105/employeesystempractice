import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../styles/Container.styled";
import Login from "./Login";
import SignUp from "./SignUp";

export default function NavHome() {
  const [user, setUser] = useState(false);

  return (
    <NavSection>
      <Container>
        <Left>
          <Logo src="images/logo.png" alt="John Deere" />
          <Title>
            <nav>
              <h1>
                <Green>JD Employee</Green> Database
              </h1>
            </nav>
          </Title>
        </Left>

        {user ? (
          <Link to="/login">
            <LoginBtn>
              LogOut
              <img src="images/user.png" alt="" />
            </LoginBtn>
          </Link>
        ) : (
          <RightButtons>
            <Link to="/login">
              <LoginBtn>Login</LoginBtn>
            </Link>
            <Link to="/signup">
              <SignUpBtn>Signup</SignUpBtn>
            </Link>
          </RightButtons>
        )}
      </Container>
    </NavSection>
  );
}

const NavSection = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  color: #000000;
  font-size: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  ${Container} {
    max-width: 1750px;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  button {
    font-size: 18px;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden !important;
    z-index: 10;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img``;

const Title = styled.div`
  h1 {
    font-weight: 500;
  }
`;

const Green = styled.span`
  color: var(--primary-color);
`;

const RightButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const LoginBtn = styled.button`
  border: 2px solid black;
  color: black;
  padding: 12px 25px;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;

  :hover {
    background-color: var(--primary-color);
    color: white;
    border: 2px solid var(--primary-color);
  }
`;

const SignUpBtn = styled.button`
  border: 2px solid black;
  background-color: black;
  color: white;
  padding: 12px 25px;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;

  :hover {
    background-color: var(--primary-color);
    color: white;
    border: 2px solid var(--primary-color);
  }
`;
