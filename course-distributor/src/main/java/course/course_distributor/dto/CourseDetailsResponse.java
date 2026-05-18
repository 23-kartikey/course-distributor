package course.course_distributor.dto;

import lombok.Builder;

@Builder
public record CourseDetailsResponse(Long id, String name, String shortDescription, String description){
    
}
