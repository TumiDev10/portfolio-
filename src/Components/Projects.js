import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Product Catalog React Application',
    description: 'A responsive React application that allows users to browse and search a catalog of products fetched from an API.Technologies used: React, JavaScript, HTML, CSS, Bootstrap, Axios, and a Products API. Features: User-friendly interface that displays product information such as name, price, image, and description. Search functionality that allows users to filter products by keyword and/or category. Pagination that enables users to navigate through multiple pages of products. Error handling and loading states to improve user experience. Accomplishments: Successfully implemented a complex front-end design using React and Bootstrap, with a responsive and accessible UI. Improved my skills in working with APIs, handling asynchronous requests with Axios and integrating the responses into my React components. Increased my familiarity with React hooks and state management.',
    link: '#'
  },
  {
    name: 'Project 2',
    description: 'A description of your project.',
    link: '#'
  },
  {
    name: 'Project 3',
    description: 'A description of your project.',
    link: '#'
  }
];

const githubRepos = [
  {
    name: 'Product Catalog React Application Repo',
    link: 'https://github.com/TumiDev10/My-Store-React-Application'
  },
  {
    name: 'Repo 2',
    link: 'https://github.com/your-username/repo2'
  },
  {
    name: 'Repo 3',
    link: 'https://github.com/your-username/repo3'
  }
];

function Projects() {
  return (
    <div className="App">
      <h1 style={{marginTop: '180px'}} class="section-title">
        Recent 
        <span>Projects</span>
      </h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.name}</h2>
            <p style={{textAlign: "start", fontWeight: "initial"}}>{project.description}</p>
            <a style={{fontSize: 'xx-large'}} href={project.link}>View Project</a>
    
          </div>
        ))}
      </div>
      <div className="github-repos">
        <h2>GitHub Repositories</h2>
        {githubRepos.map((repo, index) => (
          <div className="github-repo" key={index}>
            <a href={repo.link}>{repo.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
