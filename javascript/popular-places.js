function Ap(){
 let main = document.createElement("div")
    main.className='main-cards'
    document.body.querySelector(".main-content").appendChild(main);

    const main_img = document.createElement("div");
    main_img.className="main-img"
    main.appendChild(main_img)
    // document.body.querySelector(".main-img").style.backgroundImage='url("https://i.pinimg.com/564x/8e/99/e2/8e99e28e45733e354130b829626fcd8d.jpg")'
    const img = document.createElement("img");
    img.className="main-img"
    img.src="https://i.pinimg.com/564x/8e/99/e2/8e99e28e45733e354130b829626fcd8d.jpg"
    main.appendChild(img)
    
    const text = document.createElement("div");
    text.className="text"
    main.appendChild(text)
    let text1 = document.body.querySelector('.text').innerHTML="<b>Duration: </b>Time<br><b>Altitude: </b>200ft<br><b>Region: </b>Ghati<br><b>Grade: </b>Easy"
    main.appendChild(text1)

}