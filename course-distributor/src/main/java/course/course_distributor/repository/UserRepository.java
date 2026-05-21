package course.course_distributor.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import course.course_distributor.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
    public Optional<User> findByUsernameOrEmail(String username, String email);
    public Boolean existsByUsername(String username);
    public Optional<User> findUserByUsername(String username);
}
