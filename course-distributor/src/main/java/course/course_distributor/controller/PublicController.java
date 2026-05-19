package course.course_distributor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import course.course_distributor.dto.CourseResponse;
import course.course_distributor.service.CourseService;

@RestController
@RequestMapping("/public")
public class PublicController {
    
    @Autowired
    private CourseService service;

    @GetMapping("/courses")
    public ResponseEntity<Page<CourseResponse>> getCourses(Pageable pageable){
        return ResponseEntity.ok(service.getCourses(pageable));
    }

}
