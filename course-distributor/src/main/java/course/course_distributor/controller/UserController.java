package course.course_distributor.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import course.course_distributor.dto.DetailsRequest;
import course.course_distributor.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:5173")
@RequestMapping("public/user")
public class UserController {

    Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService service;

    @PutMapping("/details/{id}")
    public ResponseEntity<Void> fillDetails(@RequestBody DetailsRequest req, @PathVariable Long id){

        logger.info("======IN FILLDETAILS CONTROLLER METHOD");

        service.fillDetails(req, id);

        return ResponseEntity.status(HttpStatus.CREATED).build();

    }

}