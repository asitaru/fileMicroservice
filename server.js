const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './uploads' });

let app = express();


app.set('port', (process.env.PORT || 5000));

app.get('/', (req,res) => {
    res.send('<form action="/upload", method="post", enctype="multipart/form-data"><input type="file", name="file"></input><input type="submit"></input></form>')
});

app.post('/upload', upload.single('file'), (req,res, next) => {
    if(req.file){
        res.json({ size: req.file.size });
    }
});

app.listen(app.get('port'), () => console.log('App is running on port', app.get('port')));
