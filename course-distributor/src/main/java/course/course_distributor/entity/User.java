package course.course_distributor.entity;

import java.util.Set;


import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    private Long id;

    private String name;


    @ManyToMany
    private Set<Course> likedCourses;
    
}
