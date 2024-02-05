/*функция поднятия вверх*/
function up() {
	if(window.pageYOffset > 0) {
		window.scrollBy(0,-40);
		t = setTimeout('up()',2);
	} else clearTimeout(t);
    return false;
}
/*функция поднятия к секции О компании*/
function move_page2() {
    if (window.pageYOffset < 509 || window.pageYOffset > 550){
        if(window.pageYOffset < 509){
            window.scrollBy(0,30);
            t = setTimeout('move_page2()',5);
        }
        if(window.pageYOffset > 550) {
            window.scrollBy(0,-30);
            t = setTimeout('move_page2()',5);
        }
    } else clearTimeout(t)
    return false;
}
/*функция поднятия к секции Оставить заявку*/
function move_page3() {
    if (window.pageYOffset < 1159 || window.pageYOffset > 1200){
        if(window.pageYOffset < 1159){
            window.scrollBy(0,30);
            t = setTimeout('move_page3()',5);
        }
        if(window.pageYOffset > 1200) {
            window.scrollBy(0,-30);
            t = setTimeout('move_page3()',5);
        }
    } else clearTimeout(t)
    return false;
}
/*функция поднятия к секции Собери комплект*/
function move_page4() {
    if (window.pageYOffset < 1590 || window.pageYOffset > 1650){
        if(window.pageYOffset < 1590){
            window.scrollBy(0,30);
            t = setTimeout('move_page4()',5);
        }
        if(window.pageYOffset > 1650) {
            window.scrollBy(0,-30);
            t = setTimeout('move_page4()',5);
        }
    } else clearTimeout(t)
    return false;
}
/*функция по смене сообщения в секции Оставить заявку*/
function rebute(){
    let FName = firstname_field.value;
    let SName = lastname_field.value;
    let Phone = phone_field.value
    FName = FName.substring(0, 1) 
    letter.innerHTML = "<strong>Уважаемый, " + SName + " " + FName + "." + "</strong><br>Наши специалисты уже получили Вашу заявку и свяжутся с Вами в ближайшее время по телефону <strong><nobr>" + Phone + "</nobr></strong><br>Спасибо за обращение! "
    orderAlert.classList.remove("unvisible")
    orderAlert.classList.add("visible")
}
/*функция загрузки*/
function loading(){
    if(i == 1) {
        let t = setTimeout('loading()',3000);
        i = 0
    } else {
        clearTimeout(t)
        load_bg.classList.remove("old")
        load_bg.classList.add("unvisible")
        load_img.classList.add("unvisible")

    }
	return false;
}
let t
let i = 1
/*загрузка*/
let load_bg = document.querySelector('.load_bg')
let load_img = document.querySelector('.load_img')
load_bg.classList.add("old")
loading()

/*создание кнопки Вверх*/
let button_up = document.createElement("button");
button_up.classList.add("btn_up");
button_up.innerHTML = "Up"
document.body.appendChild(button_up);

