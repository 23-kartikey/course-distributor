package course.course_distributor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import course.course_distributor.service.LikeService;

@RestController
@RequestMapping("/like")
public class LikeController {
    
    @Autowired
    private LikeService service;

    @PostMapping("/{userId}/{courseId}")
    public ResponseEntity<String> likeCourse(@PathVariable Long userId, @PathVariable Long courseId){
        service.likeCourse(userId, courseId);
        return ResponseEntity.status(200).body("User with ID " + userId + " liked Course with ID " + courseId);
    }

}
