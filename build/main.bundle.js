(()=>{var e={414:()=>{var e=document.querySelector(".main__title"),t=document.querySelectorAll(".center");1.25==window.devicePixelRatio?(e.style.padding="150px 0",t.forEach((function(e){e.style.width="65%"}))):(e.style.padding="260px 0",t.forEach((function(e){e.style.width="55%"})))},946:()=>{var e,t=[{name:"Tobacco: Ace of Spades Fantasia",price:15,clicked:0,image:"./img/question.svg"},{name:"Tobacco: Adios Mofo Fantasia",price:19,clicked:0,image:"./img/question.svg"},{name:"Tobacco: Free Ue",price:20,clicked:0,image:"./img/question.svg"},{name:"Hookahs: Classic Egyptian",price:500,clicked:0,image:"./img/question.svg"},{name:"Hookahs: Econo Mya",price:199,clicked:0,image:"./img/question.svg"},{name:"Hookahs: Wookah",price:100,clicked:0,image:"./img/question.svg"},{name:"Hookahs: Mya Saray",price:250,clicked:0,image:"./img/question.svg"}];window.onload=function(){n(),c(),a(".main__catalog-first > ul",t,7)};var n=function(){null==e&&(e=null!=localStorage.getItem("storeCart")?JSON.parse(localStorage.getItem("storeCart")):new Array(10).fill({}))},o=function(t,n){t.clicked+=1,e[n]=t,localStorage.setItem("storeCart",JSON.stringify(e)),c()},a=function(e,t,n){t.map((function(t,a){if(t.name,a>=n)return!1;var c=document.createElement("li");return c.classList.add("catalog__menu-item"),c.innerHTML+=' \n            <div class="item__head">\n                <div class="item image"><img src="'+t.image+'"></div>\n                <div class="item name"><h4>'+t.name+'</h4></div>             \n            </div>  \n            <div class="item__body">\n                <div class="item price"><p>price: '+t.price+' $</p></div>      \n                <button class="BuyItem">Buy</button>\n            </div>        \n        ',document.querySelector(e).append(c),document.querySelectorAll(".BuyItem")[a].addEventListener("click",(function(){return o(t,a)})),!0}))},c=function(){document.querySelector(".header__modal > table").innerHTML="";var t=0,n=[];e.map((function(t,o){null!=t.name&&(t.storeCart_Id=o,n.push(e[o]))})),n.map((function(a,i){var r=document.createElement("tr");r.innerHTML+="\n            <td>"+a.name+"</td>\n            <td>"+a.price+" $</td>   \n            <td>"+(0==a.clicked?a.clicked=1:a.clicked)+' ammount</td>   \n            <td>\n                <button class="Delete" id="modal__open">-</button>           \n            </td>       \n            <td>\n                <button class="Add" id="modal__open">+</button>           \n            </td>                   \n        ',document.querySelector(".header__modal > table").append(r),document.querySelectorAll(".Delete")[i].addEventListener("click",(function(){return function(t){e[t].clicked<=1?e[t]={}:e[t].clicked-=1,localStorage.setItem("storeCart",JSON.stringify(e)),c()}(n[i].storeCart_Id)})),document.querySelectorAll(".Add")[i].addEventListener("click",(function(){return o(a,n[i].storeCart_Id)})),t+=Number(a.price*a.clicked)})),document.querySelector(".cart__count").innerHTML=""+n.length,document.querySelector(".header__modal-total").innerHTML="Total price: "+t+" $"}},396:()=>{var e=document.querySelector(".header__modal");addEventListener("click",(function(t){t.target.closest(".header__modal")||"cart__image fa"==t.target.className||"fa"==t.target.className||"cart__count"==t.target.className||"cart"==t.target.className||"modal__open"==t.target.id?e.style.display="block":"block"==e.style.display&&(e.style.display="none"),document.querySelector("#modal__open > div > span.cart__image.fa")}))},583:()=>{var e=document.getElementById("myBtn");e.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})),window.onscroll=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?e.style.display="block":e.style.display="none"}}},t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(396),n(414),n(583),n(946)})()})();