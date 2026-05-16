package course.course_distributor.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import course.course_distributor.dto.LoginRequest;
import course.course_distributor.dto.LoginResponse;
import course.course_distributor.dto.RegisterRequest;
import course.course_distributor.interfaces.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="http://localhost:5173")
public class AuthController {

    private static final Logger logger= LoggerFactory.getLogger(AuthController.class);
    
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest req){
        logger.info("=========REQUEST IS IN AUTHCONTROLLER===========");
        return ResponseEntity.status(HttpStatus.OK).body(authService.login(req));

    }

    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody RegisterRequest req){

        authService.register(req);

        return ResponseEntity.status(HttpStatus.CREATED).build();

    }

}
