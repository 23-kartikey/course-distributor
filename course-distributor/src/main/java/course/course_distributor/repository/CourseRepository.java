package course.course_distributor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import course.course_distributor.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{
    
}
