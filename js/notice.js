"use strict";

(function ($) {
  jQuery(document).ready(function () {


    
    $(document).ready(function() {
      $('#trigger').click(function() {
         $('#overlay').fadeIn(300);
      });
   
      $('#close').click(function() {
         $('#overlay').fadeOut(300);
      });
   });


  });

})(jQuery);
