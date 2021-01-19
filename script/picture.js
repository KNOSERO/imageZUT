const { createCanvas } = require('canvas');

class Picture {

    constructor(dane, roomName) {
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
            if(room.name == roomName) {
                this.ctx.fillStyle = '#727EBF'
                this.ctx.fill();
            }
            if(room.name == 'WC') {
                this.ctx.fillStyle = '#0080ff'
                this.ctx.fill();
            }
            if(room.name == 'EAT') {
                this.ctx.fillStyle = '#ffa500'
                this.ctx.fill();
            }
            this.ctx.stroke();
        });

        this.ctx.beginPath();
        this.ctx.font = '50px Arial'
        this.ctx.fillStyle = '#FF0000'
        this.ctx.fillText(dane.name, 50, 50);

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