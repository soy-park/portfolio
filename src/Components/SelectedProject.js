import React from 'react';

const SelectedProject = ({ project, setProject }) => {
    let projectName = '';
    let tech = '';
    let details = '';
    let site = '';
    let github = '';

    if (project === "book-haven") {
        projectName = "Book Haven";
        tech = "JavaScript, TypeScript, React, React Router, Redux, HTML, CSS, and Cypress for testing";
        details = "Utilizing Miro and GitHub project boards, I collaborated with others in seamless planning and daily stand-ups to bring this full-stack project to life. On the front-end spectrum, I independently delved into Redux Toolkit (RTK) and TypeScript, seamlessly integrating them into this project. In summary, this is a Little Free Libraries inventory — an app designed to fuel a network of volunteer-led libraries. Discover, add, and check out books through this application.";
        site = "https://the-book-haven.vercel.app/";
        github = "https://github.com/BookHaven/BookHaven-FE";
    } else if (project === "apple-bytes") {
        projectName = "Apple Bytes";
        tech = "JavaScript, React, React Router, HTML, and CSS";
        details = "This news reader application fetches articles from a news API, displaying articles containing the keyword 'apple.' Additionally, an integrated search feature enables easy article filtering. The app boasts a responsive design, ensuring adaptation to diverse screen dimensions. I achieved this project's goals within the allocated 8-hour window, showcasing efficiency and adept time management.";
        site = "https://soy-park.github.io/apple-bytes/";
        github = "https://github.com/soy-park/apple-bytes/tree/main/apple-bytes";
    } else if (project === "medicine-for-the-mind") {
        projectName = "Medicine for the Mind";
        tech = "JavaScript, React, React Router, HTML, CSS, and Cypress for testing";
        details = "This project served as a showcase for my expertise in React, adeptly fetching data from a public API through network requests. I customized this application for healthcare professionals seeking uplifting messages about aging. The webpage offers a curated collection of cards, each adorned with an inspiring quote and its author, allowing users to mark them as favorites. A dedicated 'Favorites' page showcases their cherished selections.";
        site = "https://showcase-medicine-for-the-mind.vercel.app/";
        github = "https://github.com/soy-park/showcase-medicine-for-the-mind";
    } else if (project === "rancid-tomatillos") {
        projectName = "Rancid Tomatillos";
        tech = "JavaScript, React, React Router, HTML, CSS, and Cypress for testing";    
        details = "In a collaborative effort with another front-end developer, I refined my skills in pair programming using the driver-navigator method. Presenting a spectrum of movies, this application invites users to satisfy their curiosity by choosing a preferred film and promptly accessing pertinent details. Moreover, this intuitively designed web app incorporates a dynamic search function, making it a breeze to discover movies that precisely match your preferences.";
        site = "https://soy-park.github.io/rancid-tomatillos/";
        github = "https://github.com/soy-park/rancid-tomatillos";
    } else if (project === "what-s-for-dinner?") {
        projectName = "What's For Dinner?";
        tech = "JavaScript, HTML, and CSS";
        details = "For those pondering their next culinary adventure, take the guesswork out of meal choices. Users simply select a category (side, main, or dessert), and the app presents a delightful surprise with a randomly selected dish. Crafting this app honed my skills in integrating event listeners and handlers, and gaining proficiency in CSS flexbox for seamless layout design.";
        site = "https://soy-park.github.io/whats-for-dinner/";
        github = "https://github.com/soy-park/whats-for-dinner";
    }

    return (
        <article className="project">
            <h1 className="project-name">{projectName}</h1>
            <p className="tech-used">Technologies used:  {tech}</p>
            <p className="project-details">{details}</p>
            <div className="site-and-github">
                <a href={site} target="_blank" className="site">Site</a>
                <a href={github} target="_blank" className="github">GitHub</a>
            </div>
        </article>
    )
}

export default SelectedProject;