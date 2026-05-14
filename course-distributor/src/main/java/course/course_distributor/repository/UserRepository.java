package course.course_distributor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import course.course_distributor.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
