const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Endpoint to serve all blogs
app.get('/blogs', (req, res) => {
  const filePath = path.join(__dirname, 'blogsData.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading the file');
      return;
    }
    try {
      const blogs = JSON.parse(data);
      res.json(blogs);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).send('Error parsing JSON');
    }
  });
});

// Endpoint to serve a single blog by ID
app.get('/blogs/:id', (req, res) => {
  const blogId = parseInt(req.params.id); // Convert id parameter to integer
  const filePath = path.join(__dirname, 'blogsData.json');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading the file');
      return;
    }
    try {
      const blogs = JSON.parse(data);
      const blog = blogs.find(blog => blog.id === blogId);
      
      if (blog) {
        res.json(blog);
      } else {
        res.status(404).send('Blog not found');
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).send('Error parsing JSON');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
