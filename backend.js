const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Set up storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/upload-audio', upload.single('audio'), (req, res) => {
    res.json({ message: 'File uploaded successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
