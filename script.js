
// image change in East India Section
let main= document.body.querySelector("#main")
    let img2= document.body.querySelector("#img2")
    let lmg4= document.body.querySelector("#img4")
    let img3= document.body.querySelector("#img3")
    let img1= document.body.querySelector("#img1")

document.body.querySelector("#East").addEventListener("click",e=>{
    
    document.body.querySelector("#East").style.borderBottom="4px solid #0055ff"
    document.body.querySelector("#North").style.borderBottom="4px solid white"
    document.body.querySelector("#Central").style.borderBottom="4px solid white"

    main.style.backgroundImage = "url('./img/tawang.jpg')";
    main.style.backgroundSize = "cover";
    main.style.backgroundPosition = "center";

    img1.style.backgroundImage="url('./img/Dzukou\ valley.jpg')";
    img1.style.backgroundSize = "cover";
    img1.style.backgroundPosition = "center";

    img2.style.backgroundImage="url('./img/manipur.jpg')";
    img2.style.backgroundSize = "cover";
    // img2.style.backgroundPosition = "center";

    img4.style.backgroundImage="url('./img/sikkim.jpg')";
    img4.style.backgroundSize = "cover";
    // img4.style.backgroundPosition = "";

    img3.style.backgroundImage="url('./img/shillong.jpg')";
    img3.style.backgroundSize = "cover";
    img3.style.backgroundPosition = "center";
    document.body.querySelector("#main a").textContent="Arunachal Pradesh"
    document.body.querySelector("#main a").href="./html/utrakhand.html"
    
    document.body.querySelector("#img1 a").textContent="Nagaland"
    document.body.querySelector("#img3 a").textContent="Meghalaya"
    document.body.querySelector("#img4 a").textContent="Sikkim"
    document.body.querySelector("#img2 a").textContent="Manipur"

})
//Central India section Image and Text
document.body.querySelector("#Central").addEventListener("click",e=>{

    document.body.querySelector("#Central").style.borderBottom="4px solid #0055ff"
    document.body.querySelector("#East").style.borderBottom="4px solid white"
    document.body.querySelector("#North").style.borderBottom="4px solid white"

    main.style.backgroundImage = "url('./img/banaras.jpg')";
    main.style.backgroundSize = "cover";
    main.style.backgroundPosition = "center";

    img1.style.backgroundImage="url('./img/hariharfort.jpg')";
    img1.style.backgroundSize = "cover";
    // img1.style.backgroundPosition = "center";

    img2.style.backgroundImage="url('./img/mp.jpg')";
    img2.style.backgroundSize = "cover";
    img2.style.backgroundPosition = "center";

    img3.style.backgroundImage="url('./img/panjab.jpg')";
    img3.style.backgroundSize = "cover";
    img3.style.backgroundPosition = "center";

    img4.style.backgroundImage="url('./img/Chhattisgarh.jpg')";
    img4.style.backgroundSize = "cover";
    img4.style.backgroundPosition = "center";

    document.body.querySelector("#main a").textContent="Banaras"
    document.body.querySelector("#img1 a").textContent="Maharashtra"
    document.body.querySelector("#img3 a").textContent="Panjab"
    document.body.querySelector("#img4 a").textContent="Chhattisgarh"
    document.body.querySelector("#img2 a").textContent="Madhya Pradesh"

})
//North India section Image and Text
document.body.querySelector("#North").addEventListener("click",e=>{

    document.body.querySelector("#North").style.borderBottom="4px solid #0055ff"
    document.body.querySelector("#East").style.borderBottom="4px solid white"
    document.body.querySelector("#Central").style.borderBottom="4px solid white"

    main.style.backgroundImage = "url('./img/shimla.jpg')";
    // main.style.backgroundImage = "url('https://i.pinimg.com/736x/ae/24/5b/ae245bdbfda48f971155bc4f507932cb.jpg')";
    main.style.backgroundSize = "cover";
    main.style.backgroundPosition = "bottom";

    img1.style.backgroundImage="url('./img/himachal.jpg')";
    img1.style.backgroundSize = "cover";
    img1.style.backgroundPosition = "center";
    // img1.style.fontSize='1.2rem'

    img2.style.backgroundImage="url('./img/mussorie.jpg')";
    img2.style.backgroundSize = "cover";
    img2.style.backgroundPosition = "center";

    img3.style.backgroundImage="url('./img/gulmarg.jpg')";
    img3.style.backgroundSize = "cover";
    img3.style.backgroundPosition = "center";

    img4.style.backgroundImage="url('./img/manali.jpg')";
    img4.style.backgroundSize = "cover";
    img4.style.backgroundPosition = "center";

    document.body.querySelector("#main a").textContent="Shimla"
    document.body.querySelector("#img1 a").textContent="Himachal Pradesh"
    document.body.querySelector("#img3 a").textContent="Gulmarg"
    document.body.querySelector("#img4 a").textContent="Manali"
    document.body.querySelector("#img2 a").textContent="Mussoorie"
})

document.querySelector(".hemburger").addEventListener("click",()=>{
    document.querySelector("nav ul").style.right="0%"
})
document.querySelector(".cross").addEventListener("click",()=>{
    document.querySelector("nav ul").style.right="-100%"
})
