import React, { useState, useRef } from 'react';
import AboutMe from './Components/AboutMe';
import MyProjects from './Components/MyProjects';
import MyAwards from './Components/MyAwards';
import ContactLinks from './Components/ContactLinks';
import '../src/index.css';

function App() {
  const [homePageVisible, setHomePageVisible] = useState(true);
  const [mainPageVisible, setMainPageVisible] = useState(false);
  const mainContentRef = useRef(null);

  let page;

  const showPage = (page) => {
    setHomePageVisible(false);
    setMainPageVisible(true);

    if (page === "about") {
      scrollToSection(".about-me-section");
    } else if (page === "projects") {
      scrollToSection(".projects-section");
    } else if (page === "awards") {
      scrollToSection(".awards-section");
    } else if (page === "contact") {
      scrollToSection(".contact-section");
    } else {
      console.log("Please click on an appropriate page");
    }
  }

  const showHomePage = () => {
    setHomePageVisible(true);
    setMainPageVisible(false);
  }

  const scrollToSection = (section) => {
    const desiredSection = document.querySelector(section);

    if (desiredSection) {
      window.scrollTo({
        top: desiredSection.getBoundingClientRect().top + window.scrollY - 93,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="App">
      {homePageVisible && !mainPageVisible && (
        <div className="home-page">
          <div className="center-box">
            <div className="category-wrapper">
              <h1>SOYEON (SARA) PARK</h1>
                <button className="name-btn" onClick={() => showPage("about")}>
                  <span>
                    <span>
                      <span data-attr-span="Explore Portfolio">
                        Explore Portfolio
                      </span>
                    </span>
                  </span>
                </button>
            </div>
          </div>
        </div>
      )}
      {!homePageVisible && mainPageVisible && (
        <div className="main-page" ref={mainContentRef}>
          <header>
            <div class="menu-container">
              <button className="menu-btn">MENU</button>
              <div className="menu-content">
                <a onClick={showHomePage}>Home</a>
                <a onClick={() => showPage("about")}>About</a>
                <a onClick={() => showPage("projects")}>Projects</a>
                <a onClick={() => showPage("awards")}>Awards</a>
                <a onClick={() => showPage("contact")}>Contact</a>
              </div>
            </div>
            <h1 className="header-name">SOYEON (SARA) PARK</h1>
          </header>
          <main className="content">
            <div className="section-before-about">
            </div>
            <AboutMe />
            <MyProjects />
            <MyAwards />
            <ContactLinks />
          </main>
        </div>
      )}
    </div>
  )
}

export default App;
