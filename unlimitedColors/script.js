const randomColor = function () {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}
let intervalId = null
document.getElementById('start').addEventListener('click', () => {
    if (!intervalId) {
        console.log('Started')
        intervalId = setInterval(randomColor, 1000)
    }
})
document.getElementById('stop').addEventListener('click', () => {
    if (intervalId) {
        console.log('Stopped')
        clearInterval(intervalId)
        intervalId = null
    }
})