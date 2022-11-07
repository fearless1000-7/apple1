let openBtns = document.querySelectorAll('[data-open]')
let closeBtns = document.querySelectorAll('[data-close]')
let modalBg = document.querySelector('.modal-bg')
let modal = document.querySelector('.custom-modal')
let items = document.querySelectorAll('.item')


openBtns.forEach(btn => {
    btn.onclick = () => {
        modalBg.style.display = "block"
        modal.style.display = "block"

        setTimeout(() => {
            modalBg.style.opacity = "1"
            modal.style.opacity = "1"
            modal.style.scale = "1"
        }, 300)

    }
})
closeBtns.forEach(btn => {
    btn.onclick = () => {
        modalBg.style.opacity = "0"
        modal.style.opacity = "0"
        modal.style.scale = ".3"


        setTimeout(() => {
            modalBg.style.display = "none"
            modal.style.display = "none"
        }, 300);
    }
})

items.forEach(item => {
    item.onclick = () => {
        items.forEach(el => el.classList.remove('active'))
        item.classList.toggle('active')
    }
    
});


let btns = document.querySelectorAll('img[data-color]')
let title = document.querySelector('.title')
let img = document.querySelector('.img_phone')

let iphone = {
     Purple: "./img/purple.jpg",
     Silver: "./img/silver.jpg",
     Gold: "./img/gold.jpg",
     Black: "./img/black.jpg"

}
btns.forEach(btn => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-color')

        img.style.backgroundImage =  `url("${iphone[key]}")`

        title.innerHTML = btn.innerText

        btns.forEach(elem => elem.classList.remove('activeA'))
        btn.classList.add('activeA')
    }
})

let boxes = document.querySelectorAll('[data-addP]')
let bot = document.querySelector('.bot')
let originalPrice = 999

boxes.forEach(box => {
    box.onclick = () => {
        let addP = +box.getAttribute('data-addP')


        let total = originalPrice + addP 

        total += ''
        let arr = total.split([""])
        total=''
        arr[0]+=','
        arr.forEach(e => {
            total += e
        });
         

        bot.innerHTML = `$${total}` 




        boxes.forEach(elem => elem.classList.remove('activeB'))
        box.classList.add('activeB')
    }
});

