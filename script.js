$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }
      else{
          $('.navbar').removeClass("sticky");
      }
      // if(this.scrolly > 500){
      //     $('.scroll-up').addClass("show");
      // }
      // else{
      //     $('.scroll-up').removeClass("show");
      // }
  });


//    typing animation script 

  //   let typed = new Typed(".typing",{
  //     strings: [" Java Backend Developer"],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true
  //   })


  //   let typed2 = new Typed(".typing2",{
  //     strings: ["Java","SpringBoot","MYSQL","Hibernate"],
  //     typeSpeed: 150,
  //     backSpeed: 60,
  //     loop: true
  //   })

  // slide up script 

  $('.scroll-up').click(function(){
      $('html').animate({scrollToP: 0});
  });


  
$('.menu-btn').click(function(){
  $('.navbar .menu').toggleClass("active")
})

});


function git1(){
  window.location.href = "https://github.com/TusharKadam7671/industrious-summer-462"
  window.target = "_blank"
}

function deploy1(){
  window.location.href = "https://github.com/TusharKadam7671/industrious-summer-462"
}

function git2(){
  window.location.href = "https://github.com/TusharKadam7671/foregoing-tin-1857"
}

function deploy2(){
  window.location.href = "https://dermstore-project-clone.netlify.app/"
}

GitHubCalendar(".calendar", "TusharKadam7671");
// or enable responsive functionality
GitHubCalendar(".calendar", "TusharKadam7671", { responsive: true });