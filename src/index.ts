const textPosition = {
    x: 10,
    y: 10
};
let then = new Date();
let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

const main = () => {
    let now = new Date();
    let delta = now.getTime() - then.getTime();

    textPosition.x = textPosition.x > canvas.width ? 0 : (textPosition.x + (delta / 10));

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText('Hello world', textPosition.x, textPosition.y);
    
    then = now;

    requestAnimationFrame(main);
};

document.addEventListener('DOMContentLoaded', () => {
    canvas = document.createElement('canvas');
    context = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    document.body.appendChild(canvas);
    main();
});

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});