package course.course_distributor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import course.course_distributor.dto.LoginRequest;
import course.course_distributor.dto.LoginResponse;
import course.course_distributor.interfaces.AuthService;
import course.course_distributor.security.JwtTokenProvider;

@Service
public class AuthServiceImpl implements AuthService{
    
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Override
    public LoginResponse login(LoginRequest req){
        
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(req.usernameOrEmail(), req.password()));
        
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.generateToken(authentication);

        return LoginResponse.builder().accessToken(token).build();
    }

}
