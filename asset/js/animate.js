let wel = document.getElementById("welcome-box")
let inp = document.getElementById("input")
const btnInp = document.getElementById("btn-input")
let chat = document.getElementById("chattext")
const load = document.getElementById("load")
let bg = document.getElementById("box-screen")
let boxchat = document.getElementById("box-chat")
let notice = document.getElementById("notice")
var text = ""

btnInp.onclick = () => {
    if (inp.value.trim() != "") {
        text = inp.value.trim();
        inp.value = "";
        wel.style.display = "none";
        catchEvent()
    }

}
inp.onkeyup = (e) => {
    if (e.keyCode == 13 && inp.value.trim() != "") {
        text = inp.value.trim();
        inp.value = "";
        wel.style.display = "none";
        catchEvent()
    }

}
var aiosima = new Audio("./aiosima.mp3")
var sus = new Audio("./sus.mp3")
var music = new Audio("./music.mp3")


function catchEvent() {
    music.play()
    music.volume = 0.1;
    chat.innerText = text;
    chat.style.opacity = 1;
    setTimeout(() => {
        load.style.opacity = 1;
    }, 1000)
    setTimeout(() => { music.volume = .25; }, 5000)
    setTimeout(() => {
        load.innerHTML = `<img src="./asset/js/loadding6.gif" alt="">
        <span>MỎI CỔ VÌ CHỜ À! <br> CHỜ TIẾP ĐI MÁ!!!</span>`
        music.volume = .2;
    }, 10000)
    setTimeout(() => {
        load.innerHTML = `<img src="./asset/js/loadding2.gif" alt="">
        <span>GẦN XONG RỒI, ĐỪNG LÓNG :3 </span>`
    }, 14000)
    setTimeout(() => {
        load.innerHTML = `<img src="./asset/js/loadding3.gif" alt="">
        <span>CÒN CHÚT NỮA!!!</span>`
    }, 19000)
    setTimeout(() => {
        load.innerHTML = `<img src="./asset/js/loadding4.gif" alt="">
        <span>CHÚT XÍU XÌU SIU NỮA!!!</span>`
    }, 24000)
    setTimeout(() => {
        load.style.fontSize = 1.5;
        load.innerHTML = `<img src="./asset/js/loadding7.gif" alt="">
        <span>CÒN NGỒI CHỜ THIỆT HẢ BÀ NỤI</span>`
    }, 27000)

    setTimeout(() => {
        sus.play()
        bg.style.backgroundImage = `url("https://im.indiatimes.in/media/content/2019/Sep/blinking_guy_meme_1569407297.gif")`
        music.volume = 0.1;
        chat.style.display = "none";
        inp.style.display = "none"
        btnInp.style.display = "none"
        load.style.display = "none"
        boxchat.style.display = "none"
        notice.style.display = "flex"
        notice.innerHTML = `<h1>BẠN BIẾT GÌ KHÔNG? </h1>`
    }, 26000)
    setTimeout(() => {
        notice.innerHTML = `<video src="./asset/js/aiosima.mp4" autoplay></video>
        <h1 style="color: rgb(226, 43, 43);">MÀY ĐÃ BỊ LỪA :V </h1>`


    }, 31000)
    setTimeout(() => {
        notice.innerHTML = `<video src="./asset/js/rickroll.mp4" autoplay></video>
        <h1 style="color: rgb(226, 43, 43);">MÀY ĐÃ BỊ LỪA :V </h1>`

    }, 36000)


}
