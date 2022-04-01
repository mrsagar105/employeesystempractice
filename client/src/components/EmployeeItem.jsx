import React from "react";
import styled from "styled-components";
import { format } from "timeago.js";

// dialays a single employee
const EmployeeItem = ({ employee, handleUpdateEmployee, handleDelete }) => {
  return (
    <>
      <Row>
        <p>{employee.id}</p>

        <NameSection>
          <ProfileContainer>
            <img src="" alt="" />
          </ProfileContainer>
          <div>
            <h4>{employee.name}</h4>
            <p>{employee.position}</p>
          </div>
        </NameSection>

        <DepartmentPara>{employee.department}</DepartmentPara>
        <p>{employee.manager}</p>
        <p>{format(employee.createdAt)}</p>
        <img
          src="images/update.png"
          alt=""
          onClick={() => handleUpdateEmployee(employee)}
        />
        <img
          src="images/delete.png"
          alt=""
          onClick={() => handleDelete(employee.id)}
        />
      </Row>
    </>
  );
};

export default EmployeeItem;

const DepartmentPara = styled.div`
  background: #d6ecd5;
  height: 30px;
  padding: 10px 15px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameSection = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ProfileContainer = styled.div`
  width: 40px;
  height: 40px;
  background: #e3e3e3;
  border-radius: 50%;
`;

const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 2fr 1fr 1fr 1fr;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
  animation: animate 0.25s ease-out;
  :hover {
    background-color: #f5f5f5;
  }

  img {
    height: 20px;
    cursor: pointer;
  }

  /* Animation */
  @keyframes animate {
    0% {
      opacity: 0;
      transform: translateY(40%);
    }

    70% {
      opacity: 0.3;
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
