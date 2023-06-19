import React, { useState } from 'react';
import './Projects.css';
import img1 from '../images/Login.jpg';
import img2 from '../images/product.png';
import img3 from '../images/About.jpg';
import img4 from '../images/Contact.jpg';
import img5 from '../images/Products.jpg';
import img6 from '../images/Cart.jpg';
import img7 from '../images/Logout.jpg';
import Lotto1 from '../images/Lotto1.jpg'
import Lotto2 from '../images/Lotto2.jpg'
import Lotto3 from '../images/Lotto3.jpg'
import Lotto4 from '../images/Lotto4.jpg'
import Lotto5 from '../images/Lotto5.jpg'
import Lotto6 from '../images/Lotto6.jpg'
import Lotto7 from '../images/Lotto7.jpg'
import Lotto8 from '../images/Lotto8.jpg'
import Lotto9 from '../images/Lotto9.jpg'
import Lotto10 from '../images/Lotto10.jpg'
import Lotto11 from '../images/Lotto11.jpg'
import Footer from './Footer';

const projects = [
  {
    name: 'Product Catalog React Application',
    description: 'A responsive React application that allows users to browse and search a catalog of products fetched from an API. Technologies used: React, JavaScript, HTML, CSS, Bootstrap, Axios, and a Products API. Features: User-friendly interface that displays product information such as name, price, image, and description. Search functionality that allows users to filter products by keyword and/or category. Pagination that enables users to navigate through multiple pages of products. Error handling and loading states to improve user experience. Accomplishments: Successfully implemented a complex front-end design using React and Bootstrap, with a responsive and accessible UI. Improved my skills in working with APIs, handling asynchronous requests with Axios and integrating the responses into my React components. Increased my familiarity with React hooks and state management.',
    images: [img1 , img2 , img3, img4, img5, img6, img7],
    link: '#'
  },
  {
    name: 'LOTTO React Application',
    description: 'I recreated the ithuba lotto app. The Lotto React App is a dynamic and interactive web application built with React.js. It offers a user-friendly interface, real-time updates, and interactive features for lottery enthusiasts. Users can select their preferred lottery game, choose numbers, and witness live drawing events. The app also provides number statistics, allows group play, and is built with modularity and maintainability in mind. It combines the excitement of playing the lottery with the convenience of a modern web app. Technologies used: 1. React.js - I used it to create reusable UI components and to efficiently manage the application rate, 2. Redux - I used this as a state containeer for my javascipt. I aslo used it to manage the global state of the app, making it easier to handle complex data flow and application logic, 3. React Router - It helped with the routing. It enables navigating between features such as ticket selection and results. 4. Axios - I used it to make HTTP requests from the browser. It communicates with the API to fecth lotto daa, submit tickets, and retrieve results. ',
    images: [Lotto1 , Lotto2, Lotto3, Lotto4, Lotto5, Lotto6, Lotto7, Lotto8, Lotto9, Lotto10, Lotto11],
    link: '#'
  },

];

const githubRepos = [
  {
    name: '1. Product Catalog React Application Repo',
    link: 'https://github.com/TumiDev10/My-Store-React-Application'
  },
  {
    name: '2. LOTTO React Application Repo',
    link: 'https://github.com/TumiDev10/worldsportsbetting'
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
            <h2 style={{marginBottom: '4%', color: 'black'}}>{project.name}</h2>
            <p>{project.description}</p>
            
            {project.images && project.images.length > 0 && (
              <button style={{marginTop: '4%', color: 'black'}} className="view-project-btn" onClick={() => openSlideshow(project.images)}>
                View Project
              </button>
             
            )}
            
          </div>
        ))}
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer style={{color: 'white'}} githubRepos={githubRepos} />
    </div>
  );
}

export default Projects;