/*Вызов переменных*/
let product1 = document.querySelector("#product1")
let product2 = document.querySelector("#product2")
let product3 = document.querySelector("#product3")
let product4 = document.querySelector("#product4")
let product5 = document.querySelector("#product5")
let product6 = document.querySelector("#product6")
product1.classList.add("unvisible")
product2.classList.add("unvisible")
product2.classList.add("unvisible")
product3.classList.add("unvisible")
product4.classList.add("unvisible")
product5.classList.add("unvisible")
product6.classList.add("unvisible")
let anchor1 = document.querySelector('#anchor1')
let anchor2 = document.querySelector('#anchor2')
let anchor3 = document.querySelector('#anchor3')
let anchor4 = document.querySelector('#anchor4')
let line = document.querySelector('#line')
document.addEventListener("scroll", function(){
    let h_page = document.querySelector("body").offsetHeight
    /*Индикатор прогресса прокрутки*/
    if (window.pageYOffset == 0){
        line.style.width = 0 + "%";
    }else if(window.pageYOffset > document.documentElement.clientHeight / 100 * 1 && window.pageYOffset < document.documentElement.clientHeight / 100 * 10){
        
        line.style.width = (window.pageYOffset + document.documentElement.clientHeight / 100 * 10 + 10) / h_page * 100  + "%";
    }else if(window.pageYOffset > document.documentElement.clientHeight / 100 * 10 && window.pageYOffset < document.documentElement.clientHeight / 100 * 20){
        line.style.width = (window.pageYOffset + document.documentElement.clientHeight / 100 * 20 + 10) / h_page * 100  + "%";
    }else if(window.pageYOffset > document.documentElement.clientHeight / 100 * 20 && window.pageYOffset < document.documentElement.clientHeight / 100 * 30){
        line.style.width = (window.pageYOffset + document.documentElement.clientHeight / 100 * 30 + 10) / h_page * 100  + "%";
    }else if(window.pageYOffset > document.documentElement.clientHeight / 100 * 30 && window.pageYOffset < document.documentElement.clientHeight / 100 * 40){
        line.style.width = (window.pageYOffset + document.documentElement.clientHeight / 100 * 40 + 10) / h_page * 100  + "%";
    }else if(window.pageYOffset > document.documentElement.clientHeight / 100 * 40 && window.pageYOffset < document.documentElement.clientHeight / 100 * 50){
        line.style.width = (window.pageYOffset + document.documentElement.clientHeight / 100 * 50 + 10) / h_page * 100  + "%";
    }else if(window.pageYOffset > document.documentElement.clientHeight / 100 * 50 && window.pageYOffset < document.documentElement.clientHeight / 100 * 60){
        line.style.width = (window.pageYOffset + document.documentElement.clientHeight / 100 * 60 + 10) / h_page * 100  + "%";
    }else if(window.pageYOffset > document.documentElement.clientHeight / 100 * 60 && window.pageYOffset < document.documentElement.clientHeight / 100 * 70){
        line.style.width = (window.pageYOffset + document.documentElement.clientHeight / 100 * 70 + 10) / h_page * 100  + "%";
    }else if(window.pageYOffset > document.documentElement.clientHeight / 100 * 70 && window.pageYOffset < document.documentElement.clientHeight / 100 * 80){
        line.style.width = (window.pageYOffset + document.documentElement.clientHeight / 100 * 80 + 10) / h_page * 100  + "%";
    }else if(window.pageYOffset > document.documentElement.clientHeight / 100 * 80 && window.pageYOffset < document.documentElement.clientHeight / 100 * 90){
        line.style.width = (window.pageYOffset + document.documentElement.clientHeight / 100 * 90 + 10) / h_page * 100  + "%";
    }else if(window.pageYOffset > document.documentElement.clientHeight / 100 * 90 && window.pageYOffset < document.documentElement.clientHeight / 100 * 99){
        line.style.width = (window.pageYOffset + document.documentElement.clientHeight / 100 * 99 + 10) / h_page * 100  + "%";
    }else if(window.pageYOffset > document.documentElement.clientHeight / 100 * 99){
        line.style.width = (window.pageYOffset + document.documentElement.clientHeight + 10) / h_page * 100  + "%";
    }
    /*Появления кнопки Вверх*/
    if (window.pageYOffset / h_page * 100 > 40){
        button_up.style.backgroundColor = "#facb0e"
        button_up.style.bottom="40px"
        button_up.innerHTML = "Up"    
    }
    if (window.pageYOffset / h_page * 100 < 40){
        button_up.style.backgroundColor = "#facb0e00"
        button_up.innerHTML = "" ;
        button_up.style.bottom="-80px"   
    }
    /*Следящая прокрутка */
    if (window.pageYOffset < 509){
        anchor1.classList.add("active");
        anchor2.classList.remove("active");
        anchor3.classList.remove("active");
        anchor4.classList.remove("active");
    }
    if (window.pageYOffset > 509 && window.pageYOffset < 1159){
        anchor1.classList.remove("active");
        anchor2.classList.add("active");
        anchor3.classList.remove("active");
        anchor4.classList.remove("active");
    }
    if (window.pageYOffset > 1159 && window.pageYOffset < 1590){
        anchor1.classList.remove("active");
        anchor2.classList.remove("active");
        anchor3.classList.add("active");
        anchor4.classList.remove("active");
    }
    if (window.pageYOffset > 1590){
        anchor1.classList.remove("active");
        anchor2.classList.remove("active");
        anchor3.classList.remove("active");
        anchor4.classList.add("active");
    }
    /*Эффект появления */
    if (window.pageYOffset + document.documentElement.clientHeight > 2100){
        product1.classList.remove("unvisible");
        product2.classList.remove("unvisible");
        product3.classList.remove("unvisible");
        product4.classList.remove("unvisible");
        product5.classList.remove("unvisible");
        product6.classList.remove("unvisible");
        product1.style.marginTop = "0px";
        product2.style.marginTop = "0px";
        product3.style.marginTop = "0px";
        product4.style.marginTop = "0px";
        product5.style.marginTop = "0px";
        product6.style.marginTop = "0px";
    }
    /*Бесконечная страница*/
    if (window.pageYOffset + document.documentElement.clientHeight > h_page - 100){
        let item_container = document.querySelector(".goods-wrapper");
        let items = item_container.children;
        for(let i = 0; i < len; i++){
            item_container.appendChild(items[i].cloneNode(true));
        }
    }
})
/*Вызов функции вверх*/
button_up.addEventListener("click", function(){
        up()
})
/*В корзину*/
let item_container = document.querySelector(".goods-wrapper");
let items = item_container.children;
let len = items.length;
let btn_buy1 = document.querySelector('#btn_buy1');
let btn_buy2 = document.querySelector('#btn_buy2');
let btn_buy3 = document.querySelector('#btn_buy3');
let btn_buy4 = document.querySelector('#btn_buy4');
let btn_buy5 = document.querySelector('#btn_buy5');
let btn_buy6 = document.querySelector('#btn_buy6');
let shopping_basket = document.querySelector('#basket')
let sum_to_buy = 0
btn_buy1.addEventListener("click", function(){
    sum_to_buy += 1;
    shopping_basket.innerHTML = '<img src="img/cart25.png"> ' + sum_to_buy
})
btn_buy2.addEventListener("click", function(){
    sum_to_buy += 1;
    shopping_basket.innerHTML = '<img src="img/cart25.png"> ' + sum_to_buy
})
btn_buy3.addEventListener("click", function(){
    sum_to_buy += 1;
    shopping_basket.innerHTML = '<img src="img/cart25.png"> ' + sum_to_buy
})
btn_buy4.addEventListener("click", function(){
    sum_to_buy += 1;
    shopping_basket.innerHTML = '<img src="img/cart25.png"> ' + sum_to_buy
})
btn_buy5.addEventListener("click", function(){
    sum_to_buy += 1;
    shopping_basket.innerHTML = '<img src="img/cart25.png"> ' + sum_to_buy
})
btn_buy6.addEventListener("click", function(){
    sum_to_buy += 1;
    shopping_basket.innerHTML = '<img src="img/cart25.png"> ' + sum_to_buy
})

