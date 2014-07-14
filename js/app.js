$(document).ready(function() {
  
  function addnewitem () {
    var newitem = $("input[name=input-form]").val();
    $(".item-list").prepend("<li class='newlistitem'>"+newitem +"</li>"); 
    $(this).addClass("newlistitem");  
    $("#input-form").val("");
   }
  
   $(".submit").click(function(){
    addnewitem(); 
   
   });

   $(".item-list").on('click', '.newlistitem', function(){
    $(this).removeClass('newlistiem');
    $(this).addClass('crossed-item');
 
   })

    $(".item-list").on('click', '.crossed-item', function(){
    $(this).remove();
   
    console.log("is this working");
   })



   $("#my-form").on("keydown","#input-form",function(event){
    if (event.which == 13) {
      addnewitem(); 
    }
   })


})
  
