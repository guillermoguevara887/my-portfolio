const Projects = () => {
    return (
        <section id="projects" className="projects-section" data-aos="fade-up">
            <h2>Projects</h2>

            <div className="projects-grid">

                {/* Proyecto: MemoDev Studio */}
                <div className="project-card">
                    <h3>MemoDev Studio</h3>
                    <p>A fictional creative tech company focused on innovation, storytelling, and experimental web development.</p>
                    <span className="tech-stack">React, CSS, GitHub Pages</span>
                    <a href="https://web-page-plum.vercel.app/#projects" target="_blank" rel="noopener noreferrer">
                        Visit Website
                    </a>
                </div>

                {/* Proyecto: Portafolio */}
                <div className="project-card" data-aos-delay="200">
                    <h3>Portfolio Website</h3>
                    <p>This site you're on — a personal portfolio built with React + Vite + CSS, deployed on Vercel.</p>
                    <span className="tech-stack">React, Vite, CSS</span>
                    <a href="https://my-portfolio-ten-rho-91.vercel.app" target="_blank" rel="noopener noreferrer">
                        View Live
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;
