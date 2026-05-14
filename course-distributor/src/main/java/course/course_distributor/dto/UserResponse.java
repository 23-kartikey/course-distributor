package course.course_distributor.dto;

import lombok.Builder;

@Builder
public record UserResponse(Long id, String name){
    
}
