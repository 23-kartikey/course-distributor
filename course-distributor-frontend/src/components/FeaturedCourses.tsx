import "../styles/FeaturedCourses.css";

const courses = [
  {
    title: "Java Masterclass",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    title: "Spring Boot Development",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    title: "React Complete Guide",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    title: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>Featured Courses</h2>
        <p>
          Learn from industry experts and build
          skills that employers actually want.
        </p>
      </div>

      <div className="slider">
        <div className="slide-track">
          {[...courses, ...courses].map((course, index) => (
            <div
              key={index}
              className="course-banner"
              style={{
                backgroundImage: `url(${course.image})`,
              }}
            >
              <div className="course-overlay">
                <h3>{course.title}</h3>

                <p>
                  Professional certification course
                  with real-world projects.
                </p>

                <button>
                  Explore Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}