package course.course_distributor.controller;


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
import org.springframework.web.bind.annotation.RestController;

import course.course_distributor.dto.CourseRequest;
import course.course_distributor.dto.CourseResponse;
import course.course_distributor.security.CustomUserDetails;
import course.course_distributor.service.CourseService;

@RestController
@CrossOrigin(origins="http://localhost:5173")
@RequestMapping
public class CourseController {

    @Autowired
    private CourseService service;

    @GetMapping("public/courses")
    public ResponseEntity<Page<CourseResponse>> getCourses(Pageable pageable){
        return ResponseEntity.ok(service.getCourses(pageable));
    }

    @PostMapping("/courses/new")
    public ResponseEntity<CourseResponse> newCourse(@RequestBody CourseRequest req,
                                    @AuthenticationPrincipal CustomUserDetails userDetails){
        return ResponseEntity.status(201).body(service.newCourse(req, userDetails.getUser()));
    }
    
}
