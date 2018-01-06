$(function(){

  $("body").on("click", ".js-modal-open", function(event){
    event.preventDefault();
    $(".mobile-menu-modal").addClass("is-open");
  });

  $("body").on("click", ".js-modal-close", function(event){
    event.preventDefault();
    $(".mobile-menu-modal").removeClass("is-open");
  });

});
