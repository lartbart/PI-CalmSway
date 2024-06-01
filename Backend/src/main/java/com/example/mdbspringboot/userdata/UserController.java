package com.example.mdbspringboot.userdata;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/users")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PATCH, RequestMethod.OPTIONS, RequestMethod.HEAD})
public class UserController {

    final UserService userService;


    public UserController (UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserLoginDTO userDTO) {

        boolean verification = userService.verifyLogin(userDTO);

        if (verification) {
            return ResponseEntity.ok("");
        }
        else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("");
        }
    }



    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRegisterDTO userDto) {
        return userService.Register(userDto);
    }


    @PatchMapping("/update/{cpf}")
    public ResponseEntity<String> updateUserData(@PathVariable Integer CPF, @RequestBody UserUpdateDTO data) {
        userService.UpdateData(CPF, data);
        return ResponseEntity.ok("");
    }


    @DeleteMapping("/delete/{cpf}")
    public ResponseEntity<String> deleteUserData(@PathVariable Integer CPF) {
        userService.DeleteData(CPF);
        return ResponseEntity.ok("");
    }
}
