package course.course_distributor.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import course.course_distributor.dto.LoginRequest;
import course.course_distributor.dto.LoginResponse;
import course.course_distributor.dto.RegisterRequest;
import course.course_distributor.dto.RegisterResponse;
import course.course_distributor.entity.User;
import course.course_distributor.interfaces.AuthService;
import course.course_distributor.repository.UserRepository;
import course.course_distributor.security.JwtTokenProvider;

@Service
public class AuthServiceImpl implements AuthService{

    private static final Logger logger= LoggerFactory.getLogger(AuthServiceImpl.class);
    
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public LoginResponse login(LoginRequest req){
        
        logger.info("Attempting login for: {}", req.usernameOrEmail());

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(req.usernameOrEmail(), req.password()));
        
        logger.info("Authentication successful");

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.generateToken(authentication);

        return LoginResponse.builder().token(token).build();
    }

    @Override
    public RegisterResponse register(RegisterRequest req){

        User user = User.builder()
                        .email(req.email())
                        .password(passwordEncoder.encode(req.password()))
                        .build();

        Long id = userRepo.save(user).getId();

        return new RegisterResponse(id);

    }

}
