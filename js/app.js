//start jquery area
$(document).ready(function(){
   $("#banner_carousel").owlCarousel({
    items:1,
    loop:true,
    dots:false,
    // autoplay:true,
   });

   $(".product_edt_btn").click(function(){
      //onsole.log($(this));
      $(this).toggleClass("active");
      //console.log($(this).parent()); //result = product_main_container
      //console.log($(this).parent().find(".product_name_group"))
      $(this).parent().find(".product_name_group").toggleClass("active");
      //console.log($(this).parent().find(".product_edit_form"));
      $(this).parent().find(".product_edit_form").toggleClass("active");
      
   })
   
})
//end jquery