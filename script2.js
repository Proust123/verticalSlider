const main = document.querySelector('.main')
const left = document.querySelector('.left_slider')
const rite = document.querySelector('.rite_slider')
const up = document.querySelector('.up')
const down = document.querySelector('.down')
const length = left.querySelectorAll('div').length
let index = 0

// console.log(length);
left.style.top = `-${(length - 1) * 100}vh`

up.addEventListener('click', () => {
    return slideChange('up')
})

down.addEventListener('click', () => {
    return slideChange('down')
})

function slideChange(direction) {
    const height = main.clientHeight
    console.log(height);

    if(direction === "up"){
        index++

        if(index > length - 1){
            index = 0
        }
    }

    if(direction === "down"){
        index--

        if(index < 0){
            index = length - 1
        }
    }

    rite.style.transform = `translateY(-${index * height}px)`
    left.style.transform = `translateY(${index * height}px)`
}