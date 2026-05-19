package course.course_distributor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import course.course_distributor.dto.CourseRequest;
import course.course_distributor.dto.CourseResponse;
import course.course_distributor.entity.Course;
import course.course_distributor.entity.User;
import course.course_distributor.repository.CourseRepository;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepo;

    public Page<CourseResponse> getCourses(Pageable pageable){
        return courseRepo.findAll(pageable).map(this::toResponse);
    }

    public CourseResponse newCourse(CourseRequest req, User user){
        
        return toResponse(courseRepo.save(toCourse(req, user)));
        
    }
    
    private Course toCourse(CourseRequest req, User user){
        return Course.builder()
                    .author(user)
                    .description(req.description())
                    .shortDescription(req.shortDescription())
                    .name(req.name())
                    .build();
    }

    private CourseResponse toResponse(Course course){
        return CourseResponse
            .builder()
            .id(course.getId())
            .name(course.getName())
            .shortDescription(course.getShortDescription())
            .build();
    }

}
