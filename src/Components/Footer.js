import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

function Footer({ githubRepos }) {
  return (
    <footer className="footer">
      <div className="github-repos">
        <h2 style={{ marginBottom: '2%' }}>GitHub Repositories</h2>
        {githubRepos.map((repo, index) => (
          <div className="github-repo" key={index}>
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
            <a href={repo.link}>{repo.name}</a>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
