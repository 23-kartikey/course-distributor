package course.course_distributor.dto;

import lombok.Builder;

@Builder
public record UserProfileResponse(String username, String name, String about, int followers, int following, int courseCount, String profilePictureUrl){
    
}
