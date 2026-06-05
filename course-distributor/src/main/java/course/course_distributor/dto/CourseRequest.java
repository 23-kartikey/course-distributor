package course.course_distributor.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CourseRequest(
    @NotBlank
    @Size(min = 1, max = 90)
    String name, 
    @NotBlank
    @Size(min = 5, max = 150)
    String shortDescription, 
    @Size(max= 1000)
    String description){
    
}
