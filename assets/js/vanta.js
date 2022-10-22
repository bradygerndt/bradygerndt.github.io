let effect;

window.addEventListener('load', () => {
    effect = setVanta();
})

window.addEventListener('beforeprint', () => {
    effect.destroy()
})
window.addEventListener('afterprint', () => {
    effect = setVanta()
})

function setVanta() {
    return VANTA.NET({
        el: "#animated-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.00,
        color: 0x2aa198,
        backgroundColor: 0xffffff,
        points: 20.00,
        maxDistance: 20.00,
        showDots: false,
        spacing: 15
    })
}