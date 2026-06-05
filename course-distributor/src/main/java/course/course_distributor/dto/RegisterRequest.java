package course.course_distributor.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
    @NotBlank(message = "Email is required")
    @Size(min = 4, max = 30)
    String email, 
    @NotBlank(message = "Password is required")
    @Size(min = 8, max = 50)
    String password, 
    @NotBlank(message = "Username can't be empty")
    @Size(min = 1, max = 50)
    String username){
    
}
