// import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Container } from "../styles/Container.styled";

export default function SignUp() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [password, setPassword] = useState("");

  let navigate = useNavigate();
  return (
    <>
      <OuterContainer>
        <Cross
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src="images/cross.png" alt="" />
        </Cross>
        <Container>
          <RightSection>
            <Heading>
              <h2>Sign Up</h2>
            </Heading>
            <MyForm>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  id="image"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone No"
                  id="image"
                  // onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  id="image"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </MyForm>

            <SignUpBtn class="add_button">Sign Up</SignUpBtn>
          </RightSection>
        </Container>
      </OuterContainer>
    </>
  );
}

const OuterContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 4px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  ${Container} {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 20px;
  }
`;

const RightSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const MyForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 15px;
  & > div {
    display: flex;
    flex-direction: column;
  }
  input[type="text"],
  input[type="number"] {
    height: 60px;
    padding: 20px;
    font-family: Poppins;
    border: 2px solid var(--black-text);
    background-color: transparent;
    border-radius: 6px;
    margin-bottom: 10px;
  }
  input[type="text"]:focus,
  input[type="number"]:focus {
    border: 2px solid var(--primary-color);
    outline: none;
  }
  input::placeholder {
    font-size: 16px;
    opacity: 1;
    font-weight: 400;
    text-align: center;
  }
`;

const Heading = styled.div`
  font-size: 40px;
  font-weight: 200;
  text-align: center;
  padding: 20px;
  h2 {
    color: #000000;
  }
`;

const SignUpBtn = styled.button`
  font-size: 18px;
  border: 2px solid var(--black-text);
  color: var(--black-text);
  width: 150px;
  height: 50px;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: var(--primary-color);
    color: white;
    border: 2px solid var(--primary-color);
  }
`;

const Cross = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  img {
    height: 40px;
  }
  &:hover {
    transform: rotate(90deg);
  }
`;
