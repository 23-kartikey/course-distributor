package course.course_distributor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import course.course_distributor.dto.CourseRequest;
import course.course_distributor.dto.CourseResponse;
import course.course_distributor.entity.Course;
import course.course_distributor.repository.CourseRepository;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepo;

    public List<CourseResponse> getCourses(){
        return courseRepo.findAll().stream().map(this::toResponse).toList();
    }

    public CourseResponse newCourse(CourseRequest req){
        return toResponse(courseRepo.save(toCourse(req)));
    }
    
    private Course toCourse(CourseRequest req){
        return Course
            .builder()
            .name(req.name())
            .build();
    }

    private CourseResponse toResponse(Course course){
        return CourseResponse
            .builder()
            .id(course.getId())
            .name(course.getName())
            .build();
    }

}
