class Cross {
    constructor(height, width, x, y) {
        this.prog = 0;
        this.progside = 0;
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.c = 1;
        this.increment = -8;
        this.str = 1;
        this.offset = 0;
        this.strinc = 0.05;
        if (this.side == 2) this.displace *= -1;
        this.height += this.displace;
        this.transp = 0.01;
        console.log(this.x, this.y);
    }

    render() {
        if (this.c >= 0 || this.str >= 0) {
            if (frameCount % 2 == 0) {
                background('rgba(1,1,1,' + this.transp + ')');
                this.transp += 0.03;
                for (let i = 1; i <= 3; i++) {
                    strokeWeight(this.str);
                    stroke(this.c);
                    line(
                        this.x - this.progside,
                        this.y,
                        this.x + this.progside,
                        this.y
                    );
                    line(
                        this.x,
                        this.y - this.prog,
                        this.x,
                        this.y + this.prog
                    );
                    if (this.increment < 0 || (this.offset <= 0 && this.increment > 0))
                        this.c -= this.increment;
                    if (frameCount % 2 == 0) {
                        this.prog += 20;
                        if (this.x + this.progside <= window.innerWidth / 2)
                            this.progside += 20;
                        if (this.x > window.innerWidth / 2 && this.x - this.progside > window.innerWidth / 2)
                            this.progside += 20;
                        this.str += this.strinc;
                    }
                }
            }
            if (this.c >= 255) this.increment = 2.5;
            //if (this.str >= 10) this.strinc = 0;
        }
        return this.c;
    }

    exists() {
        if (this.c < 0) return false;
        return true;
    }
}