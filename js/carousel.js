// Carousel script

const imgs = document.getElementById('imgs')
const arrowLeft = document.getElementById('clickArrowLeft')
const arrowRight = document.getElementById('clickArrowRight')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 4000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`
}

function resetInterval()  {
    clearInterval(interval)
    interval = setInterval(run, 4000)
}


arrowRight.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

arrowLeft.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})