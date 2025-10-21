const container = document.querySelector(".container");

function fbg(g){
    const cards = document.querySelectorAll(".card");
    cards.forEach(card =>{
        const category = card.getAttribute("data-genre");
        if (category.includes(g)){
            card.style.display = "flex";
        } else{
            card.style.display = "none";
        }
    });
}

function disp(){
    const buttons = document.querySelectorAll("button");
    const btnArr = Array.from(buttons);
    btnArr.forEach(btn => 
        btn.addEventListener("click", function(show){
            fltr = show.target.closest("button").getAttribute("arr")
            books.forEach(book => fbg(fltr));
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

