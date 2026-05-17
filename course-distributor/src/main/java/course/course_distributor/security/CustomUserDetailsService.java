package course.course_distributor.security;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import course.course_distributor.entity.User;
import course.course_distributor.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService{
    
    @Autowired
    private UserRepository userRepo;

    public UserDetails loadUserByUsername(String usernameOrEmail){

        User user = userRepo.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                            .orElseThrow(()->(new UsernameNotFoundException("User doesn't exist")));
        
        Set<GrantedAuthority> authorities = user.getRoles().stream()
                                .map(role->new SimpleGrantedAuthority(role.getName()))
                                .collect(Collectors.toSet());

        return new org.springframework.security.core.userdetails.User(
                                                user.getEmail(),
                                                user.getPassword(),
                                                authorities
        );
    }

}
