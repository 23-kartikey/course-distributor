package course.course_distributor.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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

    public CourseResponse newCourse(String name, 
                                    String shortDescription, 
                                    String description, 
                                    MultipartFile thumbnail, 
                                    User user) throws IOException{
        
        String fileName = UUID.randomUUID()
                            +"_"
                            +thumbnail.getOriginalFilename();

        Path path = Paths.get("uploads", fileName);

        Files.copy(
            thumbnail.getInputStream(),
            path
        );

        Course course = Course.builder()
                                .name(name)
                                .shortDescription(shortDescription)
                                .description(description)
                                .thumbnailUrl("/uploads/"+fileName)
                                .author(user)
                                .build();
        
        return toResponse(courseRepo.save(course));

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
