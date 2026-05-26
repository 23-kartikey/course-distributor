package course.course_distributor.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import course.course_distributor.dto.EditProfileResponse;
import course.course_distributor.dto.UserProfileResponse;
import course.course_distributor.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:5173")
@RequestMapping("/user")
public class UserController {

    Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService service;

    @GetMapping("/profile")
    public ResponseEntity<UserProfileResponse> getProfile(Authentication authentication){
        logger.info("======IN GETPROFILE CONTROLLER METHOD==============");
        logger.info("AUTH: {}", authentication);
        logger.info("PRINCIPAL CLASS: {}",
            authentication.getPrincipal().getClass());
        return ResponseEntity.ok(service.getUserProfile(authentication.getName()));
    }

    @GetMapping("/profile/{id}")
    public ResponseEntity<UserProfileResponse> getProfile(@PathVariable long id, Authentication authentication){
        logger.info("======IN GETPROFILE CONTROLLER METHOD==============");
        return ResponseEntity.ok(service.getUserProfile(id, authentication.getName()));
    }

    @PutMapping("/edit")
    public ResponseEntity<EditProfileResponse> editProfile(Authentication authentication,
                                            @RequestParam String firstName,
                                            @RequestParam String lastName,
                                            @RequestParam String username,
                                            @RequestParam String about,
                                            @RequestParam MultipartFile profilePicture
                                            ) throws IOException{
        return ResponseEntity.status(HttpStatus.CREATED).body(service.editProfile(authentication.getName(), firstName, lastName, username, about, profilePicture));                                          
                                            }

    @GetMapping("/profile/edit")
    public ResponseEntity<EditProfileResponse> getEditProfile(Authentication authentication){
        logger.info("======IN GETPROFILE CONTROLLER METHOD==============");
        logger.info("AUTH: {}", authentication);
        logger.info("PRINCIPAL CLASS: {}",
            authentication.getPrincipal().getClass());
        return ResponseEntity.ok(service.getEditProfile(authentication.getName()));
    }

    @PostMapping("/follow/{id}")
    public ResponseEntity<Void> followUser(Authentication authentication, @PathVariable long id){
        service.followUser(authentication.getName(), id);
        return ResponseEntity.status(201).build();
    }

}