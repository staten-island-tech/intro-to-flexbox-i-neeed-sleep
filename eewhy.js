const books = [{
    name:"The Yellow Wallpaper",
    author:"Charlotte Perkins Stetson",
    img: "tywp.jpg",
    type:"ss",
    link: "https://www.nlm.nih.gov/exhibition/theliteratureofprescription/exhibitionAssets/digitalDocs/The-Yellow-Wall-Paper.pdf",
    price: 0.00
},{
    name:"11:59",
    author:"Patricia C. McKissack",
    img:"1159.jpg",
    type:"ss",
    link: "https://images.pcmac.org/SiSFiles/Schools/VA/BuchananCounty/RiverviewEM/Uploads/DocumentsCategories/Documents/1159.pdf",
    price: 0.00
},{
    name:"I Have No Mouth & I Must Scream",
    author:"Theordore Sturgeon",
    img:"IHaveNoMouth.jpg",
    type:"ss",
    link: "https://www.are.na/block/26283461",
    price: 0.00
},{
    name:"Blood Meridian",
    author:"Cormac McCarthy",
    img:"bm.jpg",
    type:"ss",
    link: "https://altair.pw/pub/lib/Cormac%20Mccarthy%20-%20The%20Blood%20Meridian.pdf",
    price: 0.00
},{
    name:"Throne of Glass Volume I",
    author:"Sarah J. Maas",
    img:"booki.jpg",
    type:"series",
    link: "https://fliphtml5.com/cavuk/mahw/Throne_of_Glass/ ",
    price: 0.00
},{
    name:"Throne of Glass Volume II",
    author:"Sarah J. Maas",
    img:"bookii.jpg",
    type:"series",
    link: "https://online.fliphtml5.com/wdnxi/bpzt/#p=1",
    price: 0.00
},{
    name:"Throne of Glass Volume III",
    author:"Sarah J. Maas",
    img:"bookiii.jpg",
    type:"series",
    link: "https://fliphtml5.com/wdnxi/qzzs/Heir_of_Fire_%28Throne_of_Glass_4%29_by_Sarah_J_Maas/",
    price: 0.00
},{
    name:"Throne of Glass Volume IV",
    author:"Sarah J. Maas",
    img:"bookiv.jpg",
    type:"series",
    link: "https://yeauganda.wordpress.com/wp-content/uploads/2018/08/sarah-j-maas-assassins-blade.pdf",
    price: 0.00
},{
    name:"Throne of Glass Volume V",
    author:"Sarah J. Maas",
    img:"bookv.jpg",
    type:"series",
    link: "https://fliphtml5.com/vttkw/kege/Queen_of_Shadows_%28_PDFDrive_%29/",
    price: 0.00
},{
    name:"Throne of Glass Volume VI",
    author:"Sarah J. Maas",
    img:"bookvi.jpg",
    type:"series",
    link: "https://pubhtml5.com/hmeo/pmsv/Empire-of-Storms ",
    price: 0.00
},{
    name:"Throne of Glass Volume VII",
    author:"Sarah J. Maas",
    img:"bookvii.jpg",
    type:"series",
    link: "https://spread.epub.pub/epub/5a54a05751f7570007b4bff3 ",
    price: 0.00
},{
    name:"Throne of Glass Volume VIII",
    author:"Sarah J. Maas",
    img:"bookviii.jpg",
    type:"series",
    link: "https://kanpurkvcantt.wordpress.com/wp-content/uploads/2020/04/kingdom-of-ash-sarah-j.-maas-pdfdrive.com-.pdf",
    price: 0.00
},{
    name:"Harry Potter and the Philosopher's Stone",
    author:"J.K. Rowling",
    img:"hpi.jpg",
    type:"series",
    link: "https://thebookshelfbeforeme.wordpress.com/wp-content/uploads/2020/04/harry-potter-and-the-philosophers-stone-by-jk-rowling.pdf",
    price: 0.00
},{
    name:"Harry Potter and the Chamber of Secrets",
    author:"J.K. Rowling",
    img:"hpii.jpg",
    type:"series",
    link: "https://www.hasanboy.uz/wp-content/uploads/2018/04/Harry-Potter-and-the-Chamber-of-Secrets.pdf",
    price: 0.00
},{
    name:"Harry Potter and the Prisoner of Azkaban",
    author:"J.K. Rowling",
    img:"hpiii.jpg",
    type:"series",
    link: "https://vidyaprabodhinicollege.edu.in/VPCCECM/ebooks/ENGLISH%20LITERATURE/Harry%20potter/(Book%203)%20Harry%20Potter%20And%20The%20Prisoner%20Of%20Azkaban_001.pdf",
    price: 0.00
},{
    name:"Harry Potter and the Goblet of Fire",
    author:"J.K. Rowling",
    img:"hpiv.jpg",
    type:"series",
    link: "https://ebookpresssite.wordpress.com/wp-content/uploads/2017/10/4_harry_potter_and_the_goblet_of_fire.pdf",
    price: 0.00
},{
    name:"Harry Potter and the Order of the Phoenix",
    author:"J.K. Rowling",
    img:"hpv.jpg",
    type:"series",
    link: "https://afgjilibrary.wordpress.com/wp-content/uploads/2020/05/hp5-harry-potter-and-the-order-of-the-phoenix.pdf",
    price: 0.00
},{
    name:"Harry Potter and the Half-Blood Prince",
    author:"J.K. Rowling",
    img:"hpvi.jpg",
    type:"series",
    link: "https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-and-the-half-blood-prince-j.k.-rowling.pdf",
    price: 0.00
},{
    name:"Harry Potter and the Deathly Hallows",
    author:"J.K. Rowling",
    img:"hpvii.jpg",
    type:"series",
    link: "https://vidyaprabodhinicollege.edu.in/VPCCECM/ebooks/ENGLISH%20LITERATURE/Harry%20potter/(Book%207)%20Harry%20Potter%20And%20The%20Deathly%20Hallows.pdf",
    price: 0.00
},{
    name:"The Raven",
    author:"Edgar Allan Poe",
    img:"treap.jpg",
    type:"ss",
    link: "https://www.ibiblio.org/ebooks/Poe/Raven.pdf",
    price: 0.00
},{
    name:"The Cask of Amontillado",
    author:"Edgar Allan Poe",
    img:"tcoa.jpg",
    type:"ss",
    link: "https://americanenglish.state.gov/files/ae/resource_files/the_cask_of_amontillado.pdf",
    price: 0.00
}]

