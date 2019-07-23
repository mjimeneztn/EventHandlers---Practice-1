let article1 = document.querySelector("#viewInput")
let article2 = document.querySelector("#seeInput")
let input= document.querySelector("#message")


input.addEventListener("keyup", function (event) {
    let target= event.target;
    let value= target.value;
    article1.textContent = value;
    article2.textContent= even.target.value;   
})

