
let elementMainTitle : any = document.querySelector(".main__title");
let elementCenter_All= document.querySelectorAll<HTMLElement>(".center");

if (window.devicePixelRatio == 1.25) {
    elementMainTitle.style.padding = "150px 0"
    elementCenter_All.forEach(elementCenter_All => {
        elementCenter_All.style.width  = "65%"
    });
}
else {
    elementMainTitle.style.padding = "260px 0";
    elementCenter_All.forEach(elementCenter_All => {
        elementCenter_All.style.width  = "55%"
    });
}