function add(books){
    const container = document.querySelector(".container");
    container.insertAdjacentHTML("afterbegin", `
        <div class="card" data-genre ="${books.type}">
            <img class="ee" src="${books.img}">
            <h2>${books.name}</h2>
            <p>Author: ${books.author}</p>
            <p>Price: ${books.price}</p>
            <a  href="${books.link}">
                <button class="ed"> Read </button>
            </a>
            <button> Add To Cart</button>
        </div>
        `
    )
}

books.forEach((book) => add(book));

function fbg(g){
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) =>{
        const category = card.getAttribute("data-genre");
        if (category === g){
            card.style.display = "block";
        } else{
            card.style.display = "none";
        }
    });
}

function all(){
   const cards = document.querySelectorAll(".card");
   cards.forEach((card) =>{
        card.style.display = "inline-block"
    });
}

function disp(){
    const buttons = document.querySelectorAll("button");
    const btnArr = Array.from(buttons);
    btnArr.forEach(btn => 
        btn.addEventListener("click", function(show){
            fltr = show.target.closest("button").getAttribute("class")
            if (fltr == "all"){
                all();
            }
            else{
                books.forEach(book => fbg(fltr));
            }
        }));
}

disp();






/*
function inject(item){
    const container = document.querySelector(".container");
    container.insertAdjacentHTML("afterbegin", '<h1>$(item.name)</h1>');
}

function getCards(){
    const buttons = document.querySelectorAll("buttons");
    const btnArr = Array.from(buttons);
    btnArr.forEach((btn => 
        btn.addEventListener("click", function(event){
            console.log(event.target.closest(".display-card").getAttribute("data-id"));
        })));
}
getCards();
*/

//make array, put card on screen w/ js

/*

Method 1
function filterbygenre(genre){
    let display = document.querySelector("#card-display");
    display.innerHTML = "";
    const filterbooks = books.filter((book)=> book.genre === genre);
}

filterbygenre("mystery");

*/

