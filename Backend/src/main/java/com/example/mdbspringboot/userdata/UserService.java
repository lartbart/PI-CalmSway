package com.example.mdbspringboot.userdata;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    final UserRepository userRepository;

    final BCryptPasswordEncoder passwordEncoder;



    public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean verifyLogin(UserLoginDTO userDTO) {
        List<UserModel> users = userRepository.findAll();
        Optional<UserModel> foundUser = users.stream().filter(user -> user.getCPF().equals(userDTO.CPF())).findFirst();
        if (foundUser.isPresent()) {
            return foundUser.filter(userModel -> passwordEncoder.matches(userDTO.password(), userModel.getPassword())).isPresent();
        } else {
            return false;
        }
    }


    public ResponseEntity<String> Register(UserRegisterDTO userDTO) {
        if (userRepository.existsByCPF(userDTO.CPF())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("");
        } else {
            UserModel userModel = new UserModel(userDTO.CPF(), userDTO.username(), userDTO.email(), passwordEncoder.encode(userDTO.password()));
            userRepository.insert(userModel);
            return ResponseEntity.ok("");
        }
    }

    public void UpdateData(Integer CPF, UserUpdateDTO data) {
        UserModel user = userRepository.findByCPF(CPF);

        if (data.username() !=null) {
            user.setUsername(data.username());
        }
        if (data.password() != null) {
            user.setPassword(passwordEncoder.encode(data.password()));
        }
        if (data.email() != null) {
            user.setEmail(data.email());
        }
        userRepository.save(user);
    }


    public void DeleteData(Integer CPF) {
        UserModel user = userRepository.findByCPF(CPF);
        userRepository.delete(user);
    }
}

