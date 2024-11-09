// Import environment variables from the .env file
import './config.js';
import express from 'express';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';  
import authRoutes from './Routes/auth.js'; 
import paymentRoutes from './Routes/payment.js'; 

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

// Call the connectDB function
connectDB(); // Call the function to connect to MongoDB

// Middleware
app.use(express.json());
app.use(helmet()); // Helmet adds an extra layer of security to your API
app.use(morgan('combined')); // Log HTTP requests
app.use(cors()); // Enable CORS

//base route
app.get('/', (req, res) => {
    console.log("Received a GET request on /");
    res.send('Hello World');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);

// SSL certificate and key
/*const options = {
    key: fs.readFileSync('keys/private-key.pem'),  // Ensure the path is correct
    cert: fs.readFileSync('keys/certificate.pem'), // Ensure the path is correct
};

// Start the HTTPS server
https.createServer(options, app).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Use backticks for template literals
}); */

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});