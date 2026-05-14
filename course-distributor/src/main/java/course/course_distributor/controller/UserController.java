package course.course_distributor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import course.course_distributor.dto.UserRequest;
import course.course_distributor.dto.UserResponse;
import course.course_distributor.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping
    public ResponseEntity<UserResponse> newUser(@RequestBody UserRequest req ){

        return ResponseEntity.status(201).body(service.newUser(req));

    }
    
}