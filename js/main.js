
document.addEventListener("mousemove", e => {

    let body = document.querySelector('body'),
    heart = document.createElement('span');

    let x = e.offsetX;
    let y = e.offsetY;

    let size = Math.random() * 80;
    let rotateValue = Math.random() * 360;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.width = `${20 + size}px`
    heart.style.height = `${20 + size}px`
    heart.style.transform = `rotate(${rotateValue}deg)`
    
    body.appendChild(heart);
    setTimeout(() => {
        heart.remove()
    }, 1000)
    
})