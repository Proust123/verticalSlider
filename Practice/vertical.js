const main = document.querySelector(".main")
const left = document.querySelector(".left_slider")
const rite = document.querySelector(".rite_slider")
const up = document.querySelector(".up")//right side
const down = document.querySelector(".down")//left side
const length = left.querySelectorAll("div").length

let index = 0

left.style.top = `-${(length - 1) * 100}vh`

up.addEventListener('click', function(){
    slideChange('up')
})
down.addEventListener('click', function(){
    slideChange('down')
})

function slideChange(direction) {
    let totalHeight = main.clientHeight
    // console.log(totalHeight);

    if(direction == 'up'){
        index++

        if(index >= length){
            index = 0
        }
    }else if(direction == 'down') {
        index--

        if(index < 0){
            index = length - 1
        }
    }

    rite.style.transform = `translateY(-${index * totalHeight}px)`
    left.style.transform = `translateY(${index * totalHeight}px)`

}
