var Carousel = {
    init: function() {
        var t = this;
        t.services(), 
        t.bind()
    },
    services: function() {
        // $.getJSON("http://private-fe2a-scuptel.apiary-mock.com/ddd/details", function(data) {

        //       data = data.data;

        //       for(var i=0; i <= data.length; i++) {
        //         $ddd = data[i].ddd;
        //         $city = data[i].city;

        //           $table = $("#tableDDD");
        //           $line = $("<tr><td width='30'>"+$ddd+"</td><td>"+$city+"</td></tr>");
        //           $table.append($line);
        //       };

        //       $table.find("tr").on("click", function() {
               
        //       });
        //   });
    },
    bind: function() {
        $(".btnMobile").on("click", function() {
            $nav = $("#nav"), 
            $nav.slideToggle().toggleClass("active");
            // $headerFull = $("#header>.center>.full");
            // if($nav.hasClass("active")){
            //   $headerFull.css({"height":"auto"});
            // } 
        });
    }
};
Carousel.init();