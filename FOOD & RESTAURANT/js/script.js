
let menus =  document.querySelector("nav");
let menuBtn =  document.querySelector(".menu-btn");
let closeBtn =  document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
    menus.classList.add("active");
})

closeBtn.addEventListener("click",function(){
    menus.classList.remove("active");
})


//---------Swiper JS Code----//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      // When window width is <= 768px
      768: {
          slidesPerView: 2,
      },
      // When window width is <= 968px
      968: {
          slidesPerView: 3,
      },
  },
});

  

    //Dynamic Images

    const SectionCenter = document.querySelector('.menus_items_container');
    const filterBtns = document.querySelectorAll('.btn-cat');

    filterBtns.forEach(function(btn){
      btn.addEventListener("click",function(e){
        const Category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
          if(menuItem.Category == Category){
            return menuItem;
          }
        });
        if(Category == "all"){
          displayMenusItem(menu);
        }
        else{
          displayMenusItem(menuCategory);
        }
      })
    });

const menu = [
  {
    id: 1,
    title: "Chicken",
    Category: "Dinner",
    price: 25,
    img: "./imgs/food_lover_01.jpeg"
  },
  {
    id: 2,
    title: "Chicken",
    Category: "Dinner",
    price: 25,
    img: "./imgs/food_lover_02.jpeg"
  },
  {
    id: 3,
    title: "Chicken",
    Category: "Lunch",
    price: 25,
    img: "./imgs/food_lover_03.jpeg"
  },
  {
    id: 4,
    title: "Chicken",
    Category: "Drinks",
    price: 25,
    img: "./imgs/food_lover_04.jpeg"
  },
  {
    id: 5,
    title: "Chicken",
    Category: "Starter",
    price: 25,
    img: "./imgs/food_lover_05.jpeg"
  },
  {
    id:6,
    title: "Chicken",
    Category: "Dinner",
    price: 25,
    img: "./imgs/food_lover_06.jpeg"
  },
  {
    id: 7,
    title: "Chicken",
    Category: "Lunch",
    price: 25,
    img: "./imgs/food_lover_07.jpeg"
  },
  {
    id: 8,
    title: "Chicken",
    Category: "Starter",
    price: 25,
    img: "./imgs/food_lover_08.jpeg"
  },
  {
    id: 9,
    title: "Chicken",
    Category: "Lunch",
    price: 25,
    img: "./imgs/food_lover_09.jpeg"
  },
  
]

window.addEventListener("DOMContentLoaded", function(){
  displayMenusItem(menu);
});

function displayMenusItem(menuItem){
  let displayMenusItem = menuItem.map(function(item){
    return `<div class="img_cards">
      <img src="${item.img}" alt="" />
      <p class="price">Just on Rs${item.price}</p>
      <p>${item.title}</p>
    </div>`;
  });
  displayMenusItem = displayMenusItem.join("");
  SectionCenter.innerHTML = displayMenusItem;
}

 