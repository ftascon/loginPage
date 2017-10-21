$(function() {
  elements = new Array("login", "register", "lostpassword");
  chk(elements);

});
function change(ctm_active, ctm_elements) {
  ctm_elements.map(function(){
    
  });
}
function chk(ctm_elements) {
  var i = 0;
  ctm_elements.map(function(ele){
    $('.'+ele).hide();
    if(window.location.hash==='#'+ele){
      $('.'+ele).show();
      i++;
    }
  });
  if(i==0){
    $('.'+ctm_elements[0]).show();
  }
}
