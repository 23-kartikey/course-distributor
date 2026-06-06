package course.course_distributor;

import java.util.TimeZone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CourseDistributorApplication {

	public static void main(String[] args) {
		System.out.println(TimeZone.getDefault());
		System.out.println(System.getProperty("user.timezone"));
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Kolkata"));
		System.setProperty("user.timezone", "Asia/Kolkata");
		SpringApplication.run(CourseDistributorApplication.class, args);
	}

}
