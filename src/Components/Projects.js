import React, { useState } from 'react';
import './Projects.css';
import img1 from '../images/Login.jpg';
import img2 from '../images/product.png';
import img3 from '../images/About.jpg';
import img4 from '../images/Contact.jpg';
import img5 from '../images/Products.jpg';
import img6 from '../images/Cart.jpg';
import img7 from '../images/Logout.jpg';
import Footer from './Footer';

const projects = [
  {
    name: 'Product Catalog React Application',
    description: 'A responsive React application that allows users to browse and search a catalog of products fetched from an API. Technologies used: React, JavaScript, HTML, CSS, Bootstrap, Axios, and a Products API. Features: User-friendly interface that displays product information such as name, price, image, and description. Search functionality that allows users to filter products by keyword and/or category. Pagination that enables users to navigate through multiple pages of products. Error handling and loading states to improve user experience. Accomplishments: Successfully implemented a complex front-end design using React and Bootstrap, with a responsive and accessible UI. Improved my skills in working with APIs, handling asynchronous requests with Axios and integrating the responses into my React components. Increased my familiarity with React hooks and state management.',
    images: [img1 , img2 , img3, img4, img5, img6, img7],
    link: '#'
  },
  {
    name: 'Product Catalog React Application',
    description: 'A responsive React application that allows users to browse and search a catalog of products fetched from an API. Technologies used: React, JavaScript, HTML, CSS, Bootstrap, Axios, and a Products API. Features: User-friendly interface that displays product information such as name, price, image, and description. Search functionality that allows users to filter products by keyword and/or category. Pagination that enables users to navigate through multiple pages of products. Error handling and loading states to improve user experience. Accomplishments: Successfully implemented a complex front-end design using React and Bootstrap, with a responsive and accessible UI. Improved my skills in working with APIs, handling asynchronous requests with Axios and integrating the responses into my React components. Increased my familiarity with React hooks and state management.',
    images: [img1 , img3, img4, img5, img6, img7],
    link: '#'
  },

];

const githubRepos = [
  {
    name: '1. Product Catalog React Application Repo',
    link: 'https://github.com/TumiDev10/My-Store-React-Application'
  },
  {
    name: '2. Product Catalog React Application Repo',
    link: 'https://github.com/TumiDev10/My-Store-React-Application'
  },

];


function Slideshow({ images, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-overlay">
      <div className="slideshow">
        <button className="slideshow-close" onClick={onClose}>
          Close
        </button>
        <img
          className="slideshow-image"
          src={images[currentImageIndex]}
          alt="portfolio"
        />
        <button className="slideshow-previous" onClick={previousImage}>
          Previous
        </button>
        <button className="slideshow-next" onClick={nextImage}>
          Next
        </button>
      </div>
    </div>
  );
}

function Projects() {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentSlideshowImages, setCurrentSlideshowImages] = useState([]);

  const openSlideshow = (images) => {
    setShowSlideshow(true);
    setCurrentSlideshowImages(images);
  };

  const closeSlideshow = () => {
    setShowSlideshow(false);
    setCurrentSlideshowImages([]);
  };

  return (
    <div className="App" id="Pro">
      {showSlideshow && (
        <Slideshow images={currentSlideshowImages} onClose={closeSlideshow} />
      )}
      <h1 className="section-title">
        Recent <span>Projects</span>
      </h1>
      <div className="projects-container">
        
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 style={{marginBottom: '4%'}}>{project.name}</h2>
            <p>{project.description}</p>
            
            {project.images && project.images.length > 0 && (
              <button style={{marginTop: '4%'}} className="view-project-btn" onClick={() => openSlideshow(project.images)}>
                View Project
              </button>
             
            )}
            
          </div>
        ))}
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer githubRepos={githubRepos} />
    </div>
  );
}

export default Projects;
