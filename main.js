function changeBackgroundColor() {
    let colors = ['red', 'blue', 'orange', 'yellow', 'green', 'pink']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor
}

