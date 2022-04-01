import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function AddEmployee({ handleAddEmployee }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [manager, setManager] = useState("");
  const [userType, setUserType] = useState("");

  // Adds an employee to the database and then calls the handleAddEmployee function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9090/employees", {
        name,
        password,
        phoneNumber,
        profilePicture,
        position,
        department,
        salary,
        manager,
        userType,
      });
      handleAddEmployee();
    } catch (err) {
      alert("Cannot register");
    }
  };

  return (
    <>
      <OuterContainer>
        <CreateContainer>
          <Heading>
            <h4>Add An Employee</h4>
            <button
              onClick={() => {
                handleAddEmployee();
              }}
            >
              <img src="images/cross.png" alt="" />
            </button>
          </Heading>

          {/* Form for adding an employee */}
          <FormSection>
            <MyForm>
              <div>
                <input
                  type="text"
                  placeholder="Employee Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Profile Picture"
                  onChange={(e) => setProfilePicture(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Position"
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Department"
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Salaary"
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Manager"
                  onChange={(e) => setManager(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="User Type"
                  onChange={(e) => setUserType(e.target.value)}
                />
              </div>
            </MyForm>

            <SignUpBtn class="add_button" onClick={handleSubmit}>
              Add Employee
            </SignUpBtn>
          </FormSection>
        </CreateContainer>
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
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateContainer = styled.div`
  width: 736px;
  max-height: calc(100% - 40px);
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 30px;

  button {
    cursor: pointer;
  }
`;

const Heading = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--primary-color);
  position: relative;
  margin-bottom: 20px;

  button img {
    position: absolute;
    top: 12px;
    right: 15px;
    height: 18px;
  }
`;

const FormSection = styled.div`
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
    height: 40px;
    padding: 20px;
    font-family: Poppins;
    border: 2px solid var(--black-text);
    background-color: transparent;
    border: transparent;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
  }

  input[type="text"]:focus,
  input[type="number"]:focus {
    border-bottom: 1px solid var(--primary-color);
    outline: none;
  }

  input::placeholder {
    font-size: 16px;
    opacity: 1;
    font-weight: 400;
    text-align: center;
  }
`;

const SignUpBtn = styled.button`
  font-size: 18px;

  position: relative;
  border: 2px solid var(--black-text);
  color: var(--black-text);
  width: 150px;
  height: 50px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    border: 0px;
    background-color: var(--primary-color);
    color: white;
  }
`;
