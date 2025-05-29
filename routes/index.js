const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });


const Media = require('../models/Media');

// Sample POST route for uploading media
router.post('/upload', upload.single('media'), async (req, res) => {
  const { title, type, category } = req.body;
  const newMedia = new Media({
    title,
    type,
    category,
    url: req.file.path
  });
  await newMedia.save();
  res.redirect('/projects'); // or wherever you want
});



// Route: GET /home
router.get('/home', (req, res) => {
  res.render('home'); // renders views/home.ejs
});

// Route: GET /about
router.get('/about', (req, res) => {
    res.render('about'); // renders views/about.ejs
  });


// Route: GET /projects
router.get('/projects', (req, res) => {
    // Dummy projects for now
    const projects = [
      {
        title: "ViaMentis",
        description: "An AI-powered career guidance platform with Fetch.ai integration.",
        techStack: "Node.js, Express, MongoDB, EJS, Fetch.ai",
        github: "https://github.com/Nouman-wp/ViaMentis",
        live: "#",
        image: "/assets/projects/viamentis.png"
      },
      {
        title: "ArcticCart",
        description: "An NFT marketplace for in-game gun skins using Neo X.",
        techStack: "Solidity, Web3.js, Node.js",
        github: "https://github.com/Nouman-wp/ArcticCart",
        live: "#",
        image: "/assets/projects/arcticcart.png"
      }
    ];
    
    res.render('projects', { projects });
  });
  

  // Route: GET /experience
router.get('/experience', (req, res) => {
    // Dummy data for now
    const experiences = [
      {
        role: "Web Development Intern",
        company: "TechCorp Solutions",
        duration: "June 2024 - August 2024",
        description: "Worked on full-stack development with the MERN stack, building scalable web applications.",
        techStack: "React.js, Node.js, Express, MongoDB"
      },
      {
        role: "Blockchain Developer",
        company: "Neo X",
        duration: "September 2024 - Present",
        description: "Developed decentralized applications (DApps) using blockchain technology and smart contracts.",
        techStack: "Solidity, Web3.js, Neo X"
      }
    ];
  
    res.render('experience', { experiences });
  });
  

  // Route: GET /links
router.get('/links', (req, res) => {
    // Dummy data for now
    const links = [
      { name: "GitHub", url: "https://github.com/Nouman-wp" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/noumanwp" },
      { name: "Twitter", url: "https://x.com/Nouman_wp" }
    ];
  
    res.render('links', { links });
  });
  

  // Route: GET /competitions
router.get('/competitions', (req, res) => {
    // Dummy data for now
    const competitions = [
      {
        name: "Hack 24",
        date: "2023-10-05",
        description: "A 24-hour hackathon focused on innovative solutions in the tech space.",
        link: "https://www.hack24.com"
      },
      {
        name: "Fetch-a-thon 2.0",
        date: "2024-01-20",
        description: "A hackathon centered around building AI-powered decentralized applications.",
        link: "https://fetch.ai"
      }
    ];
  
    res.render('competitions', { competitions });
  });
  
// Route: GET /hobbies
router.get('/hobbies', (req, res) => {
    // Dummy data for now
    const hobbies = [
      {
        name: "Gaming",
        description: "I enjoy playing FPS games like Valorant and PUBG. It helps me stay focused and think critically.",
        imageUrl: "/images/gaming.jpg"
      },
      {
        name: "Coding",
        description: "I spend most of my time learning new technologies, building projects, and solving problems.",
        imageUrl: "/images/coding.jpg"
      },
      {
        name: "Reading",
        description: "I enjoy reading tech blogs, books, and articles to stay updated with the latest in the tech world.",
        imageUrl: "/images/reading.jpg"
      }
    ];
  
    res.render('hobbies', { hobbies });
  });
  


module.exports = router;

