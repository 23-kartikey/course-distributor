package course.course_distributor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import course.course_distributor.dto.UserRequest;
import course.course_distributor.dto.UserResponse;
import course.course_distributor.entity.User;
import course.course_distributor.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public UserResponse newUser(UserRequest req){
        return toResponse(userRepo.save(toUser(req)));
    }

    private User toUser(UserRequest req){
        return User
        .builder()
        .name(req.name())
        .build();
    }
    
    private UserResponse toResponse(User user){
        return UserResponse
            .builder()
            .id(user.getId())
            .name(user.getName())
            .build();
    }

}
