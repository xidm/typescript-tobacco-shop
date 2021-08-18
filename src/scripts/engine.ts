interface prodTmp {
    name:string;
    price:number;
    clicked:number;
    image:string;
    storeCart_Id?:any;
}

interface Array<T> {
    fill(value: T):Array<T>;
}

let products:prodTmp[] = [
    {
        name: "Tobacco: Ace of Spades Fantasia",
        price: 15,
        clicked: 0,
        image: "./img/question.svg"
    },
    {
        name: "Tobacco: Adios Mofo Fantasia",
        price: 19,
        clicked: 0,
        image: "./img/question.svg"
    },
    {
        name: "Tobacco: Free Ue",
        price: 20,
        clicked: 0,
        image: "./img/question.svg"
    },
    {
        name: "Hookahs: Classic Egyptian",
        price: 500,
        clicked: 0,
        image: "./img/question.svg"
    },
    {
        name: "Hookahs: Econo Mya",
        price: 199,
        clicked: 0,
        image: "./img/question.svg"
    },
    {
        name: "Hookahs: Wookah",
        price: 100,
        clicked: 0,
        image: "./img/question.svg"
    },
    {
        name: "Hookahs: Mya Saray",
        price: 250,
        clicked: 0,
        image: "./img/question.svg"
    }   
];

window.onload = () => {
    fillCart();
    updateModalCart();
    addProductsHTML(".main__catalog-first > ul", products, 7);
};

let storeCart:Array<prodTmp>;
let fillCart = ():void => {  
    if (storeCart == undefined) {        
        if (localStorage.getItem('storeCart') != undefined) {
            storeCart =  JSON.parse((localStorage.getItem('storeCart')as any));
        }
        else {
            storeCart = new Array(10).fill(<prodTmp>{});
        }
    }
}

let deleteItem = (i:number) => {
    if (storeCart[i].clicked <= 1) 
        storeCart[i] = <prodTmp>{};
    else 
        storeCart[i].clicked -= 1;
    
    localStorage.setItem('storeCart', JSON.stringify(storeCart)); // update LocalStore
    updateModalCart();
}

let buyItem = (item:prodTmp, i:number) => {
    item.clicked += 1;
    storeCart[i] = item;

    localStorage.setItem('storeCart', JSON.stringify(storeCart)); // update LocalStore
    updateModalCart();
}

let addProductsHTML = (className:string, product:prodTmp[], length:number) => {
    product.map( (item:prodTmp, i:number) => {

        item.name

        if (i >= length) return false;

        let li = document.createElement('li');
        li.classList.add('catalog__menu-item');

        li.innerHTML += ` 
            <div class="item__head">
                <div class="item image"><img src="${item.image}"></div>
                <div class="item name"><h4>${item.name}</h4></div>             
            </div>  
            <div class="item__body">
                <div class="item price"><p>price: ${item.price} $</p></div>      
                <button class="BuyItem">Buy</button>
            </div>        
        `;

        (document.querySelector(className)as HTMLInputElement).append(li);  

        document.querySelectorAll('.BuyItem')[i].addEventListener("click", () => buyItem(item, i));

        return true;
    });
}

let updateModalCart = () => {
    (document.querySelector(".header__modal > table")as HTMLInputElement).innerHTML = "";

    let price = 0;
    let cart:prodTmp[] = [];

    storeCart.map( (item:prodTmp, i:number) => {
        if (item.name != undefined) {
            item.storeCart_Id = i;
            cart.push(storeCart[i]);
        }
    });

    cart.map( (item:prodTmp, i:number) => {  
        let tr = document.createElement('tr');

        tr.innerHTML += `
            <td>${item.name}</td>
            <td>${item.price} $</td>   
            <td>${item.clicked == 0 ? item.clicked = 1 : item.clicked} ammount</td>   
            <td>
                <button class="Delete" id="modal__open">-</button>           
            </td>       
            <td>
                <button class="Add" id="modal__open">+</button>           
            </td>                   
        `;
    
        (document.querySelector(".header__modal > table")as HTMLInputElement).append(tr);

        document.querySelectorAll('.Delete')[i].addEventListener("click", () => deleteItem(cart[i].storeCart_Id));

        document.querySelectorAll('.Add')[i].addEventListener("click", () => buyItem(item, cart[i].storeCart_Id));

        price += Number(item.price * item.clicked);
    });
    
    (document.querySelector(".cart__count")as HTMLInputElement).innerHTML = `${cart.length}`;

    (document.querySelector(".header__modal-total")as HTMLInputElement).innerHTML = `Total price: ${price} $`;
}

let alfa = (arg:string) => {
    console.log(arg);
}