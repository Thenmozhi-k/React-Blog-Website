const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors middleware
const app = express();

app.use(cors()); // Enable CORS for all routes

app.get('/blogs', (req, res) => {
    const filePath = path.join(__dirname, 'blogsData.json');
    console.log(`Serving file from: ${filePath}`); // Debug log
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status || 500).send('Error serving the file');
        } else {
            console.log('File sent:', filePath);
        }
    });
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
