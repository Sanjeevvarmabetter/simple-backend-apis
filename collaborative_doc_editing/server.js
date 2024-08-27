const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require('./src/config/db');
const documentRoutes = require('./src/routes/documentRoutes');
const Document = require('./src/models/documentModel');
const { applyPatch } = require('./src/services/diffService');

// Initialize Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use('/api', documentRoutes);

// Socket.io handling
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('joinDocument', async (docId) => {
        socket.join(docId);
        const document = await Document.findById(docId);
        socket.emit('loadDocument', document);
    });

    socket.on('editDocument', async ({ docId, patch }) => {
        const document = await Document.findById(docId);
        if (document) {
            const { newContent } = applyPatch(document.content, patch);
            document.content = newContent;
            document.versions.push({ content: newContent, timestamp: new Date() });
            await document.save();

            io.to(docId).emit('documentUpdated', document);
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

