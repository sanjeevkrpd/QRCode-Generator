
let input = document.getElementById("input");
let imgBox = document.querySelector(".imgBox");
let qrCode = document.getElementById("qrcode");
let btn =  document.querySelector("button");

btn.addEventListener("click", () => {


    if (input.value.length > 0) {

        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgBox.classList.add("show");
    } else {
       
        input.classList.add("error");
        input.style.outline = "1px solid red";
        setInterval(() => {

            input.classList.remove();
            input.style.outline = "0";
        }, 1000);
   }
});


