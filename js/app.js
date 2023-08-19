//start jquery area
$(window).on("load",function(){
   $("#preloader").delay(500).fadeOut("slow");
})
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

   $(".search_btn").click(function(){
      $("#search_modal").addClass("active");
   })

   $(window).click(function(e){
         console.log(e.target);
         if(e.target.classList.contains("search_modal")){
            $("#search_modal").removeClass("active");
         }
   })

   $(window).scroll(function(e){
      //console.log($(this).scrollTop());
      var getscrollamount=$(this).scrollTop();
      console.log(getscrollamount);
      if(getscrollamount > 300){
         $(".navbar").addClass("active");

      }else{
         $(".navbar").removeClass("active");
      }

      if(getscrollamount > 900){
         $(".arrival_content_container").addClass("active");

      }else{
         $(".arrival_content_container").removeClass("active");
      }

      if(getscrollamount > 1850){
         $(".about_title_container").addClass("active");

      }else{
         $(".about_title_container").removeClass("active");
      }

      if(getscrollamount > 2380){
         $(".established_content_container").addClass("active");

      }else{
         $(".established_content_container").removeClass("active");
      }
      if(getscrollamount > 2900){
         $(".our_story_section").addClass("active");

      }else{
         $(".our_story_section").removeClass("active");
      }


   })
   
})
//end jquery