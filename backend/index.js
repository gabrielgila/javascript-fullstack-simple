const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

// Initializations
const app = express();

// Settings
app.set('port', 3000);

// Middleware
app.use(morgan('dev'));
multer.diskStorage({
    destination: path.join(__dirname. 'public/uploads'),
    filename(req, file, cb) {
        cb(null, );
    }
})
app.use.(multer());

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})