//====================== For Navbar Search Bar ======================
const searchBtn = document.querySelector("#searchBtn");
const closeBtn = document.querySelector("#closeBtn");
const searchInput = document.querySelector(".search-input");

searchBtn.onclick= function(){
    searchInput.classList.add("active");
    closeBtn.classList.add("active");    
}

closeBtn.onclick= function(){
    searchInput.classList.remove("active");
    closeBtn.classList.remove("active");    
}

// DropDown
const clickOnMenu = document.querySelector(".dropdown");
const dropDownMenu = document.querySelector(".dropdown-menu");

clickOnMenu.onclick= function(){
    dropDownMenu.classList.toggle("active");   
}

// Menu Toggle


const toggleBtn = document.querySelector(".menu-toggle");
const menuBtn = document.querySelector(".main-menu");
toggleBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
})

