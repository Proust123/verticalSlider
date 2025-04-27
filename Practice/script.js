const main = document.querySelector('.main')
const left = document.querySelector('.left_slider')
const rite = document.querySelector('.rite_slider')
const riteBtn = document.querySelector('.up')
const leftBtn = document.querySelector('.down')
const length = rite.querySelectorAll('div').length
let index = 0

left.style.top = `-${(length - 1) * 100}vh`

riteBtn.addEventListener('click', function(){
    slideChange('up')
})
leftBtn.addEventListener('click', function(){
    slideChange('down')
})

function slideChange(direction){

    let totalHeight = main.clientHeight

    if(direction === 'up'){
        index++

        if(index > length - 1){
            index = 0
        }

    }else if(direction === 'down'){
        index--

        if(index < 0){
            index = length - 1
        }
    }

    rite.style.transform = `translateY(-${index * totalHeight}px)`
    left.style.transform = `translateY(${index * totalHeight}px)`

}