$(".my-class-img").on("click", function() {
    console.log( $( this ).width() );
  });

  $(".h3").on("click", function() {
    console.log( $( this ).text() );
  }); 

  $(".main-text").on("click", function() {
    console.log( $( this ).text().length );
   
  }); 
 
  var now = new Date().toLocaleDateString();
  $(".mydate").append(now);

  $(".main-text").on("click", function() {
   var sub = $(this).text();
   var res1 = sub.charAt(0);
   var res2 = sub.charAt(sub.length-1);
      console.log( res1, res2 );
    });