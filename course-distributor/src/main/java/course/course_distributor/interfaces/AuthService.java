package course.course_distributor.interfaces;

import course.course_distributor.dto.LoginRequest;
import course.course_distributor.dto.RegisterRequest;
import course.course_distributor.dto.TokenResponse;

public interface AuthService {
    
    public TokenResponse login(LoginRequest req);
    public TokenResponse register(RegisterRequest req);

}
