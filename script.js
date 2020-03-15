// header
var appended = false;
window.addEventListener("scroll", function () {
    var scroll = pageYOffset;
    var header = document.querySelector('.header-flex')
    if (scroll > 95) {
        if (!appended) {
            header.style.paddingTop = "0"
            header.style.paddingBottom = "0"
            appended = true;
        }
    } else if (appended) {
        header.style.paddingTop = "30px"
        header.style.paddingBottom = "28px"
        appended = false;
    }
});
window.addEventListener('scroll', function () {
    var scroll = pageYOffset;
    var home = document.querySelector('.navli_home');
    var services = document.querySelector('.navli_services');
    var portfolio = document.querySelector('.navli_portfolio');
    var about = document.querySelector('.navli_about');
    var contact = document.querySelector('.navli_contact');
    if (scroll >= 415 && scroll < 1016) {
        home.style.color = "#fff"
        services.style.color = '#d3625c'
        portfolio.style.color = '#fff'
    }
    else if (scroll >= 1016 && scroll < 2060) {
        home.style.color = "#fff"
        services.style.color = '#fff'
        portfolio.style.color = '#d3625c'
        about.style.color = '#fff'
    }
    else if (scroll >= 2060 && scroll < 2712) {
        home.style.color = "#fff"
        services.style.color = '#fff'
        portfolio.style.color = '#fff'
        about.style.color = '#d3625c'
        contact.style.color = '#fff'
    }
    else if (scroll >= 2712) {
        home.style.color = "#fff"
        services.style.color = '#fff'
        portfolio.style.color = '#fff'
        about.style.color = '#fff'
        contact.style.color = '#d3625c'
    }
    else {
        home.style.color = "#d3625c"
        services.style.color = '#fff'
        portfolio.style.color = '#fff'
        about.style.color = '#fff'
        contact.style.color = '#fff'
    }
});
// slider
var slider1 = document.querySelector('.slid1');
var slider2 = document.querySelector('.slid2');
var slider = document.querySelector('.slider');
function next() {
    slider1.classList.toggle("none");
    slider2.classList.toggle("none");
    slider.classList.toggle("sliderActiv")
}
function prev() {
    slider1.classList.toggle("none");
    slider2.classList.toggle("none");
    slider.classList.toggle("sliderActiv")
}
var verticalPhone = document.querySelector(".vertic");
var gorizontPhone = document.querySelector(".goriz");
verticalPhone.addEventListener('click', function () {
    var blackV = document.querySelector('.black');
    blackV.classList.toggle('none');
})
gorizontPhone.addEventListener('click', function () {
    var gorizV = document.querySelector('.black-goriz');
    gorizV.classList.toggle('none');
})

// galerey
window.onload = function () {
    var itemDiv = document.querySelectorAll('.gallery div')
    for (var i = 0; i < itemDiv.length; i++) {
        itemDiv[i].onclick = function () {
            for (var j = 0; j < itemDiv.length; j++) {
                if (itemDiv[j] != this) {
                    itemDiv[j].classList.remove("activ_border");
                    this.classList.toggle("activ_border");
                } else {
                    this.classList.toggle("activ_border");
                }
            }
            this.classList.toggle("activ_border");
        }
    }
}

var all = document.querySelector('.all')
var webDesign = document.querySelector(".webDesign");
var graphic = document.querySelector(".graphic");
var artwork = document.querySelector(".artwork");
var div = document.querySelectorAll('.gallery div');
webDesign.addEventListener('click', function () {
    webDesign.classList.toggle('activButton');
    graphic.classList.remove('activButton');
    artwork.classList.remove('activButton');
    all.classList.remove('activButton');
    for (var i = 0; i < div.length - 8; i++) {
        div[3 * i].classList.toggle('none');
    }
})
graphic.addEventListener('click', function () {
    graphic.classList.toggle('activButton');
    webDesign.classList.remove('activButton');
    artwork.classList.remove('activButton');
    all.classList.remove('activButton');
    for (var i = 0; i < div.length - 7; i++) {
        div[4 * i].classList.toggle('none');
    }
})
artwork.addEventListener('click', function () {
    artwork.classList.toggle('activButton')
    webDesign.classList.remove('activButton');
    graphic.classList.remove('activButton');
    all.classList.remove('activButton');
    for (var i = 0; i < div.length - 3; i++) {
        div[5 * i].classList.toggle('none');
    }
})
all.addEventListener('click', function () {
    all.classList.toggle('activButton');
    webDesign.classList.remove('activButton');
    graphic.classList.remove('activButton');
    artwork.classList.remove('activButton');
    for (var i = 0; i < div.length; i++) {
        div[i].classList.remove('none');
    }
})
// form
var ame = document.querySelector('.ame');
var email = document.querySelector('.email');
var subject = document.querySelector('.subject');
var describe = document.querySelector('.describe');
var send = document.querySelector('.send');
var mdlMsg = document.getElementById('mdl_msg')
var cross = document.querySelector('.cross')
send.addEventListener('click', function () {
    if (ame.value && email.value) {
        event.preventDefault();
        mdlMsg.classList.remove('none')
        var div = document.querySelector('#mdl_msg div')
        if (subject.value && describe.value)
            div.innerHTML = 'Письмо отправлено <br> ' + ' Тема: ' + subject.value + '<br>' + 'Описание: ' + describe.value;
        else if (!subject.value && describe.value) {
            div.innerHTML = 'Письмо отправлено <br> ' + ' Без темы ' + '<br>' + 'Описание: ' + describe.value;
        } else if (subject.value && !describe.value) {
            div.innerHTML = 'Письмо отправлено <br> ' + ' Тема: ' + subject.value + '<br>' + 'Без описания';
        } else {
            div.innerHTML = 'Письмо отправлено <br> ' + ' Без темы ' + '<br>' + 'Без описания';
        }
    }
    clearInputs();

})
function clearInputs() {
    var inputX = document.querySelectorAll("input")
    var textArea = document.querySelector("textarea")
    for (var i = 0; i < inputX.length; i++) {
        if (inputX[i].value != "Send")
            inputX[i].value = "";

    }
    textArea.value = "";
}
cross.addEventListener('click', function () {
    mdlMsg.classList.add('none')
})