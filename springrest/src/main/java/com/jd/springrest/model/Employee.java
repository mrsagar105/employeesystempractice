package com.jd.springrest.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String password;
    private String phoneNumber;
    private String profilePicture;
    private String position;
    private int department;
    private double salary;
    private String manager;
    private String userType;

    @Temporal(TemporalType.DATE)
    private Date createdAt = new Date(System.currentTimeMillis());



    public Employee() {}

    public Employee(String name, String password, String phoneNumber, String profilePicture, String position, int department, double salary, String manager, String userType, Date createdAt) {
        this.name = name;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.profilePicture = profilePicture;
        this.position = position;
        this.department = department;
        this.salary = salary;
        this.manager = manager;
        this.userType = userType;
        this.createdAt = createdAt;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getDepartment() {
        return department;
    }

    public void setDepartment(int department) {
        this.department = department;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

}
