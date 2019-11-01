const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/ping', function (req, res) {
    return res.send('ping');
});
app.get('/*.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html')); //serving dist folder
});
app.get('/*.js', function (req, res) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/json');
    res.sendFile(path.join(__dirname, 'dist', `${req.path}.gz`)); //serving dist folder
});
app.listen(port, () => {
    console.log('app started on server 8080');
});
