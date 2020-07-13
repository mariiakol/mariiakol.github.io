let sendMessageButton = document.querySelectorAll("#submit");
console.log(sendMessageButton);

let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

sendMessageButton.forEach(function(item){
    item.addEventListener("click", function() {
        modal.classList.add("show");
        modal.classList.remove("hide");
    })
})

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        closeModal();
    }
})


let modal1 = document.querySelector(".modal1");
let closeBtn1 = document.querySelector(".btn-close1");


function closeModal1() {
    modal1.classList.add("hide");
    modal1.classList.remove("show");
}

function openModal1(){
    modal1.classList.add("show");
    modal1.classList.remove("hide");
}

modal1.addEventListener("click", function(e) {
    if (e.target === modal) {
        closeModal();
    }
})

closeBtn1.addEventListener("click", closeModal1);

modal1.addEventListener("click", function(e) {
    if (e.target === modal1) {
        closeModal1();
    }
})

function openModalByScroll() {
    if (window.pageYOffset >= document.documentElement.scrollHeight/2) {
        openModal1();
        window.removeEventListener('scroll', openModalByScroll);
    }
}
window.addEventListener('scroll', openModalByScroll);


new Splide( '.splide', {
    type  : 'fade',
    rewind: true,
} ).mount();

AOS.init();


let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains('active-menu')) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu");
    }
})




 $('#nav').on('click', '[href*="#"]', function(e){
    var el = document.querySelector('.header');
    var fixed_offset = el.offsetHeight;
      $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
      e.preventDefault();
 });


$('#nav').onePageNav({
    currentClass: 'firstchild',
});


