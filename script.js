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
  window.location.href = "https://drive.google.com/file/d/1za7db1_1iX3Jmsan56yair4P_AbtkEYp/view"
}

function git2(){
  window.location.href = "https://github.com/TusharKadam7671/foregoing-tin-1857"
}

function deploy2(){
  window.location.href = "https://dermstore-project-clone.netlify.app/"
}

function git3(){
  window.location.href = "https://github.com/TusharKadam7671/Weather-App"
}

function deploy3(){
  window.location.href = "https://weatherapp-tusharkadam7671.netlify.app/"
}

function git4(){
  window.location.href = "https://github.com/abhijitnr/SSENCE-clone-Website"
}

function deploy4(){
  window.location.href = "https://ssense-project-clone.netlify.app/"
}

GitHubCalendar(".calendar", "TusharKadam7671");
// or enable responsive functionality
GitHubCalendar(".calendar", "TusharKadam7671", { responsive: true });