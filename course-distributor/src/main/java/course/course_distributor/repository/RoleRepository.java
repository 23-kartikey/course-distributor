package course.course_distributor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import course.course_distributor.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{

    Role findByName(String name);
    
}
