import express from 'express';
import path from 'path';
import multer from 'multer';
import cors from 'cors';

const __dirname = path.resolve();
const app = express();

// Middlewares

app.use((req,res,next) => {
    res.set({
        'Cache-Control': 'no-cache'
    });
    next();
});

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
    preflightContinue: true
}));

// Configuración subida archivos

let uploadFile = "user.json";

const storage = multer.diskStorage({
    destination: 'upload/',
    filename: function(req, file, cb){
        uploadFile = Date.now() + "_" + file.originalname;
        cb(null, uploadFile);
    }
});
const upload = multer({
    fileFilter: function(req, file, cb) {
        if(!file.mimetype.match("application/json")){
            return cb("Error: Sólo se permiten archivos JSON");
        }
        cb(null, true);
    },
    storage: storage
});

// Configuración rutas

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
    const date = new Date();
    res.json({
        date: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        time: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    });
});

// Iniciación servidor

app.listen(3000, () => {
    console.log('Server up on port 3000');
})