package course.course_distributor.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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

    public UserProfileResponse editProfile(String usernameOrEmail, String firstName, String lastName, String username, String about, MultipartFile profilePicture)throws IOException{

        String fileName = UUID.randomUUID() + "_"+profilePicture.getOriginalFilename();
        Path path = Paths.get("uploads", fileName);

        Path uploadPath = Paths.get("uploads");

        if(!Files.exists(uploadPath)){
            Files.createDirectories(uploadPath);
        }

        Files.copy(profilePicture.getInputStream(), path);

        User user = userRepo.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                            .orElseThrow(()->new UsernameNotFoundException(usernameOrEmail));
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setAbout(about);
        user.setProfilePictureUrl("/uploads/"+fileName);

        return new UserProfileResponse(user.getUsername(), user.getFirstName()+user.getLastName(), user.getAbout());

    }

}
