package course.course_distributor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import course.course_distributor.dto.CourseRequest;
import course.course_distributor.dto.CourseResponse;
import course.course_distributor.entity.Course;
import course.course_distributor.repository.CourseRepository;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepo;

    public Page<CourseResponse> getCourses(Pageable pageable){
        return courseRepo.findAll(pageable).map(this::toResponse);
    }

    public CourseResponse newCourse(CourseRequest req){
        return toResponse(courseRepo.save(toCourse(req)));
    }
    
    private Course toCourse(CourseRequest req){
        return Course
            .builder()
            .name(req.name())
            .description(req.description())
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
