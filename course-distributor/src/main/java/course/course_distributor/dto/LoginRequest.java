package course.course_distributor.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginRequest(
    @NotBlank(message = "Username or Email required")
    @Size(min=2, max=40)
    String usernameOrEmail, 
    @NotBlank(message = "Password is required")
    @Size(min = 8, max = 50)
    String password) {
    
}
