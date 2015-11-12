 var Carousel = {
      init: function() {
          var t = this;
          t.services();
          t.bind();
      },

      services: function() {

          $('.spritespin').spritespin({
            source: 'assets/img/bike6x6_big.jpg',
            width: 480,
            height: 327,
            frames: 34,
            framesX: 6,
            sense: -1,
            renderer: 'image'
          });

      },

    bind: function() {
      if($(window).width() <= 768){
        $("#header").on("click", function(){
          $nav = $("#nav");
          $nav.slideToggle().toggleClass("active");
          $headerFull = $("#header>.center>.full");
          $headerFull.css({ "height":"auto" });

          if(!$nav.hasClass("active")){
            $headerFull.animate({ "height":"50px" });
          }
        });
      }
      
    }//bind

  }; //Carousel


  Carousel.init();  