const express = require('express');
const Picture = require('./script/picture');
const RestClient = require('./script/restAPI');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/:locName/:roomName', async (req, res, next) => {
 
    const fetch = new RestClient();
    fetch.get({
        locName: req.params.locName,
        roomName: req.params.roomName
    })
        .then(all => {

            const img = new Picture(all.floor.floor[0]);

            res.setHeader('Content-Type', 'image/png');
            img.canvas
                .pngStream()
                .pipe(res);

        })
        .catch(() => {
            res.send(null);
        })
});

app.listen(PORT, () => { });