/*плавный скролл до нужного раздела при клике на меню навигации*/
anchor1.addEventListener("click", function(){
    up()
})
anchor2.addEventListener("click", function(){
    move_page2()
})
anchor3.addEventListener("click", function(){
    move_page3()
})
anchor4.addEventListener("click", function(){
    move_page4()
})
/*Оставить заявку*/
let btn_send = document.querySelector('#btn_send')
let visible = false
let order_form = document.querySelector('.order-form')
order_form.style.margin = "auto"
let orderAlert = document.querySelector('#orderAlert')
orderAlert.style.width = "0px"
orderAlert.style.padding = "0px"
let letter = document.querySelector('#letter')
letter.innerHTML = " "
btn_send.addEventListener("click", function(){
    orderAlert.style.width = "500px"
    orderAlert.style.padding = "25px"
    if (visible == true){
        orderAlert.classList.remove("visible")
        orderAlert.classList.add("unvisible")
        let time_add = setTimeout(rebute, 500)
        
        
    } else {
        visible = true
        orderAlert.classList.remove("visible")
        orderAlert.classList.add("unvisible")
        let time_add = setTimeout(rebute, 500)
    }

})

/*Слайдер*/
let slide1 = document.querySelector("#slide1")
let slide2 = document.querySelector("#slide2")
let slide3 = document.querySelector("#slide3")
let slide4 = document.querySelector("#slide4")
let slide5 = document.querySelector("#slide5")
let btn_left = document.querySelector("#btn_l")
let btn_right = document.querySelector("#btn_r")
let num_slider = 1
slide2.classList.add("unvisible")
slide3.classList.add("unvisible")
slide4.classList.add("unvisible")
slide5.classList.add("unvisible")
slide2.classList.add("slide_right")
slide3.classList.add("slide_right")
slide4.classList.add("slide_right")
slide5.classList.add("slide_right")
btn_right.addEventListener("click", function(){
    num_slider++
    if (num_slider > 5){
        num_slider = 1
        
    }
    slide1.classList.remove("visible")
    slide2.classList.remove("visible")
    slide3.classList.remove("visible")
    slide4.classList.remove("visible")
    slide5.classList.remove("visible")
    slide1.classList.add("unvisible")
    slide2.classList.add("unvisible")
    slide3.classList.add("unvisible")
    slide4.classList.add("unvisible")
    slide5.classList.add("unvisible")
    if (num_slider == 1){
        slide1.classList.remove("unvisible")
        slide1.classList.add("visible")
        slide1.classList.remove("slide_right")
    }
    if (num_slider == 2){
        slide2.classList.remove("unvisible")
        slide2.classList.add("visible")
        slide2.classList.remove("slide_right")
        slide1.classList.add("slide_left")
        
        slide5.classList.remove("slide_left")
        slide5.classList.add("slide_right")
    }
    if (num_slider == 3){
        slide3.classList.remove("unvisible")
        slide3.classList.add("visible")
        slide3.classList.remove("slide_right")
        slide2.classList.add("slide_left")
    }
    if (num_slider == 4){
        slide4.classList.remove("unvisible")
        slide4.classList.add("visible")
        slide4.classList.remove("slide_right")
        slide3.classList.add("slide_left")
    }
    if (num_slider == 5){
        slide5.classList.remove("unvisible")
        slide5.classList.add("visible")
        slide5.classList.remove("slide_right")
        slide4.classList.add("slide_left")
        slide1.classList.add("slide_right")
        slide1.classList.remove("slide_left")
    }
})
btn_left.addEventListener("click", function(){
    num_slider--
    if (num_slider < 1){
        num_slider = 5
    }
    slide1.classList.remove("visible")
    slide2.classList.remove("visible")
    slide3.classList.remove("visible")
    slide4.classList.remove("visible")
    slide5.classList.remove("visible")
    slide1.classList.add("unvisible")
    slide2.classList.add("unvisible")
    slide3.classList.add("unvisible")
    slide4.classList.add("unvisible")
    slide5.classList.add("unvisible")
    if (num_slider == 1){
        slide1.classList.remove("unvisible")
        slide1.classList.add("visible")
        slide1.classList.remove("slide_left")
        slide2.classList.add("slide_right")
        slide5.classList.add("slide_left")
        slide5.classList.remove("slide_right")
    }
    if (num_slider == 2){
        slide2.classList.remove("unvisible")
        slide2.classList.add("visible")
        slide2.classList.remove("slide_left")
        slide3.classList.add("slide_right")
    }
    if (num_slider == 3){
        slide3.classList.remove("unvisible")
        slide3.classList.add("visible")
        slide3.classList.remove("slide_left")
        slide4.classList.add("slide_right")
    }
    if (num_slider == 4){
        slide4.classList.remove("unvisible")
        slide4.classList.add("visible")
        slide4.classList.remove("slide_left")
        slide5.classList.add("slide_right")
        
        slide1.classList.remove("slide_right")
        slide1.classList.add("slide_left")
    }
    if (num_slider == 5){
        slide5.classList.remove("unvisible")
        slide5.classList.add("visible")
        slide5.classList.remove("slide_left")
    }
})