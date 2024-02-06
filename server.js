const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'))); // Updated this line

// Middleware to set the correct MIME type for CSS files
app.use((req, res, next) => {
    if (req.url.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
    }
    next();
});

// Handle form submissions
app.post('/submit-form', upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'certificates', maxCount: 1 },
    { name: 'aadharCard', maxCount: 1 },
]), (req, res) => {
    const {
        fullName,
        dob,
        address,
        phoneNumber,
        email,
        termsAgreement,
        communicationPreference,
        jobTitle,
        department,
        joiningDate,
        employeeId,
    } = req.body;

    const resumePath = req.files['resume'][0].path;
    const certificatesPath = req.files['certificates'][0].path;
    const aadharCardPath = req.files['aadharCard'][0].path;

    // Perform actions with the form data and uploaded files (e.g., store in a database)

    // Send a success response
    res.json({ success: true });
});

// Handle seat allocation
app.post('/allocate-seat', upload.none(), (req, res) => {
    const { employeeName, department, seatSelection } = req.body;

    // Perform actions with the seat allocation data (e.g., store in a database)

    // Send a success response
    res.json({ success: true });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

