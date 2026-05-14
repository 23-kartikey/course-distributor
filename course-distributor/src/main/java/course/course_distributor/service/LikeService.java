package course.course_distributor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import course.course_distributor.entity.Course;
import course.course_distributor.entity.User;
import course.course_distributor.repository.CourseRepository;
import course.course_distributor.repository.UserRepository;

@Service
public class LikeService {
    
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private CourseRepository courseRepo;

    public void likeCourse(Long userId, Long courseId){
        User user = userRepo.findById(userId).orElseThrow(()->new RuntimeException("User Not Found"));
        Course course = courseRepo.findById(courseId).orElseThrow(()->new RuntimeException("Course Not Found Exception"));
        user.getLikedCourses().add(course);
        userRepo.save(user);
    }

}
