package com.example.mdbspringboot.userdata;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "userdata")
public class UserModel {


    @Id
    private String id;

    @Indexed(unique = true)
    private Integer CPF;
    private String username;
    private String email;
    private String password;


    public UserModel(Integer CPF, String username, String email, String password) {
        this.CPF = CPF;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public Integer getCPF() {
        return CPF;
    }
    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setCPF(Integer CPF) {
        this.CPF = CPF;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
