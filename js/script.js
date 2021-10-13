let navbar = document.querySelector('.navbar');
window.addEventListener("load", function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".container").style.display = "block";
        },
        3000
    )
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".container").style.display ="none";
});

document.querySelector('#services-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
