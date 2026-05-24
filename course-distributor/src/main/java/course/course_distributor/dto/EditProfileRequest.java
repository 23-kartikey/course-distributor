package course.course_distributor.dto;

import org.springframework.web.multipart.MultipartFile;

public record EditProfileRequest(String firstName, String lastName, String username, String about, MultipartFile profilePicture){
    
}