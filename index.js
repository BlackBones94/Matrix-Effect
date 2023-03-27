let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
// let letters ="あかさたなはまやらわんいきしちにひみりうくすつぬふむゆるえけせてねへめれおこそとのほもよろを";
// let letters = "αβγδεζηθικλµνξοπρστυϕχψω";
// let letters ="ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي ء";
// let letters ="абцдефгхийклмнопqрстувwхыз";

letters = letters.split('');

let fontSize = 10,
columns = canvas.width / fontSize;

let drops = [];
for(let i =0 ; i< columns; i++){
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0,0, canvas.width, canvas.height);
    for(let i = 0; i< drops.length; i++) {
        let text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if(drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}



setInterval(draw, 50)



