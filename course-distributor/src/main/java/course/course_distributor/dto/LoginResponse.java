package course.course_distributor.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class LoginResponse{
    
    private String accessToken;

    private final String tokenType = "Bearer";

}
