// app.js
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const questionRoutes = require('./routes/questions');
const scoresRouter = require('./routes/scores');


dotenv.config();
const app = express();
// Use the cors middleware to enable cross-origin requests
app.use(cors());
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://admin:mojnu13@ac-r7tsoou-shard-00-00.dgjlksi.mongodb.net:27017,ac-r7tsoou-shard-00-01.dgjlksi.mongodb.net:27017,ac-r7tsoou-shard-00-02.dgjlksi.mongodb.net:27017/HSC_MCQ?replicaSet=atlas-6g6n8a-shard-0&ssl=true&authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json());
app.use('/api/questions', questionRoutes);
app.use('/api/scores', scoresRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
