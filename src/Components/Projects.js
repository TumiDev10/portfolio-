import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Project 1',
    description: 'A description of your project.',
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
    name: 'Repo 1',
    link: 'https://github.com/your-username/repo1'
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
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
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
