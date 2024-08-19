function changeBackgroundcolor(){
    const colors = ['#f4f4f4', '#e0e0e0', '#d4d4d4', '#c8c8c8', '#b0b0b0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}