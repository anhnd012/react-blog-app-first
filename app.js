const express = require('express');
const multer = require('multer');
const app = express();
const user = require('./routes/user')
const post = require('./routes/post')
const path = require('path')
const category = require('./routes/category')

// It will save every route has a word "/images" inside a folder name "images"
app.use("/images", express.static(path.join(__dirname, "/images")))
app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb)=> {
        cb(null,req.body.name)
    }
})

// const upload = multer({ storage: storage});
// app.post("/api/upload", upload.single("file"), (req, res)=> {
//     res.status(200).json("File has been uploaded")
// })

const upload = multer({storage: storage});

app.post("/api/upload", upload.single("file"), (req, res)=> {
    res.status(200).json("File has been uploaded")
})

app.use('/api/post', post)
app.use('/api/user', user)
app.use('/api/category', category)

// app.use(express.static(path.join(__dirname, "/frontend")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/backend/build', 'index.html'));
// });

module.exports = app