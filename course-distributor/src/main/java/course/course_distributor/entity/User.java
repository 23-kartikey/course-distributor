package course.course_distributor.entity;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
@Table(name="Users")
public class User{
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(length = 20)
    private String firstName;

    @Column(length = 20)
    private String lastName;

    @Column(unique=true, length = 40, updatable = true)
    private String username;

    @Column(nullable = false, unique=true, length=30)
    private String email;

    @Column(nullable = false, length = 200)
    private String password;

    @Column( length = 300)
    private String about;

    @Column
    private String profilePictureUrl;

    @OneToMany(mappedBy = "author")
    private Set<Course> authoredCourses;

    @ManyToMany(mappedBy = "students")
    private Set<Course> enrolledCourses;

    @ManyToMany
    @JoinTable(
        name="course_like",
        joinColumns=@JoinColumn(name="user_id"),
        inverseJoinColumns=@JoinColumn(name="course_id")
    )
    private Set<Course> likedCourses;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name="user_roles",
        joinColumns= @JoinColumn(name="user_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name="role_id", referencedColumnName="id")
    )
    private Set<Role> roles;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name="follow_table",
        joinColumns = @JoinColumn(name="follower_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name="following_id", referencedColumnName = "id")
    )
    private Set<User> following;

    @ManyToMany(mappedBy = "following")
    private Set<User> followers;
    
}
