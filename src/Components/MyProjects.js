import React, { useState, useRef } from 'react';
import SelectedProject from './SelectedProject';

const MyProjects = () => {
    const [project, setProject] = useState("book-haven");

    const projectNames = [
        "Book Haven", 
        "Apple Bytes",
        "Medicine for the Mind",
        "Rancid Tomatillos",
        "What's For Dinner?"
    ]

    const className = (projectName) => {
        return projectName.toLowerCase().replace(/ /g, '-').replace(/'/g, '-') === project ? "project-title-aside clicked" : "project-title-aside";
    }

    const showDetails = (event) => {
        const selectedProject = event.target.id;
        setProject(selectedProject);
    }

    return (
        <section className="projects-section">
            <SelectedProject project={project} setProject={setProject} />
            <aside className="projects">
                <h2 className="projects-title">Projects</h2>
                {projectNames.map(project => (
                <p
                key={project}
                id={project.toLowerCase().replace(/ /g, '-').replace(/'/g, '-')}
                className={className(project)}
                onClick={showDetails}>
                {project}
                </p>))}
            </aside>
        </section>
    )
}

export default MyProjects;