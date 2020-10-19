const mongoose = requiere('mongoose');

mongoose.connect('mongodb://localhost/javascriptdb', {
    userNewUrlParser: true
})
    .then(db => console.log('Db is connect'))
    .catch(err => console.error(err));