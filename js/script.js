/* 
let buttonJS = document.getElementsByClassName("button-id");

const imgChangeJS = document.getElementById("img-change");

const buttonJS = document.querySelectorAll("button-id").forEach(item => {
  buttonJS.addEventListener('click', event => {
    if (textVerify.innerHTML === " Mikhail Gorbachev ") {
      imgChangeJS.src = "Photos/Mikhail_Gorbachev.png";
    } else if (textVerify.innerHTML === " Top Quark ") {
      imgChangeJS.src = "Photos/Top_antitop_quark_event.svg.png";
    } else if (textVerify.innerHTML === " King Kong ") {
      imgChangeJS.src = "Photos/King_Kong.png";
    } else if (textVerify.innerHTML === " Dr. Seuss ") {
      imgChangeJS.src = "Photos/Dr_Seuss.png";
    } else if (textVerify.innerHTML === " Rhodesia ") {
      imgChangeJS.src = "Photos/Rhodesia.png";
    }
  })
})
*/

let button = document.getElementById("button-id");

const imgChangeJS = document.getElementById("img-change");

function functionImgChange1() {
  imgChangeJS.src = "Photos/Mikhail_Gorbachev.jpg";
}

function functionImgChange2() {
  imgChangeJS.src = "Photos/Top_antitop_quark_event.svg.png";
}

function functionImgChange3() {
  imgChangeJS.src = "Photos/King_Kong.png";
}

function functionImgChange4() {
  imgChangeJS.src = "Photos/Dr_Seuss.jpg";
}

function functionImgChange5() {
  imgChangeJS.src = "Photos/Rhodesia.png";
}   