const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <p className="coming-soon">I’m currently working on new projects. Check back soon!</p>

            {/* Example project card */}
            <div className="project-card">
                <h3>Sample Project</h3>
                <p>This is just a placeholder project. Once I finish a real one, I’ll add it here.</p>
                <a href="https://github.com/guillermoguevara887" target="_blank" rel="noopener noreferrer">
                    Visit my GitHub
                </a>

            </div>
        </section>
    );
};

export default Projects;
