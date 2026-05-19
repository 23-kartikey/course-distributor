package course.course_distributor.controller;


import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import course.course_distributor.dto.CourseRequest;
import course.course_distributor.dto.CourseResponse;
import course.course_distributor.security.CustomUserDetails;
import course.course_distributor.service.CourseService;

@RestController
@CrossOrigin(origins="http://localhost:5173")
@RequestMapping("/courses")
public class CourseController {

    private static final Logger logger = LoggerFactory.getLogger(CourseController.class);

    @Autowired
    private CourseService service;

    @PostMapping("/new")
    public ResponseEntity<CourseResponse> newCourse(@RequestParam String name, 
                                                    @RequestParam String shortDescription, 
                                                    @RequestParam String description, 
                                                    @RequestParam MultipartFile thumbnail,
                                    @AuthenticationPrincipal CustomUserDetails userDetails) throws IOException{
        logger.info("=============REQUEST INSIDE CONTROLLER=============");
        return ResponseEntity.status(201).body(service.newCourse(name, shortDescription, description, thumbnail, userDetails.getUser()));
    }
    
}
