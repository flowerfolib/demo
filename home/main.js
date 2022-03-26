localStorage.getItem("nameUser") && $("#title_hello").html(`Tôi là ${localStorage.getItem("nameUser")}`)

// localStorage.getItem("banner") && $("#banner").attr('src',`${URL.createObjectURL(localStorage.getItem("banner"))}`)


 







$( document ).ready(function() {
    for( var i =0;i < JSON.parse(localStorage.getItem("listFeedBack")).length; i++ ) {
        
   $("#feedback").append(`<div class="review-item">
   <div class="client-info">
       <div class="rating">
           <a href="#"><i class="fa fa-star"></i></a>
           <a href="#"><i class="fa fa-star"></i></a>
           <a href="#"><i class="fa fa-star"></i></a>
           <a href="#"><i class="fa fa-star"></i></a>
           <a href="#"><i class="fa fa-star"></i></a>
       </div>
       <h4>${JSON.parse(localStorage.getItem("listFeedBack"))[i].title}</h4>
       <p>${JSON.parse(localStorage.getItem("listFeedBack"))[i].content}</p>
   </div>
   <div class="client-desc d-flex align-items-center">
       <div class="client-img">
           <img src="" alt="" class="img-fluid">
       </div>
       <div class="client-text">
           <h5>${JSON.parse(localStorage.getItem("listFeedBack"))[i].name}</h5>
           <span class="designation">${JSON.parse(localStorage.getItem("listFeedBack"))[i].job}</span>
       </div>
   </div>
</div>`)
    }
    $('.slide-content').slick({
        dots: false,
        arrows:true,
        nextArrow:"<button>OK</button>",
        infinite: true,
        speed: 200, 
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:true,
      });
});

function toTop() {
    $('html, body').animate({scrollTop:(0)}, '2000');
}
$(window).scroll(function (event) {
    if(window.scrollY > 1400) {
        $('.toTop').fadeIn()
    }
    else {
        $('.toTop').fadeOut()
    } 
})