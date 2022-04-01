import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import NavHome from "../components/NavHome";
import axios from "axios";
import EmployeeItem from "../components/EmployeeItem";
import { Container } from "../styles/Container.styled";
import SearchBar from "../components/SearchBar";
import AddEmployee from "../components/AddEmployee";
import UpdateEmployee from "../components/UpdateEmployee";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showUpdateEmployee, setShowUpdateEmployee] = useState(false);
  const [updateEmployee, setUpdateEmployee] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalEmployees, setTotalEmployees] = useState(1);

  const displayDom = useRef();
  const [search, setSearch] = useState("");

  // fetch all employees (max 5 at a time)
  const fetchEmployees = async () => {
    let employees = await axios.get(
      `http://localhost:9090/employees/page/${currentPage}/5`
    );
    setTotalPages(employees.data.totalPages);
    setTotalEmployees(employees.data.totalElements);
    setEmployees(employees.data.content);
  };

  // show addEmployee form when button is clicked
  const handleAddEmployee = () => {
    if (showAddEmployee === false) {
      setShowAddEmployee(true);
      fetchEmployees();
    } else {
      setShowAddEmployee(false);
      fetchEmployees();
    }
  };

  // show updateEmployee form when button is clicked
  const handleUpdateEmployee = (employee) => {
    if (showUpdateEmployee === false) {
      setUpdateEmployee(employee);
      setShowUpdateEmployee(true);
    } else {
      setShowUpdateEmployee(false);
      fetchEmployees();
    }
  };

  // Deletes an employee
  const handleDelete = async (id) => {
    // let employees = await axios.get(`http://localhost:9090/employees/${id}`);

    await axios.delete(`http://localhost:9090/employees/${id}`);
    fetchEmployees();
  };

  // fetch all employees (max 5 at a time)
  useEffect(() => {
    const fetchEmployees = async () => {
      let employees = await axios.get(
        `http://localhost:9090/employees/page/${currentPage}/5`
      );
      setTotalPages(employees.data.totalPages);
      setTotalEmployees(employees.data.totalElements);
      setEmployees(employees.data.content);
    };
    fetchEmployees();
  }, [search, currentPage]);

  return (
    <>
      {/* Navbar Component */}
      <NavHome />

      {/* Add Employee Form Component */}
      {showAddEmployee ? (
        <AddEmployee handleAddEmployee={handleAddEmployee} />
      ) : (
        ""
      )}

      {/* Update Employee Form Component */}
      {showUpdateEmployee ? (
        <UpdateEmployee
          handleUpdateEmployee={handleUpdateEmployee}
          updateEmployee={updateEmployee}
        />
      ) : (
        ""
      )}

      <HeroSection>
        {/* Search Bar Component */}
        <SearchBar setSearch={setSearch} search={search} />

        <Container>
          <LeftSection>
            <div></div>
          </LeftSection>
          <MiddleSection>
            {/* Display employess table */}
            <DisplayEmployees ref={displayDom}>
              <Content>
                <Row>
                  <h5>id</h5>
                  <h5>Name</h5>
                  <h5>Department</h5>
                  <h5>Manager</h5>
                  <h5>Exp</h5>
                  <h5>Update</h5>
                  <h5>Delete</h5>
                </Row>

                {/* Employees list */}
                {employees.map((employee) => {
                  return (
                    <EmployeeItem
                      employee={employee}
                      handleUpdateEmployee={handleUpdateEmployee}
                      handleDelete={handleDelete}
                      key={employee.id}
                    />
                  );
                })}
              </Content>
            </DisplayEmployees>

            {/* Pagination */}
            <Pagination>
              <div>
                {currentPage !== 0 && currentPage > 1 ? (
                  <button
                    onClick={() => {
                      setCurrentPage(currentPage - 1);
                    }}
                  >
                    Prev
                  </button>
                ) : (
                  <DisabledButton disabled>Prev</DisabledButton>
                )}
                <p>
                  {currentPage} of {totalPages} pages
                </p>
                {currentPage !== totalPages && currentPage < totalPages ? (
                  <button
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <DisabledButton disabled>Next</DisabledButton>
                )}
              </div>
            </Pagination>
          </MiddleSection>
          <RightSection>
            <AddButton
              onClick={handleAddEmployee}
              handleAddEmployee={handleAddEmployee}
            >
              Add An Employee
            </AddButton>

            <TotalEmployeeSection>
              <p>
                <Green>Total</Green> Employees
              </p>
              {totalEmployees}
            </TotalEmployeeSection>
          </RightSection>
        </Container>
      </HeroSection>
    </>
  );
}

const HeroSection = styled.div`
  color: white;
  overflow: hidden;
  max-height: calc(100vh - 70px);
  transition: filter 0.8s ease;
  padding-top: 80px;

  ${Container} {
    display: grid;
    max-width: 100%;
    grid-template-columns: 150px 1fr 300px;
    gap: 10px;
  }
`;

const LeftSection = styled.div`
  position: relative;
  right: 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  height: 700px;
  border-radius: 20px;
`;

const MiddleSection = styled.div`
  height: 700px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightSection = styled.div`
  position: relative;
  left: 40px;
  height: 700px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const DisplayEmployees = styled.div`
  height: calc(100vh - 300px);
  overflow-y: auto;
  visibility: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    visibility: visible;
  }
`;

const Content = styled.div`
  visibility: visible;
  padding: 2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 2fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid #e6e6e6;
  text-transform: uppercase;
`;

const AddButton = styled.button`
  width: 100%;
  height: 40px;
  background: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    background: var(--primary-color-dark);
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    gap: 20px;

    button {
      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

const DisabledButton = styled.button`
  opacity: 0.5;
`;

const TotalEmployeeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #def1de;
  border-radius: 6px;
`;

const Green = styled.span`
  color: var(--primary-color);
`;
