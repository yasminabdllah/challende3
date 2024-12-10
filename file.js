let container=document.getElementById("items_container");
let all=document.getElementById("all");
let breakfast=document.getElementById("breakfast");
let dinner=document.getElementById("dinner");
let lunch=document.getElementById("lunch");
let shake=document.getElementById("shake");




let all_menu=[
    {
    catigory:"dinner",
    title:"buttermilk pancakes",
    price:"$15.99",
    discription:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    photo:"./img/item-1.jpeg",
},

{
    catigory:"dinner",
    title:"buttermilk pancakes",
    price:"$15.99",
    discription:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    photo:"./img/item-2.jpeg",
},
{
    catigory:"shake",
    title:"buttermilk pancakes",
    price:"$15.99",
    discription:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    photo:"./img/item-3.jpeg",
},
{
    catigory:"breakfast",
    title:"buttermilk pancakes",
    price:"$15.99",
    discription:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    photo:"./img/item-4.jpeg",
},
{
    catigory:"breakfast",
    title:"buttermilk pancakes",
    price:"$15.99",
    discription:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    photo:"./img/item-5.jpeg",
},
{
    catigory:"breakfast",
    title:"buttermilk pancakes",
    price:"$15.99",
    discription:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    photo:"./img/item-6.jpeg",
},
{
    catigory:"lunch",
    title:"buttermilk pancakes",
    price:"$15.99",
    discription:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    photo:"./img/item-7.jpeg",
},
{
    catigory:"lunch",
    title:"buttermilk pancakes",
    price:"$15.99",
    discription:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    photo:"./img/item-8.jpeg",
},
{
    catigory:"lunch",
    title:"buttermilk pancakes",
    price:"$15.99",
    discription:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    photo:"./img/item-9.jpeg",
},
{
    catigory:"shake",
    title:"buttermilk pancakes",
    price:"$15.99",
    discription:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    photo:"./img/item-10.jpeg",
},

]



const buttons = document.getElementsByTagName("button");

for (let button of buttons) {
  button.addEventListener('click', function () {
    let category = this.id; 
    container.innerHTML=''
    filterByCatigery(category); 
   
  });
}
let filteredMenu;

function filterByCatigery(catigory){

    if(catigory=="all"){
      
        filteredMenu=all_menu;

    }
    else{
        filteredMenu=all_menu.filter(item=>item.catigory==catigory);
        
    }
    for(let i=0; i<filteredMenu.length ;i++){
        console.log(all_menu)
        container.innerHTML+= `
        <div class="cardbox col-md-5 d-flex m-4">

        <div class="img ">
          <img src="${filteredMenu[i].photo}">
        </div>
  
        <div class="cardbody">
          <div>
            <div class="title mb-2 d-flex justify-content-between fw-semibold">
              <p>${filteredMenu[i].title}</p>
              <h4 >${filteredMenu[i].price}</h4>
            </div>
          </div>
          <div class="discription">
            <p>${filteredMenu[i].discription}</p>
          </div>
        </div>
      </div>
        
        
        
        
        `
    }

   
    }
    
    


;filterByCatigery("all");