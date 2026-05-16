package course.course_distributor.interfaces;

import course.course_distributor.dto.LoginRequest;
import course.course_distributor.dto.LoginResponse;
import course.course_distributor.dto.RegisterRequest;

public interface AuthService {
    
    public LoginResponse login(LoginRequest req);
    public void register(RegisterRequest req);

}
