import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// updates employee details
export default function UpdateEmployee({
  handleUpdateEmployee,
  updateEmployee,
}) {
  const [name, setName] = useState(updateEmployee.name);
  const [password, setPassword] = useState(updateEmployee.password);
  const [phoneNumber, setPhoneNumber] = useState(updateEmployee.phoneNumber);
  const [profilePicture, setProfilePicture] = useState(
    updateEmployee.profilePicture
  );
  const [position, setPosition] = useState(updateEmployee.position);
  const [department, setDepartment] = useState(updateEmployee.department);
  const [salary, setSalary] = useState(updateEmployee.salary);
  const [manager, setManager] = useState(updateEmployee.manager);
  const [userType, setUserType] = useState(updateEmployee.userType);

  // Updates an employee to the database and then calls the handleUpdateEmployee function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9090/employees/${updateEmployee.id}`, {
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
      handleUpdateEmployee();
    } catch (err) {
      alert("Cannot Update");
    }
  };

  return (
    <>
      <OuterContainer>
        <CreateContainer>
          <Heading>
            <h4>Update An Employee</h4>
            <button
              onClick={() => {
                handleUpdateEmployee();
              }}
            >
              <img src="images/cross.png" alt="" />
            </button>
          </Heading>

          {/* Form for updating an employee */}
          <FormSection>
            <MyForm>
              <div>
                <input
                  type="text"
                  placeholder="Employee Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Profile Picture"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Salaary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Manager"
                  value={manager}
                  onChange={(e) => setManager(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="User Type"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                />
              </div>
            </MyForm>

            <SignUpBtn class="add_button" onClick={handleSubmit}>
              Update Employee
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
