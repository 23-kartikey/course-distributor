package course.course_distributor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import course.course_distributor.dto.DetailsRequest;
import course.course_distributor.dto.UserProfileResponse;
import course.course_distributor.entity.User;
import course.course_distributor.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public void fillDetails(DetailsRequest req, Long id){

        User user = userRepo.findById(id).orElseThrow(()->new UsernameNotFoundException("User with id :"+id+" not found"));
        user.setFirstName(req.firstName());
        user.setLastName(req.lastName());
        user.setUsername(req.username());
        user.setAbout(req.about());

        userRepo.save(user);

    }

    public UserProfileResponse getUserProfile(String username){
        User user = userRepo.findByUsernameOrEmail(username, username).orElseThrow(()->new UsernameNotFoundException(username));
        return new UserProfileResponse(user.getUsername(), user.getFirstName()+user.getLastName(), user.getAbout());
    }

}
