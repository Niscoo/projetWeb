

  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
          $(".navbefore").css("background" , "#20214F");
        }
  
        else{
            $(".navbefore").css("background" , "transparent");  	
        }
    })
  })