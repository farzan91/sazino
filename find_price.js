let webprice = 6500000
let posterprice = 300000;
let portalprice = 7000000;
let wordpressprice = 6000000;
let adminprice = 1700000;
let logoprice = 500000;
let senarioprice = 500000;

let websiteCount = 0;
let adminCount = 0;
let logoCount = 0;
let posterCount = 0;
let senariocount = 0;

const websiteInput = document.getElementById("website_count");
const adminInput = document.getElementById("admin_count");
const logoInput = document.getElementById("logo_count");
const posterInput = document.getElementById("poster_count");
const senariourer = document.getElementById("senariourer");
const wordpressRadio = document.getElementById("wordpress");
const portalRadio = document.getElementById("portal");
const takhfif = document.getElementById("takhfif");


const totalprice = document.getElementById("total-price");

function format(num) {
    return num.toLocaleString("en-US");
    
    
}

function updatePrice(){

    let lastprice =
        websiteCount * webprice +
        adminCount * adminprice +
        logoCount * logoprice +
        posterCount * posterprice+
        senarioprice * senariocount;
    if(lastprice > 15000000){
        totalprice.textContent = format(parseInt(lastprice*85/100)) + " \nتومان";
        takhfif.classList.remove("takhfif5"); 
        takhfif.classList.add("takhfif10"); 

    }
    else if(lastprice !== 0){
        totalprice.textContent = format(parseInt(lastprice*93/100)) + " \nتومان";
        takhfif.classList.add("takhfif5"); 
        takhfif.classList.remove("takhfif10"); 
    }
    else{
        totalprice.textContent = format(lastprice) + " \nتومان";
        takhfif.classList.remove("takhfif5"); 
        takhfif.classList.remove("takhfif10"); 
    }


}

wordpressRadio.addEventListener("change", () => {

    webprice = wordpressprice;
    updatePrice();

});

portalRadio.addEventListener("change", () => {

    webprice = portalprice;
    updatePrice();

});


websiteInput.addEventListener("input", (e) => {

    websiteCount = Number(e.target.value);
    updatePrice();

});
websiteInput.addEventListener("input", (e) => {

    websiteCount = Number(e.target.value);
    updatePrice();

});

adminInput.addEventListener("input", (e) => {

    adminCount = Number(e.target.value);
    updatePrice();

});

logoInput.addEventListener("input", (e) => {

    logoCount = Number(e.target.value);
    updatePrice();

});

posterInput.addEventListener("input", (e) => {

    posterCount = Number(e.target.value);
    updatePrice();

});
senariourer.addEventListener("input", (e) => {

    senariocount = Number(e.target.value);
    updatePrice();

});