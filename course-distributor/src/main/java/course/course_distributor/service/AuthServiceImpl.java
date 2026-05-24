package course.course_distributor.service;

import java.util.Set;

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
import course.course_distributor.dto.RegisterRequest;
import course.course_distributor.dto.TokenResponse;
import course.course_distributor.entity.Role;
import course.course_distributor.entity.User;
import course.course_distributor.interfaces.AuthService;
import course.course_distributor.repository.RoleRepository;
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
    private RoleRepository roleRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public TokenResponse login(LoginRequest req){
        
        logger.info("Attempting login for: {}", req.usernameOrEmail());

        Authentication authentication = authenticationManager
                                        .authenticate(
                                            new UsernamePasswordAuthenticationToken(
                                                req.usernameOrEmail(), 
                                                req.password()));
        
        logger.info("Authentication successful");

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.generateToken(authentication);

        logger.info("=============User Logged In: {}", authentication.getName());

        return new TokenResponse(token, authentication.getName());
    }

    @Override
    public TokenResponse register(RegisterRequest req){

        registerUser(req);

        logger.info("===================Attempting login for: {}", req.email());

        Authentication authentication = authenticationManager.authenticate
                                            (new UsernamePasswordAuthenticationToken(
                                                req.email(),
                                                req.password()
                                            ));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        logger.info("================Authentication successful==================");

        String token = tokenProvider.generateToken(authentication);

        logger.info("=============User Logged In: {}", authentication.getName());

        return new TokenResponse(token, req.username());

    }

    @Override
    public Boolean checkUsername(String username){
        logger.info("Validating username: ", username);
        return !userRepo.existsByUsername(username);
    }

    private void registerUser(RegisterRequest req){
        
        Role role = roleRepo.findByName("USER");

        User user = User.builder()
                        .email(req.email())
                        .password(passwordEncoder.encode(req.password()))
                        .username(req.username())
                        .roles(Set.of(role))
                        .build();

        userRepo.save(user).getId();

    }

}
