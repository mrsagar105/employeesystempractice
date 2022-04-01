package com.jd.springrest.controller;

import com.jd.springrest.dao.EmployeeRepository;
import com.jd.springrest.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // add an employee
    @PostMapping("/employees")
    public String addEmployee(@RequestBody Employee employee) {
        employeeRepository.save(employee);
        return "Employee saved";
    }

    // get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // get an employee by id
    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable Integer id) {
        return employeeRepository.findById(id).orElseThrow();
//        return employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    // get an employee by page
    @GetMapping("/employees/page/{offset}/{pageSize}")
    public Page<Employee> getEmployeesWithPage(@PathVariable int offset, @PathVariable int pageSize) {
        Page<Employee> employeesWithPage = employeeRepository.findAll(PageRequest.of(offset - 1, pageSize));
        return employeesWithPage;
    }

    // update an employee by id

    @PutMapping("/employees/{id}")
    public Employee updateEmployeeById(@RequestBody Employee employee, @PathVariable Integer id) {

        // if employee exists, then fetch the employee from db, else throw an error
        Employee employeeFromDb =  employeeRepository.findById(id).orElseThrow();

        // update the employee details from db
        employeeFromDb.setName(employee.getName());
        employeeFromDb.setPassword(employee.getPassword());
        employeeFromDb.setPhoneNumber(employee.getPhoneNumber());
        employeeFromDb.setProfilePicture(employee.getProfilePicture());
        employeeFromDb.setPosition(employee.getPosition());
        employeeFromDb.setDepartment(employee.getDepartment());
        employeeFromDb.setSalary(employee.getSalary());
        employeeFromDb.setManager(employee.getManager());
        employeeFromDb.setUserType(employee.getUserType());

        // save the employee back to db.
        return employeeRepository.save(employeeFromDb);
    }

    // delete an employee by id
    @DeleteMapping("/employees/{id}")
    public void deleteEmployeeById(@PathVariable Integer id) {
        // check if employee exist in database or not
        employeeRepository.findById(id).orElseThrow();
        employeeRepository.deleteById(id);
    }


}
