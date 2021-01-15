const { createCanvas } = require('canvas');

class Picture {

    constructor(dane) {
        this.canvas = createCanvas(640, 480);
        this.ctx = this.canvas.getContext('2d');

        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.beginPath();
        dane.rooms.forEach(room => {
            this.ctx.beginPath();
            room.poz.forEach(poz => {
                this.ctx.lineTo(poz.x, poz.y);
            });
            this.ctx.stroke();
        });

        this.ctx.beginPath();
        this.ctx.font = '20px Arial'
        this.ctx.fillStyle = '#FF0000'
        this.ctx.fillText(dane.name, 30, 30);

        dane.poz.forEach(poz => {
            this.ctx.lineWidth = 3;
            this.ctx.lineTo(poz.x, poz.y);
            this.ctx.stroke();
        });
    }

    paintEnd(end) {
        this.ctx.beginPath();
        end.poz.forEach(poz => {
            this.ctx.lineTo(poz.x, poz.y);
        });
        this.ctx.fillStyle = '#FF0000'
        this.ctx.fill();
    }

}



module.exports = Picture;