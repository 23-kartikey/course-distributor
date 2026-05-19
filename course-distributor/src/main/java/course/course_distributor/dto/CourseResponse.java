package course.course_distributor.dto;

import lombok.Builder;

@Builder
public record CourseResponse(Long id, String name, String shortDescription, String thumbnailUrl){
    
}
