import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">

                <div className="footer-brand">
                    <h2>Course Distributor</h2>

                    <p>
                        Learn. Build. Grow.
                    </p>
                </div>

                <div className="footer-links">

                    <div>
                        <h3>Explore</h3>
                        <a>Courses</a>
                        <a>Categories</a>
                        <a>Popular</a>
                    </div>

                    <div>
                        <h3>Resources</h3>
                        <a>Blog</a>
                        <a>Documentation</a>
                        <a>Help Center</a>
                    </div>

                    <div>
                        <h3>Company</h3>
                        <a>About</a>
                        <a>Contact</a>
                        <a>Privacy</a>
                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                © 2026 Course Distributor
            </div>
        </footer>
    );
}