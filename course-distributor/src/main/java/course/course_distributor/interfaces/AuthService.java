package course.course_distributor.interfaces;

import course.course_distributor.dto.LoginRequest;
import course.course_distributor.dto.LoginResponse;

public interface AuthService {
    
    public LoginResponse login(LoginRequest req);

}
