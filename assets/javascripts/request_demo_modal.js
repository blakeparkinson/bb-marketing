$(function(){

  $("body").on("click", ".js-request-demo-modal-open", function(event){
    event.preventDefault();
    $(".request-demo-modal").addClass("is-open");
  });

  $("body").on("click", ".js-request-demo-modal-close", function(event){
    event.preventDefault();
    $(".request-demo-modal").removeClass("is-open");
  });

});
