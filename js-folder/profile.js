
  $(document).ready(function(){
    $(".img1").hover(function(){
      $(".imgg1").css("opacity", "0.5");
      $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      }, function(){
      $(".imgg1").css("opacity", "1");
      $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
      }
    )});
    $(document).ready(function(){
        $(".img2").hover(function(){
          $(".imgg2").css("opacity", "0.5");
          $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
          }, function(){
          $(".imgg2").css("opacity", "1");
          $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
          }
        )});

        $(document).ready(function(){
            $(".img3").hover(function(){
              $(".imgg3").css("opacity", "0.5");
              $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
              }, function(){
              $(".imgg3").css("opacity", "1");
              $(".name" ,this).slideToggle(100, "linear").display(100, "linear");
              }
            )});